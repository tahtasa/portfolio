import React from 'react';
import { IconButton } from '../buttons/IconButton.jsx';
import { Icon } from '../core/Icon.jsx';

const R = 6378137;
const ENDPOINTS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
const cache = {};
const proj = (lon, lat) => [R * lon * Math.PI / 180, -R * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
const unproj = (x, y) => [x / R * 180 / Math.PI, (2 * Math.atan(Math.exp(-y / R)) - Math.PI / 2) * 180 / Math.PI];

function bboxFor([lat, lon], r) {
  const dLat = r / 111320, dLon = r / (111320 * Math.cos(lat * Math.PI / 180));
  return [lat - dLat, lon - dLon, lat + dLat, lon + dLon];
}
function fetchOSM(bb, buildings) {
  const key = bb.map(n => n.toFixed(5)).join(',') + (buildings ? 'b' : '');
  if (cache[key]) return cache[key];
  const q = `[out:json][timeout:30][bbox:${bb.join(',')}];(
way["leisure"~"^(park|garden|pitch|playground|nature_reserve|golf_course|common)$"];
relation["leisure"~"^(park|garden|nature_reserve|common)$"];
way["landuse"~"^(grass|forest|meadow|recreation_ground|village_green|cemetery|allotments)$"];
relation["landuse"~"^(grass|forest|meadow|recreation_ground)$"];
way["natural"~"^(wood|scrub|grassland|heath|water|wetland|bay)$"];
relation["natural"~"^(wood|water|bay|wetland)$"];
way["water"];relation["water"];
way["landuse"~"^(reservoir|basin)$"];
way["waterway"~"^(river|canal|stream|riverbank)$"];
relation["waterway"="riverbank"];
way["highway"~"^(motorway|trunk|primary|secondary|tertiary|motorway_link|trunk_link|primary_link|secondary_link|tertiary_link|residential|unclassified|living_street|pedestrian|service|footway|cycleway|path)$"];
way["railway"~"^(rail|light_rail|tram|subway)$"]["tunnel"!="yes"];
${buildings ? 'way["building"];' : ''}
);out geom;`;
  cache[key] = (async () => {
    let err;
    for (const url of ENDPOINTS) {
      try {
        const res = await fetch(url, { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        if (!res.ok) throw new Error(res.status);
        return (await res.json()).elements;
      } catch (e) { err = e; }
    }
    delete cache[key]; throw err;
  })();
  return cache[key];
}

function classify(t) {
  if (t.building) return 'building';
  if (t.natural === 'water' || t.natural === 'bay' || t.water || t.waterway === 'riverbank' || t.landuse === 'reservoir' || t.landuse === 'basin') return 'water';
  if (t.waterway) return t.waterway; // river | canal | stream
  if (t.leisure || t.landuse || t.natural) return 'park';
  if (t.railway) return 'rail';
  const h = (t.highway || '').replace('_link', '');
  if (/^(motorway|trunk|primary)$/.test(h)) return 'major1';
  if (/^(secondary|tertiary)$/.test(h)) return 'major2';
  if (/^(residential|unclassified|living_street|pedestrian)$/.test(h)) return 'minor';
  if (h === 'service') return 'service';
  if (h) return 'path';
  return null;
}
const same = (a, b) => a.lat === b.lat && a.lon === b.lon;
function joinRings(segs) {
  segs = segs.map(s => s.slice()); const out = [];
  while (segs.length) {
    let r = segs.shift(), changed = true;
    while (changed && !same(r[0], r[r.length - 1])) {
      changed = false;
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i], a = r[0], z = r[r.length - 1];
        if (same(z, s[0])) r = r.concat(s.slice(1));
        else if (same(z, s[s.length - 1])) r = r.concat(s.slice().reverse().slice(1));
        else if (same(a, s[s.length - 1])) r = s.concat(r.slice(1));
        else if (same(a, s[0])) r = s.slice().reverse().concat(r.slice(1));
        else continue;
        segs.splice(i, 1); changed = true; break;
      }
    }
    out.push(r);
  }
  return out;
}
function addLine(path, geom, close) {
  geom.forEach((p, i) => { const [x, y] = proj(p.lon, p.lat); i ? path.lineTo(x, y) : path.moveTo(x, y); });
  if (close) path.closePath();
}
function build(elements) {
  const layers = {}; const rels = [];
  const L = c => layers[c] || (layers[c] = new Path2D());
  for (const el of elements) {
    const c = classify(el.tags || {}); if (!c) continue;
    if (el.type === 'way' && el.geometry) addLine(L(c), el.geometry, c === 'park' || c === 'water' || c === 'building');
    else if (el.type === 'relation' && el.members) {
      const p = new Path2D();
      const segs = el.members.filter(m => m.type === 'way' && m.geometry && m.geometry.length > 1).map(m => m.geometry);
      joinRings(segs).forEach(r => addLine(p, r, true));
      rels.push({ c, p });
    }
  }
  return { layers, rels };
}
const AREAS = ['park', 'water', 'building'];
const LINES = [['stream', 'waterway', 1.4], ['canal', 'waterway', 4], ['river', 'waterway', 7], ['path', 'path', 0.8], ['service', 'road-minor', 1.2], ['minor', 'road-minor', 2.6], ['major2', 'road-major', 3.6], ['major1', 'road-major', 5], ['rail', 'rail', 1]];
const TOKENS = ['land', 'building', 'road-minor', 'road-major', 'path', 'rail', 'park', 'water', 'waterway'];

export function CityMap({ center = [52.3600, 4.8770], radius = 900, theme = 'light', buildings = true, controls = true, height = 360, minZoom = 1, maxZoom = 8, onMapClick, style }) {
  const wrap = React.useRef(null), cv = React.useRef(null);
  const data = React.useRef(null), fit = React.useRef(null), tf = React.useRef(null), zoom = React.useRef(null);
  const [status, setStatus] = React.useState('loading');
  const bb = React.useMemo(() => bboxFor(center, radius), [center[0], center[1], radius]);

  const draw = React.useCallback(() => {
    const c = cv.current, f = fit.current; if (!c || !f) return;
    const ctx = c.getContext('2d'), dpr = f.dpr, cs = getComputedStyle(wrap.current);
    const col = {}; TOKENS.forEach(k => col[k] = cs.getPropertyValue(`--map-${theme}-${k}`).trim() || '#888');
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.fillStyle = col.land; ctx.fillRect(0, 0, c.width, c.height);
    const d = data.current; if (!d) return;
    const t = tf.current || { k: 1, x: 0, y: 0 }, S = t.k * f.s0, px = 1 / S, g = Math.pow(t.k, 0.6);
    ctx.setTransform(dpr * S, 0, 0, dpr * S, dpr * (t.x + t.k * f.ox), dpr * (t.y + t.k * f.oy));
    for (const a of AREAS) {
      ctx.fillStyle = col[a];
      if (d.layers[a]) ctx.fill(d.layers[a]);
      d.rels.forEach(r => r.c === a && ctx.fill(r.p, 'evenodd'));
    }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const [k, tok, w] of LINES) {
      const p = d.layers[k]; if (!p) continue;
      ctx.strokeStyle = col[tok]; ctx.lineWidth = w * g * px; ctx.stroke(p);
    }
  }, [theme]);

  React.useEffect(() => {
    let alive = true; setStatus('loading'); data.current = null; draw();
    fetchOSM(bb, buildings).then(els => { if (!alive) return; data.current = build(els); setStatus('ready'); draw(); })
      .catch(() => alive && setStatus('error'));
    return () => { alive = false; };
  }, [bb, buildings]);

  React.useEffect(() => {
    const el = wrap.current, c = cv.current, d3 = window.d3; if (!el || !c) return;
    const [x0, y1] = proj(bb[1], bb[0]), [x1, y0] = proj(bb[3], bb[2]);
    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight, dpr = window.devicePixelRatio || 1;
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); c.style.width = w + 'px'; c.style.height = h + 'px';
      const s0 = Math.max(w / (x1 - x0), h / (y1 - y0));
      fit.current = { dpr, s0, ox: w / 2 - s0 * (x0 + x1) / 2, oy: h / 2 - s0 * (y0 + y1) / 2, w, h };
      if (zoom.current) zoom.current.extent([[0, 0], [w, h]]).translateExtent([[0, 0], [w, h]]);
      draw();
    };
    if (d3) {
      zoom.current = d3.zoom().scaleExtent([minZoom, maxZoom]).on('zoom', e => { tf.current = e.transform; draw(); });
      d3.select(c).call(zoom.current);
    }
    resize();
    const ro = new ResizeObserver(resize); ro.observe(el);
    return () => { ro.disconnect(); d3 && d3.select(c).on('.zoom', null); };
  }, [bb, minZoom, maxZoom, draw]);

  const zoomBy = k => window.d3 && zoom.current && window.d3.select(cv.current).transition().duration(220).call(zoom.current.scaleBy, k);
  const click = e => {
    if (!onMapClick || !fit.current) return;
    const r = cv.current.getBoundingClientRect(), t = tf.current || { k: 1, x: 0, y: 0 }, f = fit.current;
    const wx = ((e.clientX - r.left - t.x) / t.k - f.ox) / f.s0, wy = ((e.clientY - r.top - t.y) / t.k - f.oy) / f.s0;
    const [lon, lat] = unproj(wx, wy); onMapClick({ lat, lng: lon });
  };
  const dark = theme === 'dark';
  const ink = dark ? 'var(--black-5)' : 'var(--black-10)';
  return (
    <div ref={wrap} style={{ position: 'relative', height, overflow: 'hidden', borderRadius: 'var(--radius-xl)', background: `var(--map-${theme}-land)`, ...style }}>
      <canvas ref={cv} onClick={click} style={{ display: 'block', cursor: 'grab', touchAction: 'none' }} />
      {status !== 'ready' && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--sm-medium)', color: ink, pointerEvents: 'none' }}>
        {status === 'loading' ? 'Loading map…' : 'Map data unavailable'}</div>}
      {controls && <div style={{ position: 'absolute', right: 12, top: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <IconButton variant={dark ? 'secondary' : 'tertiary'} label="Zoom in" onClick={() => zoomBy(1.6)} style={{ boxShadow: 'var(--shadow-card)' }}><Icon name="plus" size={18} /></IconButton>
        <IconButton variant={dark ? 'secondary' : 'tertiary'} label="Zoom out" onClick={() => zoomBy(1 / 1.6)} style={{ boxShadow: 'var(--shadow-card)' }}><Icon name="minus" size={18} /></IconButton>
      </div>}
      <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" style={{ position: 'absolute', right: 0, bottom: 0, padding: '2px 8px', font: '400 10px/14px var(--font-sans)',
        color: ink, background: `var(--map-${theme}-land)`, borderTopLeftRadius: 8, textDecoration: 'none' }}>© OpenStreetMap contributors</a>
    </div>
  );
}
