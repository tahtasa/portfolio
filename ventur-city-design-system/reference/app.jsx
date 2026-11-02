const { Toast: RefToast, Icon: RefIcon } = window.VenturCityDesignSystem_a97b28;

function mdToHtml(src) {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inl = s => s.split(/(`[^`]+`)/).map(p => p.length > 1 && p[0] === '`' && p[p.length - 1] === '`' ? '<code>' + esc(p.slice(1, -1)) + '</code>'
    : esc(p).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')).join('');
  let html = '', depth = 0, code = false, para = [];
  const flush = () => { if (para.length) { html += '<p>' + inl(para.join(' ')) + '</p>'; para = []; } };
  const close = () => { while (depth > 0) { html += '</ul>'; depth--; } };
  for (const raw of src.split('\n')) {
    if (raw.startsWith('```')) { flush(); close(); html += code ? '</code></pre>' : '<pre><code>'; code = !code; continue; }
    if (code) { html += esc(raw) + '\n'; continue; }
    const h = raw.match(/^(#{1,4})\s+(.*)/);
    if (h) { flush(); close(); const n = Math.min(h[1].length + 1, 4); html += `<h${n}>${inl(h[2])}</h${n}>`; continue; }
    const li = raw.match(/^(\s*)[-*]\s+(.*)/);
    if (li) { flush(); const lvl = Math.floor(li[1].length / 2) + 1; while (depth < lvl) { html += '<ul>'; depth++; } while (depth > lvl) { html += '</ul>'; depth--; } html += '<li>' + inl(li[2]) + '</li>'; continue; }
    if (!raw.trim()) { flush(); close(); continue; }
    close(); para.push(raw.trim());
  }
  flush(); close();
  return html;
}

function ReadmeTab() {
  const src = (document.getElementById('readme-src') || {}).textContent || '';
  const html = React.useMemo(() => mdToHtml(src.trim()), [src]);
  return <section className="md" dangerouslySetInnerHTML={{ __html: html }} />;
}

const RAMPS = [
  ['Green', 'green', [0, 5, 10, 15, 20, 30, 50, 70, 100, 120], 'Brand ramp. 100 is the Ventur lime; 0–20 are the warm off-white surfaces.'],
  ['Black', 'black', [0, 5, 10, 20, 30, 50, 70, 100, 120, 150], 'Cool slate neutrals. 0 is the lightest step.'],
  ['Red', 'red', [50, 70, 100, 120], 'Danger.'],
  ['Orange', 'orange', [50, 70, 100, 120], 'Warning.'],
  ['Blue', 'blue', [50, 70, 100, 120], 'Info, water, and partnered merchants (100).'],
];
const SEMANTIC = [
  ['Surface', 'Fills for buttons, pages and panels.', ['surface-brand', 'surface-brand-hover', 'surface-brand-disable', 'surface-light', 'surface-light-hover', 'surface-light-disable', 'surface-dark', 'surface-dark-hover', 'surface-dark-disable', 'surface-off', 'surface-void']],
  ['Elevation', 'Layer stacks — higher number sits closer to the viewer.', ['elevation-light-0', 'elevation-light-1', 'elevation-light-2', 'elevation-light-3', 'elevation-light-4', 'elevation-dark-0', 'elevation-dark-1', 'elevation-dark-2', 'elevation-dark-3', 'elevation-dark-4', 'elevation-dark-5']],
  ['Text', 'Foreground by role.', ['text-brand', 'text-brand-hover', 'text-brand-disable', 'text-primary-light', 'text-primary-dark', 'text-hint-light', 'text-hint-dark', 'text-secondary', 'text-success', 'text-warn', 'text-danger', 'text-info']],
  ['Stroke', 'Borders and dividers.', ['stroke-brand', 'stroke-primary-light', 'stroke-primary-dark', 'stroke-secondary']],
  ['Toast', 'Feedback surfaces.', ['surface-neutral-toast', 'surface-success-toast', 'surface-warn-toast', 'surface-danger-toast']],
  ['Map — light', 'CityMap palette, light theme.', ['map-light-land', 'map-light-building', 'map-light-road-minor', 'map-light-road-major', 'map-light-path', 'map-light-rail', 'map-light-park', 'map-light-water', 'map-light-waterway']],
  ['Map — dark', 'CityMap palette, dark theme.', ['map-dark-land', 'map-dark-building', 'map-dark-road-minor', 'map-dark-road-major', 'map-dark-path', 'map-dark-rail', 'map-dark-park', 'map-dark-water', 'map-dark-waterway']],
];

function useTokenValues() {
  return React.useMemo(() => {
    const cs = getComputedStyle(document.documentElement), out = {}, byHex = {};
    const read = n => cs.getPropertyValue('--' + n).trim().toUpperCase();
    RAMPS.forEach(([, k, steps]) => steps.forEach(s => { const v = read(`${k}-${s}`); out[`${k}-${s}`] = v; if (!byHex[v]) byHex[v] = `${k}.${s}`; }));
    SEMANTIC.forEach(([, , list]) => list.forEach(n => { out[n] = read(n); }));
    return { out, byHex };
  }, []);
}

function Swatch({ token, hex, alias, onCopy }) {
  return <button className="sw-tile" onClick={() => onCopy(token)} title={`Copy var(--${token})`}>
    <span className="sw-chip" style={{ background: `var(--${token})` }} />
    <span className="sw-name">{token}</span>
    <span className="sw-meta">{hex}{alias ? ' · ' + alias : ''}</span>
  </button>;
}

function ColorTab({ onCopy }) {
  const { out, byHex } = useTokenValues();
  return <section>
    <h1 className="ref-h1">Color</h1>
    <p className="ref-lede">Palette ramps first, then the semantic tokens that point at them. Build with the semantic token for the job; reach for a raw step only when no role fits. Click any swatch to copy its variable.</p>
    <h2 className="ref-h2">Palette</h2>
    {RAMPS.map(([label, k, steps, note]) => <div key={k} className="sw-block">
      <div className="sw-head"><strong>{label}</strong><span>{note}</span></div>
      <div className="sw-ramp">{steps.map(s => <Swatch key={s} token={`${k}-${s}`} hex={out[`${k}-${s}`]} onCopy={onCopy} />)}</div>
    </div>)}
    <h2 className="ref-h2">Semantic tokens</h2>
    {SEMANTIC.map(([label, note, list]) => <div key={label} className="sw-block">
      <div className="sw-head"><strong>{label}</strong><span>{note}</span></div>
      <div className="sw-grid">{list.map(n => <Swatch key={n} token={n} hex={out[n]} alias={byHex[out[n]]} onCopy={onCopy} />)}</div>
    </div>)}
  </section>;
}

const TYPE = [
  ['Display — Paytone One', 'Always uppercase. Website heroes, section openers, posters.', [
    ['display-2xl', 'Ride the city', 'Hero headline', '72 / 72 · 400 · +2%', { textTransform: 'uppercase', letterSpacing: '.02em' }],
    ['display-xl', 'Ride the city', 'Page hero', '56 / 60 · 400 · +1%', { textTransform: 'uppercase', letterSpacing: '.01em' }],
    ['display-lg', 'Now the table’s full', 'WebHeadline default', '40 / 42 · 400', { textTransform: 'uppercase' }],
    ['display-md', 'Your neighborhood', 'Section title', '32 / 36 · 400', { textTransform: 'uppercase' }],
    ['display-sm', 'Stamps collected', 'Card or module title', '24 / 28 · 400', { textTransform: 'uppercase' }],
  ]],
  ['Headings — Instrument Sans', 'Screen and section titles inside the product.', [
    ['h1-bold', 'Your next stop', 'Screen title', '32 / 40 · 700 · +1%', { letterSpacing: '.01em' }],
    ['h1-medium', 'Your next stop', 'Screen title, quieter', '32 / 40 · 500 · +1%', { letterSpacing: '.01em' }],
    ['h2-bold', 'Places near you', 'Section or sheet title', '24 / 30 · 700 · +1%', { letterSpacing: '.01em' }],
    ['h2-medium', 'Places near you', 'Section title, quieter', '24 / 30 · 500 · +1%', { letterSpacing: '.01em' }],
    ['h3-bold', 'Corner table, best light', 'Item title', '20 / 24 · 700', {}],
    ['h3-medium', 'Corner table, best light', 'Item title, quieter', '20 / 24 · 600', {}],
  ]],
  ['Body & small — Instrument Sans', 'Running text, labels and detail.', [
    ['body-bold', 'Continue with Platform', 'Button labels, emphasis', '16 / 20 · 700', {}],
    ['body-medium', 'Been here five times', 'Comment text, list primary', '16 / 20 · 500', {}],
    ['body-regular', 'Come back enough and the place starts to know you.', 'Paragraphs, inputs, toasts', '16 / 20 · 400', {}],
    ['body-italic', 'Come back enough and the place starts to know you.', 'Quotes, asides', '16 / 20 · 400 italic', {}],
    ['sm-bold', 'dana_s', 'Small button labels, names', '12 / 16 · 700', {}],
    ['sm-medium', 'Updated 2 min ago', 'Meta, chips', '12 / 16 · 500', {}],
    ['sm-regular', 'Email', 'Field labels, captions', '12 / 16 · 400', {}],
    ['sm-italic', 'Optional', 'Hints', '12 / 16 · 400 italic', {}],
  ]],
];

function FonttypeTab() {
  return <section>
    <h1 className="ref-h1">Fonttype</h1>
    <p className="ref-lede">Two families. Paytone One speaks loud and always in capitals; Instrument Sans does everything else. Each role below is a single <code>font</code> shorthand token — size, line height, weight and family in one.</p>
    <div className="ty-families">
      <div className="ty-family"><span style={{ font: '400 56px/1 var(--font-display)' }}>Aa</span><div><strong>Paytone One</strong><span>--font-display · 400 · Google Fonts</span></div></div>
      <div className="ty-family"><span style={{ font: '600 56px/1 var(--font-sans)' }}>Aa</span><div><strong>Instrument Sans</strong><span>--font-sans · 400 / 500 / 600 / 700 · Google Fonts</span></div></div>
    </div>
    {TYPE.map(([group, note, rows]) => <div key={group} className="ty-block">
      <h2 className="ref-h2">{group}</h2>
      <p className="ref-sub">{note}</p>
      <div className="ty-card">{rows.map(([tok, sample, use, spec, extra]) => <div key={tok} className="ty-row">
        <div className="ty-sample" style={{ font: `var(--${tok})`, ...extra }}>{sample}</div>
        <div className="ty-spec"><code>--{tok}</code><span>{use}</span><span className="ty-num">{spec}</span></div>
      </div>)}</div>
    </div>)}
  </section>;
}

const TABS = [['readme', 'Readme'], ['color', 'Color'], ['fonttype', 'Fonttype'], ['library', 'Component Library']];
function App() {
  const initial = (location.hash || '').slice(1);
  const [tab, setTab] = React.useState(TABS.some(t => t[0] === initial) ? initial : 'readme');
  const [copied, setCopied] = React.useState(null);
  const timer = React.useRef();
  const choose = t => { setTab(t); history.replaceState(null, '', '#' + t); window.scrollTo(0, 0); };
  const onCopy = token => {
    navigator.clipboard && navigator.clipboard.writeText(`var(--${token})`);
    setCopied(token); clearTimeout(timer.current); timer.current = setTimeout(() => setCopied(null), 1800);
  };
  return <>
    <header className="ref-hdr" data-screen-label="Header">
      <div className="ref-wrap ref-hdr-in">
        <div className="ref-logo"><img src="assets/logos/primary-horizontal-colored.png" alt="Ventur.City" /></div>
        <div><div className="ref-title">Design system reference</div><div className="ref-tag">Colours, type and components every Ventur.City screen is built from. For designers and developers.</div></div>
      </div>
    </header>
    <nav className="ref-tabs" aria-label="Sections"><div className="ref-wrap ref-tabs-in" role="tablist">
      {TABS.map(([k, l]) => <button key={k} role="tab" aria-selected={tab === k} className={'ref-tab' + (tab === k ? ' on' : '')} onClick={() => choose(k)}>{l}</button>)}
    </div></nav>
    <main className="ref-wrap ref-main" data-screen-label={TABS.find(t => t[0] === tab)[1]}>
      {tab === 'readme' && <ReadmeTab />}
      {tab === 'color' && <ColorTab onCopy={onCopy} />}
      {tab === 'fonttype' && <FonttypeTab />}
      {tab === 'library' && <window.LibraryTab />}
    </main>
    {copied && <div className="ref-toast"><RefToast tone="neutral" icon={<RefIcon name="check" />} actionLabel={null}>Copied var(--{copied})</RefToast></div>}
  </>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
