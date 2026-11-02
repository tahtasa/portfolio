/* @ds-bundle: {"format":4,"namespace":"VenturCityDesignSystem_a97b28","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"CursorCharacter","sourcePath":"components/characters/CursorCharacter.jsx"},{"name":"GuestbookNote","sourcePath":"components/characters/GuestbookNote.jsx"},{"name":"BRAND_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Option","sourcePath":"components/forms/Option.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"CityMap","sourcePath":"components/map/CityMap.jsx"},{"name":"Passport","sourcePath":"components/passport/Passport.jsx"},{"name":"PASSPORT_CLOSED","sourcePath":"components/passport/passportArt.js"},{"name":"PASSPORT_OPEN","sourcePath":"components/passport/passportArt.js"},{"name":"CategoryChip","sourcePath":"components/places/CategoryChip.jsx"},{"name":"CATEGORIES","sourcePath":"components/places/CategoryIcon.jsx"},{"name":"CategoryIcon","sourcePath":"components/places/CategoryIcon.jsx"},{"name":"CategoryPin","sourcePath":"components/places/CategoryPin.jsx"},{"name":"PhotoStackMarker","sourcePath":"components/places/PhotoStackMarker.jsx"},{"name":"PlaceMarker","sourcePath":"components/places/PlaceMarker.jsx"},{"name":"WebHeadline","sourcePath":"components/web/WebHeadline.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"d037901ea36b","components/buttons/IconButton.jsx":"31224d48925c","components/characters/CursorCharacter.jsx":"228e2023aee0","components/characters/GuestbookNote.jsx":"7ae6f4714e6e","components/core/Icon.jsx":"cc9658d9f177","components/feedback/Toast.jsx":"74f396b57057","components/forms/Option.jsx":"270520625241","components/forms/TextField.jsx":"3f85cd5de4fa","components/forms/Toggle.jsx":"11d7e4cdecce","components/map/CityMap.jsx":"3681868f2f30","components/passport/Passport.jsx":"68e5777dcb56","components/passport/passportArt.js":"c8569b2770be","components/places/CategoryChip.jsx":"33584b67662d","components/places/CategoryIcon.jsx":"69775601535a","components/places/CategoryPin.jsx":"08b87b47e36d","components/places/PhotoStackMarker.jsx":"a6ce1dc0f0fa","components/places/PlaceMarker.jsx":"27541c19cff4","components/web/WebHeadline.jsx":"f707f49abc57","reference/app.jsx":"2c7b1889f0e2","reference/library.jsx":"2c7f9b378b64"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VenturCityDesignSystem_a97b28 = window.VenturCityDesignSystem_a97b28 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    bg: 'var(--green-100)',
    hover: 'var(--green-70)',
    dis: 'var(--green-50)',
    fg: 'var(--black-120)',
    disFg: 'var(--black-10)'
  },
  secondary: {
    bg: 'var(--black-30)',
    hover: 'var(--black-20)',
    dis: 'var(--black-50)',
    fg: 'var(--green-0)',
    disFg: 'var(--black-10)'
  },
  tertiary: {
    bg: 'var(--green-15)',
    hover: 'var(--green-10)',
    dis: 'var(--green-15)',
    fg: 'var(--black-120)',
    disFg: 'var(--black-10)'
  },
  ghost: {
    bg: 'transparent',
    hover: 'transparent',
    dis: 'transparent',
    fg: 'var(--black-120)',
    hoverFg: 'var(--black-100)',
    disFg: 'var(--black-10)'
  },
  'ghost-light': {
    bg: 'transparent',
    hover: 'transparent',
    dis: 'transparent',
    fg: 'var(--green-0)',
    hoverFg: 'var(--green-5)',
    disFg: 'var(--black-10)'
  },
  'ghost-brand': {
    bg: 'transparent',
    hover: 'transparent',
    dis: 'transparent',
    fg: 'var(--green-100)',
    hoverFg: 'var(--green-70)',
    disFg: 'var(--green-50)'
  }
};
const SIZES = {
  sm: {
    h: 24,
    px: 8,
    gap: 4,
    font: 'var(--sm-bold)',
    r: 'var(--radius-sm)'
  },
  lg: {
    h: 40,
    px: 16,
    gap: 8,
    font: 'var(--body-bold)',
    r: 'var(--radius-md)'
  }
};
function Button({
  variant = 'primary',
  size = 'lg',
  iconLeft,
  iconRight,
  fullWidth = false,
  social = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.lg;
  const bg = disabled ? v.dis : hover ? v.hover : v.bg;
  const fg = disabled ? v.disFg : hover && v.hoverFg ? v.hoverFg : v.fg;
  const isGhost = variant.startsWith('ghost');
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth || social ? 'flex' : 'inline-flex',
      width: fullWidth || social ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: social ? '0 24px' : isGhost ? 0 : `0 ${s.px}px`,
      position: 'relative',
      background: bg,
      color: fg,
      font: s.font,
      border: 0,
      borderRadius: s.r,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 120ms ease, color 120ms ease',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, social && iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 24,
      display: 'inline-flex'
    }
  }, iconLeft) : iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
const V = {
  primary: {
    bg: 'var(--green-100)',
    hover: 'var(--green-70)',
    dis: 'var(--green-50)',
    fg: 'var(--black-120)',
    disFg: 'var(--black-10)'
  },
  secondary: {
    bg: 'var(--black-30)',
    hover: 'var(--black-20)',
    dis: 'var(--black-30)',
    fg: 'var(--green-0)',
    disFg: 'var(--black-10)'
  },
  tertiary: {
    bg: 'var(--green-5)',
    hover: 'var(--green-10)',
    dis: 'var(--green-5)',
    fg: 'var(--black-120)',
    disFg: 'var(--black-10)'
  },
  ghost: {
    bg: 'transparent',
    hover: 'transparent',
    dis: 'transparent',
    fg: 'var(--black-120)',
    disFg: 'var(--black-10)'
  }
};
const S = {
  sm: {
    box: 24,
    r: 'var(--radius-sm)'
  },
  md: {
    box: 40,
    r: 'var(--radius-md)'
  },
  lg: {
    box: 54,
    r: 'var(--radius-lg)'
  }
};
function IconButton({
  variant = 'tertiary',
  size = 'md',
  disabled = false,
  label,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = V[variant] || V.tertiary;
  const s = S[size] || S.md;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s.box,
      height: s.box,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: disabled ? v.dis : hover ? v.hover : v.bg,
      color: disabled ? v.disFg : v.fg,
      border: 0,
      borderRadius: s.r,
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 120ms ease',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/characters/CursorCharacter.jsx
try { (() => {
const ARROW = 'M0.00312477 3.125C0.00312477 2.54465 0.164733 1.97577 0.469841 1.48209C0.774949 0.988417 1.2115 0.589457 1.73058 0.329917C2.24966 0.0703765 2.83076 -0.0394901 3.40877 0.0126286C3.98677 0.0647473 4.53885 0.276792 5.00313 0.625001L29.9969 19.3813C32.3969 21.1813 31.1219 25.0063 28.1219 25.0063H15.7875C15.3087 25.006 14.8362 25.1157 14.4065 25.327C13.9768 25.5383 13.6015 25.8456 13.3094 26.225L5.60313 36.2719C3.7875 38.6406 0 37.3563 0 34.3688L0.00312477 3.125Z';
const COLORS = {
  orange: '#EDBB4A',
  red: 'var(--red-50)',
  blue: 'var(--blue-70)',
  green: 'var(--green-100)'
};

/** Multiplayer-style cursor character with a name pill that can expand into a typed comment bubble. */
function CursorCharacter({
  name = 'Name',
  color = 'orange',
  message,
  typeSpeed = 38,
  holdMs = 3000,
  onDone,
  style
}) {
  const fill = COLORS[color] || color;
  const [typed, setTyped] = React.useState('');
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!message) {
      setOpen(false);
      setTyped('');
      return;
    }
    let i = 0,
      hide,
      t;
    setTyped('');
    setOpen(true);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finish = () => {
      hide = setTimeout(() => {
        setOpen(false);
        setTimeout(() => {
          setTyped('');
          onDone && onDone();
        }, 220);
      }, holdMs);
    };
    if (reduce) {
      setTyped(message);
      finish();
    } else t = setInterval(() => {
      i++;
      setTyped(message.slice(0, i));
      if (i >= message.length) {
        clearInterval(t);
        finish();
      }
    }, typeSpeed);
    return () => {
      clearInterval(t);
      clearTimeout(hide);
    };
  }, [message]);
  const typing = open && typed.length < (message || '').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      pointerEvents: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "38",
    viewBox: "-1 -1 33 39",
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: ARROW,
    fill: fill,
    stroke: "var(--black-50)",
    strokeWidth: "2",
    paintOrder: "stroke",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      marginLeft: 16,
      marginTop: -1,
      background: fill,
      color: 'var(--black-120)',
      border: '1px solid var(--black-50)',
      borderRadius: 15,
      padding: open ? '6px 16px' : '0 16px',
      minHeight: 30,
      boxSizing: 'border-box',
      maxWidth: open ? 260 : 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'max-width 220ms ease, padding 220ms ease'
    }
  }, open ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--sm-bold)',
      opacity: 1
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-medium)',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }
  }, typed, typing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 2,
      height: '1em',
      background: 'currentColor',
      marginLeft: 1,
      verticalAlign: '-2px'
    }
  }))) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 24px/30px var(--font-sans)',
      whiteSpace: 'nowrap',
      marginTop: -2
    }
  }, name)));
}
Object.assign(__ds_scope, { CursorCharacter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/characters/CursorCharacter.jsx", error: String((e && e.message) || e) }); }

// components/characters/GuestbookNote.jsx
try { (() => {
const ARROW = 'M0.00312477 3.125C0.00312477 2.54465 0.164733 1.97577 0.469841 1.48209C0.774949 0.988417 1.2115 0.589457 1.73058 0.329917C2.24966 0.0703765 2.83076 -0.0394901 3.40877 0.0126286C3.98677 0.0647473 4.53885 0.276792 5.00313 0.625001L29.9969 19.3813C32.3969 21.1813 31.1219 25.0063 28.1219 25.0063H15.7875C15.3087 25.006 14.8362 25.1157 14.4065 25.327C13.9768 25.5383 13.6015 25.8456 13.3094 26.225L5.60313 36.2719C3.7875 38.6406 0 37.3563 0 34.3688L0.00312477 3.125Z';
const COLORS = {
  orange: '#EDBB4A',
  red: 'var(--red-50)',
  blue: 'var(--blue-70)',
  green: 'var(--green-100)'
};
const NOTE_BG = {
  orange: 'var(--orange-50)',
  red: 'var(--red-50)',
  blue: 'var(--blue-50)',
  green: 'var(--green-70)'
};
const EASE = '220ms ease';
const W = 350;
function Slot({
  src,
  style
}) {
  return src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-15)',
      ...style
    }
  });
}

/** Guestbook sequence: cursor types a note → note expands (optional photos) → cursor leaves → profile photo pops in as the leave-mark. */
function GuestbookNote({
  name = 'dana_s',
  color = 'green',
  message = '',
  avatarSrc,
  photos = [],
  typeSpeed = 38,
  postDelay = 1200,
  replayKey,
  onDone,
  style
}) {
  const arrow = COLORS[color] || color,
    bg = NOTE_BG[color] || arrow;
  const [phase, setPhase] = React.useState('idle'); // idle → typing → note → posted
  const [typed, setTyped] = React.useState('');
  const [box, setBox] = React.useState(null); // {w,h} explicit size while morphing
  const shell = React.useRef(null),
    noteInner = React.useRef(null);
  const hasPhotos = photos && photos.length > 0;
  React.useEffect(() => {
    if (!message) {
      setPhase('idle');
      return;
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    setBox(null);
    setTyped('');
    setPhase('typing');
    const expand = () => {
      const el = shell.current;
      const from = el ? {
        w: el.offsetWidth,
        h: el.offsetHeight
      } : {
        w: W,
        h: 30
      };
      setBox(from);
      setPhase('note');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const h = noteInner.current ? noteInner.current.offsetHeight : 141;
        setBox({
          w: W,
          h
        });
        later(() => {
          setBox(null);
        }, 260);
      }));
      later(() => {
        setPhase('posted');
        later(() => onDone && onDone(), 400);
      }, 220 + postDelay);
    };
    if (reduce) {
      setTyped(message);
      later(expand, 300);
    } else {
      let i = 0;
      const t = setInterval(() => {
        i++;
        setTyped(message.slice(0, i));
        if (i >= message.length) {
          clearInterval(t);
          later(expand, 420);
        }
      }, typeSpeed);
      timers.push(t);
    }
    return () => timers.forEach(x => {
      clearTimeout(x);
      clearInterval(x);
    });
  }, [message, replayKey]);
  if (phase === 'idle') return null;
  const note = phase === 'note' || phase === 'posted';
  const posted = phase === 'posted';
  const typing = phase === 'typing' && typed.length < message.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: W + 10,
      paddingTop: 30,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "38",
    viewBox: "-1 -1 33 39",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 2,
      overflow: 'visible',
      transition: `transform ${EASE}, opacity ${EASE}`,
      transform: posted ? 'translate(-14px,-18px)' : 'none',
      opacity: posted ? 0 : 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: ARROW,
    fill: arrow,
    stroke: "var(--black-50)",
    strokeWidth: "2",
    paintOrder: "stroke",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    ref: shell,
    role: "status",
    "aria-live": "polite",
    style: {
      marginLeft: 10,
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      background: bg,
      color: 'var(--black-120)',
      border: '1.5px solid var(--black-50)',
      borderRadius: note ? 20 : 15,
      width: box ? box.w : note ? W : 'fit-content',
      maxWidth: W,
      height: box ? box.h : note ? 'auto' : 30,
      transition: `width ${EASE}, height ${EASE}, border-radius ${EASE}`
    }
  }, !note ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 27,
      padding: '0 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      font: 'var(--sm-medium)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent 0, #000 14px)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 14px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none'
    }
  }, typed), typing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 1.5,
      height: 14,
      background: 'currentColor',
      marginLeft: 1,
      flex: 'none'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    ref: noteInner,
    style: {
      width: W - 3,
      minHeight: hasPhotos ? 138 : 0,
      boxSizing: 'border-box',
      position: 'relative',
      padding: '7px 16px 16px 7px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 23
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 23,
      height: 23,
      flex: 'none',
      borderRadius: '50%',
      boxSizing: 'border-box',
      border: '1px solid var(--black-50)',
      overflow: 'hidden',
      background: 'var(--green-15)',
      transform: posted ? 'scale(1)' : 'scale(0)',
      transition: 'transform 260ms cubic-bezier(.34,1.56,.64,1)'
    }
  }, avatarSrc && /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px/16px var(--font-sans)'
    }
  }, name)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0 9px',
      maxWidth: hasPhotos ? 168 : 'none',
      font: '400 12px/16px var(--font-sans)',
      textWrap: 'pretty'
    }
  }, message), hasPhotos && photos.slice(0, 2).map((p, i, arr) => {
    const back = arr.length > 1 && i === 0;
    return /*#__PURE__*/React.createElement(Slot, {
      key: i,
      src: p,
      style: {
        position: 'absolute',
        width: 132,
        height: 90,
        borderRadius: 12,
        boxSizing: 'border-box',
        border: '3px solid var(--green-5)',
        right: back ? 16 : 6,
        top: back ? 48 : 40,
        zIndex: i + 1,
        boxShadow: '0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15)',
        transform: `rotate(${back ? -9 : -3}deg)`,
        animation: `vcNotePhoto 220ms ease ${120 + i * 120}ms both`
      }
    });
  }))), /*#__PURE__*/React.createElement("style", null, '@keyframes vcNotePhoto{from{opacity:0;margin-top:10px}to{opacity:1;margin-top:0}}'));
}
Object.assign(__ds_scope, { GuestbookNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/characters/GuestbookNote.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Ventur.City brand icon set (24×24, filled, currentColor). Source: uploaded SVGs → assets/icons/. */
const BRAND_ICONS = {
  "beauty": "<path d=\"M22.3825 7.68914C22.7376 8.10767 22.7122 8.72865 22.3241 9.11677C21.9124 9.52851 21.2448 9.52851 20.8331 9.11678L16.8627 5.14645C16.5661 4.84977 16.085 4.84985 15.7882 5.14645C15.4915 5.44316 15.4915 5.92423 15.7882 6.22095L19.9668 10.3995C20.2635 10.6963 20.2635 11.1773 19.9668 11.474C19.6701 11.7708 19.189 11.7708 18.8923 11.474L14.7137 7.29544C14.4171 6.99877 13.936 6.99884 13.6392 7.29544C13.3425 7.59216 13.3425 8.07322 13.6392 8.36994L17.8178 12.5485C18.1146 12.8452 18.1146 13.3263 17.8178 13.623C17.5211 13.9197 17.0401 13.9197 16.7433 13.623L12.5647 9.44443C12.2681 9.14776 11.787 9.14784 11.4903 9.44443C11.1935 9.74115 11.1935 10.2222 11.4903 10.5189L15.6688 14.6975C15.9656 14.9942 15.9656 15.4753 15.6688 15.772C15.3721 16.0687 14.8911 16.0687 14.5943 15.772L10.4158 11.5934C10.1191 11.2968 9.63798 11.2968 9.34126 11.5934C9.04454 11.8901 9.04454 12.3712 9.34126 12.6679L13.5199 16.8465C13.8166 17.1432 13.8166 17.6243 13.5199 17.921C13.2231 18.2177 12.7421 18.2177 12.4454 17.921L8.26676 13.7424C7.97009 13.4457 7.48899 13.4458 7.19227 13.7424C6.89555 14.0391 6.89555 14.5202 7.19227 14.8169L11.3709 18.9955C11.6676 19.2922 11.6676 19.7733 11.3709 20.07C11.0741 20.3667 10.5931 20.3667 10.2964 20.07L6.11777 15.8914C5.8211 15.5947 5.34 15.5948 5.04327 15.8914C4.74656 16.1881 4.74656 16.6692 5.04327 16.9659L9.07549 20.9981C9.45305 21.3757 9.45305 21.9878 9.07549 22.3654C8.71959 22.7213 8.15016 22.7446 7.76638 22.4189L1.96324 17.4951C1.21074 16.8566 1.1639 15.7116 1.86172 15.0138L15.0295 1.84597C15.7273 1.14815 16.8723 1.19499 17.5108 1.9475L22.3825 7.68914Z\" fill=\"currentColor\"></path>",
  "entertainment": "<path d=\"M10 1H4C2.34 1 1 2.34 1 4V10C1 11.66 2.34 13 4 13H8.5C8.5 10.52 10.52 8.5 13 8.5V4C13 2.34 11.66 1 10 1ZM3.77 4.27C4.54 3.72 5.59 3.71 6.38 4.25C6.72 4.48 6.81 4.95 6.58 5.29C6.35 5.63 5.88 5.72 5.54 5.49C5.27 5.3 4.9 5.3 4.63 5.5C4.5 5.59 4.35 5.63 4.2 5.63C3.97 5.63 3.73 5.52 3.59 5.32C3.35 4.98 3.43 4.51 3.77 4.27ZM9.27 8.24C9.01 8.57 8.54 8.62 8.22 8.36C7.87 8.08 7.45 7.93 7 7.93C6 7.93 5.17 8.69 5.06 9.67H7.16C7.57 9.67 7.91 10.01 7.91 10.42C7.91 10.83 7.57 11.17 7.16 11.17H4.84C4.13 11.17 3.55 10.59 3.55 9.88C3.55 7.98 5.1 6.43 7 6.43C7.78 6.43 8.55 6.7 9.16 7.19C9.48 7.45 9.53 7.92 9.27 8.24ZM10.58 5.29C10.35 5.63 9.88 5.72 9.54 5.49C9.27 5.3 8.9 5.3 8.63 5.5C8.5 5.59 8.35 5.63 8.2 5.63C7.97 5.63 7.73 5.52 7.59 5.32C7.35 4.98 7.43 4.51 7.77 4.27C8.54 3.72 9.59 3.71 10.38 4.25C10.72 4.48 10.81 4.95 10.58 5.29Z\" fill=\"currentColor\"></path> <path d=\"M18.22 16.68C18.15 16.6 18.05 16.56 17.94 16.56H14.06C13.95 16.56 13.85 16.6 13.78 16.68C13.71 16.76 13.67 16.87 13.69 16.97C13.82 18.15 14.81 19.05 16 19.05C17.19 19.05 18.18 18.16 18.31 16.97C18.32 16.86 18.29 16.76 18.22 16.68Z\" fill=\"currentColor\"></path> <path d=\"M19 10H13C11.35 10 10 11.35 10 13V19C10 20.65 11.35 22 13 22H19C20.65 22 22 20.65 22 19V13C22 11.35 20.65 10 19 10ZM12.59 13.17C12.83 12.83 13.3 12.75 13.64 12.99C13.91 13.18 14.27 13.18 14.54 13C14.88 12.76 15.35 12.85 15.58 13.2C15.81 13.54 15.73 14.01 15.38 14.24C14.99 14.5 14.54 14.64 14.09 14.64C13.62 14.64 13.16 14.5 12.77 14.22C12.43 13.97 12.35 13.5 12.59 13.17ZM16 20.17C14.1 20.17 12.55 18.62 12.55 16.72C12.55 16.01 13.13 15.43 13.84 15.43H18.16C18.87 15.43 19.45 16.01 19.45 16.72C19.45 18.62 17.9 20.17 16 20.17ZM19.38 14.23C18.99 14.49 18.54 14.63 18.09 14.63C17.62 14.63 17.16 14.49 16.77 14.21C16.43 13.97 16.35 13.5 16.59 13.16C16.83 12.82 17.3 12.74 17.64 12.98C17.91 13.17 18.27 13.17 18.54 12.99C18.88 12.75 19.35 12.84 19.58 13.19C19.81 13.54 19.72 14 19.38 14.23Z\" fill=\"currentColor\"></path>",
  "food": "<path d=\"M19.5 1.5C19.3011 1.5 19.1103 1.57902 18.9697 1.71967C18.829 1.86032 18.75 2.05109 18.75 2.25V6.75C18.75 6.94891 18.671 7.13968 18.5303 7.28033C18.3897 7.42098 18.1989 7.5 18 7.5H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V7.5H15C14.8011 7.5 14.6103 7.42098 14.4697 7.28033C14.329 7.13968 14.25 6.94891 14.25 6.75V2.25C14.25 2.05109 14.171 1.86032 14.0303 1.71967C13.8897 1.57902 13.6989 1.5 13.5 1.5C13.3011 1.5 13.1103 1.57902 12.9697 1.71967C12.829 1.86032 12.75 2.05109 12.75 2.25V7.5C12.7527 8.26484 12.9893 9.01056 13.4279 9.63713C13.8665 10.2637 14.4863 10.7412 15.204 11.0055L14.6887 21.2355C14.6943 21.412 14.7356 21.5855 14.8099 21.7456C14.8843 21.9057 14.9903 22.0492 15.1215 22.1673C15.2527 22.2854 15.4065 22.3758 15.5735 22.4329C15.7405 22.4901 15.9174 22.5129 16.0935 22.5H16.9065C17.0826 22.5129 17.2595 22.4901 17.4265 22.4329C17.5935 22.3758 17.7473 22.2854 17.8785 22.1673C18.0097 22.0492 18.1157 21.9057 18.1901 21.7456C18.2644 21.5855 18.3057 21.412 18.3113 21.2355L17.7952 11.0055C18.5135 10.7419 19.1338 10.2647 19.5727 9.63795C20.0116 9.01123 20.2479 8.26511 20.25 7.5V2.25C20.25 2.05109 20.171 1.86032 20.0303 1.71967C19.8897 1.57902 19.6989 1.5 19.5 1.5Z\" fill=\"currentColor\"></path> <path d=\"M7.5 1.5C5.42925 1.5 3.75 4.4775 3.75 7.1535C3.75 9.24 4.77525 10.5165 6.20625 10.983L5.68875 21.2355C5.69434 21.412 5.73556 21.5855 5.80993 21.7456C5.8843 21.9057 5.99028 22.0492 6.1215 22.1673C6.25272 22.2854 6.40647 22.3758 6.57351 22.4329C6.74055 22.4901 6.91742 22.5129 7.0935 22.5H7.9065C8.08258 22.5129 8.25945 22.4901 8.42649 22.4329C8.59353 22.3758 8.74728 22.2854 8.8785 22.1673C9.00972 22.0492 9.1157 21.9057 9.19007 21.7456C9.26444 21.5855 9.30566 21.412 9.31125 21.2355L8.79375 10.983C10.2248 10.5165 11.25 9.24 11.25 7.1535C11.25 4.4775 9.57075 1.5 7.5 1.5Z\" fill=\"currentColor\"></path>",
  "nightclub": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.9999 3.28525C17.1086 3.28525 21.2499 7.42662 21.2499 12.5353C21.2499 17.6439 17.1086 21.7853 11.9999 21.7853C6.89131 21.7853 2.74994 17.6439 2.74994 12.5353C2.74994 7.42662 6.89131 3.28525 11.9999 3.28525ZM8.72162 18.0099C8.97062 18.5969 9.26401 19.13 9.60346 19.5909C9.68374 19.7 9.72669 19.8239 9.74115 19.9493C10.2258 20.0968 10.7302 20.1982 11.2499 20.2481V18.2765C10.3952 18.25 9.5445 18.161 8.72162 18.0099ZM18.33 17.003C17.9221 17.182 17.4999 17.3436 17.0654 17.4845C16.9243 17.9366 16.7605 18.3729 16.5742 18.7892C17.2517 18.2927 17.8448 17.6892 18.33 17.003ZM7.75971 13.2853C7.79574 14.3587 7.93691 15.3994 8.17572 16.3585C9.13514 16.5975 10.1761 16.7384 11.2499 16.7745V13.2853H7.75971ZM12.7499 13.2853V16.7569C13.8099 16.697 14.857 16.5361 15.8427 16.2784C16.0696 15.3415 16.2051 14.3289 16.2402 13.2853H12.7499ZM4.28705 13.2853C4.33693 13.8046 4.43764 14.3088 4.5849 14.7931C4.71073 14.8073 4.83489 14.8512 4.94428 14.9317C5.40474 15.2709 5.93803 15.5628 6.52436 15.8116C6.37342 14.9894 6.28512 14.1393 6.25873 13.2853H4.28705ZM17.7412 13.2853C17.7156 14.1117 17.6303 14.9341 17.4882 15.7315C18.0649 15.4942 18.6049 15.2193 19.0937 14.9044C19.1935 14.8401 19.3034 14.8048 19.414 14.7921C19.5612 14.308 19.663 13.8044 19.7128 13.2853H17.7412ZM17.4218 9.31162C17.5802 10.1238 17.6805 10.9552 17.7236 11.7853H19.7128C19.6629 11.2658 19.5613 10.7618 19.414 10.2774C19.3035 10.2647 19.1935 10.2304 19.0937 10.1661C18.5862 9.83908 18.0236 9.55498 17.4218 9.31162ZM6.59467 9.22763C5.98025 9.48262 5.42325 9.78602 4.94428 10.1388C4.83492 10.2192 4.71069 10.2622 4.5849 10.2765C4.43749 10.761 4.33696 11.2656 4.28705 11.7853H6.27631C6.32092 10.9265 6.42661 10.0664 6.59467 9.22763ZM11.2499 8.29502C10.206 8.33007 9.19293 8.46448 8.2558 8.6915C7.99797 9.67743 7.83728 10.7251 7.77729 11.7853H11.2499V8.29502ZM16.4677 6.2042C16.6588 6.63977 16.8288 7.09214 16.9765 7.55771C17.4421 7.7054 17.8944 7.87543 18.33 8.0665C17.8196 7.34479 17.1895 6.7145 16.4677 6.2042ZM7.53119 6.2042C6.84514 6.68933 6.24141 7.28263 5.74506 7.96006C6.16126 7.77374 6.59769 7.60996 7.04975 7.46885C7.19065 7.03439 7.35222 6.61209 7.53119 6.2042ZM12.7499 6.81064C13.5797 6.85374 14.4108 6.95411 15.2226 7.1124C14.9793 6.51112 14.6959 5.94866 14.3691 5.4415C14.3046 5.3413 14.2693 5.2312 14.2568 5.12021C13.7728 4.97309 13.269 4.87123 12.7499 4.82138V6.81064ZM11.2499 4.82138C10.7306 4.87126 10.2264 4.97294 9.74213 5.12021C9.72957 5.23116 9.6953 5.34133 9.6308 5.4415C9.31594 5.93011 9.04002 6.46953 8.80268 7.04599C9.60034 6.9038 10.4232 6.81862 11.2499 6.79306V4.82138Z\" fill=\"currentColor\"></path> <path d=\"M3.29666 2.31923C3.39638 2.17992 3.6035 2.17992 3.70323 2.31923L4.51883 3.4586C4.53478 3.4809 4.5543 3.50041 4.57659 3.51637L5.71596 4.33197C5.85527 4.43169 5.85527 4.63881 5.71596 4.73854L4.57659 5.55413C4.5543 5.57009 4.53478 5.58961 4.51883 5.6119L3.70323 6.75127C3.6035 6.89058 3.39638 6.89058 3.29666 6.75127L2.48106 5.6119C2.4651 5.58961 2.44559 5.57009 2.42329 5.55413L1.28393 4.73854C1.14462 4.63881 1.14462 4.43169 1.28393 4.33197L2.42329 3.51637C2.44559 3.50041 2.4651 3.4809 2.48106 3.4586L3.29666 2.31923Z\" fill=\"currentColor\"></path> <path d=\"M21.2967 17.3192C21.3964 17.1799 21.6035 17.1799 21.7032 17.3192L22.1016 17.8758C22.1176 17.8981 22.1371 17.9176 22.1594 17.9336L22.716 18.332C22.8553 18.4317 22.8553 18.6388 22.716 18.7385L22.1594 19.1369C22.1371 19.1529 22.1176 19.1724 22.1016 19.1947L21.7032 19.7513C21.6035 19.8906 21.3964 19.8906 21.2967 19.7513L20.8983 19.1947C20.8823 19.1724 20.8628 19.1529 20.8405 19.1369L20.2839 18.7385C20.1446 18.6388 20.1446 18.4317 20.2839 18.332L20.8405 17.9336C20.8628 17.9176 20.8823 17.8981 20.8983 17.8758L21.2967 17.3192Z\" fill=\"currentColor\"></path>",
  "outdoors": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.55566 4C7.10795 4 7.55566 4.44772 7.55566 5V5.14258H16.4443V5C16.4443 4.44772 16.8921 4 17.4443 4H17.666C18.2183 4 18.666 4.44772 18.666 5V5.14258H19.8887C20.4408 5.14267 20.8885 5.59048 20.8887 6.14258V11C20.8887 11.5522 20.4409 11.9999 19.8887 12H18.666V13.1426H21C21.552 13.1428 21.9998 13.5906 22 14.1426V14.4287C21.9999 14.9808 21.5521 15.4285 21 15.4287H18.666V19C18.666 19.5523 18.2183 20 17.666 20H17.4443C16.8921 20 16.4443 19.5523 16.4443 19V15.4287H7.55566V19C7.55566 19.5523 7.10795 20 6.55566 20H6.33398C5.7817 20 5.33398 19.5523 5.33398 19V15.4287H3C2.44795 15.4285 2.00008 14.9808 2 14.4287V14.1426C2.00015 13.5906 2.448 13.1428 3 13.1426H5.33398V12H4.11133C3.5591 11.9999 3.11133 11.5522 3.11133 11V6.14258C3.11148 5.59046 3.55919 5.14264 4.11133 5.14258H5.33398V5C5.33398 4.44772 5.7817 4 6.33398 4H6.55566ZM7.55566 12V13.1426H16.4443V12H7.55566Z\" fill=\"currentColor\"></path>",
  "services": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.75C11.9998 5.93 12.1917 5.12135 12.5603 4.38885C12.9288 3.65635 13.4639 3.02038 14.1225 2.53188C14.7811 2.04339 15.545 1.71596 16.3529 1.57584C17.1609 1.43572 17.9904 1.48681 18.775 1.725C18.8991 1.76257 19.0112 1.83163 19.1006 1.92544C19.19 2.01926 19.2535 2.13464 19.2851 2.26033C19.3166 2.38602 19.315 2.51773 19.2805 2.64263C19.2459 2.76753 19.1796 2.88135 19.088 2.973L15.768 6.292C15.831 6.767 16.044 7.226 16.409 7.591C16.774 7.956 17.233 8.169 17.709 8.231L21.027 4.912C21.1187 4.82039 21.2325 4.75409 21.3574 4.71956C21.4823 4.68503 21.614 4.68345 21.7397 4.71497C21.8654 4.7465 21.9808 4.81005 22.0746 4.89943C22.1684 4.98881 22.2375 5.10098 22.275 5.225C22.5243 6.04585 22.5685 6.91527 22.404 7.75719C22.2394 8.59912 21.8711 9.38789 21.3312 10.0545C20.7912 10.7211 20.0962 11.2453 19.3068 11.5811C18.5174 11.917 17.6578 12.0543 16.803 11.981C15.785 11.895 14.933 12.081 14.494 12.615L7.34404 21.3C7.05128 21.6538 6.68787 21.9425 6.27708 22.1477C5.86629 22.3529 5.41718 22.4701 4.9585 22.4917C4.49982 22.5133 4.04168 22.4389 3.61341 22.2732C3.18515 22.1076 2.79619 21.8543 2.47146 21.5296C2.14673 21.205 1.89337 20.8161 1.72762 20.3878C1.56186 19.9596 1.48735 19.5015 1.50887 19.0428C1.53039 18.5841 1.64745 18.135 1.85257 17.7241C2.05769 17.3133 2.34634 16.9498 2.70004 16.657L11.384 9.50599C11.917 9.06599 12.104 8.215 12.018 7.197C12.0058 7.04831 11.9998 6.89918 12 6.75ZM4.11704 19.125C4.11704 18.9261 4.19606 18.7353 4.33671 18.5947C4.47736 18.454 4.66813 18.375 4.86704 18.375H4.87504C5.07395 18.375 5.26472 18.454 5.40537 18.5947C5.54602 18.7353 5.62504 18.9261 5.62504 19.125V19.133C5.62504 19.3319 5.54602 19.5227 5.40537 19.6633C5.26472 19.804 5.07395 19.883 4.87504 19.883H4.86704C4.66813 19.883 4.47736 19.804 4.33671 19.6633C4.19606 19.5227 4.11704 19.3319 4.11704 19.133V19.125Z\" fill=\"currentColor\"></path> <path d=\"M10.076 8.63999L7.87497 6.43999V4.87399C7.87496 4.74451 7.84143 4.61724 7.77765 4.50456C7.71386 4.39188 7.62199 4.29763 7.51097 4.23099L3.76097 1.98099C3.61754 1.89502 3.4495 1.85944 3.28353 1.87991C3.11757 1.90039 2.9632 1.97574 2.84497 2.09399L2.09497 2.84399C1.97671 2.96223 1.90136 3.11659 1.88089 3.28255C1.86041 3.44852 1.89599 3.61657 1.98197 3.75999L4.23197 7.50999C4.29861 7.62101 4.39286 7.71288 4.50554 7.77667C4.61822 7.84046 4.74549 7.87399 4.87497 7.87399H6.43897L8.50097 9.93599L10.076 8.63899V8.63999Z\" fill=\"currentColor\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.556 17.329L16.739 21.511C17.0524 21.8244 17.4245 22.073 17.834 22.2426C18.2434 22.4122 18.6823 22.4995 19.1255 22.4995C19.5687 22.4995 20.0076 22.4122 20.4171 22.2426C20.8266 22.073 21.1986 21.8244 21.512 21.511C21.8254 21.1976 22.074 20.8255 22.2436 20.4161C22.4133 20.0066 22.5006 19.5677 22.5006 19.1245C22.5006 18.6813 22.4133 18.2424 22.2436 17.8329C22.074 17.4235 21.8254 17.0514 21.512 16.738L18.206 13.433C17.6993 13.5048 17.186 13.5193 16.676 13.476C16.282 13.442 15.994 13.47 15.809 13.518C15.7505 13.5304 15.6942 13.5516 15.642 13.581L12.556 17.329ZM15.97 15.969C16.1107 15.8285 16.3013 15.7497 16.5 15.7497C16.6988 15.7497 16.8894 15.8285 17.03 15.969L18.905 17.845C18.9787 17.9137 19.0378 17.9965 19.0788 18.0885C19.1198 18.1805 19.1418 18.2798 19.1436 18.3805C19.1454 18.4812 19.1269 18.5812 19.0892 18.6746C19.0514 18.768 18.9953 18.8528 18.9241 18.924C18.8528 18.9953 18.768 19.0514 18.6746 19.0891C18.5812 19.1268 18.4812 19.1454 18.3805 19.1436C18.2798 19.1418 18.1805 19.1198 18.0885 19.0788C17.9965 19.0378 17.9137 18.9787 17.845 18.905L15.97 17.03C15.8296 16.8894 15.7507 16.6987 15.7507 16.5C15.7507 16.3012 15.8296 16.1106 15.97 15.97V15.969Z\" fill=\"currentColor\"></path>",
  "shopping": "<path d=\"M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z\" fill=\"currentColor\"></path> <path d=\"M7.99997 17.78C7.58997 17.78 7.24997 17.44 7.24997 17.03C7.24997 16.61 7.58997 16.28 7.99997 16.28H19.76C20.06 16.28 20.29 16.02 20.26 15.72L19.58 10.03C19.34 8.09 19 6.5 15.6 6.5H8.39997C4.99997 6.5 4.65997 8.09 4.42997 10.03L3.52997 17.53C3.23997 19.99 3.99997 22 7.50997 22H16.49C19.65 22 20.58 20.37 20.53 18.25C20.52 17.98 20.3 17.78 20.03 17.78H7.99997Z\" fill=\"currentColor\"></path>",
  "wellness": "<path d=\"M17.1801 5.25C15.4701 5.25 13.4301 5.9 13.4301 9V15C13.4301 18.1 15.4701 18.75 17.1801 18.75C18.8901 18.75 20.9301 18.1 20.9301 15V9C20.9301 5.9 18.8901 5.25 17.1801 5.25Z\" fill=\"currentColor\"></path> <path d=\"M6.81995 5.25C5.10995 5.25 3.06995 5.9 3.06995 9V15C3.06995 18.1 5.10995 18.75 6.81995 18.75C8.52995 18.75 10.5699 18.1 10.5699 15V9C10.5699 5.9 8.52995 5.25 6.81995 5.25Z\" fill=\"currentColor\"></path> <path d=\"M13.4299 11.25H10.5699V12.75H13.4299V11.25Z\" fill=\"currentColor\"></path> <path d=\"M22.5 15.25C22.09 15.25 21.75 14.91 21.75 14.5V9.5C21.75 9.09 22.09 8.75 22.5 8.75C22.91 8.75 23.25 9.09 23.25 9.5V14.5C23.25 14.91 22.91 15.25 22.5 15.25Z\" fill=\"currentColor\"></path> <path d=\"M1.5 15.25C1.09 15.25 0.75 14.91 0.75 14.5V9.5C0.75 9.09 1.09 8.75 1.5 8.75C1.91 8.75 2.25 9.09 2.25 9.5V14.5C2.25 14.91 1.91 15.25 1.5 15.25Z\" fill=\"currentColor\"></path>",
  "badge": "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\"></circle> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.6753 7.09266C16.6957 6.6845 17.7082 7.69703 17.3001 8.71742L15.0467 14.3497C14.9196 14.6674 14.6685 14.9197 14.3509 15.0468L8.71731 17.3002C7.69707 17.7081 6.68469 16.6957 7.09255 15.6754L9.34597 10.0419C9.47298 9.72435 9.72428 9.47195 10.0418 9.34486L15.6753 7.09266ZM12.1072 10.8573C11.4168 10.8573 10.8572 11.417 10.8572 12.1073C10.8573 12.7976 11.4169 13.3573 12.1072 13.3573C12.7975 13.3573 13.3571 12.7976 13.3572 12.1073C13.3572 11.417 12.7976 10.8573 12.1072 10.8573Z\" style=\"fill:var(--icon-contrast,#0E1219)\"></path>",
  "locate-me": "<path d=\"M10.8896 20.3383L9.65921 16.6472C9.31273 15.6219 8.5137 14.8229 7.4884 14.4764L3.79023 13.239C0.629462 12.1854 0.671889 7.6882 3.86094 6.70532L5.52971 6.19621C5.76306 6.11842 6.01054 6.1255 6.22975 6.21742L19.1981 11.1389C19.7284 11.3439 20.0113 11.9238 19.8416 12.4612L17.4162 20.2747C16.4404 23.4567 11.9432 23.4991 10.8896 20.3383Z\" fill=\"currentColor\"></path> <path d=\"M19.502 9.71773L11.0096 6.5004C10.055 6.13977 10.0975 4.76798 11.0733 4.471L17.3029 2.5406C19.9475 1.72035 22.4223 4.19523 21.6021 6.83981L20.9162 9.03891C20.7253 9.62581 20.0889 9.93693 19.502 9.71773Z\" fill=\"currentColor\"></path>",
  "no-edit": "<path d=\"M18.5254 6.12652C16.5854 4.18652 14.6854 4.13652 12.6954 6.12652L11.4854 7.33652C11.3854 7.43652 11.3454 7.59652 11.3854 7.73652C13.5 9.85107 14.8016 11.1527 16.9154 13.2665C16.9554 13.2765 16.9954 13.2865 17.0354 13.2865C17.1454 13.2865 17.2454 13.2465 17.3254 13.1665L18.5254 11.9565C19.5154 10.9765 19.9954 10.0265 19.9954 9.06652C20.0054 8.07652 19.5254 7.11652 18.5254 6.12652Z\" fill=\"currentColor\"></path> <path d=\"M3.5301 3.18251C3.82004 2.89276 4.36222 2.95509 4.72639 3.31922L20.7176 19.3095C21.0815 19.6736 21.143 20.2159 20.8533 20.5057C20.5635 20.7956 20.0213 20.734 19.6571 20.37L14.8836 15.5975L9.68538 20.7968C9.56523 20.9266 9.31538 21.0461 9.13557 21.0761L5.29573 21.6161C5.17574 21.6361 5.05537 21.6464 4.93538 21.6464C4.39557 21.6463 3.89586 21.4562 3.53596 21.1063C3.11596 20.6763 2.9262 20.0363 3.0262 19.3563L3.56624 15.5263C3.59628 15.3563 3.71565 15.1064 3.84553 14.9765L9.05354 9.76747L3.66585 4.37977C3.30165 4.01555 3.2402 3.47241 3.5301 3.18251Z\" fill=\"currentColor\"></path>",
  "play": "<path d=\"M4.5 17.2756V6.72439C4.5 4.67417 6.62412 3.36063 8.38828 4.3199L18.0905 9.59552C19.9698 10.6174 19.9698 13.3826 18.0905 14.4045L8.38828 19.6801C6.62412 20.6394 4.5 19.3258 4.5 17.2756Z\" fill=\"currentColor\"></path>",
  "rax": "<path d=\"M14.5 2C18.6421 2 22 5.35786 22 9.5V14.5C22 18.6421 18.6421 22 14.5 22H9.5C9.18331 22 8.87131 21.9795 8.56494 21.9414C8.73906 21.018 8.89087 19.3682 8.89087 19.3682C8.90002 19.3022 10.5308 7.57632 13.0657 7.54688C13.3402 7.54379 13.4829 7.64914 13.6455 7.86731C13.9307 8.25403 13.503 11.1105 11.5581 13.0736C11.483 13.1485 11.4163 13.2165 11.361 13.2732C10.8727 13.7773 10.7749 14.555 11.1248 15.1671C11.4742 15.7772 12.1877 16.8814 12.8582 16.6985C13.6021 16.4943 16.2762 15.9477 19.4945 17.484L20.7494 13.9537L20.75 13.9525C18.917 13.079 17.1987 12.7353 15.7683 12.65C16.4057 11.6254 18.1801 7.9451 16.5917 5.79211C16.0699 5.08494 14.781 3.86146 12.8582 3.875C10.8737 3.87502 8.18193 5.35901 6.90051 9.09045L3.94519 19.5397C2.73642 18.2081 2 16.44 2 14.5V9.5C2 5.35786 5.35786 2 9.5 2H14.5Z\" fill=\"currentColor\"></path>",
  "socials": "<path d=\"M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z\" fill=\"currentColor\"></path> <path d=\"M20.79 14.7C19.67 15.45 18.1 15.73 16.65 15.54C17.03 14.72 17.23 13.81 17.24 12.85C17.24 11.85 17.02 10.9 16.6 10.07C18.08 9.87001 19.65 10.15 20.78 10.9C22.36 11.94 22.36 13.65 20.79 14.7Z\" fill=\"currentColor\"></path> <path d=\"M6.44002 7.77C6.51002 7.76 6.58002 7.76 6.65002 7.77C8.20002 7.72 9.43002 6.45 9.43002 4.89C9.43002 3.3 8.14002 2 6.54002 2C4.95002 2 3.65002 3.29 3.65002 4.89C3.66002 6.45 4.89002 7.72 6.44002 7.77Z\" fill=\"currentColor\"></path> <path d=\"M6.54999 12.85C6.54999 13.82 6.75999 14.74 7.13999 15.57C5.72999 15.72 4.26 15.42 3.18 14.71C1.6 13.66 1.6 11.95 3.18 10.9C4.25 10.18 5.76 9.88998 7.18 10.05C6.77 10.89 6.54999 11.84 6.54999 12.85Z\" fill=\"currentColor\"></path> <path d=\"M12.12 15.87C12.04 15.86 11.9501 15.86 11.8601 15.87C10.0201 15.81 8.55005 14.3 8.55005 12.44C8.55005 10.54 10.0801 9 11.9901 9C13.8901 9 15.43 10.54 15.43 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z\" fill=\"currentColor\"></path> <path d=\"M8.87005 17.94C7.36005 18.95 7.36005 20.61 8.87005 21.61C10.59 22.76 13.4101 22.76 15.1301 21.61C16.6401 20.6 16.6401 18.94 15.1301 17.94C13.4201 16.79 10.6 16.79 8.87005 17.94Z\" fill=\"currentColor\"></path>",
  "stamps": "<path d=\"M6.16699 2C6.44313 2 6.66039 2.22751 6.72852 2.49512C6.94881 3.36024 7.73329 4 8.66699 4C9.70252 3.99985 10.554 3.21269 10.6562 2.2041C10.6623 2.08978 10.7566 2.00015 10.8711 2H12.833C13.1092 2 13.3264 2.22752 13.3945 2.49512C13.6149 3.36014 14.3994 3.99986 15.333 4C16.2667 4 17.0512 3.36024 17.2715 2.49512C17.3396 2.22751 17.5569 2 17.833 2H19.5C19.7761 2 19.9934 2.22751 20.0615 2.49512C20.2415 3.20191 20.7981 3.75849 21.5049 3.93848C21.7725 4.0066 22 4.22386 22 4.5V6.16699C22 6.44313 21.7725 6.66039 21.5049 6.72852C20.6398 6.94881 20 7.73329 20 8.66699C20.0002 9.70252 20.7873 10.554 21.7959 10.6562C21.9102 10.6623 21.9999 10.7566 22 10.8711V12.833C22 13.1092 21.7725 13.3264 21.5049 13.3945C20.6399 13.6149 20.0001 14.3994 20 15.333C20 16.2667 20.6398 17.0512 21.5049 17.2715C21.7725 17.3396 22 17.5569 22 17.833V19.5C22 19.7761 21.7725 19.9934 21.5049 20.0615C20.7981 20.2415 20.2415 20.7981 20.0615 21.5049C19.9934 21.7725 19.7761 22 19.5 22H17.833C17.5569 22 17.3396 21.7725 17.2715 21.5049C17.0512 20.6398 16.2667 20 15.333 20C14.2975 20.0002 13.446 20.7873 13.3438 21.7959C13.3377 21.9102 13.2434 21.9999 13.1289 22H11.167C10.8908 22 10.6736 21.7725 10.6055 21.5049C10.3851 20.6399 9.60056 20.0001 8.66699 20C7.73329 20 6.94881 20.6398 6.72852 21.5049C6.66039 21.7725 6.44313 22 6.16699 22H4.5C4.22386 22 4.0066 21.7725 3.93848 21.5049C3.75849 20.7981 3.20191 20.2415 2.49512 20.0615C2.22751 19.9934 2 19.7761 2 19.5V17.833C2 17.5569 2.22751 17.3396 2.49512 17.2715C3.36024 17.0512 4 16.2667 4 15.333C3.99985 14.2975 3.21269 13.446 2.2041 13.3438C2.08978 13.3377 2.00015 13.2434 2 13.1289V11.167C2 10.8908 2.22752 10.6736 2.49512 10.6055C3.36014 10.3851 3.99986 9.60056 4 8.66699C4 7.73329 3.36024 6.94881 2.49512 6.72852C2.22751 6.66039 2 6.44313 2 6.16699V4.5C2 4.22386 2.22751 4.0066 2.49512 3.93848C3.20191 3.75849 3.75849 3.20191 3.93848 2.49512C4.0066 2.22751 4.22386 2 4.5 2H6.16699ZM10.0928 12.6787C9.70431 12.0319 8.76639 12.0318 8.37793 12.6787L7.14453 14.7354C6.74462 15.4019 7.22466 16.25 8.00195 16.25H10.4688C11.246 16.25 11.7261 15.4019 11.3262 14.7354L10.0928 12.6787ZM14.6895 9.34375C14.2972 8.72102 13.3893 8.72102 12.9971 9.34375L11.3525 11.9541C11.1542 12.2693 11.1474 12.6685 11.335 12.9902L12.9463 15.7539C13.1255 16.0611 13.4549 16.25 13.8105 16.25H17.2275C18.0145 16.25 18.4936 15.3827 18.0742 14.7168L14.6895 9.34375ZM9.34277 8C8.51446 8.00013 7.84277 8.67166 7.84277 9.5C7.84277 10.3283 8.51446 10.9999 9.34277 11C10.1712 11 10.8428 10.3284 10.8428 9.5C10.8428 8.67157 10.1712 8 9.34277 8Z\" fill=\"currentColor\"></path>",
  "theatre": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.9213 2.66712C15.4513 2.36171 16.1196 2.56282 16.5817 2.96165C17.3495 3.62463 18.3896 3.90165 19.388 3.70907C19.9888 3.59336 20.6687 3.75132 20.9741 4.27925L23.1869 8.10408C23.4923 8.63201 23.2894 9.29862 22.8885 9.76008C22.2222 10.5267 21.9426 11.5641 22.134 12.5592C22.249 13.1581 22.0894 13.8362 21.5594 14.1416L9.07873 21.3329C8.54867 21.6383 7.88041 21.4372 7.41826 21.0384C6.65048 20.3754 5.6104 20.0984 4.612 20.2909C4.01114 20.4067 3.33124 20.2487 3.02583 19.7208L0.813127 15.8959C0.507714 15.368 0.710596 14.7014 1.11143 14.2399C1.77774 13.4733 2.0574 12.4359 1.86597 11.4408C1.75096 10.8419 1.91057 10.1638 2.44062 9.8584L14.9213 2.66712ZM7.47633 15.244C7.21122 15.3967 7.12014 15.7346 7.2729 15.9987C7.42565 16.2627 7.7644 16.353 8.02951 16.2002L17.63 10.6684C17.8951 10.5157 17.9862 10.1778 17.8334 9.91375C17.6807 9.6497 17.3419 9.55948 17.0768 9.71223L7.47633 15.244ZM4.92991 14.1613C4.6648 14.3141 4.57372 14.652 4.72647 14.916C4.87923 15.1801 5.21798 15.2703 5.48309 15.1175L17.9637 7.92626C18.2288 7.77351 18.3199 7.43562 18.1672 7.17157C18.0144 6.90752 17.6757 6.8173 17.4105 6.97005L4.92991 14.1613Z\" fill=\"currentColor\"></path>",
  "vicon-1": "<path d=\"M20.5 16V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H19.5C20.05 15 20.5 15.45 20.5 16Z\" fill=\"currentColor\"></path> <path d=\"M15.5 2H8.5C4.5 2 3.5 3 3.5 7V14.58C4.26 13.91 5.26 13.5 6.35 13.5H19.5C20.05 13.5 20.5 13.05 20.5 12.5V7C20.5 3 19.5 2 15.5 2ZM13 10.75H8C7.59 10.75 7.25 10.41 7.25 10C7.25 9.59 7.59 9.25 8 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75ZM16 7.25H8C7.59 7.25 7.25 6.91 7.25 6.5C7.25 6.09 7.59 5.75 8 5.75H16C16.41 5.75 16.75 6.09 16.75 6.5C16.75 6.91 16.41 7.25 16 7.25Z\" fill=\"currentColor\"></path>",
  "vicon": "<path d=\"M17.6896 2.10967C18.8796 1.80968 20.1097 2.14989 20.9797 3.01983C21.8497 3.87983 22.1898 5.1101 21.8898 6.3001L19.4396 16.1097C19.0296 17.7597 17.7496 19.0298 16.1096 19.4398L6.29999 21.8899C6.01999 21.9699 5.72941 22.0003 5.44941 22.0003C4.54955 22.0002 3.67962 21.6395 3.01972 20.9896C2.14986 20.1196 1.80959 18.8894 2.10956 17.6995L4.55976 7.88995C4.96976 6.24995 6.23984 4.96987 7.88984 4.55987L17.6896 2.10967ZM12.0002 6.5003C8.96262 6.5003 6.50019 8.96273 6.50019 12.0003C6.50035 15.0377 8.96272 17.5003 12.0002 17.5003C15.0375 17.5002 17.5 15.0376 17.5002 12.0003C17.5002 8.96281 15.0376 6.50043 12.0002 6.5003Z\" fill=\"currentColor\"></path> <path d=\"M12.0001 15.8801C14.143 15.8801 15.8801 14.143 15.8801 12.0001C15.8801 9.85725 14.143 8.12012 12.0001 8.12012C9.85725 8.12012 8.12012 9.85725 8.12012 12.0001C8.12012 14.143 9.85725 15.8801 12.0001 15.8801Z\" fill=\"currentColor\"></path>"
};
/** Renders a brand icon by name (see BRAND_ICONS); falls back to Lucide (window.lucide) for anything else. */
function Icon({
  name = 'circle',
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const ref = React.useRef(null);
  const brand = BRAND_ICONS[name];
  React.useEffect(() => {
    if (brand) return;
    const L = window.lucide;
    const el = ref.current;
    if (!L || !el) return;
    const pascal = name.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
    const node = L.icons && (L.icons[pascal] || L.icons[name]);
    if (!node) return;
    const svg = L.createElement(node);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('stroke', color);
    svg.setAttribute('stroke-width', strokeWidth);
    el.replaceChildren(svg);
  }, [name, size, color, strokeWidth, brand]);
  const box = {
    display: 'inline-flex',
    width: size,
    height: size,
    flex: 'none',
    color,
    ...style
  };
  if (brand) return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: box,
    dangerouslySetInnerHTML: {
      __html: brand
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: box
  });
}
Object.assign(__ds_scope, { BRAND_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  neutral: {
    bg: 'var(--black-20)',
    fg: 'var(--green-0)'
  },
  success: {
    bg: 'var(--green-70)',
    fg: 'var(--black-120)'
  },
  warn: {
    bg: 'var(--orange-70)',
    fg: 'var(--black-120)'
  },
  danger: {
    bg: 'var(--red-50)',
    fg: 'var(--black-120)'
  }
};
function Toast({
  tone = 'neutral',
  icon,
  children,
  actionLabel = 'Dismiss',
  onAction,
  style
}) {
  const t = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 56,
      boxSizing: 'border-box',
      padding: '0 24px 0 18px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      color: t.fg,
      boxShadow: 'var(--shadow-toast)',
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--body-regular)',
      padding: '8px 0'
    }
  }, children), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      color: 'inherit',
      font: '700 14px/16px var(--font-sans)',
      cursor: 'pointer'
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Option.jsx
try { (() => {
function Option({
  icon,
  children,
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 0,
      padding: 0,
      textAlign: 'left',
      font: 'var(--body-regular)',
      color: disabled ? 'var(--black-10)' : hover ? 'var(--black-100)' : 'var(--black-120)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Option });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Option.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  value,
  defaultValue,
  placeholder,
  onChange,
  theme = 'light',
  disabled = false,
  type = 'text',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = theme === 'dark';
  const bg = disabled ? dark ? 'var(--black-50)' : 'var(--green-15)' : dark ? 'var(--black-30)' : 'var(--green-0)';
  const fg = disabled ? 'var(--black-10)' : dark ? 'var(--green-0)' : 'var(--black-120)';
  const ph = dark ? 'var(--black-20)' : 'var(--black-0)';
  const id = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--sm-regular)',
      color: dark ? 'var(--green-0)' : 'var(--black-120)',
      paddingLeft: 8
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 44,
      boxSizing: 'border-box',
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--body-regular)',
      background: bg,
      color: fg,
      outline: 'none',
      border: `2px solid ${focus && !disabled ? 'var(--green-100)' : 'transparent'}`,
      caretColor: dark ? 'var(--green-0)' : 'var(--black-120)',
      '--ph': ph
    }
  }), /*#__PURE__*/React.createElement("style", null, `#${CSS.escape(id)}::placeholder{color:${ph}}`));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const flip = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  const track = disabled ? 'var(--black-0)' : on ? 'var(--green-100)' : 'var(--black-30)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": label,
    disabled: disabled,
    onClick: flip,
    style: {
      width: 50,
      height: 28,
      borderRadius: 'var(--radius-round)',
      background: track,
      border: 0,
      padding: 0,
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 160ms ease',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 25 : 3,
      width: 22,
      height: 22,
      borderRadius: 8,
      background: 'var(--green-0)',
      transition: 'left 160ms cubic-bezier(.3,.7,.4,1)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/map/CityMap.jsx
try { (() => {
const R = 6378137;
const ENDPOINTS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
const cache = {};
const proj = (lon, lat) => [R * lon * Math.PI / 180, -R * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
const unproj = (x, y) => [x / R * 180 / Math.PI, (2 * Math.atan(Math.exp(-y / R)) - Math.PI / 2) * 180 / Math.PI];
function bboxFor([lat, lon], r) {
  const dLat = r / 111320,
    dLon = r / (111320 * Math.cos(lat * Math.PI / 180));
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
        const res = await fetch(url, {
          method: 'POST',
          body: 'data=' + encodeURIComponent(q),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        if (!res.ok) throw new Error(res.status);
        return (await res.json()).elements;
      } catch (e) {
        err = e;
      }
    }
    delete cache[key];
    throw err;
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
  segs = segs.map(s => s.slice());
  const out = [];
  while (segs.length) {
    let r = segs.shift(),
      changed = true;
    while (changed && !same(r[0], r[r.length - 1])) {
      changed = false;
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i],
          a = r[0],
          z = r[r.length - 1];
        if (same(z, s[0])) r = r.concat(s.slice(1));else if (same(z, s[s.length - 1])) r = r.concat(s.slice().reverse().slice(1));else if (same(a, s[s.length - 1])) r = s.concat(r.slice(1));else if (same(a, s[0])) r = s.slice().reverse().concat(r.slice(1));else continue;
        segs.splice(i, 1);
        changed = true;
        break;
      }
    }
    out.push(r);
  }
  return out;
}
function addLine(path, geom, close) {
  geom.forEach((p, i) => {
    const [x, y] = proj(p.lon, p.lat);
    i ? path.lineTo(x, y) : path.moveTo(x, y);
  });
  if (close) path.closePath();
}
function build(elements) {
  const layers = {};
  const rels = [];
  const L = c => layers[c] || (layers[c] = new Path2D());
  for (const el of elements) {
    const c = classify(el.tags || {});
    if (!c) continue;
    if (el.type === 'way' && el.geometry) addLine(L(c), el.geometry, c === 'park' || c === 'water' || c === 'building');else if (el.type === 'relation' && el.members) {
      const p = new Path2D();
      const segs = el.members.filter(m => m.type === 'way' && m.geometry && m.geometry.length > 1).map(m => m.geometry);
      joinRings(segs).forEach(r => addLine(p, r, true));
      rels.push({
        c,
        p
      });
    }
  }
  return {
    layers,
    rels
  };
}
const AREAS = ['park', 'water', 'building'];
const LINES = [['stream', 'waterway', 1.4], ['canal', 'waterway', 4], ['river', 'waterway', 7], ['path', 'path', 0.8], ['service', 'road-minor', 1.2], ['minor', 'road-minor', 2.6], ['major2', 'road-major', 3.6], ['major1', 'road-major', 5], ['rail', 'rail', 1]];
const TOKENS = ['land', 'building', 'road-minor', 'road-major', 'path', 'rail', 'park', 'water', 'waterway'];
function CityMap({
  center = [52.3600, 4.8770],
  radius = 900,
  theme = 'light',
  buildings = true,
  controls = true,
  height = 360,
  minZoom = 1,
  maxZoom = 8,
  onMapClick,
  style
}) {
  const wrap = React.useRef(null),
    cv = React.useRef(null);
  const data = React.useRef(null),
    fit = React.useRef(null),
    tf = React.useRef(null),
    zoom = React.useRef(null);
  const [status, setStatus] = React.useState('loading');
  const bb = React.useMemo(() => bboxFor(center, radius), [center[0], center[1], radius]);
  const draw = React.useCallback(() => {
    const c = cv.current,
      f = fit.current;
    if (!c || !f) return;
    const ctx = c.getContext('2d'),
      dpr = f.dpr,
      cs = getComputedStyle(wrap.current);
    const col = {};
    TOKENS.forEach(k => col[k] = cs.getPropertyValue(`--map-${theme}-${k}`).trim() || '#888');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = col.land;
    ctx.fillRect(0, 0, c.width, c.height);
    const d = data.current;
    if (!d) return;
    const t = tf.current || {
        k: 1,
        x: 0,
        y: 0
      },
      S = t.k * f.s0,
      px = 1 / S,
      g = Math.pow(t.k, 0.6);
    ctx.setTransform(dpr * S, 0, 0, dpr * S, dpr * (t.x + t.k * f.ox), dpr * (t.y + t.k * f.oy));
    for (const a of AREAS) {
      ctx.fillStyle = col[a];
      if (d.layers[a]) ctx.fill(d.layers[a]);
      d.rels.forEach(r => r.c === a && ctx.fill(r.p, 'evenodd'));
    }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const [k, tok, w] of LINES) {
      const p = d.layers[k];
      if (!p) continue;
      ctx.strokeStyle = col[tok];
      ctx.lineWidth = w * g * px;
      ctx.stroke(p);
    }
  }, [theme]);
  React.useEffect(() => {
    let alive = true;
    setStatus('loading');
    data.current = null;
    draw();
    fetchOSM(bb, buildings).then(els => {
      if (!alive) return;
      data.current = build(els);
      setStatus('ready');
      draw();
    }).catch(() => alive && setStatus('error'));
    return () => {
      alive = false;
    };
  }, [bb, buildings]);
  React.useEffect(() => {
    const el = wrap.current,
      c = cv.current,
      d3 = window.d3;
    if (!el || !c) return;
    const [x0, y1] = proj(bb[1], bb[0]),
      [x1, y0] = proj(bb[3], bb[2]);
    const resize = () => {
      const w = el.clientWidth,
        h = el.clientHeight,
        dpr = window.devicePixelRatio || 1;
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
      c.style.width = w + 'px';
      c.style.height = h + 'px';
      const s0 = Math.max(w / (x1 - x0), h / (y1 - y0));
      fit.current = {
        dpr,
        s0,
        ox: w / 2 - s0 * (x0 + x1) / 2,
        oy: h / 2 - s0 * (y0 + y1) / 2,
        w,
        h
      };
      if (zoom.current) zoom.current.extent([[0, 0], [w, h]]).translateExtent([[0, 0], [w, h]]);
      draw();
    };
    if (d3) {
      zoom.current = d3.zoom().scaleExtent([minZoom, maxZoom]).on('zoom', e => {
        tf.current = e.transform;
        draw();
      });
      d3.select(c).call(zoom.current);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => {
      ro.disconnect();
      d3 && d3.select(c).on('.zoom', null);
    };
  }, [bb, minZoom, maxZoom, draw]);
  const zoomBy = k => window.d3 && zoom.current && window.d3.select(cv.current).transition().duration(220).call(zoom.current.scaleBy, k);
  const click = e => {
    if (!onMapClick || !fit.current) return;
    const r = cv.current.getBoundingClientRect(),
      t = tf.current || {
        k: 1,
        x: 0,
        y: 0
      },
      f = fit.current;
    const wx = ((e.clientX - r.left - t.x) / t.k - f.ox) / f.s0,
      wy = ((e.clientY - r.top - t.y) / t.k - f.oy) / f.s0;
    const [lon, lat] = unproj(wx, wy);
    onMapClick({
      lat,
      lng: lon
    });
  };
  const dark = theme === 'dark';
  const ink = dark ? 'var(--black-5)' : 'var(--black-10)';
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      borderRadius: 'var(--radius-xl)',
      background: `var(--map-${theme}-land)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    onClick: click,
    style: {
      display: 'block',
      cursor: 'grab',
      touchAction: 'none'
    }
  }), status !== 'ready' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--sm-medium)',
      color: ink,
      pointerEvents: 'none'
    }
  }, status === 'loading' ? 'Loading map…' : 'Map data unavailable'), controls && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 12,
      top: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: dark ? 'secondary' : 'tertiary',
    label: "Zoom in",
    onClick: () => zoomBy(1.6),
    style: {
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 18
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: dark ? 'secondary' : 'tertiary',
    label: "Zoom out",
    onClick: () => zoomBy(1 / 1.6),
    style: {
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 18
  }))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.openstreetmap.org/copyright",
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      padding: '2px 8px',
      font: '400 10px/14px var(--font-sans)',
      color: ink,
      background: `var(--map-${theme}-land)`,
      borderTopLeftRadius: 8,
      textDecoration: 'none'
    }
  }, "\xA9 OpenStreetMap contributors"));
}
Object.assign(__ds_scope, { CityMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/map/CityMap.jsx", error: String((e && e.message) || e) }); }

// components/passport/passportArt.js
try { (() => {
// Generated from assets/passport/*.svg (metadata stripped, coordinates rounded to 0.1). Do not edit by hand.
const PASSPORT_CLOSED = "data:image/svg+xml;charset=utf-8,%3Csvg width='301' height='400' viewBox='0 0 301 400' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:c2pa='http://c2pa.org/manifest'%3E%3Cmask id='path-1-inside-1_514_1320' fill='white'%3E%3Cpath d='M0 0L277 0C290.3 0 301 10.7 301 24L301 376C301 389.3 290.3 400 277 400L0 400L0 0Z'%3E%3C/path%3E%3C/mask%3E%3Cpath d='M0 0L277 0C290.3 0 301 10.7 301 24L301 376C301 389.3 290.3 400 277 400L0 400L0 0Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M0 0L301 0L0 0ZM301 376C301 392 288 405 272 405L0 405L0 395L277 395C290.3 395 301 386.5 301 376ZM0 400L0 0L0 400ZM301 0L301 400L301 0Z' fill='%23DADBDC' mask='url(%23path-1-inside-1_514_1320)'%3E%3C/path%3E%3Cpath d='M136 166H165.9C176.4 166 184.9 174.5 184.9 185V214.9C184.9 225.4 176.4 233.9 165.9 233.9H136C125.5 233.9 117 225.4 117 214.9L117 185C117 174.5 125.5 166 136 166Z' stroke='%23232B38' stroke-width='2'%3E%3C/path%3E%3Cpath d='M143.8 199C146.6 202.5 154.6 213.8 149.6 228.9H136.6C128.9 228.9 122.5 222.9 122 215.3C127.9 209.4 135.7 203.8 143.8 199Z' fill='%23181E28'%3E%3C/path%3E%3Cpath d='M138.5 185.4C138.5 186.9 137.2 188.2 135.7 188.2C134.1 188.2 132.8 186.9 132.8 185.4C132.8 183.8 134.1 182.6 135.7 182.6C137.2 182.6 138.5 183.8 138.5 185.4Z' fill='%23181E28'%3E%3C/path%3E%3Cpath d='M165.3 171H136.6C128.5 171 122 177.5 122 185.6V204.3C131.5 198.8 156.7 184.6 177 176.9C174.4 173.3 170.1 171 165.3 171ZM135.7 192.9C131.5 192.9 128.1 189.5 128.1 185.4C128.1 181.2 131.5 177.9 135.7 177.9C139.8 177.9 143.2 181.2 143.2 185.4C143.2 189.5 139.8 192.9 135.7 192.9Z' fill='%23181E28'%3E%3C/path%3E%3Cpath d='M179.9 185.6V203C178.3 203.4 176.8 204 175.5 204.6C175.7 202.2 175.4 199.7 173.9 197.8C172.9 196.4 170.8 194.8 167 194.8C163.8 194.9 159.4 196.4 156.8 203.7C156.5 204.6 156.2 206 155.8 207.6C153.2 202 149.7 198.2 148 196.6C160.7 189.4 173.4 184 179.3 181.4C179.7 182.7 179.9 184.1 179.9 185.6Z' fill='%23181E28'%3E%3C/path%3E%3Cpath d='M173.4 212.9C174.2 212.2 176.4 210.3 179.9 209.1V214.3C179.9 222.4 173.4 228.9 165.3 228.9H158.1C158.5 227.1 158.7 225.4 158.8 223.8H158.8C159.1 222.3 162 200.8 167.1 200.7C168.2 200.7 168.9 200.9 169.2 201.3C169.8 202.1 170.1 204.1 168.5 209.3C168.5 209.5 168.4 209.7 168.4 209.8C168 211.1 168.5 212.6 169.7 213.3C170.9 214 172.4 213.8 173.4 212.9Z' fill='%23181E28'%3E%3C/path%3E%3Cpath d='M88.6 379V370.4H90.4V379H88.6ZM95.2 379.1C94.1 379.1 93.2 378.9 92.5 378.4C91.8 377.9 91.4 377.2 91.3 376.2H93.1C93.2 376.7 93.4 377.1 93.8 377.3C94.2 377.6 94.7 377.7 95.3 377.7C95.8 377.7 96.2 377.7 96.4 377.5C96.7 377.3 96.8 377.1 96.8 376.8C96.8 376.5 96.8 376.3 96.6 376.1C96.4 375.9 96.2 375.8 95.8 375.7L94.2 375.2C93.3 375 92.7 374.7 92.3 374.3C92 373.9 91.8 373.4 91.8 372.8C91.8 372.2 91.9 371.8 92.2 371.4C92.4 371 92.8 370.7 93.3 370.5C93.8 370.3 94.4 370.2 95 370.2C96 370.2 96.8 370.5 97.4 370.9C98 371.4 98.4 372 98.5 372.8H96.7C96.6 372.4 96.4 372.1 96.1 371.9C95.8 371.7 95.4 371.6 94.9 371.6C94.5 371.6 94.2 371.7 93.9 371.8C93.7 372 93.6 372.2 93.6 372.5C93.6 372.7 93.6 372.9 93.8 373.1C93.9 373.2 94.2 373.4 94.6 373.5L96.2 373.9C97.1 374.2 97.7 374.5 98 374.9C98.4 375.3 98.6 375.8 98.6 376.4C98.6 377.3 98.3 377.9 97.7 378.4C97.1 378.9 96.3 379.1 95.2 379.1ZM103 379.1C101.9 379.1 101 378.9 100.3 378.4C99.7 377.9 99.3 377.2 99.2 376.2H100.9C101 376.7 101.2 377.1 101.6 377.3C102 377.6 102.5 377.7 103.1 377.7C103.6 377.7 104 377.7 104.3 377.5C104.5 377.3 104.7 377.1 104.7 376.8C104.7 376.5 104.6 376.3 104.4 376.1C104.3 375.9 104 375.8 103.6 375.7L102 375.2C101.2 375 100.6 374.7 100.2 374.3C99.8 373.9 99.6 373.4 99.6 372.8C99.6 372.2 99.7 371.8 100 371.4C100.3 371 100.7 370.7 101.1 370.5C101.6 370.3 102.2 370.2 102.9 370.2C103.9 370.2 104.7 370.5 105.3 370.9C105.9 371.4 106.2 372 106.3 372.8H104.5C104.4 372.4 104.2 372.1 103.9 371.9C103.6 371.7 103.2 371.6 102.8 371.6C102.3 371.6 102 371.7 101.8 371.8C101.5 372 101.4 372.2 101.4 372.5C101.4 372.7 101.5 372.9 101.6 373.1C101.7 373.2 102 373.4 102.4 373.5L104 373.9C104.9 374.2 105.5 374.5 105.9 374.9C106.2 375.3 106.4 375.8 106.4 376.4C106.4 377.3 106.1 377.9 105.5 378.4C104.9 378.9 104.1 379.1 103 379.1ZM110.9 379.1C109.7 379.1 108.8 378.8 108.1 378.1C107.5 377.4 107.2 376.4 107.2 375.1V370.4H109.1V375.5C109.1 376.2 109.2 376.8 109.6 377.1C109.9 377.5 110.4 377.7 110.9 377.7C111.5 377.7 112 377.5 112.3 377.1C112.6 376.8 112.8 376.2 112.8 375.5V370.4H114.6V375.2C114.6 376.5 114.3 377.4 113.7 378.1C113.1 378.8 112.2 379.1 110.9 379.1ZM115.7 379V370.4H117.6V379H115.7ZM116.6 379V377.6H122.2V379H116.6ZM116.6 375.3V373.9H121.7V375.3H116.6ZM116.6 371.8V370.4H122V371.8H116.6ZM124.4 379V377.6H126.6C127.2 377.6 127.7 377.4 128.1 377.2C128.6 376.9 128.9 376.6 129.1 376.1C129.4 375.7 129.5 375.2 129.5 374.6C129.5 374.1 129.4 373.6 129.1 373.2C128.9 372.7 128.6 372.4 128.1 372.2C127.7 371.9 127.2 371.8 126.6 371.8H124.4V370.4H126.6C127.5 370.4 128.4 370.5 129.1 370.9C129.8 371.2 130.4 371.7 130.8 372.4C131.2 373 131.4 373.8 131.4 374.7C131.4 375.5 131.2 376.3 130.8 377C130.4 377.6 129.8 378.1 129.1 378.5C128.4 378.8 127.5 379 126.6 379H124.4ZM123.2 379V370.4H125.1V379H123.2ZM134.6 379V370.4H136.4V379H134.6ZM137.6 379V370.4H140L143.9 378L143.3 378.1V370.4H145.1V379H142.7L138.9 371.4L139.4 371.2V379H137.6ZM148.6 379V370.4H151L154.8 378L154.2 378.1V370.4H156V379H153.6L149.8 371.4L150.4 371.2V379H148.6ZM157.2 379V370.4H159.1V379H157.2ZM158.1 379V377.6H163.6V379H158.1ZM158.1 375.3V373.9H163.2V375.3H158.1ZM158.1 371.8V370.4H163.5V371.8H158.1ZM166.7 379L164.3 370.4H166.2L168.2 378.3H167.6L169.4 370.4H171.5L173.3 378.3H172.7L174.7 370.4H176.5L174.1 379H172L170.2 371.2H170.7L168.8 379H166.7ZM182.6 379V375.5L179.4 370.4H181.6L184.1 374.9H183.1L185.6 370.4H187.6L184.4 375.5V379H182.6ZM191.8 379.1C191.1 379.1 190.6 379 190 378.8C189.5 378.6 189 378.3 188.6 377.9C188.2 377.5 187.9 377 187.7 376.5C187.5 375.9 187.4 375.3 187.4 374.6C187.4 373.8 187.5 373 187.9 372.3C188.3 371.7 188.8 371.2 189.5 370.8C190.2 370.4 190.9 370.2 191.8 370.2C192.6 370.2 193.4 370.4 194.1 370.8C194.7 371.2 195.3 371.7 195.6 372.3C196 373 196.2 373.8 196.2 374.7C196.2 375.3 196.1 375.9 195.9 376.5C195.7 377 195.4 377.5 195 377.9C194.6 378.3 194.1 378.6 193.6 378.8C193 379 192.4 379.1 191.8 379.1ZM191.8 377.7C192.3 377.7 192.7 377.5 193.1 377.3C193.5 377 193.8 376.7 194 376.2C194.2 375.8 194.3 375.2 194.3 374.6C194.3 374 194.2 373.5 194 373.1C193.8 372.6 193.5 372.3 193.1 372.1C192.7 371.8 192.3 371.7 191.8 371.7C191.3 371.7 190.8 371.8 190.4 372.1C190.1 372.3 189.8 372.6 189.5 373.1C189.3 373.5 189.2 374 189.2 374.6C189.2 375.2 189.3 375.8 189.6 376.2C189.8 376.7 190.1 377 190.5 377.3C190.8 377.5 191.3 377.7 191.8 377.7ZM197.1 379V370.4H201C201.6 370.4 202.2 370.5 202.6 370.7C203.1 370.9 203.4 371.2 203.7 371.6C204 372 204.1 372.4 204.1 372.9C204.1 373.4 204 373.9 203.7 374.2C203.4 374.6 203.1 374.9 202.6 375.1C202.2 375.3 201.6 375.4 201 375.4H198.6V374.1H200.9C201.4 374.1 201.7 374 202 373.8C202.2 373.6 202.3 373.3 202.3 372.9C202.3 372.6 202.2 372.3 202 372.1C201.7 371.9 201.4 371.8 200.9 371.8H199V379H197.1ZM202 379L198.5 374.5H200.5L204.5 379H202ZM205.2 379V370.4H207V379H205.2ZM206.5 374.5L210.3 370.4H212.8L208.7 374.5H206.5ZM210.5 379L206.4 374.5H208.7L213 379H210.5Z' fill='black'%3E%3C/path%3E%3Cpath d='M30.6 74V40.9H41.8C47.3 40.9 51.4 41.8 54.1 43.6C56.9 45.4 58.3 48 58.3 51.4C58.3 53.8 57.7 55.9 56.5 57.6C55.3 59.2 53.6 60.5 51.4 61.4C49.2 62.3 46.7 62.7 43.7 62.7H41.2V74H30.6ZM43.3 56C45 56 46.3 55.7 47.2 55C48.2 54.3 48.6 53.2 48.6 51.8C48.6 50.5 48.2 49.5 47.3 48.9C46.4 48.2 45.1 47.9 43.4 47.9H41.2V56H43.3ZM57.2 74L66.3 41H81.8L91.4 74H79.6L78.4 67.7H69.8L68.4 74H57.2ZM70.8 61.8H77.2L74.1 47.3L70.8 61.8ZM104 74.8C102 74.8 100 74.5 97.9 74C95.8 73.5 94.1 72.9 92.6 72L94.4 64.2C96.2 65.2 97.9 65.9 99.5 66.2C101.2 66.5 102.7 66.6 104 66.6C105.3 66.6 106.3 66.4 106.9 66C107.6 65.6 107.9 65 107.9 64.3C107.9 63.7 107.6 63.2 106.8 62.8C106.1 62.4 105.1 62.1 104 61.8C102.8 61.4 101.6 61.1 100.3 60.7C98.9 60.2 97.7 59.6 96.5 58.9C95.4 58.2 94.4 57.2 93.7 56C92.9 54.8 92.6 53.3 92.6 51.5C92.6 49.2 93.1 47.2 94.3 45.5C95.4 43.8 97 42.5 99.1 41.6C101.1 40.7 103.6 40.3 106.4 40.3C108.3 40.3 110.1 40.5 111.9 41C113.7 41.5 115.2 42.2 116.3 43L114.7 50C113 49.4 111.6 48.9 110.2 48.6C109 48.3 107.7 48.1 106.6 48.1C105.2 48.1 104.2 48.3 103.5 48.7C102.8 49.1 102.5 49.6 102.5 50.2C102.5 50.8 102.8 51.3 103.6 51.7C104.3 52.1 105.2 52.5 106.4 52.8C107.6 53.2 108.8 53.6 110.1 54C111.4 54.5 112.6 55.1 113.8 55.8C114.9 56.5 115.9 57.5 116.6 58.7C117.4 59.9 117.7 61.4 117.7 63.2C117.7 66.9 116.5 69.7 114.1 71.7C111.7 73.8 108.3 74.8 104 74.8ZM130.9 74.8C128.8 74.8 126.8 74.5 124.7 74C122.6 73.5 120.9 72.9 119.4 72L121.2 64.2C123 65.2 124.7 65.9 126.3 66.2C128 66.5 129.5 66.6 130.9 66.6C132.1 66.6 133.1 66.4 133.7 66C134.4 65.6 134.7 65 134.7 64.3C134.7 63.7 134.4 63.2 133.6 62.8C132.9 62.4 131.9 62.1 130.8 61.8C129.6 61.4 128.4 61.1 127.1 60.7C125.8 60.2 124.5 59.6 123.3 58.9C122.2 58.2 121.2 57.2 120.5 56C119.8 54.8 119.4 53.3 119.4 51.5C119.4 49.2 119.9 47.2 121.1 45.5C122.2 43.8 123.8 42.5 125.9 41.6C127.9 40.7 130.4 40.3 133.2 40.3C135.1 40.3 136.9 40.5 138.7 41C140.6 41.5 142 42.2 143.1 43L141.5 50C139.8 49.4 138.4 48.9 137.1 48.6C135.8 48.3 134.6 48.1 133.4 48.1C132.1 48.1 131 48.3 130.3 48.7C129.6 49.1 129.3 49.6 129.3 50.2C129.3 50.8 129.6 51.3 130.4 51.7C131.1 52.1 132.1 52.5 133.2 52.8C134.4 53.2 135.6 53.6 136.9 54C138.2 54.5 139.5 55.1 140.6 55.8C141.8 56.5 142.7 57.5 143.4 58.7C144.2 59.9 144.5 61.4 144.5 63.2C144.5 66.9 143.3 69.7 140.9 71.7C138.5 73.8 135.1 74.8 130.9 74.8ZM147.8 74V40.9H159C164.5 40.9 168.5 41.8 171.3 43.6C174.1 45.4 175.5 48 175.5 51.4C175.5 53.8 174.9 55.9 173.7 57.6C172.5 59.2 170.8 60.5 168.6 61.4C166.4 62.3 163.9 62.7 160.9 62.7H158.4V74H147.8ZM160.5 56C162.2 56 163.5 55.7 164.4 55C165.4 54.3 165.8 53.2 165.8 51.8C165.8 50.5 165.4 49.5 164.5 48.9C163.6 48.2 162.3 47.9 160.6 47.9H158.4V56H160.5ZM195.2 74.8C191.7 74.8 188.6 74 186 72.6C183.3 71.1 181.2 69.1 179.7 66.5C178.3 63.9 177.5 60.9 177.5 57.5C177.5 54.1 178.3 51.2 179.7 48.6C181.2 46 183.3 43.9 186 42.5C188.6 41 191.7 40.3 195.2 40.3C198.7 40.3 201.7 41 204.4 42.5C207.1 43.9 209.1 45.9 210.6 48.5C212.1 51.1 212.8 54.1 212.8 57.5C212.8 60.9 212.1 63.9 210.6 66.5C209.1 69.1 207.1 71.1 204.4 72.6C201.7 74 198.7 74.8 195.2 74.8ZM195.2 66C197.2 66 198.8 65.2 200.1 63.7C201.4 62.1 202.1 60 202.1 57.5C202.1 55.8 201.8 54.2 201.2 52.9C200.6 51.6 199.8 50.6 198.7 49.9C197.7 49.1 196.5 48.7 195.1 48.7C193.1 48.7 191.5 49.5 190.2 51.2C188.9 52.8 188.3 54.9 188.3 57.5C188.3 60 188.9 62.1 190.2 63.7C191.5 65.2 193.1 66 195.2 66ZM241.7 74.8C239.4 74.8 237.5 74.4 236 73.8C234.5 73.1 233.3 72.1 232.4 70.9C231.5 69.7 230.9 68.2 230.4 66.6C230 65 229.7 63.2 229.5 61.3H227.2V74H216.7V41H230.3C235.6 41 239.3 41.9 241.6 43.8C244 45.6 245.2 48.1 245.2 51.2C245.2 53.1 244.6 54.8 243.6 56.3C242.6 57.8 240.9 59 238.7 60C238.8 60.7 238.9 61.3 239 61.7C239.1 62.2 239.2 62.7 239.4 63.2C239.9 64.4 240.4 65.2 241 65.6C241.6 66 242.5 66.3 243.6 66.3C244.3 66.3 245 66.2 245.7 66L246.3 73.9C245.6 74.1 244.9 74.3 244.2 74.5C243.5 74.7 242.7 74.8 241.7 74.8ZM227.2 54.8H229.1C231.4 54.8 233.1 54.5 234.1 54C235.1 53.4 235.6 52.5 235.6 51.2C235.6 50.2 235.2 49.4 234.4 48.9C233.6 48.4 232.3 48.1 230.6 48.1H227.2V54.8ZM253.9 74V48.6H246.4V41H272.5V48.6H265.1V74H253.9Z' fill='white'%3E%3C/path%3E%3C/svg%3E";
const PASSPORT_OPEN = "data:image/svg+xml;charset=utf-8,%3Csvg width='601' height='400' viewBox='0 0 601 400' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:c2pa='http://c2pa.org/manifest'%3E%3Cmask id='path-1-inside-1_514_1247' fill='white'%3E%3Cpath d='M0 24C0 10.7 10.7 0 24 0L577 0C590.3 0 601 10.7 601 24L601 376C601 389.3 590.3 400 577 400L24 400C10.7 400 0 389.3 0 376L0 24Z'%3E%3C/path%3E%3C/mask%3E%3Cpath d='M0 24C0 10.7 10.7 0 24 0L577 0C590.3 0 601 10.7 601 24L601 376C601 389.3 590.3 400 577 400L24 400C10.7 400 0 389.3 0 376L0 24Z' fill='white'%3E%3C/path%3E%3Cpath d='M0 24C0 10.7 10.7 0 24 0L577 0C590.3 0 601 10.7 601 24L601 376C601 389.3 590.3 400 577 400L24 400C10.7 400 0 389.3 0 376L0 24Z' fill='url(%23pattern0_514_1247)' fill-opacity='0.1'%3E%3C/path%3E%3Cpath d='M0 0L601 0L0 0ZM601 376C601 392 588 405 572 405L29 405C13 405 0 392 0 376C0 386.5 10.7 395 24 395L577 395C590.3 395 601 386.5 601 376ZM0 400L0 0L0 400ZM601 0L601 400L601 0Z' fill='%2383868C' fill-opacity='0.3' mask='url(%23path-1-inside-1_514_1247)'%3E%3C/path%3E%3Crect x='325' y='25' width='62' height='62' rx='11' fill='url(%23pattern1_514_1247)'%3E%3C/rect%3E%3Crect x='325' y='25' width='62' height='62' rx='11' stroke='%23C4E860' stroke-width='2'%3E%3C/rect%3E%3Crect x='225.5' y='34.5' width='100' height='134' rx='8' transform='rotate(90 225.5 34.5)' fill='url(%23pattern2_514_1247)'%3E%3C/rect%3E%3Cg opacity='0.8'%3E%3Cpath d='M81.9 40.7C78.1 42.4 66 46.6 53.9 38.3L57.1 26.8C59.1 19.9 66 15.8 72.8 17.3C76.7 24 79.6 32.3 81.9 40.7Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M95.3 39.4C93.9 39 93.1 37.6 93.5 36.2C93.9 34.8 95.3 34 96.7 34.4C98.1 34.8 98.9 36.2 98.5 37.6C98.1 39 96.7 39.8 95.3 39.4Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M101.3 66.9L108.5 41.3C110.6 34.2 106.4 26.8 99.3 24.7L82.6 20C85.1 29.8 91.4 55.8 93.1 75.8C97 74.3 100.1 71.1 101.3 66.9ZM89.3 35C90.4 31.3 94.2 29.2 97.9 30.2C101.6 31.3 103.7 35.1 102.7 38.8C101.6 42.5 97.8 44.6 94.1 43.6C90.4 42.5 88.3 38.7 89.3 35Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M84.7 76.2L69.3 71.8C69.3 70.2 69.2 68.7 68.9 67.5C71 68.2 73.3 68.5 75.4 67.7C76.8 67.2 78.8 65.8 79.7 62.4C80.5 59.5 80.2 55.2 74.4 51.1C73.7 50.6 72.5 49.9 71.2 49.2C76.9 48.3 81.1 46.1 83 45C86.2 58.2 87.8 70.8 88.6 76.7C87.3 76.7 86 76.5 84.7 76.2Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M62.1 63.5C62.5 64.4 63.6 66.8 63.8 70.2L59.2 68.9C52 66.9 47.9 59.5 49.9 52.3L51.7 45.9C53.2 46.6 54.7 47.3 56.1 47.8L56.1 47.8C57.4 48.4 75.7 56.4 74.5 60.9C74.2 61.9 73.9 62.5 73.4 62.7C72.6 63 70.7 62.8 66.5 60.1C66.3 60 66.2 59.9 66.1 59.8C65 59.1 63.6 59.3 62.7 60.1C61.7 61 61.5 62.4 62.1 63.5Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M54.6 44.7L48.5 42.3L50.2 38L51.1 38.4L49.8 41.5L51.5 42.2L52.7 39.2L53.5 39.6L52.3 42.5L54.1 43.3L55.5 40L56.3 40.4L54.6 44.7Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M53.1 54.5C52.7 54.5 52.3 54.7 51.8 55C51.4 55.3 51 55.7 50.6 56.3C50.2 56.8 50 57.3 49.9 57.8L49.5 57.8C49.3 57.3 49.1 56.8 48.8 56.4C48.4 55.9 48 55.5 47.6 55.2C47.1 54.9 46.6 54.7 46.1 54.6L46.1 54.2C46.4 54.2 46.7 54 47 53.9C47.4 53.7 47.7 53.5 47.9 53.2C48.2 53 48.5 52.7 48.7 52.3C49 51.9 49.2 51.4 49.3 50.9L49.7 50.9C49.8 51.2 49.9 51.5 50.2 51.9C50.4 52.2 50.6 52.6 50.9 52.9C51.2 53.2 51.5 53.4 51.8 53.6C52.3 53.9 52.7 54 53.1 54.1L53.1 54.5Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M58.3 37.2C58.1 37.2 58 37.1 57.9 37.1C57.8 37 57.7 37 57.6 36.9C57.7 37.1 57.8 37.4 57.8 37.6C57.8 38 57.7 38.3 57.5 38.6C57.2 39 56.9 39.3 56.6 39.4C56.3 39.5 55.9 39.4 55.6 39.2C55.2 39 55 38.7 55 38.3C54.9 37.9 55 37.5 55.2 36.9L55.7 35.8L55.5 35.7C55.3 35.5 55.1 35.5 55 35.6C54.8 35.6 54.6 35.8 54.5 36C54.3 36.2 54.3 36.4 54.3 36.6C54.3 36.8 54.3 37 54.5 37.1L53.9 38C53.5 37.8 53.4 37.4 53.3 36.9C53.3 36.5 53.4 36 53.8 35.5C54.1 35 54.5 34.6 54.9 34.5C55.3 34.4 55.8 34.5 56.2 34.8L58 35.9C58.1 35.9 58.3 36 58.4 36.1C58.5 36.1 58.7 36.2 58.9 36.3L58.3 37.2ZM56.9 37.9C57.1 37.6 57.2 37.3 57.1 37.1C57.1 36.8 57 36.6 56.8 36.5L56.3 36.2L55.9 37.2C55.8 37.4 55.8 37.6 55.8 37.8C55.8 38 55.9 38.1 56.1 38.2C56.2 38.3 56.4 38.3 56.5 38.3C56.7 38.2 56.8 38.1 56.9 37.9Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M55.1 66.7C55 67.1 54.8 67.4 54.5 67.7C54.3 68 53.9 68.2 53.4 68.4C53 68.5 52.6 68.6 52.2 68.6C51.8 68.5 51.4 68.4 51.1 68.2C50.8 68 50.6 67.6 50.4 67.2C50.3 66.8 50.2 66.5 50.3 66.1C50.4 65.9 50.5 65.7 50.7 65.6L48.2 66.5L47.8 65.4L53.9 63.1L54.3 64.2L53.6 64.4C53.8 64.4 54.1 64.5 54.3 64.7C54.6 64.9 54.8 65.2 54.9 65.6C55.1 66 55.1 66.4 55.1 66.7ZM53.9 66.6C54.1 66.3 54.1 65.9 54 65.6C53.8 65.3 53.6 65 53.3 64.9C53 64.8 52.6 64.8 52.1 65C51.7 65.1 51.4 65.4 51.3 65.7C51.1 66 51.1 66.3 51.2 66.6C51.3 67 51.6 67.2 51.9 67.3C52.2 67.4 52.6 67.4 53 67.3C53.5 67.1 53.8 66.9 53.9 66.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M59.5 35.4L55.9 32.5L56.7 31.6L57.3 32.2C57.2 31.9 57.1 31.6 57.1 31.4C57.1 31.1 57.3 30.8 57.5 30.5C57.6 30.4 57.6 30.3 57.7 30.3L58.5 31C58.5 31 58.5 31 58.4 31.1C58.4 31.1 58.3 31.2 58.3 31.2C58 31.6 57.9 31.9 57.9 32.2C57.9 32.5 58 32.7 58.4 33L60.2 34.6L59.5 35.4Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M64.3 30.7L62.3 28.5C62.2 28.3 62 28.1 61.8 28.1C61.6 28.1 61.3 28.2 61.1 28.4C61 28.5 60.8 28.7 60.7 28.9C60.7 29.1 60.7 29.4 60.7 29.6C60.8 29.8 60.9 30 61 30.2L62.7 32.1L61.8 32.8L58.8 29.3L59.6 28.6L60.2 29.2C60.1 28.9 60.1 28.6 60.2 28.4C60.3 28 60.5 27.7 60.8 27.4C61.2 27.1 61.6 26.9 62 27C62.4 27 62.7 27.2 63.1 27.5L65.1 29.9L64.3 30.7Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M57.6 71.4C57.6 71.8 57.5 72.2 57.3 72.6C57.1 72.9 56.8 73.2 56.4 73.5C56 73.7 55.6 73.9 55.2 73.9C54.8 73.9 54.4 73.8 54 73.6C53.7 73.3 53.3 73 53.1 72.6C52.8 72.2 52.7 71.8 52.7 71.3C52.7 70.9 52.7 70.5 52.9 70.2C53.1 69.8 53.4 69.5 53.8 69.3C54.3 69 54.7 68.9 55.1 68.9C55.5 68.9 55.9 69 56.3 69.2C56.6 69.4 56.9 69.7 57.2 70.1C57.5 70.5 57.6 71 57.6 71.4ZM56.4 71.9C56.5 71.7 56.6 71.5 56.6 71.3C56.6 71 56.5 70.8 56.4 70.6C56.3 70.4 56.1 70.2 55.9 70.1C55.7 70 55.5 70 55.2 70C55 70 54.7 70.1 54.5 70.3C54.1 70.5 53.8 70.8 53.7 71.2C53.6 71.5 53.7 71.8 53.9 72.1C54.1 72.5 54.3 72.6 54.7 72.7C55 72.8 55.4 72.7 55.8 72.5C56.1 72.3 56.3 72.1 56.4 71.9Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M67.5 28.3L65.3 24.2L66.2 23.7L66.7 24.4C66.6 24.2 66.7 23.9 66.8 23.7C66.9 23.4 67.1 23.1 67.4 22.9C67.5 22.9 67.6 22.8 67.7 22.8L68.2 23.8C68.2 23.8 68.1 23.8 68.1 23.8C68 23.9 68 23.9 67.9 23.9C67.5 24.1 67.3 24.4 67.2 24.7C67.1 24.9 67.1 25.3 67.3 25.6L68.5 27.7L67.5 28.3Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M61 76.8C60.8 77.2 60.6 77.6 60.2 77.9C59.9 78.2 59.5 78.4 59.1 78.5C58.7 78.6 58.3 78.5 57.9 78.4C57.5 78.2 57.1 78 56.8 77.6C56.5 77.3 56.3 76.9 56.2 76.5C56.1 76 56.1 75.6 56.2 75.3C56.3 74.9 56.6 74.5 56.9 74.2C57.3 73.9 57.7 73.7 58.1 73.6C58.5 73.5 58.9 73.5 59.3 73.7C59.7 73.8 60.1 74.1 60.4 74.4C60.7 74.8 60.9 75.2 61 75.6C61.1 76 61.1 76.4 61 76.8ZM59.9 76.3C60 76.1 60 75.9 60 75.7C60 75.4 59.9 75.2 59.7 75C59.5 74.9 59.4 74.7 59.1 74.7C58.9 74.6 58.7 74.6 58.4 74.7C58.2 74.8 58 74.9 57.7 75.1C57.4 75.4 57.2 75.7 57.2 76.1C57.1 76.4 57.2 76.7 57.5 77C57.7 77.3 58 77.4 58.4 77.4C58.7 77.5 59.1 77.3 59.4 77C59.7 76.8 59.8 76.6 59.9 76.3Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M74 23.9C74 24.4 73.9 24.8 73.7 25.2C73.4 25.5 73 25.8 72.5 26C72.1 26.2 71.6 26.3 71.2 26.2C70.8 26.1 70.4 26 70.1 25.7C69.8 25.4 69.6 25.1 69.4 24.7C69.2 24.2 69.2 23.8 69.2 23.4C69.3 23 69.4 22.6 69.7 22.3C70 22 70.3 21.7 70.8 21.5C71.2 21.4 71.6 21.3 72 21.4C72.4 21.4 72.7 21.6 73 21.8C73.3 22.1 73.6 22.4 73.7 22.9C73.8 22.9 73.8 23 73.8 23.1C73.8 23.2 73.8 23.2 73.9 23.3L70.6 24.6C70.8 24.9 71 25.1 71.2 25.2C71.5 25.4 71.8 25.4 72.2 25.2C72.5 25.1 72.6 25 72.8 24.9C72.9 24.7 73 24.5 73 24.3L74 23.9ZM72.5 23C72.4 22.7 72.2 22.5 72 22.4C71.7 22.2 71.4 22.2 71.1 22.4C70.7 22.5 70.5 22.7 70.3 23.1C70.3 23.3 70.3 23.5 70.3 23.8L72.5 23Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M79.3 24.3L77.8 21.2L77.3 24.6L76.3 24.8L74.1 20.5L75.3 20.3L76.6 23.4L77 20L78.1 19.8L79.6 22.9L79.8 19.5L81 19.3L80.3 24.1L79.3 24.3Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M62 84.7L61.1 84L62.8 81.9C62.5 82 62.2 82 62 82C61.6 82 61.2 81.8 60.9 81.6C60.5 81.2 60.3 80.9 60.2 80.5C60.2 80.1 60.3 79.7 60.6 79.3L62.6 76.9L63.5 77.6L61.7 79.9C61.5 80.1 61.4 80.3 61.4 80.5C61.5 80.7 61.6 80.9 61.8 81.1C62 81.2 62.2 81.3 62.4 81.3C62.6 81.4 62.8 81.3 63.1 81.3C63.3 81.2 63.4 81 63.6 80.8L63.6 80.8L65.1 78.9L66 79.6L62 84.7Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M66.8 85.4L65.8 84.9L66.2 84.1C66 84.3 65.8 84.4 65.5 84.4C65.2 84.5 64.9 84.4 64.6 84.2C64.4 84.2 64.4 84.1 64.3 84.1L64.9 83.1C64.9 83.2 64.9 83.2 65 83.2C65 83.3 65.1 83.3 65.1 83.3C65.5 83.5 65.9 83.6 66.1 83.6C66.4 83.5 66.7 83.3 66.9 82.9L68.1 80.8L69.1 81.4L66.8 85.4Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M85.2 24C85.1 23.9 85.1 23.8 85.1 23.6C85.1 23.5 85.1 23.4 85.1 23.3C85 23.5 84.8 23.7 84.6 23.8C84.3 24 84 24.1 83.6 24.1C83.1 24 82.7 23.9 82.4 23.7C82.2 23.4 82.1 23.1 82.1 22.7C82.1 22.3 82.3 22 82.6 21.7C82.9 21.5 83.3 21.3 83.9 21.3L85.1 21.1L85.1 20.9C85.1 20.7 85.1 20.5 84.9 20.3C84.8 20.2 84.6 20.1 84.3 20.1C84.1 20.1 83.8 20.2 83.7 20.3C83.5 20.4 83.4 20.5 83.4 20.7L82.3 20.6C82.3 20.2 82.6 19.9 82.9 19.6C83.3 19.4 83.8 19.3 84.4 19.3C85 19.3 85.5 19.5 85.8 19.8C86.2 20.1 86.3 20.5 86.3 21L86.2 23.1C86.2 23.3 86.2 23.4 86.2 23.6C86.2 23.7 86.3 23.9 86.3 24.1L85.2 24ZM84.7 23C85 22.8 85.1 22.6 85.1 22.4L85.1 21.9L84.1 22C83.8 22 83.6 22.1 83.4 22.2C83.3 22.3 83.2 22.4 83.2 22.6C83.2 22.8 83.3 22.9 83.4 23C83.5 23.1 83.7 23.2 83.9 23.2C84.2 23.2 84.5 23.1 84.7 23Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M73.8 84.4C73.8 84.8 73.8 85.2 73.6 85.7C73.4 86.1 73.2 86.5 72.9 86.7C72.5 87 72.2 87.1 71.8 87.2C71.3 87.3 70.9 87.2 70.4 87C70 86.9 69.6 86.6 69.3 86.3C69.1 86 68.9 85.6 68.8 85.2C68.8 84.8 68.8 84.4 69 83.9C69.1 83.5 69.4 83.1 69.7 82.9C70 82.6 70.4 82.4 70.8 82.4C71.2 82.3 71.7 82.4 72.1 82.5C72.6 82.7 73 83 73.2 83.3C73.5 83.6 73.7 84 73.8 84.4ZM72.5 85.3C72.6 85 72.6 84.7 72.6 84.4C72.6 84.2 72.5 84 72.4 83.8C72.2 83.6 72 83.5 71.8 83.4C71.6 83.3 71.4 83.3 71.1 83.3C70.9 83.4 70.7 83.5 70.5 83.7C70.3 83.8 70.2 84.1 70.1 84.4C69.9 84.8 69.9 85.2 70.1 85.5C70.2 85.8 70.4 86 70.8 86.2C71.1 86.3 71.4 86.3 71.8 86.1C72.1 86 72.3 85.7 72.5 85.3Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M90.7 21.1C90.7 21.1 90.6 21.1 90.6 21.1C90.5 21.1 90.5 21.1 90.4 21C89.9 21 89.6 21 89.4 21.1C89.1 21.3 88.9 21.6 88.9 22L88.4 24.4L87.3 24.2L88.1 19.6L89.2 19.8L89.1 20.7C89.2 20.4 89.4 20.2 89.6 20.1C89.9 20 90.3 19.9 90.6 20C90.7 20 90.8 20 90.9 20.1L90.7 21.1Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M79.3 86.8C79.2 87.3 79 87.7 78.8 88C78.5 88.3 78.2 88.5 77.8 88.6C77.4 88.8 76.9 88.8 76.4 88.7C75.9 88.6 75.5 88.4 75.2 88.2C74.9 87.9 74.7 87.6 74.5 87.2C74.4 86.8 74.4 86.4 74.4 85.9C74.5 85.4 74.7 85.1 75 84.7C75.3 84.4 75.6 84.2 76 84.1C76.4 83.9 76.8 83.9 77.3 84C77.8 84.1 78.2 84.3 78.5 84.5C78.9 84.8 79.1 85.1 79.2 85.5C79.4 85.9 79.4 86.4 79.3 86.8ZM78.1 86.6C78.2 86.3 78.2 86 78.1 85.8C78 85.5 77.9 85.3 77.8 85.2C77.6 85 77.4 84.9 77.1 84.9C76.9 84.8 76.7 84.9 76.5 84.9C76.3 85 76.1 85.2 75.9 85.4C75.8 85.6 75.7 85.8 75.6 86.1C75.5 86.6 75.6 87 75.8 87.3C76 87.6 76.2 87.7 76.6 87.8C77 87.9 77.3 87.8 77.6 87.6C77.9 87.4 78 87.1 78.1 86.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M94.9 26.3L93.8 25.9L94.1 25.2C93.9 25.4 93.7 25.5 93.4 25.6C93.1 25.7 92.7 25.6 92.3 25.5C91.9 25.4 91.6 25.2 91.3 24.9C91.1 24.6 91 24.2 90.9 23.9C90.9 23.5 90.9 23 91.1 22.6C91.2 22.1 91.5 21.7 91.7 21.5C92 21.2 92.3 21 92.7 20.9C93.1 20.8 93.5 20.8 93.9 21C94.3 21.1 94.6 21.3 94.8 21.6C94.9 21.8 95 22 95 22.2L95.8 19.7L96.9 20.1L94.9 26.3ZM94.5 23.7C94.7 23.3 94.7 22.9 94.6 22.6C94.4 22.3 94.2 22.1 93.8 21.9C93.5 21.8 93.2 21.9 92.9 22C92.6 22.2 92.4 22.5 92.2 22.9C92.1 23.4 92.1 23.8 92.2 24.1C92.3 24.4 92.6 24.6 92.9 24.7C93.3 24.8 93.6 24.8 93.9 24.6C94.2 24.5 94.4 24.2 94.5 23.7Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M83.9 91.1L83.9 88.4C83.8 88.7 83.7 88.8 83.4 89C83.1 89.2 82.8 89.3 82.3 89.3C81.9 89.3 81.6 89.2 81.3 89C81 88.8 80.7 88.5 80.6 88.2C80.4 87.8 80.3 87.4 80.3 86.9C80.3 86.4 80.4 86 80.6 85.6C80.7 85.3 81 85 81.3 84.8C81.6 84.6 82 84.5 82.4 84.5C82.8 84.5 83.2 84.6 83.5 84.8C83.7 84.9 83.8 85.1 83.9 85.4L83.9 84.6L85.1 84.6L85.1 91.1L83.9 91.1ZM83.6 88C83.8 87.7 83.9 87.4 83.9 86.9C83.9 86.4 83.8 86.1 83.6 85.8C83.4 85.6 83.1 85.4 82.7 85.4C82.3 85.4 82 85.6 81.8 85.8C81.6 86.1 81.5 86.4 81.5 86.9C81.5 87.4 81.6 87.7 81.8 88C82 88.2 82.3 88.4 82.7 88.4C83.1 88.4 83.4 88.2 83.6 88Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M100.7 24.4C100.9 24.7 100.9 25.1 100.8 25.5L99.8 25C99.9 24.8 99.9 24.7 99.8 24.5C99.7 24.4 99.5 24.2 99.3 24.1C99 24 98.9 23.9 98.7 23.9C98.5 23.9 98.4 24 98.4 24.1C98.3 24.2 98.3 24.3 98.3 24.5C98.4 24.6 98.5 24.7 98.7 24.9L99.3 25.4C99.7 25.7 99.9 26.1 100 26.4C100.1 26.7 100 27 99.9 27.4C99.6 27.7 99.3 28 98.9 28C98.5 28.1 98 27.9 97.5 27.7C96.9 27.4 96.5 27 96.3 26.6C96.1 26.2 96.1 25.7 96.3 25.3L97.2 25.8C97.1 26 97.2 26.2 97.3 26.4C97.4 26.6 97.6 26.8 97.9 26.9C98.1 27.1 98.4 27.2 98.5 27.1C98.7 27.1 98.8 27 98.9 26.9C99 26.8 99 26.7 99 26.6C98.9 26.4 98.8 26.3 98.6 26.1L98.1 25.6C97.7 25.3 97.4 25 97.3 24.7C97.2 24.3 97.2 24 97.4 23.7C97.6 23.3 97.9 23.1 98.3 23.1C98.7 23 99.2 23.1 99.7 23.4C100.2 23.7 100.5 24 100.7 24.4Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M90.6 90.3L90.1 87.6C90 87.9 89.9 88.1 89.7 88.3C89.4 88.6 89.1 88.7 88.6 88.8C88.1 88.9 87.7 88.8 87.4 88.6C87.1 88.4 86.9 88 86.8 87.6L86.2 84.5L87.3 84.3L87.9 87.1C87.9 87.4 88 87.6 88.2 87.7C88.4 87.8 88.6 87.9 88.9 87.8C89.1 87.8 89.3 87.7 89.5 87.5C89.6 87.4 89.8 87.2 89.8 87C89.9 86.8 89.9 86.6 89.9 86.3L89.9 86.3L89.4 83.9L90.5 83.7L91.7 90.1L90.6 90.3Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M97.2 85C97.1 85.4 97 85.8 96.8 86.1C96.6 86.4 96.2 86.6 95.9 86.7C95.4 86.9 95.1 86.9 94.7 86.8C94.5 86.8 94.3 86.6 94.1 86.5L94.4 87.2L93.4 87.6L91.7 83.5C91.5 82.9 91.5 82.3 91.8 81.8C92 81.3 92.5 80.9 93.2 80.6C93.7 80.4 94.3 80.4 94.7 80.5C95.2 80.6 95.5 80.8 95.8 81.2L94.8 81.6C94.6 81.5 94.5 81.4 94.3 81.4C94.1 81.4 93.8 81.4 93.6 81.5C93.2 81.7 92.9 81.9 92.8 82.2C92.7 82.4 92.7 82.7 92.8 83.1L93.1 83.7C93.1 83.5 93.2 83.3 93.3 83.1C93.5 82.8 93.8 82.5 94.2 82.4C94.6 82.2 95 82.2 95.3 82.3C95.7 82.3 96 82.5 96.3 82.7C96.6 83 96.8 83.4 97 83.8C97.1 84.2 97.2 84.6 97.2 85ZM95.9 85.3C96.1 85 96 84.7 95.9 84.2C95.7 83.8 95.5 83.5 95.2 83.4C94.9 83.2 94.5 83.2 94.2 83.4C93.9 83.5 93.6 83.7 93.5 84C93.4 84.3 93.4 84.7 93.6 85.1C93.8 85.6 94 85.8 94.3 86C94.6 86.1 94.9 86.1 95.3 86C95.6 85.9 95.8 85.7 95.9 85.3Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M110.4 34.8C110.2 34.6 109.8 34.5 109.4 34.4C109 34.3 108.6 34.3 108.2 34.3C107.8 34.3 107.4 34.3 107 34.4C106.5 34.6 106.1 34.8 105.8 35L105.5 34.7C105.7 34.4 105.9 34 106 33.5C106.1 32.9 106.1 32.3 106 31.7C105.9 31 105.6 30.5 105.3 30.1L105.6 29.8C106.1 30.1 106.6 30.2 107.1 30.3C107.7 30.4 108.3 30.4 108.8 30.2C109.4 30.1 109.9 29.9 110.3 29.6L110.5 29.9C110.4 30.2 110.2 30.5 110.1 30.8C110 31.1 110 31.5 110 31.9C110 32.3 110 32.7 110.1 33C110.2 33.6 110.4 34.1 110.7 34.5L110.4 34.8Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M99.1 85.3L96.9 81.2L97.9 80.7L100.1 84.7L99.1 85.3Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M104.2 80.5C104.3 81 104.2 81.3 104 81.7C103.8 82.1 103.6 82.4 103.2 82.7C102.8 83 102.4 83.1 102 83.2C101.7 83.2 101.3 83.2 100.9 83C100.6 82.8 100.3 82.6 100 82.2C99.9 82.1 99.9 82.1 99.9 82C99.8 81.9 99.8 81.9 99.8 81.8L102.6 79.8C102.3 79.5 102.1 79.4 101.8 79.3C101.5 79.2 101.2 79.3 100.8 79.5C100.6 79.7 100.5 79.9 100.4 80C100.3 80.2 100.3 80.4 100.3 80.6L99.4 81.2C99.3 80.8 99.3 80.4 99.5 80C99.6 79.5 99.9 79.2 100.3 78.8C100.7 78.6 101.1 78.4 101.5 78.3C102 78.3 102.4 78.4 102.7 78.5C103.1 78.7 103.4 79 103.7 79.4C104 79.7 104.2 80.1 104.2 80.5ZM103.2 81.1C103.2 80.9 103.2 80.7 103 80.4L101.1 81.8C101.3 82 101.6 82.2 101.8 82.2C102.1 82.3 102.4 82.2 102.7 82C103 81.8 103.2 81.5 103.2 81.1Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M116.7 43.5L115.4 40.3L113.8 41L115 43.9L114.1 44.3L112.9 41.3L111.1 42L112.4 45.3L111.5 45.7L110.2 42.4L110.2 42.4L109.8 41.3L115.8 38.8L117.6 43.1L116.7 43.5Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M100 87.1L99.4 86L100.5 85.4L101.1 86.5L100 87.1Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M108.5 77.8L107.9 77.2C108 77.5 108 77.8 108 78.1C107.9 78.4 107.7 78.8 107.4 79.1C107.1 79.4 106.7 79.6 106.3 79.6C105.9 79.6 105.5 79.5 105.2 79.1L102.9 77L103.7 76.1L105.8 78.1C106 78.3 106.2 78.4 106.4 78.4C106.7 78.4 106.9 78.3 107 78.1C107.2 78 107.3 77.8 107.4 77.5C107.4 77.3 107.4 77.1 107.4 76.9C107.3 76.7 107.2 76.5 107 76.3L105.2 74.6L106 73.8L109.3 77L108.5 77.8Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M114.6 48.6L112.7 50.8L112.4 49.6L113.8 48.2L111.9 47.3L111.7 46.1L114.4 47.4L116.3 45.4L116.5 46.6L115.3 47.9L116.9 48.6L117.2 49.8L114.6 48.6Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M117.5 54.3C117.5 54.7 117.4 55.1 117.3 55.4C117.1 55.7 116.8 55.9 116.4 56.1C116.1 56.3 115.7 56.4 115.2 56.4C114.7 56.4 114.3 56.3 113.9 56.1C113.5 56 113.2 55.7 113 55.4C112.8 55.1 112.7 54.8 112.7 54.3C112.7 53.9 112.8 53.5 113 53.2C113.1 53 113.3 52.9 113.5 52.8L110.9 52.9L110.9 51.7L117.4 51.6L117.4 52.7L116.6 52.7C116.9 52.8 117.1 53 117.2 53.2C117.4 53.5 117.5 53.9 117.5 54.3ZM116.2 54.8C116.5 54.6 116.6 54.3 116.6 53.9C116.6 53.6 116.4 53.3 116.2 53.1C115.9 52.9 115.6 52.7 115.1 52.8C114.6 52.8 114.3 52.9 114 53.1C113.8 53.3 113.6 53.6 113.7 54C113.7 54.4 113.8 54.7 114.1 54.9C114.3 55.1 114.7 55.2 115.2 55.2C115.6 55.2 116 55.1 116.2 54.8Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M113.2 70.9C113.2 71.3 113 71.7 112.8 72.2C112.6 72.6 112.3 72.8 111.9 73C111.6 73.2 111.2 73.3 110.8 73.3C110.5 73.3 110.1 73.2 109.7 73C109.6 72.9 109.5 72.9 109.5 72.8C109.4 72.8 109.3 72.7 109.3 72.7L111 69.7C110.7 69.5 110.4 69.5 110.2 69.5C109.8 69.6 109.6 69.8 109.4 70.2C109.2 70.4 109.2 70.6 109.2 70.8C109.1 71 109.2 71.2 109.3 71.4L108.8 72.3C108.5 71.9 108.3 71.5 108.3 71.1C108.2 70.7 108.3 70.2 108.6 69.7C108.9 69.3 109.2 69 109.5 68.8C109.9 68.6 110.3 68.5 110.7 68.5C111.1 68.5 111.5 68.6 111.9 68.9C112.3 69.1 112.7 69.4 112.9 69.7C113.1 70.1 113.2 70.5 113.2 70.9ZM112 71.7C112.2 71.4 112.3 71 112.2 70.7C112.1 70.5 111.9 70.3 111.7 70.1L110.5 72.1C110.8 72.3 111.1 72.3 111.3 72.3C111.6 72.2 111.9 72 112 71.7Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M115 67.6L114.2 67.3C114.4 67.5 114.5 67.7 114.6 68C114.7 68.3 114.7 68.6 114.6 68.9C114.5 69.1 114.5 69.1 114.4 69.2L113.4 68.8C113.4 68.8 113.5 68.7 113.5 68.7C113.5 68.6 113.5 68.6 113.6 68.5C113.7 68.1 113.8 67.7 113.7 67.5C113.6 67.2 113.3 67 112.9 66.8L110.7 65.9L111.1 64.9L115.4 66.6L115 67.6Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M112.7 58.4L112.8 57.3L119.3 58L119.2 59.1L112.7 58.4Z' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3Cpath d='M116.6 62.8C116.4 63.3 116.2 63.7 115.9 64C115.7 64.3 115.3 64.5 114.9 64.6C114.5 64.7 114.1 64.7 113.7 64.6C113.2 64.5 112.8 64.3 112.5 64C112.2 63.7 112 63.4 111.9 63C111.8 62.6 111.8 62.1 111.9 61.7C112 61.2 112.2 60.8 112.5 60.5C112.8 60.2 113.1 59.9 113.5 59.8C113.9 59.7 114.4 59.7 114.8 59.8C115.3 59.9 115.7 60.1 116 60.4C116.3 60.7 116.5 61.1 116.6 61.5C116.7 61.9 116.7 62.3 116.6 62.8ZM115.7 62.6C115.8 62.2 115.7 61.9 115.5 61.6C115.3 61.3 115 61.1 114.5 61C114.2 60.9 114 60.9 113.7 61C113.5 61 113.3 61.1 113.1 61.3C112.9 61.4 112.8 61.6 112.8 61.9C112.7 62.1 112.7 62.3 112.8 62.5C112.9 62.8 113 63 113.2 63.1C113.4 63.3 113.6 63.4 113.9 63.5C114.4 63.6 114.8 63.5 115.1 63.4C115.4 63.2 115.6 62.9 115.7 62.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%230D1118' fill-opacity='0.9'%3E%3C/path%3E%3C/g%3E%3Cpath d='M402.9 41V30H406.1L410.4 35.8V30H413.3V41H410.1L405.8 35.4V41H402.9ZM415.1 41V30L422.8 30V32.4H419V34.4H422.5V36.4H419V38.5H422.8V41H415.1ZM426.3 41L423.8 30H427.4L428.4 36.9L429.5 31.9L433.2 31.9L434.3 36.9L435.3 30H438.9L436.4 41L432.7 41L431.3 35L430 41H426.3ZM445.2 41V37.9L442.1 30H445.5L447.1 34.9L448.6 30H452L448.7 37.9V41H445.2ZM457.7 41.3C456.5 41.3 455.5 41 454.6 40.5C453.7 40 453 39.4 452.5 38.5C452.1 37.6 451.8 36.6 451.8 35.5C451.8 34.4 452.1 33.4 452.5 32.5C453 31.7 453.7 31 454.6 30.5C455.5 30 456.5 29.8 457.7 29.8C458.9 29.8 459.9 30 460.8 30.5C461.7 31 462.3 31.6 462.8 32.5C463.3 33.4 463.6 34.4 463.6 35.5C463.6 36.6 463.3 37.6 462.8 38.5C462.3 39.4 461.7 40 460.8 40.5C459.9 41 458.9 41.3 457.7 41.3ZM457.7 38.3C458.4 38.3 458.9 38.1 459.3 37.6C459.8 37 460 36.3 460 35.5C460 34.9 459.9 34.4 459.7 34C459.5 33.5 459.2 33.2 458.9 33C458.5 32.7 458.1 32.6 457.7 32.6C457 32.6 456.5 32.8 456 33.4C455.6 33.9 455.4 34.6 455.4 35.5C455.4 36.3 455.6 37 456 37.6C456.5 38.1 457 38.3 457.7 38.3ZM473.2 41.3C472.4 41.3 471.8 41.1 471.3 40.9C470.8 40.7 470.4 40.4 470.1 40C469.8 39.6 469.6 39.1 469.4 38.5C469.3 38 469.2 37.4 469.1 36.8H468.4V41H464.9V30H469.4C471.2 30 472.4 30.3 473.2 30.9C474 31.5 474.4 32.4 474.4 33.4C474.4 34 474.2 34.6 473.8 35.1C473.5 35.6 472.9 36 472.2 36.3C472.2 36.6 472.3 36.8 472.3 36.9C472.3 37.1 472.4 37.2 472.4 37.4C472.6 37.8 472.8 38.1 473 38.2C473.2 38.3 473.5 38.4 473.8 38.4C474.1 38.4 474.3 38.4 474.5 38.3L474.7 41C474.5 41 474.3 41.1 474 41.2C473.8 41.2 473.5 41.3 473.2 41.3ZM468.4 34.6H469C469.8 34.6 470.3 34.5 470.7 34.3C471 34.1 471.2 33.8 471.2 33.4C471.2 33.1 471 32.8 470.8 32.6C470.5 32.5 470.1 32.4 469.5 32.4H468.4V34.6ZM475.7 41V30L479.4 30V34.4H480.5L482.7 30H486.7L483.8 35.4L487.1 41H482.9L480.5 36.8H479.4V41H475.7ZM495.8 41.3C494.7 41.3 493.7 41 492.8 40.6C491.9 40.1 491.3 39.4 490.8 38.6C490.3 37.8 490.1 36.8 490.1 35.7C490.1 34.5 490.3 33.5 490.8 32.6C491.3 31.7 492 31 492.9 30.5C493.7 30 494.7 29.8 495.9 29.8C497.1 29.8 498.1 30 498.8 30.5L498.4 33C498.1 32.9 497.8 32.8 497.4 32.7C497.1 32.6 496.8 32.6 496.5 32.6C495.6 32.6 494.9 32.9 494.4 33.4C493.9 33.9 493.7 34.6 493.7 35.6C493.7 36.4 493.9 37.1 494.4 37.6C494.9 38.1 495.6 38.4 496.4 38.4C496.8 38.4 497.1 38.3 497.4 38.3C497.6 38.2 498 38.1 498.4 37.9L498.9 40.4C497.9 41 496.9 41.3 495.8 41.3ZM500 41V30H503.6V41H500ZM507.1 41V32.5H504.6V30H513.3V32.5H510.8V41H507.1ZM516.1 41V37.9L512.9 30H516.4L517.9 34.9L519.4 30L522.9 30L519.5 37.9V41H516.1ZM531.7 41.3C530.5 41.3 529.5 41 528.7 40.6C527.8 40.1 527.2 39.4 526.7 38.6C526.2 37.8 526 36.8 526 35.7C526 34.6 526.2 33.5 526.7 32.6C527.2 31.7 527.9 31 528.8 30.5C529.7 30 530.7 29.8 531.9 29.8C533.2 29.8 534.2 30 534.9 30.5L534.5 33C533.8 32.7 533.1 32.6 532.4 32.6C531.5 32.6 530.8 32.9 530.3 33.4C529.8 33.9 529.5 34.6 529.5 35.6C529.5 36.5 529.8 37.2 530.2 37.8C530.7 38.3 531.3 38.5 532 38.5C532.2 38.5 532.4 38.5 532.6 38.5V35.7L535.4 35.4V40.4C534.8 40.7 534.1 40.9 533.5 41C532.9 41.2 532.3 41.3 531.7 41.3ZM545.3 41.3C544.5 41.3 543.9 41.1 543.4 40.9C542.9 40.7 542.5 40.4 542.2 40C541.9 39.6 541.7 39.1 541.5 38.5C541.4 38 541.3 37.4 541.2 36.8H540.5V41H537V30H541.5C543.2 30 544.5 30.3 545.3 30.9C546 31.5 546.4 32.4 546.4 33.4C546.4 34 546.3 34.6 545.9 35.1C545.6 35.6 545 36 544.3 36.3C544.3 36.6 544.4 36.8 544.4 36.9C544.4 37.1 544.5 37.2 544.5 37.4C544.7 37.8 544.8 38.1 545 38.2C545.3 38.3 545.5 38.4 545.9 38.4C546.1 38.4 546.4 38.4 546.6 38.3L546.8 41C546.6 41 546.4 41.1 546.1 41.2C545.9 41.2 545.6 41.3 545.3 41.3ZM540.5 34.6H541.1C541.9 34.6 542.4 34.5 542.7 34.3C543.1 34.1 543.2 33.8 543.2 33.4C543.2 33.1 543.1 32.8 542.8 32.6C542.6 32.5 542.1 32.4 541.6 32.4H540.5V34.6ZM547.8 41V30L551.4 30V41H547.8ZM553.1 41V30H556.6V38.5H560.5L560.3 41H553.1ZM561.7 41V30L565.2 30V38.5H569.1L568.9 41H561.7Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M404.5 56V48.5L404.8 48.6C404.7 48.9 404.5 49.1 404.2 49.3C404 49.5 403.7 49.7 403.3 49.9C403 50 402.7 50.1 402.3 50.2V49C402.6 48.9 403 48.8 403.3 48.7C403.6 48.5 403.9 48.3 404.2 48.1C404.5 47.8 404.7 47.6 404.8 47.4H405.8V56H404.5ZM410.1 56.1C409.2 56.1 408.5 55.9 408 55.4C407.4 55 407.1 54.4 407 53.6H408.3C408.4 54.1 408.6 54.4 408.9 54.7C409.2 54.9 409.6 55.1 410 55.1C410.5 55.1 410.9 54.9 411.2 54.6C411.5 54.3 411.7 53.9 411.7 53.2C411.7 52.6 411.5 52.1 411.2 51.8C410.9 51.5 410.5 51.3 410 51.3C409.7 51.3 409.4 51.4 409.1 51.5C408.9 51.6 408.7 51.8 408.6 52.1H407.4L407.9 47.4H412.5V48.4H408.5L409 48.1L408.8 51.3L408.4 51.3C408.6 51 408.8 50.8 409.1 50.6C409.4 50.4 409.8 50.3 410.3 50.3C410.8 50.3 411.3 50.5 411.7 50.7C412.1 50.9 412.5 51.2 412.7 51.7C412.9 52.1 413 52.6 413 53.2C413 53.8 412.9 54.3 412.7 54.8C412.4 55.2 412.1 55.5 411.6 55.8C411.2 56 410.7 56.1 410.1 56.1ZM417 56.1C416.1 56.1 415.4 55.9 414.9 55.4C414.4 55 414 54.4 413.9 53.6H415.2C415.3 54.1 415.5 54.4 415.8 54.7C416.2 54.9 416.5 55.1 417 55.1C417.4 55.1 417.8 54.9 418.1 54.6C418.4 54.3 418.6 53.9 418.6 53.2C418.6 52.6 418.5 52.1 418.1 51.8C417.8 51.5 417.4 51.3 416.9 51.3C416.6 51.3 416.3 51.4 416.1 51.5C415.8 51.6 415.6 51.8 415.5 52.1H414.4L414.8 47.4H419.5V48.4H415.4L415.9 48.1L415.7 51.3L415.3 51.3C415.5 51 415.7 50.8 416 50.6C416.4 50.4 416.8 50.3 417.2 50.3C417.8 50.3 418.2 50.5 418.6 50.7C419.1 50.9 419.4 51.2 419.6 51.7C419.8 52.1 420 52.6 420 53.2C420 53.8 419.8 54.3 419.6 54.8C419.4 55.2 419 55.5 418.6 55.8C418.1 56 417.6 56.1 417 56.1ZM425.8 56L423.3 47.4H424.6L426.8 55.3H426.5L428.6 47.4H430.1L432.2 55.3H431.9L434.1 47.4H435.3L432.8 56H431.3L429.2 48.3H429.4L427.3 56H425.8ZM441.7 56.1C440.9 56.1 440.2 55.9 439.6 55.4C439.1 55 438.8 54.4 438.7 53.6H440C440.1 54.1 440.3 54.4 440.6 54.7C440.9 54.9 441.3 55.1 441.7 55.1C442.2 55.1 442.5 54.9 442.9 54.6C443.2 54.3 443.3 53.9 443.3 53.2C443.3 52.6 443.2 52.1 442.9 51.8C442.6 51.5 442.2 51.3 441.7 51.3C441.3 51.3 441 51.4 440.8 51.5C440.5 51.6 440.4 51.8 440.2 52.1H439.1L439.5 47.4H444.2V48.4H440.1L440.7 48.1L440.4 51.3L440.1 51.3C440.2 51 440.5 50.8 440.8 50.6C441.1 50.4 441.5 50.3 441.9 50.3C442.5 50.3 443 50.5 443.4 50.7C443.8 50.9 444.1 51.2 444.3 51.7C444.6 52.1 444.7 52.6 444.7 53.2C444.7 53.8 444.6 54.3 444.3 54.8C444.1 55.2 443.7 55.5 443.3 55.8C442.8 56 442.3 56.1 441.7 56.1ZM447.3 56V48.5L447.5 48.6C447.4 48.9 447.2 49.1 447 49.3C446.7 49.5 446.4 49.7 446.1 49.9C445.8 50 445.4 50.1 445 50.2V49C445.4 48.9 445.7 48.8 446.1 48.7C446.4 48.5 446.7 48.3 447 48.1C447.2 47.8 447.4 47.6 447.5 47.4H448.5V56H447.3ZM452.5 56.1C451.7 56.1 451 55.9 450.6 55.6C450.1 55.2 449.8 54.7 449.8 54.1H450.9C451 54.5 451.1 54.7 451.4 54.9C451.7 55.1 452 55.2 452.5 55.2C452.9 55.2 453.2 55.1 453.4 55C453.6 54.8 453.7 54.6 453.7 54.4C453.7 54.2 453.7 54 453.6 53.9C453.4 53.8 453.2 53.6 452.8 53.6L451.9 53.3C451.2 53.2 450.8 52.9 450.5 52.7C450.2 52.3 450 52 450 51.5C450 51 450.2 50.6 450.6 50.2C451.1 49.9 451.6 49.8 452.3 49.8C453.1 49.8 453.6 49.9 454.1 50.2C454.5 50.6 454.7 51 454.8 51.6H453.7C453.6 51.3 453.5 51.1 453.2 50.9C453 50.8 452.7 50.7 452.3 50.7C451.9 50.7 451.7 50.8 451.5 50.9C451.3 51 451.2 51.2 451.2 51.4C451.2 51.6 451.2 51.8 451.4 51.9C451.5 52 451.8 52.1 452.1 52.2L453.1 52.5C453.7 52.6 454.2 52.9 454.5 53.2C454.8 53.5 454.9 53.9 454.9 54.4C454.9 54.9 454.7 55.3 454.3 55.7C453.8 56 453.2 56.1 452.5 56.1ZM458.6 56.1C457.9 56.1 457.4 56 457.1 55.6C456.7 55.3 456.6 54.8 456.6 54.2V48.5L457.8 48V54.2C457.8 54.5 457.9 54.7 458.1 54.9C458.2 55 458.5 55.1 458.9 55.1C459 55.1 459.2 55.1 459.3 55.1C459.4 55 459.5 55 459.6 55V56C459.5 56 459.3 56.1 459.2 56.1C459 56.1 458.8 56.1 458.6 56.1ZM455.4 50.9V49.9H459.6V50.9H455.4ZM466.3 56.1C465.2 56.1 464.4 55.9 463.8 55.4C463.1 54.9 462.8 54.2 462.7 53.2L463.9 53.2C464 53.8 464.2 54.3 464.6 54.6C465 54.9 465.6 55.1 466.3 55.1C466.9 55.1 467.3 55 467.6 54.8C467.9 54.5 468.1 54.2 468.1 53.8C468.1 53.5 468 53.2 467.8 53C467.6 52.8 467.2 52.6 466.8 52.4L465.3 52C464.5 51.7 464 51.4 463.6 51C463.3 50.7 463.1 50.2 463.1 49.6C463.1 49.1 463.2 48.7 463.4 48.3C463.7 48 464 47.7 464.5 47.5C464.9 47.3 465.4 47.2 466 47.2C466.9 47.2 467.7 47.5 468.2 47.9C468.8 48.4 469.1 49 469.2 49.8H467.9C467.8 49.3 467.6 48.9 467.3 48.6C467 48.4 466.5 48.3 466 48.3C465.5 48.3 465 48.4 464.7 48.6C464.4 48.8 464.3 49.1 464.3 49.4C464.3 49.8 464.4 50 464.6 50.2C464.8 50.4 465.1 50.6 465.6 50.7L467.1 51.2C467.9 51.5 468.4 51.8 468.8 52.2C469.1 52.6 469.3 53.1 469.3 53.7C469.3 54.5 469 55.1 468.5 55.5C468 55.9 467.2 56.1 466.3 56.1ZM473.2 56.1C472.5 56.1 471.9 56 471.6 55.6C471.3 55.3 471.1 54.8 471.1 54.2V48.5L472.3 48V54.2C472.3 54.5 472.4 54.7 472.6 54.9C472.8 55 473 55.1 473.4 55.1C473.6 55.1 473.7 55.1 473.8 55.1C473.9 55 474 55 474.1 55V56C474 56 473.9 56.1 473.7 56.1C473.5 56.1 473.4 56.1 473.2 56.1ZM469.9 50.9V49.9H474.1V50.9H469.9ZM475.1 57.8V57.2C475.4 57.1 475.6 57 475.7 56.8C475.8 56.6 475.8 56.3 475.8 55.9L476.3 56H475.1V54.5H476.6V55.6C476.6 56.2 476.4 56.7 476.2 57C476 57.4 475.6 57.7 475.1 57.8ZM480.7 56V47.4H482.1L486.7 54.8L486.4 54.8V47.4H487.7V56H486.2L481.6 48.6L481.9 48.5V56H480.7ZM492.1 56.1C491.4 56.1 490.9 56 490.4 55.7C490 55.4 489.6 55.1 489.3 54.6C489.1 54.1 488.9 53.6 488.9 52.9C488.9 52.3 489.1 51.7 489.3 51.3C489.6 50.8 490 50.4 490.4 50.2C490.9 49.9 491.4 49.8 492 49.8C492.6 49.8 493.2 49.9 493.6 50.1C494 50.4 494.4 50.7 494.6 51.2C494.8 51.6 495 52.2 495 52.8C495 52.9 494.9 53 494.9 53.1C494.9 53.1 494.9 53.2 494.9 53.3H489.8V52.4H494L493.7 52.7C493.7 52.1 493.6 51.6 493.3 51.2C493 50.9 492.6 50.7 492 50.7C491.5 50.7 491 50.9 490.7 51.3C490.4 51.7 490.2 52.2 490.2 52.9C490.2 53.6 490.4 54.2 490.7 54.6C491 55 491.5 55.1 492.1 55.1C492.4 55.1 492.8 55.1 493 54.9C493.3 54.8 493.5 54.6 493.6 54.3H494.8C494.6 54.8 494.2 55.3 493.8 55.6C493.3 56 492.7 56.1 492.1 56.1ZM497.4 56L495.5 49.9H496.8L498 54.8H497.9L499.4 49.9H500.5L502 54.8H501.9L503.1 49.9H504.4L502.5 56H501.4L499.8 51.2H500L498.5 56H497.4ZM510.5 56V52.2L507.2 47.4H508.8L511.5 51.7H510.9L513.6 47.4L515 47.4L511.8 52.2V56H510.5ZM517.6 56.1C516.9 56.1 516.4 56 515.9 55.7C515.5 55.4 515.1 55.1 514.8 54.6C514.6 54.1 514.4 53.5 514.4 52.9C514.4 52.3 514.6 51.7 514.8 51.3C515.1 50.8 515.5 50.4 515.9 50.2C516.4 49.9 516.9 49.8 517.6 49.8C518.2 49.8 518.8 49.9 519.2 50.2C519.7 50.4 520.1 50.8 520.3 51.3C520.6 51.7 520.7 52.3 520.7 52.9C520.7 53.5 520.6 54.1 520.3 54.6C520.1 55.1 519.7 55.4 519.2 55.7C518.8 56 518.2 56.1 517.6 56.1ZM517.6 55.1C517.9 55.1 518.3 55 518.5 54.8C518.8 54.6 519 54.4 519.2 54.1C519.4 53.7 519.4 53.3 519.4 52.9C519.4 52.2 519.3 51.7 518.9 51.4C518.6 51 518.1 50.8 517.6 50.8C517 50.8 516.6 51 516.2 51.4C515.9 51.7 515.7 52.3 515.7 52.9C515.7 53.3 515.8 53.7 515.9 54.1C516.1 54.4 516.3 54.6 516.6 54.8C516.9 55 517.2 55.1 517.6 55.1ZM522 56V49.9H523.2V51.4H523.2V56H522ZM523.2 52.8L523.1 51.4C523.2 50.8 523.5 50.4 523.8 50.2C524.2 49.9 524.6 49.8 525.1 49.8C525.3 49.8 525.4 49.8 525.5 49.8V51C525.4 51 525.4 51 525.3 51C525.2 51 525.1 50.9 525 50.9C524.4 50.9 524 51.1 523.7 51.4C523.4 51.7 523.2 52.2 523.2 52.8ZM526.6 56V47.2H527.8V56H526.6ZM530.6 56L527.6 52.8L530.5 49.9H532L528.7 53.1L528.8 52.5L532.2 56H530.6ZM532.9 57.8V57.2C533.1 57.1 533.3 57 533.4 56.8C533.5 56.6 533.6 56.3 533.6 55.9L534.1 56H532.8V54.5H534.3V55.6C534.3 56.2 534.2 56.7 534 57C533.8 57.4 533.4 57.7 532.9 57.8ZM538.4 56V47.4H539.9L544.5 54.8L544.2 54.8V47.4H545.4V56H543.9L539.4 48.6L539.7 48.5V56H538.4ZM549.8 56V52.2L546.6 47.4H548.1L550.8 51.7H550.2L552.9 47.4H554.3L551.1 52.2V56H549.8ZM404.5 72V64.5L404.8 64.6C404.7 64.9 404.5 65.1 404.2 65.3C404 65.5 403.7 65.7 403.3 65.9C403 66 402.7 66.1 402.3 66.2V65C402.6 64.9 403 64.8 403.3 64.7C403.6 64.5 403.9 64.3 404.2 64.1C404.5 63.8 404.7 63.6 404.8 63.4H405.8V72H404.5ZM410.7 72.1C410 72.1 409.4 71.9 408.9 71.6C408.3 71.2 407.9 70.6 407.6 70C407.3 69.3 407.2 68.5 407.2 67.6C407.2 66.8 407.3 66 407.6 65.4C407.9 64.7 408.3 64.2 408.9 63.8C409.4 63.4 410 63.2 410.7 63.2C411.4 63.2 412 63.4 412.5 63.8C413 64.2 413.5 64.7 413.8 65.4C414.1 66 414.2 66.8 414.2 67.6C414.2 68.5 414.1 69.3 413.8 70C413.5 70.6 413 71.2 412.5 71.6C412 71.9 411.4 72.1 410.7 72.1ZM410.7 71C411.2 71 411.5 70.9 411.9 70.6C412.2 70.3 412.4 69.9 412.6 69.4C412.7 68.9 412.8 68.3 412.8 67.6C412.8 67 412.7 66.4 412.6 65.9C412.4 65.4 412.2 65 411.9 64.7C411.5 64.5 411.2 64.3 410.7 64.3C410.2 64.3 409.8 64.5 409.5 64.7C409.2 65 409 65.4 408.8 65.9C408.6 66.4 408.5 67 408.5 67.6C408.5 68.3 408.6 68.9 408.8 69.4C409 69.9 409.2 70.3 409.5 70.6C409.8 70.9 410.2 71 410.7 71ZM418.9 72.1C418.2 72.1 417.6 71.9 417.1 71.6C416.5 71.2 416.1 70.6 415.8 70C415.5 69.3 415.4 68.5 415.4 67.6C415.4 66.8 415.5 66 415.8 65.4C416.1 64.7 416.5 64.2 417.1 63.8C417.6 63.4 418.2 63.2 418.9 63.2C419.6 63.2 420.2 63.4 420.7 63.8C421.3 64.2 421.7 64.7 422 65.4C422.3 66 422.4 66.8 422.4 67.6C422.4 68.5 422.3 69.3 422 70C421.7 70.6 421.3 71.2 420.7 71.6C420.2 71.9 419.6 72.1 418.9 72.1ZM418.9 71C419.4 71 419.8 70.9 420.1 70.6C420.4 70.3 420.6 69.9 420.8 69.4C421 68.9 421 68.3 421 67.6C421 67 421 66.4 420.8 65.9C420.6 65.4 420.4 65 420.1 64.7C419.8 64.5 419.4 64.3 418.9 64.3C418.4 64.3 418 64.5 417.7 64.7C417.4 65 417.2 65.4 417 65.9C416.8 66.4 416.8 67 416.8 67.6C416.8 68.3 416.8 68.9 417 69.4C417.2 69.9 417.4 70.3 417.7 70.6C418.1 70.9 418.4 71 418.9 71ZM425.4 72V64.5L425.6 64.6C425.5 64.9 425.3 65.1 425.1 65.3C424.8 65.5 424.5 65.7 424.2 65.9C423.9 66 423.5 66.1 423.1 66.2V65C423.5 64.9 423.8 64.8 424.2 64.7C424.5 64.5 424.8 64.3 425.1 64.1C425.3 63.8 425.5 63.6 425.6 63.4H426.6V72H425.4ZM431 72.1C430.5 72.1 430 72 429.6 71.8C429.2 71.6 428.8 71.3 428.6 70.9C428.3 70.5 428.2 70 428.1 69.5H429.4C429.5 70 429.7 70.4 430 70.7C430.2 70.9 430.6 71.1 431.1 71.1C431.4 71.1 431.7 71 431.9 70.9C432.1 70.7 432.3 70.5 432.5 70.2C432.6 70 432.7 69.6 432.8 69.2C432.9 68.7 432.9 68.2 432.9 67.6V66.8L433.3 66.9C433.2 67.2 433 67.6 432.8 67.8C432.6 68.1 432.3 68.3 431.9 68.5C431.5 68.6 431.1 68.7 430.7 68.7C430.2 68.7 429.7 68.6 429.3 68.4C428.9 68.1 428.6 67.8 428.3 67.4C428.1 67 428 66.5 428 66C428 65.4 428.1 65 428.4 64.5C428.6 64.1 429 63.8 429.4 63.6C429.9 63.4 430.4 63.2 431 63.2C432.1 63.2 432.9 63.6 433.5 64.4C434 65.1 434.3 66.2 434.3 67.6C434.3 68.6 434.2 69.4 433.9 70.1C433.7 70.7 433.3 71.2 432.8 71.6C432.3 71.9 431.7 72.1 431 72.1ZM431.1 67.7C431.6 67.7 432 67.6 432.3 67.3C432.7 67 432.8 66.6 432.8 66.1C432.8 65.7 432.7 65.4 432.6 65.2C432.4 64.9 432.2 64.7 432 64.5C431.7 64.4 431.4 64.3 431.1 64.3C430.5 64.3 430.1 64.4 429.8 64.8C429.5 65.1 429.4 65.5 429.4 66C429.4 66.5 429.5 66.9 429.8 67.2C430.1 67.5 430.6 67.7 431.1 67.7Z' fill='%230E1219'%3E%3C/path%3E%3Crect x='320' y='128' width='125' height='56' rx='4' fill='%23EEE7D5'%3E%3C/rect%3E%3Crect x='320' y='128' width='125' height='56' rx='4' fill='url(%23pattern3_514_1247)'%3E%3C/rect%3E%3Crect x='320' y='128' width='125' height='56' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Cg clip-path='url(%23clip0_514_1247)'%3E%3Crect x='323' y='193' width='57' height='57' fill='url(%23pattern4_514_1247)'%3E%3C/rect%3E%3C/g%3E%3Crect x='455' y='132' width='58' height='104' rx='4' fill='%23EFF2E6'%3E%3C/rect%3E%3Crect x='455.5' y='132.5' width='57' height='103' rx='3.5' stroke='%2383868C' stroke-opacity='0.3'%3E%3C/rect%3E%3Cpath d='M479.1 175.7C479.3 175.7 479.5 175.9 479.6 176.2C479.8 176.8 480.5 177.3 481.2 177.3C482.1 177.3 482.8 176.7 482.9 175.8C482.9 175.7 483 175.7 483.1 175.7H484.6C484.9 175.7 485.1 175.9 485.2 176.2C485.4 176.8 486 177.3 486.8 177.3C487.5 177.3 488.2 176.8 488.4 176.2C488.5 175.9 488.7 175.7 488.9 175.7H490.2C490.4 175.7 490.7 175.9 490.7 176.2C490.9 176.7 491.3 177.1 491.8 177.3C492.1 177.3 492.3 177.6 492.3 177.8V179.1C492.3 179.3 492.1 179.5 491.8 179.6C491.2 179.8 490.7 180.5 490.7 181.2C490.7 182.1 491.3 182.8 492.2 182.9C492.3 182.9 492.3 183 492.3 183.1V184.6C492.3 184.9 492.1 185.1 491.8 185.2C491.2 185.4 490.7 186 490.7 186.8C490.7 187.5 491.2 188.2 491.8 188.4C492.1 188.5 492.3 188.7 492.3 188.9V190.2C492.3 190.4 492.1 190.7 491.8 190.7C491.3 190.9 490.9 191.3 490.7 191.8C490.7 192.1 490.4 192.3 490.2 192.3H488.9C488.7 192.3 488.5 192.1 488.4 191.8C488.2 191.2 487.5 190.7 486.8 190.7C485.9 190.7 485.2 191.3 485.1 192.2C485.1 192.3 485 192.3 484.9 192.3H483.4C483.1 192.3 482.9 192.1 482.8 191.8C482.6 191.2 482 190.7 481.2 190.7C480.5 190.7 479.8 191.2 479.6 191.8C479.5 192.1 479.3 192.3 479.1 192.3H477.8C477.6 192.3 477.3 192.1 477.3 191.8C477.1 191.3 476.7 190.9 476.2 190.7C475.9 190.7 475.7 190.4 475.7 190.2V188.9C475.7 188.7 475.9 188.5 476.2 188.4C476.8 188.2 477.3 187.5 477.3 186.8C477.3 185.9 476.7 185.2 475.8 185.1C475.7 185.1 475.7 185 475.7 184.9V183.4C475.7 183.1 475.9 182.9 476.2 182.8C476.8 182.6 477.3 182 477.3 181.2C477.3 180.5 476.8 179.8 476.2 179.6C475.9 179.5 475.7 179.3 475.7 179.1V177.8C475.7 177.6 475.9 177.3 476.2 177.3C476.7 177.1 477.1 176.7 477.3 176.2C477.3 175.9 477.6 175.7 477.8 175.7H479.1ZM482.4 184.6C482.1 184 481.3 184 481 184.6L480 186.3C479.6 186.8 480 187.5 480.7 187.5H482.7C483.4 187.5 483.8 186.8 483.4 186.3L482.4 184.6ZM486.2 181.8C485.9 181.3 485.2 181.3 484.8 181.8L483.5 184C483.3 184.2 483.3 184.6 483.4 184.8L484.8 187.1C484.9 187.4 485.2 187.5 485.5 187.5H488.4C489 187.5 489.4 186.8 489.1 186.3L486.2 181.8ZM481.8 180.7C481.1 180.7 480.5 181.2 480.5 181.9C480.5 182.6 481.1 183.2 481.8 183.2C482.5 183.2 483 182.6 483 181.9C483 181.2 482.5 180.7 481.8 180.7Z' fill='%23DBDECF'%3E%3C/path%3E%3Crect x='582' y='319' width='58' height='126' rx='4' transform='rotate(90 582 319)' fill='%23EFF2E6'%3E%3C/rect%3E%3Crect x='581.5' y='319.5' width='57' height='125' rx='3.5' transform='rotate(90 581.5 319.5)' stroke='%2383868C' stroke-opacity='0.3'%3E%3C/rect%3E%3Cpath d='M514.1 339.7C514.3 339.7 514.5 339.9 514.6 340.2C514.8 340.8 515.5 341.3 516.2 341.3C517.1 341.3 517.8 340.7 517.9 339.8C517.9 339.7 518 339.7 518.1 339.7H519.6C519.9 339.7 520.1 339.9 520.2 340.2C520.4 340.8 521 341.3 521.8 341.3C522.5 341.3 523.2 340.8 523.4 340.2C523.5 339.9 523.7 339.7 523.9 339.7H525.2C525.4 339.7 525.7 339.9 525.7 340.2C525.9 340.7 526.3 341.1 526.8 341.3C527.1 341.3 527.3 341.6 527.3 341.8V343.1C527.3 343.3 527.1 343.5 526.8 343.6C526.2 343.8 525.7 344.5 525.7 345.2C525.7 346.1 526.3 346.8 527.2 346.9C527.3 346.9 527.3 347 527.3 347.1V348.6C527.3 348.9 527.1 349.1 526.8 349.2C526.2 349.4 525.7 350 525.7 350.8C525.7 351.5 526.2 352.2 526.8 352.4C527.1 352.5 527.3 352.7 527.3 352.9V354.2C527.3 354.4 527.1 354.7 526.8 354.7C526.3 354.9 525.9 355.3 525.7 355.8C525.7 356.1 525.4 356.3 525.2 356.3H523.9C523.7 356.3 523.5 356.1 523.4 355.8C523.2 355.2 522.5 354.7 521.8 354.7C520.9 354.7 520.2 355.3 520.1 356.2C520.1 356.3 520 356.3 519.9 356.3H518.4C518.1 356.3 517.9 356.1 517.8 355.8C517.6 355.2 517 354.7 516.2 354.7C515.5 354.7 514.8 355.2 514.6 355.8C514.5 356.1 514.3 356.3 514.1 356.3H512.8C512.6 356.3 512.3 356.1 512.3 355.8C512.1 355.3 511.7 354.9 511.2 354.7C510.9 354.7 510.7 354.4 510.7 354.2V352.9C510.7 352.7 510.9 352.5 511.2 352.4C511.8 352.2 512.3 351.5 512.3 350.8C512.3 349.9 511.7 349.2 510.8 349.1C510.7 349.1 510.7 349 510.7 348.9V347.4C510.7 347.1 510.9 346.9 511.2 346.8C511.8 346.6 512.3 346 512.3 345.2C512.3 344.5 511.8 343.8 511.2 343.6C510.9 343.5 510.7 343.3 510.7 343.1V341.8C510.7 341.6 510.9 341.3 511.2 341.3C511.7 341.1 512.1 340.7 512.3 340.2C512.3 339.9 512.6 339.7 512.8 339.7H514.1ZM517.4 348.6C517.1 348 516.3 348 516 348.6L515 350.3C514.6 350.8 515 351.5 515.7 351.5H517.7C518.4 351.5 518.8 350.8 518.4 350.3L517.4 348.6ZM521.2 345.8C520.9 345.3 520.2 345.3 519.8 345.8L518.5 348C518.3 348.2 518.3 348.6 518.4 348.8L519.8 351.1C519.9 351.4 520.2 351.5 520.5 351.5H523.4C524 351.5 524.4 350.8 524.1 350.3L521.2 345.8ZM516.8 344.7C516.1 344.7 515.5 345.2 515.5 345.9C515.5 346.6 516.1 347.2 516.8 347.2C517.5 347.2 518 346.6 518 345.9C518 345.2 517.5 344.7 516.8 344.7Z' fill='%23DBDECF'%3E%3C/path%3E%3Cpath opacity='0.3' d='M300 0L300 400' stroke='%2383868C'%3E%3C/path%3E%3Cg opacity='0.7'%3E%3Cpath d='M526.1 72.8C525 73.2 524 73.3 523 73.1C522.1 73 521.2 72.6 520.6 72C519.9 71.4 519.4 70.6 519 69.5L517 62.9L520.7 61.7L522.7 68.2C522.9 69 523.2 69.5 523.7 69.7C524.2 70 524.7 70 525.3 69.8C525.9 69.6 526.3 69.3 526.5 68.8C526.7 68.4 526.7 67.8 526.6 67.2L524.5 60.6L528.2 59.4L530.3 66.1C530.6 67.1 530.6 68 530.3 68.9C530.1 69.8 529.6 70.6 528.9 71.3C528.1 72 527.2 72.5 526.1 72.8Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M513.3 76.5L510.6 67.7L508 68.5L507.2 65.9L516.2 63.1L517 65.7L514.4 66.5L517.1 75.3L513.3 76.5Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M498.9 80.9L495.4 69.5L498.7 68.5L505 73.2L503.1 67.1L506.2 66.2L509.7 77.6L506.4 78.6L500.1 74.2L501.9 80L498.9 80.9Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M489.4 83.8L485.9 72.5L493.9 70L494.7 72.5L490.7 73.7L491.3 75.7L494.9 74.6L495.6 76.7L492 77.8L492.6 80L496.6 78.8L497.4 81.4L489.4 83.8Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M480.8 86.5L474 76.1L477.9 74.9L481.8 81.5L481.4 73.9L485.1 72.7L485.1 85.2L480.8 86.5Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M539.4 62.2C540.6 61.9 542 61.8 543.7 62L543.7 62L543.5 65.1C540.6 64.6 538.6 65.7 538.1 66.1C537.6 66.4 536.8 65.7 536.4 65.3C535.9 64.9 535.8 64.3 536.1 63.8C536.1 63.7 536.2 63.6 536.2 63.6C537.3 61.6 536.9 59.2 536.6 59C536.4 58.9 536.3 58.8 536.1 58.9C534.1 59.5 535.6 69.1 535.6 69.1C535.6 69.1 535.9 70.5 536 71.2L531.8 72.5L531.6 61.6C531.7 58.4 533.5 56.6 535 56.1C536.5 55.6 537.8 56.2 538.4 56.7C540.2 58 539.7 61.3 539.4 62.2Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M512.9 92.3L511.9 89.2L506.1 81.9L509.7 80.8L512.8 85.4L512.9 79.9L516.4 78.8L515.5 88.1L516.4 91.2L512.9 92.3Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M503.6 95.2L500.9 86.4L498.4 87.2L497.6 84.6L506.5 81.8L507.3 84.4L504.8 85.2L507.5 94L503.6 95.2Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M496.3 97.4L492.8 86.1L496.5 84.9L500 96.3L496.3 97.4Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M492.1 99C490.9 99.4 489.8 99.5 488.7 99.3C487.7 99.1 486.8 98.6 486 97.9C485.3 97.2 484.7 96.2 484.4 95.1C484 93.9 483.9 92.7 484.2 91.7C484.4 90.6 484.9 89.7 485.6 88.9C486.4 88.1 487.3 87.5 488.5 87.1C489.8 86.7 490.9 86.7 491.8 86.9L492.1 89.7C491.8 89.6 491.4 89.6 491 89.7C490.6 89.7 490.3 89.8 490 89.9C489.1 90.1 488.5 90.6 488.1 91.3C487.8 92 487.7 92.9 488 93.8C488.3 94.7 488.8 95.4 489.4 95.7C490.1 96.1 490.9 96.1 491.8 95.8C492.1 95.7 492.4 95.6 492.7 95.4C493 95.3 493.3 95.1 493.7 94.7L494.9 97.2C494.2 98.1 493.2 98.7 492.1 99Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M483.8 101.4C483.2 101.6 482.7 101.6 482.3 101.3C481.8 101.1 481.6 100.8 481.4 100.3C481.3 99.8 481.3 99.3 481.6 98.9C481.8 98.5 482.2 98.2 482.8 98C483.3 97.9 483.8 97.9 484.2 98.1C484.7 98.3 485 98.7 485.1 99.1C485.3 99.6 485.2 100.1 485 100.5C484.8 100.9 484.4 101.2 483.8 101.4Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M552.6 85.9L552.9 86.8L485.3 107.7L485 106.7L552.6 85.9ZM557 77.6L549.8 54.2C548.7 50.7 545 48.7 541.5 49.8L473.9 70.7C470.4 71.7 468.4 75.4 469.5 78.9L476.7 102.3C477.8 105.8 481.5 107.8 485 106.7L485.3 107.7C481.2 108.9 477 106.7 475.7 102.6L468.5 79.2C467.3 75.2 469.6 70.9 473.6 69.7L541.2 48.8C545.2 47.6 549.5 49.9 550.8 53.9L557.9 77.3C559.2 81.3 556.9 85.6 552.9 86.8L552.6 85.9C556.1 84.8 558 81.1 557 77.6Z' fill='%232D3746'%3E%3C/path%3E%3Cpath d='M532.9 88.8L532.4 93.9L528.8 93.5L528.9 92.8L531.6 93.1L531.7 91.7L529.2 91.4L529.3 90.7L531.8 91L531.9 89.4L529.2 89.1L529.3 88.4L532.9 88.8Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M540.6 87.8C540.8 88.1 541 88.4 541.3 88.6C541.6 88.9 542 89.1 542.5 89.3C543 89.5 543.4 89.6 543.9 89.5L543.9 89.8C543.6 90 543.3 90.3 543 90.7C542.7 91 542.5 91.4 542.4 91.8C542.2 92.3 542.2 92.7 542.2 93L541.9 93.1C541.8 92.9 541.7 92.7 541.5 92.5C541.3 92.3 541.1 92.1 540.8 92C540.5 91.8 540.3 91.7 540 91.6C539.5 91.4 539.1 91.4 538.7 91.4L538.6 91.1C538.9 91 539.1 90.8 539.3 90.6C539.5 90.3 539.7 90.1 539.9 89.8C540 89.5 540.2 89.3 540.2 89C540.3 88.6 540.4 88.2 540.3 87.9L540.6 87.8Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M526.5 87.6C526.5 87.7 526.5 87.8 526.5 87.9C526.4 88 526.4 88.1 526.4 88.2C526.5 88 526.7 87.9 526.9 87.9C527.1 87.8 527.4 87.8 527.7 87.9C528.1 88 528.3 88.2 528.5 88.4C528.6 88.6 528.7 88.9 528.6 89.2C528.5 89.5 528.3 89.7 528 89.9C527.7 90 527.4 90 526.9 89.9L525.9 89.8L525.9 90C525.8 90.2 525.9 90.3 525.9 90.4C526 90.6 526.1 90.7 526.4 90.7C526.6 90.8 526.7 90.8 526.9 90.7C527 90.7 527.1 90.6 527.2 90.5L528 90.7C527.9 91 527.7 91.3 527.3 91.4C527 91.5 526.6 91.5 526.1 91.4C525.7 91.2 525.3 91 525.1 90.7C525 90.4 524.9 90.1 525.1 89.7L525.5 88.1C525.5 88 525.6 87.9 525.6 87.7C525.6 87.6 525.6 87.5 525.6 87.4L526.5 87.6ZM527.3 88.5C527 88.4 526.8 88.4 526.6 88.5C526.4 88.6 526.3 88.7 526.2 88.9L526.1 89.3L526.9 89.4C527.1 89.4 527.3 89.4 527.4 89.3C527.6 89.3 527.7 89.2 527.7 89C527.7 88.9 527.7 88.8 527.6 88.7C527.6 88.6 527.4 88.5 527.3 88.5Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M549.5 83.7C549.8 83.7 550 83.7 550.3 83.9C550.6 84 550.8 84.3 551.1 84.6C551.3 84.9 551.4 85.2 551.5 85.5C551.6 85.8 551.5 86.1 551.4 86.4C551.3 86.6 551.1 86.9 550.9 87.1C550.6 87.3 550.3 87.4 550 87.4C549.9 87.4 549.7 87.3 549.5 87.3L550.8 88.9L550 89.5L547 85.3L547.7 84.8L548.1 85.3C548 85.1 548 84.9 548.1 84.7C548.2 84.5 548.4 84.2 548.6 84C548.9 83.8 549.2 83.7 549.5 83.7ZM549.6 84.6C549.3 84.5 549.1 84.6 548.9 84.8C548.6 84.9 548.5 85.2 548.5 85.4C548.5 85.7 548.6 86 548.8 86.3C549 86.6 549.2 86.7 549.5 86.8C549.8 86.9 550 86.8 550.2 86.6C550.5 86.5 550.6 86.2 550.6 86C550.6 85.7 550.5 85.4 550.3 85.1C550.1 84.8 549.9 84.7 549.6 84.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M524.9 87.1L523.4 90.4L522.6 90L522.9 89.4C522.7 89.6 522.5 89.7 522.3 89.7C522.1 89.8 521.8 89.7 521.5 89.6C521.5 89.6 521.4 89.5 521.4 89.5L521.7 88.7C521.7 88.8 521.8 88.8 521.8 88.8C521.8 88.8 521.9 88.8 521.9 88.9C522.3 89 522.5 89 522.7 89C523 88.9 523.1 88.7 523.3 88.4L524.1 86.7L524.9 87.1Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M520.2 84.5L519 86.4C518.9 86.6 518.8 86.7 518.9 86.9C518.9 87.1 519 87.2 519.2 87.3C519.3 87.4 519.5 87.5 519.7 87.5C519.9 87.5 520 87.5 520.2 87.4C520.3 87.3 520.5 87.2 520.6 87L521.6 85.4L522.4 85.9L520.4 88.9L519.7 88.4L520 87.9C519.8 88 519.6 88 519.4 88C519.1 88 518.8 87.9 518.5 87.8C518.2 87.5 518 87.3 517.9 87C517.9 86.7 517.9 86.4 518.1 86L519.5 84L520.2 84.5Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M552.5 80.8C552.8 80.7 553.1 80.6 553.4 80.7C553.7 80.8 554 81 554.3 81.2C554.6 81.5 554.8 81.8 554.8 82.1C554.9 82.4 555 82.7 554.9 83C554.8 83.3 554.6 83.6 554.4 83.9C554.1 84.2 553.8 84.4 553.5 84.5C553.2 84.6 552.9 84.6 552.5 84.6C552.2 84.5 551.9 84.3 551.7 84.1C551.4 83.8 551.2 83.5 551.1 83.2C551 82.9 551 82.6 551.1 82.3C551.2 81.9 551.3 81.6 551.6 81.3C551.8 81.1 552.1 80.9 552.5 80.8ZM553.1 81.6C552.9 81.5 552.7 81.5 552.6 81.6C552.4 81.6 552.2 81.7 552.1 81.8C552 82 551.9 82.1 551.9 82.3C551.8 82.5 551.9 82.7 551.9 82.9C552 83 552.1 83.2 552.3 83.4C552.6 83.6 552.8 83.7 553.1 83.7C553.4 83.7 553.6 83.6 553.8 83.4C554 83.2 554.1 83 554.1 82.7C554.1 82.4 553.9 82.2 553.7 81.9C553.5 81.7 553.3 81.6 553.1 81.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M517.7 82.5L515.2 85.1L514.5 84.5L515 84C514.8 84.1 514.6 84.1 514.4 84.1C514.2 84 513.9 83.9 513.7 83.7C513.7 83.7 513.6 83.6 513.6 83.6L514.2 83C514.2 83 514.2 83 514.3 83C514.3 83.1 514.3 83.1 514.4 83.2C514.6 83.4 514.8 83.5 515.1 83.5C515.3 83.6 515.5 83.4 515.8 83.2L517.1 81.9L517.7 82.5Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M555.8 77.1C556.2 77.1 556.5 77.2 556.8 77.4C557.1 77.6 557.4 77.8 557.5 78.1C557.7 78.4 557.7 78.7 557.7 79.1C557.7 79.4 557.6 79.7 557.3 80C557.1 80.4 556.9 80.6 556.6 80.8C556.3 80.9 556 81 555.7 81C555.4 81 555 80.9 554.7 80.7C554.4 80.5 554.2 80.2 554 79.9C553.9 79.6 553.8 79.3 553.8 79C553.8 78.7 554 78.3 554.2 78C554.4 77.7 554.6 77.4 554.9 77.3C555.2 77.1 555.5 77.1 555.8 77.1ZM555.7 78C555.5 77.9 555.3 78 555.2 78C555 78.1 554.9 78.2 554.8 78.4C554.7 78.6 554.6 78.7 554.6 78.9C554.6 79.1 554.7 79.3 554.8 79.4C554.9 79.6 555 79.8 555.2 79.9C555.5 80.1 555.8 80.1 556.1 80.1C556.4 80 556.6 79.9 556.7 79.7C556.9 79.4 556.9 79.2 556.9 78.9C556.8 78.6 556.6 78.4 556.3 78.2C556.1 78.1 555.9 78 555.7 78Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M513.1 78.5C513.4 78.4 513.7 78.4 514.1 78.5C514.4 78.6 514.7 78.9 515 79.2C515.2 79.5 515.3 79.8 515.4 80.2C515.4 80.5 515.4 80.8 515.2 81.1C515.1 81.4 514.9 81.7 514.6 81.9C514.3 82.1 514 82.2 513.7 82.3C513.4 82.3 513 82.3 512.7 82.1C512.4 82 512.2 81.8 511.9 81.5C511.7 81.2 511.6 80.9 511.6 80.6C511.5 80.3 511.6 80 511.7 79.7C511.8 79.4 512 79.2 512.3 79C512.4 78.9 512.4 78.9 512.5 78.9C512.5 78.8 512.6 78.8 512.6 78.8L514.3 81C514.5 80.8 514.6 80.6 514.6 80.4C514.7 80.1 514.6 79.9 514.4 79.6C514.3 79.5 514.2 79.3 514 79.3C513.9 79.2 513.7 79.2 513.6 79.2L513.1 78.5ZM512.6 79.9C512.5 80 512.3 80.2 512.3 80.4C512.3 80.6 512.3 80.9 512.5 81.1C512.7 81.3 512.9 81.5 513.2 81.5C513.4 81.5 513.6 81.4 513.8 81.3L512.6 79.9Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M512.2 74.5L510.2 76.3L512.9 75.9L513.2 76.6L510.4 79.2L510 78.4L512.1 76.7L509.4 77.1L509.1 76.4L511.1 74.5L508.5 75.1L508.1 74.3L511.8 73.7L512.2 74.5Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M561.6 74.6L561.2 75.4L559.3 74.6C559.4 74.8 559.5 75 559.5 75.2C559.6 75.5 559.6 75.8 559.4 76.1C559.3 76.5 559.1 76.7 558.8 76.8C558.5 76.9 558.2 76.9 557.8 76.8L555.5 75.9L555.9 75L558 75.9C558.2 76 558.4 76 558.5 75.9C558.7 75.9 558.8 75.7 558.9 75.5C559 75.3 559 75.2 559 75C558.9 74.8 558.9 74.7 558.8 74.5C558.6 74.4 558.5 74.3 558.3 74.2L558.3 74.2L556.5 73.5L556.8 72.7L561.6 74.6Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M561.1 70.8L560.9 71.7L560.2 71.5C560.4 71.7 560.5 71.8 560.6 72C560.7 72.2 560.8 72.5 560.7 72.8C560.7 72.9 560.6 72.9 560.6 73L559.8 72.8C559.8 72.7 559.8 72.7 559.8 72.7C559.8 72.6 559.9 72.6 559.9 72.5C560 72.2 559.9 71.9 559.8 71.7C559.7 71.5 559.5 71.4 559.2 71.3L557.3 70.8L557.6 70L561.1 70.8Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M510.7 70.1C510.6 70.1 510.5 70.2 510.4 70.2C510.4 70.2 510.3 70.3 510.2 70.3C510.4 70.3 510.6 70.4 510.7 70.6C510.9 70.7 511 71 511.1 71.3C511.2 71.6 511.2 72 511.1 72.2C510.9 72.5 510.7 72.6 510.4 72.7C510.1 72.8 509.8 72.7 509.6 72.5C509.3 72.3 509.1 72 508.9 71.6L508.6 70.7L508.4 70.8C508.2 70.8 508.1 70.9 508 71C507.9 71.2 507.9 71.3 508 71.5C508 71.7 508.1 71.9 508.2 72C508.3 72.1 508.4 72.2 508.6 72.1L508.8 73C508.5 73 508.2 72.9 507.9 72.7C507.6 72.5 507.4 72.1 507.3 71.7C507.2 71.2 507.2 70.8 507.4 70.5C507.5 70.2 507.8 70 508.2 69.9L509.8 69.5C509.9 69.5 510.1 69.4 510.2 69.4C510.3 69.3 510.4 69.3 510.5 69.2L510.7 70.1ZM510 70.6C509.9 70.5 509.7 70.4 509.5 70.5L509.1 70.6L509.4 71.4C509.5 71.6 509.6 71.7 509.7 71.8C509.8 71.9 509.9 71.9 510.1 71.8C510.2 71.8 510.3 71.7 510.4 71.6C510.4 71.5 510.4 71.4 510.4 71.2C510.3 71 510.2 70.8 510 70.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M558.8 65.8C559.1 65.6 559.5 65.6 559.8 65.6C560.2 65.7 560.5 65.8 560.8 65.9C561.1 66.1 561.3 66.4 561.4 66.7C561.5 67 561.6 67.3 561.5 67.7C561.5 68.1 561.4 68.4 561.2 68.7C561 69 560.8 69.2 560.5 69.3C560.2 69.5 559.9 69.5 559.5 69.5C559.1 69.5 558.8 69.3 558.5 69.2C558.3 69 558.1 68.7 557.9 68.4C557.8 68.1 557.7 67.8 557.8 67.4C557.8 67 557.9 66.7 558.1 66.4C558.3 66.1 558.5 65.9 558.8 65.8ZM559.8 66.6C559.5 66.5 559.3 66.6 559.1 66.6C558.9 66.7 558.8 66.8 558.7 66.9C558.6 67.1 558.5 67.3 558.5 67.5C558.5 67.6 558.5 67.8 558.6 68C558.7 68.1 558.8 68.3 559 68.4C559.1 68.5 559.3 68.5 559.6 68.5C559.9 68.6 560.2 68.5 560.5 68.3C560.7 68.2 560.8 67.9 560.8 67.7C560.8 67.4 560.8 67.1 560.6 66.9C560.4 66.7 560.1 66.6 559.8 66.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M507.4 66.5C507.4 66.5 507.3 66.6 507.4 66.6C507.4 66.7 507.4 66.7 507.4 66.8C507.4 67.1 507.5 67.4 507.7 67.5C507.8 67.7 508.1 67.7 508.4 67.7L510.3 67.5L510.4 68.4L506.8 68.8L506.7 67.9L507.4 67.8C507.1 67.8 507 67.7 506.8 67.5C506.6 67.3 506.5 67.1 506.5 66.8C506.5 66.7 506.5 66.6 506.5 66.6L507.4 66.5Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M559.5 61.1C559.8 61 560.2 61.1 560.5 61.2C560.8 61.3 561 61.6 561.2 61.8C561.4 62.1 561.5 62.4 561.5 62.8C561.6 63.2 561.5 63.6 561.4 63.9C561.2 64.2 561 64.4 560.8 64.6C560.5 64.8 560.2 64.9 559.8 64.9C559.5 65 559.1 64.9 558.8 64.8C558.5 64.6 558.3 64.4 558.1 64.2C557.9 63.9 557.8 63.6 557.8 63.2C557.7 62.8 557.8 62.4 557.9 62.1C558 61.8 558.2 61.6 558.5 61.4C558.8 61.2 559.1 61.1 559.5 61.1ZM559.6 62C559.3 62 559.1 62.1 559 62.2C558.8 62.3 558.7 62.4 558.6 62.6C558.5 62.7 558.5 62.9 558.5 63.1C558.5 63.3 558.6 63.5 558.7 63.6C558.8 63.7 558.9 63.8 559.1 63.9C559.3 64 559.5 64 559.8 64C560.1 64 560.4 63.8 560.6 63.6C560.8 63.4 560.8 63.2 560.8 62.9C560.8 62.6 560.7 62.4 560.4 62.2C560.2 62 559.9 62 559.6 62Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M510.4 62.3L510.3 63.1L509.7 63.1C509.9 63.2 510 63.3 510.1 63.5C510.3 63.8 510.3 64 510.3 64.4C510.3 64.7 510.2 65 510.1 65.2C509.9 65.5 509.7 65.6 509.4 65.8C509.1 65.9 508.8 65.9 508.4 65.9C508 65.9 507.7 65.8 507.4 65.7C507.1 65.5 506.9 65.3 506.7 65.1C506.6 64.8 506.5 64.5 506.6 64.2C506.6 63.8 506.7 63.5 506.8 63.3C507 63.2 507.1 63.1 507.2 63L505.2 62.9L505.2 62L510.4 62.3ZM508.5 63.1C508.1 63 507.8 63.1 507.6 63.3C507.4 63.5 507.3 63.7 507.3 64C507.3 64.3 507.4 64.5 507.6 64.7C507.8 64.9 508 65 508.4 65C508.8 65 509.1 64.9 509.3 64.8C509.5 64.6 509.6 64.4 509.6 64.1C509.6 63.8 509.5 63.5 509.3 63.4C509.1 63.2 508.9 63.1 508.5 63.1Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M561.7 56.7L559.7 57.2C559.9 57.3 560.1 57.3 560.2 57.5C560.4 57.6 560.6 57.9 560.7 58.2C560.8 58.5 560.8 58.8 560.7 59.1C560.6 59.4 560.5 59.6 560.2 59.8C560 60 559.7 60.2 559.3 60.3C559 60.4 558.6 60.4 558.3 60.4C558 60.3 557.7 60.2 557.5 60C557.3 59.8 557.1 59.5 557 59.2C557 58.9 557 58.6 557 58.3C557.1 58.1 557.2 58 557.4 57.9L556.8 58L556.5 57.2L561.5 55.8L561.7 56.7ZM559.4 57.6C559.2 57.5 558.9 57.4 558.5 57.5C558.2 57.6 557.9 57.8 557.8 58C557.7 58.3 557.6 58.5 557.7 58.8C557.8 59.1 557.9 59.3 558.2 59.4C558.4 59.5 558.7 59.5 559.1 59.4C559.4 59.3 559.7 59.1 559.8 58.9C560 58.7 560 58.4 559.9 58.1C559.8 57.9 559.7 57.7 559.4 57.6Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M507.7 58.2C507.9 58 508.2 57.9 508.5 58L508.4 58.8C508.2 58.8 508.1 58.8 508 58.9C507.9 59 507.8 59.2 507.8 59.4C507.7 59.6 507.7 59.8 507.8 59.9C507.8 60 507.9 60.1 508 60.1C508.1 60.1 508.2 60.1 508.3 60C508.3 60 508.4 59.8 508.5 59.7L508.8 59.1C508.9 58.7 509.1 58.5 509.4 58.4C509.6 58.2 509.8 58.2 510.1 58.3C510.4 58.3 510.7 58.5 510.8 58.8C510.9 59.1 510.9 59.5 510.8 60C510.7 60.5 510.5 60.8 510.3 61.1C510 61.3 509.7 61.4 509.3 61.4L509.5 60.6C509.7 60.6 509.8 60.5 510 60.4C510.1 60.3 510.2 60.1 510.2 59.8C510.3 59.6 510.3 59.4 510.2 59.3C510.2 59.2 510.1 59.1 510 59.1C509.9 59 509.8 59.1 509.7 59.1C509.6 59.2 509.5 59.3 509.5 59.4L509.2 60C509 60.4 508.8 60.6 508.6 60.8C508.4 60.9 508.2 61 507.9 60.9C507.6 60.8 507.3 60.6 507.2 60.4C507.1 60.1 507 59.7 507.1 59.2C507.2 58.8 507.4 58.5 507.7 58.2Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M559.7 51.8L557.8 52.7C558 52.7 558.2 52.8 558.4 52.9C558.6 53.1 558.8 53.3 559 53.6C559.2 53.9 559.2 54.2 559.1 54.5C559 54.8 558.8 55.1 558.4 55.2L556.2 56.4L555.8 55.5L557.9 54.5C558.1 54.4 558.2 54.3 558.3 54.1C558.3 54 558.3 53.8 558.2 53.6C558.1 53.4 558 53.3 557.8 53.2C557.7 53.1 557.5 53.1 557.4 53.1C557.2 53.1 557 53.1 556.8 53.2L556.8 53.2L555.1 54.1L554.7 53.3L559.3 51L559.7 51.8Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M554.3 47.9C554.6 47.9 554.9 47.9 555.2 48C555.4 48.1 555.7 48.3 555.9 48.6C556.1 48.8 556.2 49.1 556.2 49.4C556.2 49.6 556.1 49.8 556 49.9L556.5 49.6L557.1 50.3L554.3 52.4C553.9 52.7 553.5 52.8 553 52.7C552.6 52.6 552.2 52.4 551.8 51.9C551.5 51.5 551.4 51.1 551.4 50.8C551.3 50.4 551.5 50.1 551.7 49.8L552.2 50.5C552.2 50.6 552.1 50.7 552.2 50.9C552.2 51 552.3 51.2 552.4 51.4C552.6 51.7 552.8 51.8 553.1 51.9C553.3 51.9 553.5 51.8 553.7 51.6L554.2 51.3C554 51.3 553.8 51.3 553.6 51.3C553.4 51.2 553.1 51 552.9 50.7C552.7 50.5 552.6 50.2 552.6 49.9C552.6 49.6 552.6 49.4 552.8 49.1C552.9 48.8 553.1 48.6 553.4 48.3C553.7 48.1 554 48 554.3 47.9ZM554.8 48.8C554.5 48.8 554.3 48.9 554 49.1C553.7 49.3 553.5 49.5 553.5 49.8C553.4 50.1 553.5 50.3 553.7 50.5C553.8 50.8 554.1 50.9 554.3 50.9C554.6 50.9 554.9 50.8 555.1 50.6C555.4 50.4 555.6 50.2 555.6 49.9C555.7 49.6 555.6 49.4 555.4 49.2C555.3 48.9 555.1 48.8 554.8 48.8Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M513.5 48.6C513.4 48.9 513.4 49.2 513.4 49.5C513.4 49.8 513.5 50.2 513.6 50.5C513.6 50.8 513.8 51.1 513.9 51.3C514.1 51.7 514.4 51.9 514.6 52.1L514.5 52.4C514.2 52.3 513.8 52.3 513.4 52.3C513 52.3 512.5 52.5 512.1 52.7C511.6 52.9 511.3 53.2 511 53.5L510.7 53.4C510.8 53 510.8 52.6 510.8 52.1C510.7 51.7 510.6 51.2 510.4 50.9C510.2 50.5 509.9 50.1 509.6 49.9L509.7 49.6C510 49.7 510.2 49.7 510.5 49.7C510.8 49.7 511.1 49.7 511.4 49.6C511.7 49.6 511.9 49.4 512.2 49.3C512.6 49.1 513 48.8 513.2 48.5L513.5 48.6Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M554.1 46.4L551.5 49L550.8 48.3L553.4 45.8L554.1 46.4Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M549.4 43.6C549.7 43.4 550 43.4 550.3 43.5C550.7 43.5 551 43.6 551.3 43.9C551.5 44.1 551.7 44.4 551.9 44.6C552 44.9 552 45.2 552 45.5C551.9 45.8 551.8 46.1 551.6 46.4C551.5 46.5 551.5 46.5 551.4 46.5C551.4 46.6 551.4 46.6 551.3 46.7L549.2 45C549 45.2 549 45.4 549 45.6C549 45.9 549.1 46.1 549.4 46.3C549.5 46.5 549.7 46.5 549.8 46.6C550 46.6 550.1 46.6 550.3 46.5L550.9 47C550.6 47.2 550.3 47.3 550 47.3C549.6 47.3 549.3 47.1 548.9 46.9C548.6 46.6 548.4 46.4 548.3 46.1C548.2 45.7 548.1 45.4 548.2 45.1C548.2 44.8 548.4 44.5 548.6 44.2C548.8 43.9 549.1 43.7 549.4 43.6ZM550.1 44.2C549.9 44.2 549.7 44.3 549.6 44.5L551 45.6C551.1 45.4 551.2 45.2 551.2 45C551.2 44.8 551.1 44.6 550.8 44.4C550.6 44.2 550.3 44.2 550.1 44.2Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M518.7 42.1L516.6 43.7L517.4 44.8L519.4 43.3L519.8 43.8L517.9 45.4L518.8 46.6L521 44.9L521.4 45.5L519.3 47.2L519.3 47.2L518.5 47.8L515.4 43.7L518.2 41.5L518.7 42.1Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M555.2 45.3L554.5 46L553.8 45.3L554.5 44.6L555.2 45.3Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M546.4 40.9L546.1 41.5C546.3 41.4 546.5 41.3 546.7 41.3C547 41.2 547.3 41.3 547.6 41.4C547.9 41.6 548.2 41.9 548.2 42.2C548.3 42.5 548.3 42.8 548.1 43.1L547 45.3L546.2 44.9L547.2 42.9C547.3 42.7 547.4 42.5 547.3 42.3C547.3 42.2 547.2 42 547 41.9C546.8 41.9 546.6 41.8 546.4 41.8C546.3 41.8 546.1 41.9 546 42C545.8 42.1 545.7 42.2 545.6 42.4L544.7 44.1L543.9 43.7L545.6 40.5L546.4 40.9Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M523 42.5L525.1 43.5L524.2 44L522.9 43.3L522.6 44.8L521.8 45.3L522.2 42.9L520.2 42L521.1 41.5L522.3 42.2L522.5 40.8L523.4 40.3L523 42.5Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M526.7 39.1C527 39 527.3 39 527.6 39.1C527.8 39.2 528.1 39.3 528.3 39.6C528.5 39.8 528.7 40.1 528.8 40.4C528.9 40.8 528.9 41.2 528.9 41.5C528.8 41.8 528.7 42 528.5 42.3C528.3 42.5 528.1 42.7 527.7 42.8C527.4 42.9 527.1 42.9 526.9 42.8C526.7 42.7 526.5 42.6 526.4 42.4L527 44.4L526.2 44.7L524.7 39.8L525.5 39.6L525.7 40.1C525.7 39.9 525.8 39.8 525.9 39.6C526.1 39.4 526.4 39.2 526.7 39.1ZM527.4 40C527.2 39.9 526.9 39.8 526.6 39.9C526.4 40 526.2 40.2 526.1 40.4C525.9 40.6 525.9 40.9 526.1 41.3C526.2 41.6 526.3 41.9 526.6 42C526.8 42.2 527 42.2 527.3 42.1C527.6 42 527.8 41.9 527.9 41.6C528 41.4 528 41.1 527.9 40.7C527.8 40.4 527.6 40.1 527.4 40Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M540.2 38.9C540.5 38.8 540.8 38.8 541.2 38.9C541.6 39 541.9 39.1 542.1 39.3C542.3 39.5 542.4 39.8 542.5 40.1C542.6 40.4 542.6 40.7 542.5 41.1C542.5 41.1 542.5 41.2 542.4 41.3C542.4 41.3 542.4 41.4 542.4 41.4L539.7 40.7C539.7 41 539.7 41.2 539.8 41.4C539.9 41.6 540.1 41.8 540.5 41.9C540.6 41.9 540.8 41.9 541 41.9C541.1 41.9 541.3 41.8 541.4 41.7L542.2 41.9C542 42.2 541.7 42.4 541.4 42.5C541.1 42.6 540.7 42.7 540.3 42.5C539.9 42.4 539.6 42.3 539.4 42.1C539.1 41.8 539 41.6 538.9 41.2C538.8 40.9 538.8 40.6 538.9 40.2C539 39.9 539.2 39.6 539.4 39.3C539.6 39.1 539.9 38.9 540.2 38.9ZM541 39.5C540.7 39.5 540.5 39.5 540.3 39.7C540.1 39.8 540 39.9 539.9 40.1L541.7 40.6C541.7 40.3 541.7 40.1 541.6 39.9C541.5 39.7 541.3 39.6 541 39.5Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M537.3 38.2L537.2 38.9C537.3 38.7 537.5 38.5 537.6 38.4C537.9 38.3 538.1 38.2 538.4 38.2C538.5 38.2 538.6 38.3 538.6 38.3L538.5 39.1C538.5 39.1 538.5 39.1 538.4 39.1C538.4 39.1 538.3 39.1 538.3 39.1C537.9 39 537.7 39.1 537.5 39.2C537.3 39.4 537.2 39.6 537.1 39.9L536.9 41.8L536.1 41.7L536.4 38.1L537.3 38.2Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M530.9 41.9L530 42.1L529.1 37L530 36.8L530.9 41.9Z' fill='%23B1D354'%3E%3C/path%3E%3Cpath d='M533.3 38C533.7 38 534.1 38.1 534.4 38.2C534.6 38.4 534.9 38.6 535.1 38.9C535.2 39.1 535.3 39.5 535.3 39.8C535.3 40.2 535.3 40.5 535.1 40.8C535 41.1 534.8 41.4 534.5 41.5C534.2 41.7 533.9 41.8 533.5 41.8C533.1 41.8 532.7 41.8 532.4 41.6C532.1 41.5 531.9 41.2 531.7 41C531.6 40.7 531.5 40.4 531.5 40C531.4 39.6 531.5 39.3 531.7 39C531.8 38.7 532 38.5 532.3 38.3C532.6 38.1 532.9 38 533.3 38ZM533.4 38.8C533.1 38.8 532.8 38.9 532.6 39.1C532.5 39.3 532.4 39.6 532.4 39.9C532.4 40.2 532.5 40.4 532.5 40.6C532.6 40.7 532.8 40.9 532.9 41C533.1 41.1 533.2 41.1 533.4 41.1C533.6 41.1 533.8 41 533.9 40.9C534.1 40.8 534.2 40.7 534.3 40.5C534.4 40.3 534.4 40.1 534.4 39.9C534.4 39.5 534.3 39.2 534.1 39C533.9 38.8 533.6 38.7 533.4 38.8Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23B1D354'%3E%3C/path%3E%3C/g%3E%3Crect x='323' y='260' width='118' height='50' rx='4' fill='url(%23pattern5_514_1247)'%3E%3C/rect%3E%3Crect x='323' y='260' width='118' height='50' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Cg clip-path='url(%23clip1_514_1247)'%3E%3Crect x='389' y='193' width='66' height='66' rx='4' fill='%23EFF2E6'%3E%3C/rect%3E%3Cpath d='M413.1 213.7C413.3 213.7 413.5 213.9 413.6 214.2C413.8 214.8 414.5 215.3 415.2 215.3C416.1 215.3 416.8 214.7 416.9 213.8C416.9 213.7 417 213.7 417.1 213.7H418.6C418.9 213.7 419.1 213.9 419.2 214.2C419.4 214.8 420 215.3 420.8 215.3C421.5 215.3 422.2 214.8 422.4 214.2C422.5 213.9 422.7 213.7 422.9 213.7H424.2C424.4 213.7 424.7 213.9 424.7 214.2C424.9 214.7 425.3 215.1 425.8 215.3C426.1 215.3 426.3 215.6 426.3 215.8V217.1C426.3 217.3 426.1 217.5 425.8 217.6C425.2 217.8 424.7 218.5 424.7 219.2C424.7 220.1 425.3 220.8 426.2 220.9C426.3 220.9 426.3 221 426.3 221.1V222.6C426.3 222.9 426.1 223.1 425.8 223.2C425.2 223.4 424.7 224 424.7 224.8C424.7 225.5 425.2 226.2 425.8 226.4C426.1 226.5 426.3 226.7 426.3 226.9V228.2C426.3 228.4 426.1 228.7 425.8 228.7C425.3 228.9 424.9 229.3 424.7 229.8C424.7 230.1 424.4 230.3 424.2 230.3H422.9C422.7 230.3 422.5 230.1 422.4 229.8C422.2 229.2 421.5 228.7 420.8 228.7C419.9 228.7 419.2 229.3 419.1 230.2C419.1 230.3 419 230.3 418.9 230.3H417.4C417.1 230.3 416.9 230.1 416.8 229.8C416.6 229.2 416 228.7 415.2 228.7C414.5 228.7 413.8 229.2 413.6 229.8C413.5 230.1 413.3 230.3 413.1 230.3H411.8C411.6 230.3 411.3 230.1 411.3 229.8C411.1 229.3 410.7 228.9 410.2 228.7C409.9 228.7 409.7 228.4 409.7 228.2V226.9C409.7 226.7 409.9 226.5 410.2 226.4C410.8 226.2 411.3 225.5 411.3 224.8C411.3 223.9 410.7 223.2 409.8 223.1C409.7 223.1 409.7 223 409.7 222.9V221.4C409.7 221.1 409.9 220.9 410.2 220.8C410.8 220.6 411.3 220 411.3 219.2C411.3 218.5 410.8 217.8 410.2 217.6C409.9 217.5 409.7 217.3 409.7 217.1V215.8C409.7 215.6 409.9 215.3 410.2 215.3C410.7 215.1 411.1 214.7 411.3 214.2C411.3 213.9 411.6 213.7 411.8 213.7H413.1ZM416.4 222.6C416.1 222 415.3 222 415 222.6L414 224.3C413.6 224.8 414 225.5 414.7 225.5H416.7C417.4 225.5 417.8 224.8 417.4 224.3L416.4 222.6ZM420.2 219.8C419.9 219.3 419.2 219.3 418.8 219.8L417.5 222C417.3 222.2 417.3 222.6 417.4 222.8L418.8 225.1C418.9 225.4 419.2 225.5 419.5 225.5H422.4C423 225.5 423.4 224.8 423.1 224.3L420.2 219.8ZM415.8 218.7C415.1 218.7 414.5 219.2 414.5 219.9C414.5 220.6 415.1 221.2 415.8 221.2C416.5 221.2 417 220.6 417 219.9C417 219.2 416.5 218.7 415.8 218.7Z' fill='%23DBDECF'%3E%3C/path%3E%3C/g%3E%3Crect x='389.5' y='193.5' width='57' height='57' rx='3.5' stroke='%2383868C' stroke-opacity='0.3'%3E%3C/rect%3E%3Crect x='456' y='251' width='57' height='57' rx='4' fill='url(%23pattern6_514_1247)'%3E%3C/rect%3E%3Crect x='456' y='251' width='57' height='57' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Crect x='390' y='319' width='57' height='57' rx='4' fill='url(%23pattern7_514_1247)'%3E%3C/rect%3E%3Crect x='390' y='319' width='57' height='57' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Cg clip-path='url(%23clip2_514_1247)'%3E%3Crect x='523' y='128' width='57' height='56' fill='url(%23pattern8_514_1247)'%3E%3C/rect%3E%3C/g%3E%3Crect x='525' y='259' width='57' height='57' rx='4' fill='url(%23pattern9_514_1247)'%3E%3C/rect%3E%3Crect x='525' y='259' width='57' height='57' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Crect x='324' y='319' width='57' height='57' rx='4' fill='url(%23pattern10_514_1247)'%3E%3C/rect%3E%3Crect x='324' y='319' width='57' height='57' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Crect x='525' y='193' width='57' height='57' rx='4' fill='url(%23pattern11_514_1247)'%3E%3C/rect%3E%3Crect x='525' y='193' width='57' height='57' rx='4' stroke='%23232B38'%3E%3C/rect%3E%3Cpath d='M95.5 45.5L95.5 122.5C95.5 126.1 92.6 129 89 129C85.4 129 82.5 126.1 82.5 122.5L82.5 45.5C82.5 41.9 85.4 39 89 39C92.6 39 95.5 41.9 95.5 45.5Z' fill='black'%3E%3C/path%3E%3Cpath d='M95.5 45.5L95.5 122.5C95.5 126.1 92.6 129 89 129C85.4 129 82.5 126.1 82.5 122.5L82.5 45.5C82.5 41.9 85.4 39 89 39C92.6 39 95.5 41.9 95.5 45.5Z' stroke='%23F4F6EC'%3E%3C/path%3E%3Cg clip-path='url(%23clip3_514_1247)'%3E%3Cpath d='M89 40.5C91.8 40.5 94 42.7 94 45.5C94 48.3 91.8 50.5 89 50.5C86.2 50.5 84 48.3 84 45.5C84 42.7 86.2 40.5 89 40.5Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M93.2 47.2C93.2 47.3 93.1 47.5 93 47.6C92.9 47.8 92.8 47.9 92.7 47.9C92.5 48 92.3 48 92.2 48C92 48 91.9 47.9 91.7 47.8C91.6 47.6 91.5 47.5 91.5 47.3C91.5 47.2 91.5 47 91.6 46.8C91.6 46.7 91.7 46.6 91.9 46.5C92 46.4 92.2 46.3 92.3 46.3C92.6 46.3 92.8 46.4 92.9 46.6C93.1 46.7 93.2 46.9 93.2 47.2ZM92.8 45.5C92.8 45.6 92.7 45.8 92.6 45.9C92.6 46 92.5 46 92.4 46.1C92.3 46.1 92.1 46.2 92 46.1C91.9 46.1 91.8 46 91.7 46C91.6 45.9 91.5 45.8 91.5 45.6C91.5 45.5 91.5 45.4 91.5 45.3C91.6 45.2 91.7 45.1 91.8 45C91.9 44.9 92 44.9 92.1 44.9C92.3 44.9 92.5 45 92.6 45.1C92.7 45.2 92.8 45.4 92.8 45.5ZM92.1 44.3C92.1 44.4 92.1 44.5 92.1 44.5C92 44.6 91.9 44.6 91.9 44.7C91.8 44.7 91.7 44.7 91.6 44.7C91.5 44.7 91.5 44.6 91.4 44.6C91.4 44.5 91.3 44.4 91.3 44.4C91.3 44.3 91.3 44.2 91.3 44.1C91.4 44.1 91.4 44 91.5 43.9C91.5 43.9 91.6 43.9 91.7 43.9C91.8 43.9 91.9 43.9 92 44C92.1 44.1 92.1 44.2 92.1 44.3ZM91.5 43.4C91.5 43.5 91.5 43.6 91.4 43.7C91.4 43.7 91.3 43.8 91.2 43.8C91.2 43.8 91.1 43.9 91 43.8C90.9 43.8 90.8 43.8 90.8 43.7C90.7 43.7 90.7 43.6 90.7 43.5C90.7 43.4 90.7 43.4 90.7 43.3C90.7 43.2 90.8 43.1 90.9 43.1C90.9 43 91 43 91.1 43C91.2 43 91.3 43.1 91.4 43.1C91.5 43.2 91.5 43.3 91.5 43.4ZM89 46.6C89 46.7 89 46.8 89.1 47C89.2 47.1 89.2 47.2 89.3 47.3C89.5 47.4 89.6 47.5 89.7 47.5C89.9 47.6 90 47.6 90.2 47.6C90.4 47.5 90.7 47.4 90.8 47.2C91 47 91.1 46.8 91.1 46.5L91.1 45.5C91.1 44.9 90.9 44.4 90.6 43.9C90.2 43.5 89.8 43.2 89.3 43C89.1 43 88.8 43 88.7 43.1C88.3 43.3 87.9 43.4 87.4 43.4C87 43.4 86.6 43.3 86.3 43.1C86.2 43 86 43 85.9 43C85.8 43 85.6 43.1 85.5 43.1C85.3 43.3 85.1 43.5 84.9 43.8C84.8 44.1 84.8 44.4 84.9 44.7C84.9 45 85 45.2 85.2 45.4C85.3 45.5 85.5 45.7 85.7 45.8C86 45.9 86.2 45.9 86.4 45.9C86.7 45.8 86.9 45.8 87.1 45.6C87.3 45.5 87.5 45.5 87.8 45.5C87.8 45.5 89 45.4 89 46.6Z' fill='%230E1219'%3E%3C/path%3E%3C/g%3E%3Cpath d='M84.9 57.8C84.9 57.3 85 56.9 85.1 56.5C85.2 56.2 85.4 55.8 85.6 55.5C85.8 55.3 86.1 55.1 86.3 54.9C86.6 54.7 87 54.7 87.3 54.7L87.3 56.2C87.1 56.2 87 56.2 86.8 56.3C86.6 56.4 86.5 56.5 86.4 56.6C86.3 56.8 86.2 57 86.1 57.2C86.1 57.4 86.1 57.6 86.1 57.9C86.1 58.3 86.1 58.6 86.3 58.8C86.4 59.1 86.7 59.2 86.9 59.2C87.1 59.2 87.3 59.1 87.4 59C87.6 58.9 87.7 58.7 87.8 58.4L88.3 57.2C88.5 56.7 88.7 56.3 89 56C89.3 55.8 89.6 55.7 90.1 55.7C90.5 55.7 90.9 55.8 91.3 56C91.6 56.2 91.9 56.6 92 57C92.2 57.4 92.3 57.9 92.3 58.5C92.3 58.9 92.3 59.2 92.2 59.6C92.1 59.9 91.9 60.2 91.7 60.4C91.5 60.7 91.3 60.8 91 61C90.8 61.1 90.5 61.2 90.1 61.2L90.1 59.7C90.3 59.7 90.5 59.6 90.7 59.5C90.8 59.4 91 59.2 91 59C91.1 58.8 91.2 58.6 91.2 58.3C91.2 58.1 91.1 57.9 91.1 57.7C91 57.5 90.9 57.4 90.8 57.3C90.7 57.2 90.6 57.1 90.4 57.1C90.2 57.1 90.1 57.2 89.9 57.3C89.8 57.4 89.7 57.6 89.6 57.9L89.2 59C88.9 59.6 88.7 60 88.4 60.3C88.1 60.5 87.7 60.7 87.3 60.7C86.8 60.7 86.4 60.5 86 60.3C85.7 60.1 85.4 59.7 85.2 59.3C85 58.9 84.9 58.4 84.9 57.8ZM85 60.9L92.2 62.6L92.2 64.1L85 62.5L85 60.9ZM85 64.6L86.2 64.8L86.2 66.9C86.2 67.3 86.3 67.6 86.4 67.9C86.6 68.2 86.8 68.5 87 68.8C87.3 69 87.6 69.2 87.9 69.3C88.3 69.4 88.6 69.5 89 69.5C89.4 69.5 89.8 69.4 90.1 69.3C90.4 69.2 90.6 69 90.8 68.7C90.9 68.4 91 68.1 91 67.7L91 65.8L92.2 66.1L92.2 67.8C92.2 68.5 92.1 69.1 91.8 69.6C91.5 70 91.2 70.4 90.7 70.7C90.2 70.9 89.7 71.1 89.1 71.1C88.5 71.1 88 71 87.5 70.7C87 70.5 86.5 70.2 86.2 69.8C85.8 69.4 85.5 69 85.3 68.5C85.1 67.9 85 67.4 85 66.8L85 64.6ZM85 63.5L92.2 65.1L92.2 66.7L85 65L85 63.5ZM85 71L92.2 72.7L92.2 74.2L85 72.6L85 71ZM85 71.8L86.2 72L86.2 76.7L85 76.4L85 71.8ZM88.1 72.5L89.3 72.7L89.3 77L88.1 76.8L88.1 72.5ZM91 73.1L92.2 73.4L92.2 77.9L91 77.7L91 73.1ZM85 79L92.2 78.6L92.2 80.1L85.6 80.3L85.6 79.8L92.2 82.8L92.2 84.6L85.6 84.5L85.6 84L92.2 87.2L92.2 88.8L85 85.1L85 83.4L91.5 83.3L91.5 83.7L85 80.7L85 79ZM85 86.6L92.2 90.8L92.2 92.3L85 88.2L85 86.6ZM85 92L92.2 91.2L92.2 92.5L85 93.5L85 92ZM87.8 88.6L87.8 92.6L86.6 92.4L86.6 88.3L87.8 88.6ZM85 94.2L92.2 95.9L92.2 97.4L85 95.8L85 94.2ZM85 94.9L86.2 95.2L86.2 99.5L85 99.2L85 94.9ZM85 100.1L92.2 101.8L92.2 103.3L85 101.7L85 100.1ZM88.6 101.8L92.2 105.9L92.2 108.1L88.7 103.9L88.6 101.8ZM85 104.8L88.7 102.2L88.7 103.9L85 106.7L85 104.8ZM85 107.3L92.2 109L92.2 110.5L85 108.9L85 107.3ZM85 108.1L86.2 108.3L86.2 113L85 112.7L85 108.1ZM88.1 108.8L89.3 109L89.3 113.3L88.1 113.1L88.1 108.8ZM91 109.5L92.2 109.7L92.2 114.2L91 114L91 109.5ZM85 113.5L92.2 115.2L92.2 118.3C92.2 118.7 92.1 119.1 92 119.5C91.8 119.8 91.6 120.1 91.3 120.2C91 120.4 90.6 120.5 90.2 120.5C89.8 120.5 89.4 120.4 89.1 120.1C88.7 119.9 88.5 119.6 88.3 119.2C88.1 118.7 88 118.3 88 117.8L88 115.4L89.1 115.7L89.1 117.8C89.1 118.1 89.1 118.3 89.2 118.4C89.3 118.6 89.5 118.8 89.6 118.9C89.8 119 90 119 90.2 119C90.5 119 90.7 118.9 90.8 118.8C90.9 118.6 91 118.4 91 118.1L91 116.4L85 115L85 113.5ZM85 117.7L88.7 115.7L88.7 117.2L85 119.6L85 117.7Z' fill='white'%3E%3C/path%3E%3Cpath d='M80.9 159.9C80.9 159.4 81 159 81.2 158.5C81.4 158.1 81.6 157.8 81.9 157.5C82.3 157.2 82.7 156.9 83.1 156.8C83.6 156.6 84.1 156.5 84.6 156.5C85.1 156.5 85.6 156.6 86.1 156.8C86.5 156.9 86.9 157.2 87.3 157.5C87.6 157.8 87.8 158.1 88 158.5C88.2 159 88.3 159.4 88.3 159.9C88.3 160.4 88.2 160.9 88 161.4C87.8 161.8 87.4 162.1 87 162.4C86.6 162.7 86.2 162.9 85.6 162.9L85.6 162.1C86.2 162 86.7 161.8 87 161.4C87.4 161 87.6 160.5 87.6 159.9C87.6 159.4 87.4 158.9 87.2 158.6C86.9 158.2 86.6 157.9 86.1 157.7C85.7 157.4 85.2 157.3 84.6 157.3C84 157.3 83.5 157.4 83.1 157.7C82.6 157.9 82.3 158.2 82 158.6C81.8 158.9 81.6 159.4 81.6 159.9C81.6 160.5 81.8 161 82.2 161.4C82.5 161.8 83 162.1 83.6 162.1L83.6 163C83 162.9 82.6 162.7 82.2 162.4C81.8 162.2 81.5 161.8 81.2 161.4C81 160.9 80.9 160.5 80.9 159.9ZM81 164.2L86.1 164.2L86.1 165L81 165L81 164.2ZM87.3 164.1L88.2 164.1L88.2 165L87.3 165L87.3 164.1ZM80.9 168.6C80.9 168 81 167.6 81.3 167.3C81.6 167.1 81.9 167 82.4 167L87.3 167L87.6 167.8L82.4 167.8C82.1 167.8 81.9 167.8 81.8 168C81.7 168.1 81.6 168.4 81.6 168.7C81.6 168.8 81.6 168.9 81.6 169C81.6 169.1 81.7 169.2 81.7 169.3L81 169.3C81 169.2 81 169.1 80.9 169C80.9 168.9 80.9 168.7 80.9 168.6ZM85.4 165.9L86.1 165.9L86.1 169.3L85.4 169.3L85.4 165.9ZM79 170.9L81.6 172L81.9 172.2L86.1 173.8L86.1 174.7L79 171.7L79 170.9ZM81 172.1L86.1 169.8L86.1 170.7L81.5 172.6L81 172.1ZM83.3 175L84.1 175L84.1 178.5L83.3 178.5L83.3 175ZM81 180.1L88.2 180.1L88.2 180.9L81 180.9L81 180.1ZM81 183.7L84.3 183.7C84.7 183.7 85 183.6 85.2 183.4C85.4 183.2 85.5 183 85.5 182.6C85.5 182.2 85.4 181.9 85.3 181.7C85.1 181.4 84.9 181.2 84.7 181.1C84.4 180.9 84.1 180.9 83.8 180.9L85 180.7C85.4 180.9 85.7 181.2 85.9 181.5C86.1 181.9 86.2 182.3 86.2 182.8C86.2 183.3 86 183.7 85.7 184C85.4 184.4 85 184.5 84.6 184.5L81 184.5L81 183.7ZM80.9 188.2C80.9 187.7 81 187.2 81.3 186.9C81.5 186.5 81.8 186.2 82.2 186C82.6 185.8 83.1 185.7 83.6 185.7C84.1 185.7 84.5 185.8 84.9 186C85.3 186.2 85.6 186.5 85.9 186.9C86.1 187.2 86.2 187.7 86.2 188.2C86.2 188.7 86.1 189.1 85.9 189.5C85.6 189.9 85.3 190.2 84.9 190.4C84.5 190.6 84.1 190.7 83.6 190.7C83.1 190.7 82.6 190.6 82.2 190.4C81.8 190.2 81.5 189.9 81.3 189.5C81 189.1 80.9 188.7 80.9 188.2ZM81.6 188.2C81.6 188.5 81.7 188.8 81.8 189.1C82 189.3 82.2 189.5 82.5 189.7C82.8 189.8 83.2 189.9 83.6 189.9C84.2 189.9 84.6 189.7 85 189.4C85.3 189.1 85.5 188.7 85.5 188.2C85.5 187.7 85.3 187.3 85 186.9C84.6 186.6 84.2 186.5 83.6 186.5C83.2 186.5 82.8 186.5 82.5 186.7C82.2 186.8 82 187 81.8 187.3C81.7 187.5 81.6 187.8 81.6 188.2ZM80.9 194.4C80.9 193.9 81 193.5 81.3 193.2C81.5 192.9 81.8 192.7 82.3 192.5L82.3 192.7L79 192.7L79 191.9L86.1 191.9L86.1 192.6L84.9 192.6L84.9 192.5C85.3 192.7 85.6 192.9 85.9 193.3C86.1 193.6 86.2 194 86.2 194.5C86.2 194.9 86.1 195.3 85.9 195.7C85.7 196 85.3 196.3 85 196.5C84.6 196.6 84.1 196.7 83.6 196.7C83 196.7 82.6 196.6 82.2 196.4C81.8 196.3 81.5 196 81.2 195.6C81 195.3 80.9 194.9 80.9 194.4ZM81.6 194.3C81.6 194.8 81.8 195.2 82.1 195.5C82.5 195.8 83 195.9 83.6 195.9C84.2 195.9 84.6 195.8 85 195.5C85.3 195.2 85.5 194.8 85.5 194.3C85.5 193.8 85.3 193.4 85 193.1C84.6 192.8 84.1 192.7 83.5 192.7C82.9 192.7 82.5 192.8 82.1 193.1C81.8 193.4 81.6 193.8 81.6 194.3ZM80.9 200.5C80.9 200 81 199.6 81.3 199.3C81.5 198.9 81.8 198.7 82.3 198.6L82.3 198.8L79 198.8L79 198L86.1 198L86.1 198.7L84.9 198.7L84.9 198.6C85.3 198.7 85.6 199 85.9 199.3C86.1 199.7 86.2 200.1 86.2 200.6C86.2 201 86.1 201.4 85.9 201.7C85.7 202.1 85.3 202.3 85 202.5C84.6 202.7 84.1 202.8 83.6 202.8C83 202.8 82.6 202.7 82.2 202.5C81.8 202.3 81.5 202 81.2 201.7C81 201.4 80.9 200.9 80.9 200.5ZM81.6 200.4C81.6 200.9 81.8 201.3 82.1 201.6C82.5 201.8 83 202 83.6 202C84.2 202 84.6 201.8 85 201.6C85.3 201.3 85.5 200.9 85.5 200.4C85.5 199.9 85.3 199.5 85 199.2C84.6 198.9 84.1 198.7 83.5 198.7C82.9 198.7 82.5 198.9 82.1 199.2C81.8 199.5 81.6 199.9 81.6 200.4ZM81 204L86.1 204L86.1 204.8L81 204.8L81 204ZM87.3 203.9L88.2 203.9L88.2 204.9L87.3 204.9L87.3 203.9ZM81 206.4L86.1 206.4L86.1 207.2L84.9 207.2L84.9 207.2L81 207.2L81 206.4ZM81 210.1L84.3 210.1C84.7 210.1 85 210 85.2 209.8C85.4 209.6 85.5 209.3 85.5 208.9C85.5 208.6 85.4 208.3 85.3 208C85.1 207.8 84.9 207.6 84.7 207.4C84.4 207.3 84.1 207.2 83.8 207.2L85 207.1C85.4 207.3 85.7 207.5 85.9 207.9C86.1 208.2 86.2 208.6 86.2 209.1C86.2 209.6 86 210 85.7 210.4C85.4 210.7 85 210.9 84.6 210.9L81 210.9L81 210.1ZM78.9 214.4C78.9 213.8 79 213.3 79.3 212.9C79.6 212.5 79.9 212.3 80.4 212.2L80.4 212.9C80.1 213 79.9 213.2 79.8 213.4C79.6 213.7 79.5 214 79.5 214.5C79.5 215 79.7 215.4 80 215.7C80.2 215.9 80.7 216.1 81.2 216.1L82.3 216.1L82.3 216.2C81.9 216 81.6 215.8 81.3 215.5C81.1 215.1 81 214.7 81 214.3C81 213.8 81.1 213.4 81.3 213.1C81.5 212.7 81.8 212.5 82.2 212.3C82.6 212.1 83.1 212 83.6 212C84.1 212 84.6 212.1 85 212.3C85.3 212.5 85.6 212.8 85.9 213.1C86.1 213.5 86.2 213.9 86.2 214.3C86.2 214.8 86.1 215.2 85.8 215.5C85.6 215.9 85.3 216.1 84.8 216.2L84.8 216.1L86.1 216.1L86.1 216.9L81.2 216.9C80.5 216.9 79.9 216.6 79.5 216.2C79.1 215.8 78.9 215.2 78.9 214.4ZM81.7 214.5C81.7 215 81.9 215.4 82.2 215.7C82.6 215.9 83 216.1 83.6 216.1C84.2 216.1 84.7 215.9 85 215.7C85.3 215.4 85.5 215 85.5 214.5C85.5 214 85.3 213.6 85 213.3C84.7 213 84.2 212.8 83.6 212.8C83 212.8 82.5 213 82.2 213.3C81.9 213.6 81.7 214 81.7 214.5ZM81 220.9L86.8 220.9C87.3 220.9 87.7 221 87.9 221.3C88.2 221.6 88.3 222 88.3 222.5C88.3 222.7 88.3 222.8 88.3 222.8C88.3 222.9 88.3 223 88.2 223L87.6 223C87.6 223 87.6 222.9 87.6 222.8C87.7 222.8 87.7 222.7 87.7 222.6C87.7 222.3 87.6 222 87.4 221.9C87.3 221.8 87.1 221.7 86.8 221.7L81 221.7L81 220.9ZM85.4 219.8L86.1 219.8L86.1 222.9L85.4 222.9L85.4 219.8ZM80.9 225.9C80.9 225.4 81 225 81.3 224.6C81.5 224.2 81.8 223.9 82.2 223.7C82.6 223.5 83.1 223.4 83.6 223.4C84.1 223.4 84.5 223.5 84.9 223.7C85.3 223.9 85.6 224.2 85.9 224.6C86.1 225 86.2 225.4 86.2 225.9C86.2 226.4 86.1 226.9 85.9 227.2C85.6 227.6 85.3 227.9 84.9 228.1C84.5 228.3 84.1 228.4 83.6 228.4C83.1 228.4 82.6 228.3 82.2 228.1C81.8 227.9 81.5 227.6 81.3 227.2C81 226.9 80.9 226.4 80.9 225.9ZM81.6 225.9C81.6 226.3 81.7 226.6 81.8 226.8C82 227.1 82.2 227.3 82.5 227.4C82.8 227.6 83.2 227.6 83.6 227.6C84.2 227.6 84.6 227.5 85 227.2C85.3 226.8 85.5 226.4 85.5 225.9C85.5 225.4 85.3 225 85 224.7C84.6 224.4 84.2 224.2 83.6 224.2C83.2 224.2 82.8 224.3 82.5 224.4C82.2 224.6 82 224.8 81.8 225C81.7 225.3 81.6 225.6 81.6 225.9ZM81 229.6L86.1 229.6L86.1 230.4L84.8 230.4L84.8 230.4L81 230.4L81 229.6ZM83.7 230.4L84.9 230.3C85.3 230.4 85.6 230.6 85.9 231C86.1 231.3 86.2 231.6 86.2 232C86.2 232.2 86.2 232.3 86.2 232.4L85.4 232.4C85.4 232.3 85.4 232.3 85.4 232.2C85.4 232.2 85.4 232.1 85.4 232C85.4 231.5 85.3 231.1 85 230.8C84.7 230.6 84.2 230.4 83.7 230.4ZM80.9 237.1C80.9 236.7 81 236.4 81.1 236.2C81.2 235.9 81.4 235.7 81.7 235.6C81.9 235.4 82.2 235.3 82.6 235.3L86.1 235.3L86.1 236.1L82.8 236.1C82.4 236.1 82.1 236.2 81.9 236.4C81.7 236.6 81.6 236.9 81.6 237.2C81.6 237.6 81.7 237.8 81.8 238.1C82 238.3 82.2 238.5 82.4 238.7C82.7 238.8 83 238.9 83.3 238.9L82.1 239C81.8 238.8 81.5 238.6 81.2 238.2C81 237.9 80.9 237.5 80.9 237.1ZM81 238.9L82.2 238.9L82.2 238.9L86.1 238.9L86.1 239.7L81 239.7L81 238.9ZM81 241.3L86.1 241.3L86.1 242L84.9 242L84.9 242.1L81 242.1L81 241.3ZM81 244.9L84.3 244.9C84.7 244.9 85 244.8 85.2 244.6C85.4 244.4 85.5 244.2 85.5 243.8C85.5 243.4 85.4 243.2 85.3 242.9C85.1 242.6 84.9 242.4 84.7 242.3C84.4 242.2 84.1 242.1 83.8 242.1L85 242C85.4 242.1 85.7 242.4 85.9 242.7C86.1 243.1 86.2 243.5 86.2 244C86.2 244.5 86 244.9 85.7 245.2C85.4 245.6 85 245.7 84.6 245.7L81 245.7L81 244.9ZM81 247.6L86.8 247.6C87.3 247.6 87.7 247.7 87.9 248C88.2 248.2 88.3 248.6 88.3 249.2C88.3 249.3 88.3 249.4 88.3 249.5C88.3 249.6 88.3 249.6 88.2 249.7L87.6 249.7C87.6 249.7 87.6 249.6 87.6 249.5C87.7 249.4 87.7 249.3 87.7 249.2C87.7 248.9 87.6 248.7 87.4 248.6C87.3 248.4 87.1 248.4 86.8 248.4L81 248.4L81 247.6ZM85.4 246.5L86.1 246.5L86.1 249.6L85.4 249.6L85.4 246.5ZM80.9 252.6C80.9 252.1 81 251.7 81.3 251.3C81.5 250.9 81.8 250.6 82.2 250.4C82.6 250.2 83.1 250.1 83.6 250.1C84.1 250.1 84.5 250.2 84.9 250.4C85.3 250.6 85.6 250.9 85.9 251.3C86.1 251.7 86.2 252.1 86.2 252.6C86.2 253.1 86.1 253.5 85.9 253.9C85.6 254.3 85.3 254.6 84.9 254.8C84.5 255 84.1 255.1 83.6 255.1C83.1 255.1 82.6 255 82.2 254.8C81.8 254.6 81.5 254.3 81.3 253.9C81 253.5 80.9 253.1 80.9 252.6ZM81.6 252.6C81.6 252.9 81.7 253.2 81.8 253.5C82 253.7 82.2 253.9 82.5 254.1C82.8 254.2 83.2 254.3 83.6 254.3C84.2 254.3 84.6 254.1 85 253.8C85.3 253.5 85.5 253.1 85.5 252.6C85.5 252.1 85.3 251.7 85 251.4C84.6 251 84.2 250.9 83.6 250.9C83.2 250.9 82.8 251 82.5 251.1C82.2 251.2 82 251.4 81.8 251.7C81.7 252 81.6 252.3 81.6 252.6ZM81 256.3L86.1 256.3L86.1 257.1L84.8 257.1L84.8 257.1L81 257.1L81 256.3ZM83.7 257.1L84.9 257C85.3 257.1 85.6 257.3 85.9 257.6C86.1 257.9 86.2 258.3 86.2 258.7C86.2 258.8 86.2 259 86.2 259L85.4 259C85.4 259 85.4 258.9 85.4 258.9C85.4 258.8 85.4 258.7 85.4 258.7C85.4 258.2 85.3 257.8 85 257.5C84.7 257.2 84.2 257.1 83.7 257.1ZM78.9 261.9C78.9 261.3 79 260.8 79.3 260.4C79.6 260 79.9 259.8 80.4 259.7L80.4 260.4C80.1 260.5 79.9 260.7 79.8 260.9C79.6 261.2 79.5 261.5 79.5 262C79.5 262.5 79.7 262.9 80 263.2C80.2 263.4 80.7 263.6 81.2 263.6L82.3 263.6L82.3 263.7C81.9 263.5 81.6 263.3 81.3 263C81.1 262.6 81 262.2 81 261.8C81 261.3 81.1 260.9 81.3 260.6C81.5 260.2 81.8 260 82.2 259.8C82.6 259.6 83.1 259.5 83.6 259.5C84.1 259.5 84.6 259.6 85 259.8C85.3 260 85.6 260.3 85.9 260.6C86.1 261 86.2 261.4 86.2 261.8C86.2 262.3 86.1 262.7 85.8 263C85.6 263.4 85.3 263.6 84.8 263.7L84.8 263.6L86.1 263.6L86.1 264.4L81.2 264.4C80.5 264.4 79.9 264.1 79.5 263.7C79.1 263.3 78.9 262.7 78.9 261.9ZM81.7 262C81.7 262.5 81.9 262.9 82.2 263.2C82.6 263.4 83 263.6 83.6 263.6C84.2 263.6 84.7 263.4 85 263.2C85.3 262.9 85.5 262.5 85.5 262C85.5 261.5 85.3 261.1 85 260.8C84.7 260.5 84.2 260.3 83.6 260.3C83 260.3 82.5 260.5 82.2 260.8C81.9 261.1 81.7 261.5 81.7 262ZM80.9 268.1C80.9 267.6 81 267.1 81.2 266.8C81.5 266.4 81.8 266.1 82.2 265.9C82.6 265.7 83.1 265.6 83.6 265.6C84.1 265.6 84.5 265.7 84.9 265.9C85.3 266.1 85.7 266.4 85.9 266.8C86.1 267.1 86.2 267.6 86.2 268.1C86.2 268.5 86.1 269 85.9 269.3C85.7 269.7 85.4 269.9 85 270.1C84.6 270.3 84.2 270.4 83.7 270.4C83.6 270.4 83.6 270.4 83.5 270.4C83.5 270.4 83.4 270.4 83.3 270.4L83.3 266.2L84 266.2L84 269.9L83.6 269.6C84.2 269.6 84.7 269.5 85 269.2C85.4 268.9 85.5 268.6 85.5 268.1C85.5 267.6 85.3 267.2 85 266.8C84.6 266.5 84.2 266.4 83.6 266.4C83 266.4 82.5 266.5 82.1 266.8C81.8 267.2 81.6 267.6 81.6 268.1C81.6 268.4 81.7 268.7 81.8 269C81.9 269.2 82.1 269.4 82.4 269.5L82.4 270.3C81.9 270.1 81.6 269.8 81.3 269.4C81 269 80.9 268.6 80.9 268.1ZM80.9 273.6C80.9 273 81 272.6 81.3 272.3C81.6 272.1 81.9 272 82.4 272L87.3 272L87.6 272.8L82.4 272.8C82.1 272.8 81.9 272.8 81.8 273C81.7 273.1 81.6 273.4 81.6 273.7C81.6 273.8 81.6 274 81.6 274C81.6 274.1 81.7 274.2 81.7 274.3L81 274.3C81 274.2 81 274.1 80.9 274C80.9 273.9 80.9 273.7 80.9 273.6ZM85.4 270.9L86.1 270.9L86.1 274.3L85.4 274.3L85.4 270.9ZM80.9 277.5C80.9 277 81 276.6 81.3 276.3C81.6 276 81.9 275.9 82.4 275.9L87.3 275.9L87.6 276.7L82.4 276.7C82.1 276.7 81.9 276.8 81.8 276.9C81.7 277.1 81.6 277.3 81.6 277.7C81.6 277.8 81.6 277.9 81.6 278C81.6 278.1 81.7 278.2 81.7 278.2L81 278.2C81 278.2 81 278.1 80.9 277.9C80.9 277.8 80.9 277.7 80.9 277.5ZM85.4 274.9L86.1 274.9L86.1 278.2L85.4 278.2L85.4 274.9ZM81 282.4C81.1 282.4 81.2 282.3 81.4 282.3C81.5 282.3 81.7 282.3 82 282.3L82 282.3L84.4 282.3C84.8 282.3 85.1 282.2 85.2 282C85.4 281.8 85.5 281.5 85.5 281.2C85.5 280.8 85.4 280.5 85.3 280.2C85.1 280 84.9 279.9 84.6 279.8L84.6 279.1C85.1 279.1 85.5 279.3 85.8 279.7C86.1 280.1 86.2 280.6 86.2 281.2C86.2 281.8 86.1 282.3 85.8 282.6C85.5 282.9 85 283.1 84.4 283.1L82 283.1C81.8 283.1 81.7 283.1 81.5 283.1C81.3 283.1 81.2 283.1 81 283.2L81 282.4ZM80.9 280.6C80.9 280.1 81 279.7 81.3 279.4C81.5 279.1 81.9 278.9 82.3 278.9C82.8 278.9 83.1 279.1 83.4 279.4C83.6 279.7 83.8 280.1 83.9 280.7L84.2 282.5L83.5 282.5L83.3 280.8C83.2 280.5 83.1 280.2 83 280C82.8 279.8 82.6 279.7 82.4 279.7C82.1 279.7 81.9 279.8 81.8 280C81.6 280.1 81.6 280.4 81.6 280.8C81.6 281.2 81.7 281.6 81.9 281.8C82.1 282.1 82.4 282.3 82.7 282.3L82 282.4C81.6 282.3 81.4 282.1 81.2 281.8C81 281.5 80.9 281.1 80.9 280.6ZM80.9 287.1C80.9 286.6 81 286.2 81.3 285.9C81.5 285.6 81.8 285.4 82.3 285.2L82.3 285.3L81 285.3L81 284.6L88.2 284.6L88.2 285.4L84.9 285.4L84.9 285.3C85.3 285.4 85.6 285.6 85.9 286C86.1 286.3 86.2 286.7 86.2 287.2C86.2 287.6 86.1 288 85.9 288.4C85.7 288.7 85.3 289 85 289.2C84.6 289.3 84.1 289.4 83.6 289.4C83 289.4 82.6 289.3 82.2 289.1C81.8 289 81.5 288.7 81.2 288.3C81 288 80.9 287.6 80.9 287.1ZM81.6 287C81.6 287.5 81.8 287.9 82.1 288.2C82.5 288.5 83 288.6 83.6 288.6C84.2 288.6 84.6 288.5 85 288.2C85.3 287.9 85.5 287.5 85.5 287C85.5 286.5 85.3 286.1 85 285.8C84.6 285.5 84.1 285.4 83.5 285.4C82.9 285.4 82.5 285.5 82.1 285.8C81.8 286.1 81.6 286.5 81.6 287ZM81 290.7L88.2 290.7L88.2 291.5L81 291.5L81 290.7ZM80.9 295.2C80.9 294.7 81 294.2 81.2 293.9C81.5 293.5 81.8 293.2 82.2 293C82.6 292.8 83.1 292.7 83.6 292.7C84.1 292.7 84.5 292.8 84.9 293C85.3 293.2 85.7 293.5 85.9 293.9C86.1 294.2 86.2 294.7 86.2 295.2C86.2 295.6 86.1 296.1 85.9 296.4C85.7 296.8 85.4 297 85 297.2C84.6 297.4 84.2 297.5 83.7 297.5C83.6 297.5 83.6 297.5 83.5 297.5C83.5 297.5 83.4 297.5 83.3 297.5L83.3 293.3L84 293.3L84 297L83.6 296.7C84.2 296.7 84.7 296.6 85 296.3C85.4 296 85.5 295.7 85.5 295.2C85.5 294.7 85.3 294.3 85 293.9C84.6 293.6 84.2 293.5 83.6 293.5C83 293.5 82.5 293.6 82.1 293.9C81.8 294.3 81.6 294.7 81.6 295.2C81.6 295.5 81.7 295.8 81.8 296.1C81.9 296.3 82.1 296.5 82.4 296.6L82.4 297.4C81.9 297.2 81.6 296.9 81.3 296.5C81 296.1 80.9 295.7 80.9 295.2ZM80.9 303.2C80.9 302.7 81 302.3 81.3 302C81.5 301.7 81.8 301.5 82.3 301.3L82.3 301.5L81 301.5L81 300.7L88.2 300.7L88.2 301.5L84.9 301.5L84.9 301.4C85.3 301.5 85.6 301.8 85.9 302.1C86.1 302.4 86.2 302.8 86.2 303.3C86.2 303.8 86.1 304.1 85.9 304.5C85.7 304.8 85.3 305.1 85 305.3C84.6 305.5 84.1 305.5 83.6 305.5C83 305.5 82.6 305.5 82.2 305.3C81.8 305.1 81.5 304.8 81.2 304.4C81 304.1 80.9 303.7 80.9 303.2ZM81.6 303.1C81.6 303.6 81.8 304 82.1 304.3C82.5 304.6 83 304.7 83.6 304.7C84.2 304.7 84.6 304.6 85 304.3C85.3 304 85.5 303.6 85.5 303.1C85.5 302.6 85.3 302.2 85 301.9C84.6 301.6 84.1 301.5 83.5 301.5C82.9 301.5 82.5 301.6 82.1 301.9C81.8 302.2 81.6 302.6 81.6 303.1ZM81 306.8L86.1 306.8L86.1 307.6L81 307.6L81 306.8ZM87.3 306.7L88.2 306.7L88.2 307.6L87.3 307.6L87.3 306.7ZM80.9 311.2C80.9 310.6 81 310.2 81.3 309.9C81.6 309.7 81.9 309.6 82.4 309.6L87.3 309.6L87.6 310.4L82.4 310.4C82.1 310.4 81.9 310.4 81.8 310.6C81.7 310.7 81.6 311 81.6 311.3C81.6 311.4 81.6 311.5 81.6 311.6C81.6 311.7 81.7 311.8 81.7 311.9L81 311.9C81 311.8 81 311.7 80.9 311.6C80.9 311.5 80.9 311.3 80.9 311.2ZM85.4 308.5L86.1 308.5L86.1 311.9L85.4 311.9L85.4 308.5ZM80.9 314.9C80.9 314.4 81 314 81.2 313.6C81.5 313.2 81.8 312.9 82.2 312.7C82.6 312.5 83.1 312.4 83.6 312.4C84.1 312.4 84.5 312.5 84.9 312.7C85.3 312.9 85.7 313.2 85.9 313.6C86.1 314 86.2 314.4 86.2 314.9C86.2 315.4 86.1 315.8 85.9 316.1C85.7 316.5 85.4 316.8 85 316.9C84.6 317.1 84.2 317.2 83.7 317.2C83.6 317.2 83.6 317.2 83.5 317.2C83.5 317.2 83.4 317.2 83.3 317.2L83.3 313L84 313L84 316.7L83.6 316.5C84.2 316.5 84.7 316.3 85 316C85.4 315.8 85.5 315.4 85.5 314.9C85.5 314.4 85.3 314 85 313.7C84.6 313.4 84.2 313.2 83.6 313.2C83 313.2 82.5 313.4 82.1 313.7C81.8 314 81.6 314.4 81.6 314.9C81.6 315.3 81.7 315.5 81.8 315.8C81.9 316 82.1 316.2 82.4 316.3L82.4 317.1C81.9 316.9 81.6 316.6 81.3 316.2C81 315.9 80.9 315.4 80.9 314.9ZM80.9 320.2C80.9 319.5 81 319 81.3 318.7C81.6 318.3 82 318.1 82.6 318L82.6 318.8C82.2 318.8 82 319 81.8 319.2C81.6 319.5 81.6 319.8 81.6 320.2C81.6 320.5 81.6 320.8 81.8 321C81.9 321.2 82.1 321.3 82.3 321.3C82.5 321.3 82.7 321.3 82.8 321.2C82.9 321 83 320.8 83.1 320.5L83.3 319.7C83.4 319.2 83.6 318.8 83.9 318.6C84.1 318.4 84.4 318.3 84.8 318.3C85.2 318.3 85.6 318.4 85.8 318.7C86.1 319.1 86.2 319.5 86.2 320.1C86.2 320.6 86.1 321.1 85.8 321.4C85.5 321.8 85.2 322 84.7 322L84.7 321.2C85 321.2 85.2 321.1 85.3 320.9C85.5 320.7 85.5 320.4 85.5 320C85.5 319.7 85.5 319.5 85.4 319.3C85.2 319.1 85.1 319 84.8 319C84.7 319 84.5 319.1 84.4 319.2C84.3 319.3 84.1 319.6 84.1 319.9L83.8 320.7C83.7 321.1 83.5 321.5 83.3 321.7C83 322 82.7 322.1 82.3 322.1C81.9 322.1 81.5 321.9 81.3 321.6C81 321.2 80.9 320.8 80.9 320.2ZM79.6 322.9L80 322.9C80 323.1 80.2 323.2 80.3 323.3C80.5 323.4 80.7 323.4 81 323.4L81 323.7L81 322.9L82 322.9L82 323.9L81.2 323.9C80.8 323.9 80.4 323.8 80.2 323.6C79.9 323.5 79.7 323.2 79.6 322.9ZM81 327.5L88.2 327.5L88.2 328.3L81 328.3L81 327.5ZM81 331.1L84.3 331.1C84.7 331.1 85 331 85.2 330.8C85.4 330.6 85.5 330.3 85.5 330C85.5 329.6 85.4 329.3 85.3 329.1C85.1 328.8 84.9 328.6 84.7 328.5C84.4 328.3 84.1 328.3 83.8 328.3L85 328.1C85.4 328.3 85.7 328.6 85.9 328.9C86.1 329.3 86.2 329.7 86.2 330.1C86.2 330.7 86 331.1 85.7 331.4C85.4 331.7 85 331.9 84.6 331.9L81 331.9L81 331.1ZM81 333.4L86.1 333.4L86.1 334.2L81 334.2L81 333.4ZM87.3 333.4L88.2 333.4L88.2 334.3L87.3 334.3L87.3 333.4ZM81 339.5L82.2 339.5L82.2 339.6C81.8 339.5 81.5 339.3 81.2 338.9C81 338.6 80.9 338.2 80.9 337.7C80.9 337.3 81 336.9 81.2 336.5C81.5 336.2 81.8 335.9 82.2 335.7C82.5 335.5 83 335.4 83.5 335.4C84.1 335.4 84.5 335.5 84.9 335.7C85.3 335.9 85.6 336.2 85.9 336.5C86.1 336.9 86.2 337.3 86.2 337.8C86.2 338.2 86.1 338.6 85.8 339C85.6 339.3 85.3 339.5 84.9 339.6L84.8 339.5L88.2 339.5L88.2 340.3L81 340.3L81 339.5ZM81.6 337.9C81.6 338.4 81.8 338.8 82.1 339.1C82.5 339.4 83 339.5 83.6 339.5C84.2 339.5 84.6 339.4 85 339.1C85.3 338.8 85.5 338.4 85.5 337.9C85.5 337.4 85.3 337 85 336.7C84.6 336.4 84.1 336.3 83.5 336.3C82.9 336.3 82.5 336.4 82.1 336.7C81.8 337 81.6 337.4 81.6 337.9ZM81 345.6L82.2 345.6L82.2 345.7C81.8 345.6 81.5 345.3 81.2 345C81 344.7 80.9 344.3 80.9 343.8C80.9 343.3 81 342.9 81.2 342.6C81.5 342.2 81.8 342 82.2 341.8C82.5 341.6 83 341.5 83.5 341.5C84.1 341.5 84.5 341.6 84.9 341.8C85.3 342 85.6 342.3 85.9 342.6C86.1 343 86.2 343.4 86.2 343.8C86.2 344.3 86.1 344.7 85.8 345C85.6 345.4 85.3 345.6 84.9 345.7L84.8 345.5L88.2 345.5L88.2 346.3L81 346.3L81 345.6ZM81.6 343.9C81.6 344.5 81.8 344.9 82.1 345.1C82.5 345.4 83 345.6 83.6 345.6C84.2 345.6 84.6 345.4 85 345.1C85.3 344.9 85.5 344.5 85.5 343.9C85.5 343.4 85.3 343 85 342.8C84.6 342.5 84.1 342.3 83.5 342.3C82.9 342.3 82.5 342.5 82.1 342.8C81.8 343 81.6 343.4 81.6 343.9ZM80.9 350C80.9 349.6 81 349.1 81.2 348.8C81.5 348.4 81.8 348.1 82.2 347.9C82.6 347.7 83.1 347.6 83.6 347.6C84.1 347.6 84.5 347.7 84.9 347.9C85.3 348.1 85.7 348.4 85.9 348.8C86.1 349.1 86.2 349.6 86.2 350.1C86.2 350.5 86.1 350.9 85.9 351.3C85.7 351.6 85.4 351.9 85 352.1C84.6 352.3 84.2 352.4 83.7 352.4C83.6 352.4 83.6 352.4 83.5 352.4C83.5 352.4 83.4 352.4 83.3 352.4L83.3 348.2L84 348.2L84 351.9L83.6 351.6C84.2 351.6 84.7 351.5 85 351.2C85.4 350.9 85.5 350.6 85.5 350.1C85.5 349.6 85.3 349.1 85 348.8C84.6 348.5 84.2 348.4 83.6 348.4C83 348.4 82.5 348.5 82.1 348.8C81.8 349.1 81.6 349.6 81.6 350.1C81.6 350.4 81.7 350.7 81.8 350.9C81.9 351.2 82.1 351.4 82.4 351.5L82.4 352.2C81.9 352.1 81.6 351.8 81.3 351.4C81 351 80.9 350.6 80.9 350ZM81 353.6L86.1 353.6L86.1 354.3L84.9 354.3L84.9 354.4L81 354.4L81 353.6ZM81 357.2L84.3 357.2C84.7 357.2 85 357.2 85.2 357C85.4 356.8 85.5 356.5 85.5 356.1C85.5 355.8 85.4 355.5 85.3 355.2C85.1 355 84.9 354.8 84.7 354.6C84.4 354.5 84.1 354.4 83.8 354.4L85 354.3C85.4 354.4 85.7 354.7 85.9 355.1C86.1 355.4 86.2 355.8 86.2 356.3C86.2 356.8 86 357.2 85.7 357.6C85.4 357.9 85 358 84.6 358L81 358L81 357.2ZM68.9 158.8C68.9 158.4 69 157.9 69.2 157.6C69.5 157.2 69.8 156.9 70.2 156.7C70.6 156.5 71.1 156.4 71.6 156.4C72.1 156.4 72.5 156.5 72.9 156.7C73.3 156.9 73.6 157.2 73.9 157.6C74.1 157.9 74.2 158.4 74.2 158.8C74.2 159.2 74.1 159.5 74 159.8C73.8 160.1 73.6 160.4 73.4 160.6C73.1 160.8 72.8 160.9 72.4 161L72.4 160.2C72.7 160.2 73 160 73.2 159.8C73.4 159.5 73.5 159.2 73.5 158.8C73.5 158.5 73.4 158.2 73.3 158C73.1 157.7 72.9 157.6 72.6 157.4C72.3 157.3 72 157.2 71.6 157.2C71.2 157.2 70.8 157.3 70.5 157.4C70.2 157.6 70 157.7 69.8 158C69.7 158.2 69.6 158.5 69.6 158.8C69.6 159.2 69.7 159.5 69.9 159.8C70.1 160 70.4 160.2 70.7 160.2L70.7 161C70.3 160.9 70 160.8 69.7 160.6C69.5 160.4 69.3 160.1 69.1 159.8C69 159.5 68.9 159.2 68.9 158.8ZM68.9 164.2C68.9 163.7 69 163.3 69.3 162.9C69.5 162.5 69.8 162.2 70.2 162C70.6 161.8 71.1 161.7 71.6 161.7C72.1 161.7 72.5 161.8 72.9 162C73.3 162.2 73.6 162.5 73.9 162.9C74.1 163.3 74.2 163.7 74.2 164.2C74.2 164.7 74.1 165.2 73.9 165.6C73.6 165.9 73.3 166.2 72.9 166.4C72.5 166.6 72.1 166.8 71.6 166.8C71.1 166.8 70.6 166.6 70.2 166.4C69.8 166.2 69.5 165.9 69.3 165.6C69 165.2 68.9 164.7 68.9 164.2ZM69.6 164.2C69.6 164.6 69.7 164.9 69.8 165.1C70 165.4 70.2 165.6 70.5 165.7C70.8 165.9 71.2 165.9 71.6 165.9C72.2 165.9 72.6 165.8 73 165.5C73.3 165.2 73.5 164.7 73.5 164.2C73.5 163.7 73.3 163.3 73 163C72.6 162.7 72.2 162.5 71.6 162.5C71.2 162.5 70.8 162.6 70.5 162.7C70.2 162.9 70 163.1 69.8 163.3C69.7 163.6 69.6 163.9 69.6 164.2ZM69 168L74.1 168L74.1 168.7L72.8 168.7L72.8 168.8L69 168.8L69 168ZM71.7 168.8L72.9 168.6C73.3 168.7 73.6 169 73.9 169.3C74.1 169.6 74.2 169.9 74.2 170.3C74.2 170.5 74.2 170.6 74.2 170.7L73.4 170.7C73.4 170.6 73.4 170.6 73.4 170.5C73.4 170.5 73.4 170.4 73.4 170.3C73.4 169.8 73.3 169.4 73 169.1C72.7 168.9 72.2 168.8 71.7 168.8ZM69 171.7L74.1 171.7L74.1 172.5L72.9 172.5L72.9 172.5L69 172.5L69 171.7ZM69 175.4L72.3 175.4C72.7 175.4 73 175.3 73.2 175.1C73.4 174.9 73.5 174.6 73.5 174.2C73.5 173.9 73.4 173.6 73.3 173.3C73.1 173.1 72.9 172.9 72.7 172.7C72.4 172.6 72.1 172.5 71.8 172.5L73 172.4C73.4 172.5 73.7 172.8 73.9 173.2C74.1 173.5 74.2 173.9 74.2 174.4C74.2 174.9 74 175.3 73.7 175.7C73.4 176 73 176.2 72.6 176.2L69 176.2L69 175.4ZM68.9 179.8C68.9 179.3 69 178.9 69.2 178.5C69.5 178.1 69.8 177.8 70.2 177.6C70.6 177.4 71.1 177.3 71.6 177.3C72.1 177.3 72.5 177.4 72.9 177.6C73.3 177.8 73.7 178.1 73.9 178.5C74.1 178.9 74.2 179.3 74.2 179.8C74.2 180.3 74.1 180.7 73.9 181C73.7 181.4 73.4 181.7 73 181.8C72.6 182 72.2 182.1 71.7 182.1C71.6 182.1 71.6 182.1 71.5 182.1C71.5 182.1 71.4 182.1 71.3 182.1L71.3 177.9L72 177.9L72 181.6L71.6 181.3C72.2 181.3 72.7 181.2 73 180.9C73.4 180.7 73.5 180.3 73.5 179.8C73.5 179.3 73.3 178.9 73 178.6C72.6 178.3 72.2 178.1 71.6 178.1C71 178.1 70.5 178.3 70.1 178.6C69.8 178.9 69.6 179.3 69.6 179.8C69.6 180.1 69.7 180.4 69.8 180.7C69.9 180.9 70.1 181.1 70.4 181.2L70.4 182C69.9 181.8 69.6 181.5 69.3 181.1C69 180.8 68.9 180.3 68.9 179.8ZM69 183.3L74.1 183.3L74.1 184.1L72.8 184.1L72.8 184.1L69 184.1L69 183.3ZM71.7 184.1L72.9 184C73.3 184.1 73.6 184.3 73.9 184.6C74.1 185 74.2 185.3 74.2 185.7C74.2 185.9 74.2 186 74.2 186L73.4 186C73.4 186 73.4 186 73.4 185.9C73.4 185.8 73.4 185.8 73.4 185.7C73.4 185.2 73.3 184.8 73 184.5C72.7 184.3 72.2 184.1 71.7 184.1ZM68.9 188.7C68.9 188 69 187.5 69.3 187.2C69.6 186.8 70 186.6 70.6 186.5L70.6 187.3C70.2 187.3 70 187.5 69.8 187.7C69.6 188 69.6 188.3 69.6 188.7C69.6 189 69.6 189.3 69.8 189.5C69.9 189.7 70.1 189.8 70.3 189.8C70.5 189.8 70.7 189.8 70.8 189.6C70.9 189.5 71 189.3 71.1 189L71.3 188.1C71.4 187.7 71.6 187.3 71.9 187.1C72.1 186.9 72.4 186.7 72.8 186.7C73.2 186.7 73.6 186.9 73.8 187.2C74.1 187.6 74.2 188 74.2 188.6C74.2 189.1 74.1 189.6 73.8 189.9C73.5 190.3 73.2 190.5 72.7 190.5L72.7 189.7C73 189.7 73.2 189.6 73.3 189.4C73.5 189.2 73.5 188.9 73.5 188.5C73.5 188.2 73.5 188 73.4 187.8C73.2 187.6 73.1 187.5 72.8 187.5C72.7 187.5 72.5 187.6 72.4 187.7C72.3 187.8 72.1 188.1 72.1 188.4L71.8 189.2C71.7 189.6 71.5 190 71.3 190.2C71 190.5 70.7 190.6 70.3 190.6C69.9 190.6 69.5 190.4 69.3 190.1C69 189.7 68.9 189.3 68.9 188.7ZM67.6 191.4L68 191.4C68 191.6 68.2 191.7 68.3 191.8C68.5 191.9 68.7 191.9 69 191.9L69 192.2L69 191.4L70 191.4L70 192.4L69.2 192.4C68.8 192.4 68.4 192.3 68.2 192.1C67.9 192 67.7 191.7 67.6 191.4ZM69 199.1C69.1 199.1 69.2 199 69.4 199C69.5 199 69.7 199 70 199L70 199L72.4 199C72.8 199 73.1 198.9 73.2 198.7C73.4 198.5 73.5 198.2 73.5 197.8C73.5 197.5 73.4 197.1 73.3 196.9C73.1 196.7 72.9 196.6 72.6 196.5L72.6 195.8C73.1 195.8 73.5 196 73.8 196.4C74.1 196.8 74.2 197.3 74.2 197.9C74.2 198.5 74.1 199 73.8 199.3C73.5 199.6 73 199.7 72.4 199.7L70 199.7C69.8 199.7 69.7 199.8 69.5 199.8C69.3 199.8 69.2 199.8 69 199.9L69 199.1ZM68.9 197.3C68.9 196.8 69 196.4 69.3 196.1C69.5 195.8 69.9 195.6 70.3 195.6C70.8 195.6 71.1 195.8 71.4 196.1C71.6 196.4 71.8 196.8 71.9 197.4L72.2 199.2L71.5 199.2L71.3 197.5C71.2 197.2 71.1 196.9 71 196.7C70.8 196.5 70.6 196.4 70.4 196.4C70.1 196.4 69.9 196.5 69.8 196.7C69.6 196.8 69.6 197.1 69.6 197.4C69.6 197.9 69.7 198.3 69.9 198.5C70.1 198.8 70.4 199 70.7 199L70 199.1C69.6 199 69.4 198.8 69.2 198.5C69 198.2 68.9 197.8 68.9 197.3ZM69 201.3L74.1 201.3L74.1 202L72.9 202L72.9 202.1L69 202.1L69 201.3ZM69 204.9L72.3 204.9C72.7 204.9 73 204.8 73.2 204.6C73.4 204.4 73.5 204.2 73.5 203.8C73.5 203.4 73.4 203.2 73.3 202.9C73.1 202.6 72.9 202.4 72.7 202.3C72.4 202.2 72.1 202.1 71.8 202.1L73 202C73.4 202.1 73.7 202.4 73.9 202.7C74.1 203.1 74.2 203.5 74.2 204C74.2 204.5 74 204.9 73.7 205.2C73.4 205.6 73 205.7 72.6 205.7L69 205.7L69 204.9ZM69 211L70.2 211L70.2 211.1C69.8 211 69.5 210.7 69.2 210.4C69 210 68.9 209.6 68.9 209.2C68.9 208.7 69 208.3 69.2 208C69.5 207.6 69.8 207.4 70.2 207.2C70.5 207 71 206.9 71.5 206.9C72.1 206.9 72.5 207 72.9 207.2C73.3 207.4 73.6 207.6 73.9 208C74.1 208.3 74.2 208.7 74.2 209.2C74.2 209.7 74.1 210.1 73.8 210.4C73.6 210.7 73.3 211 72.9 211.1L72.8 210.9L76.2 210.9L76.2 211.7L69 211.7L69 211ZM69.6 209.3C69.6 209.8 69.8 210.2 70.1 210.5C70.5 210.8 71 211 71.6 211C72.2 211 72.6 210.8 73 210.5C73.3 210.2 73.5 209.8 73.5 209.3C73.5 208.8 73.3 208.4 73 208.1C72.6 207.9 72.1 207.7 71.5 207.7C70.9 207.7 70.5 207.9 70.1 208.1C69.8 208.4 69.6 208.8 69.6 209.3ZM69 215.3L76.2 215.3L76.2 216.1L69 216.1L69 215.3ZM68.9 219.9C68.9 219.4 69 218.9 69.3 218.5C69.5 218.2 69.8 217.9 70.2 217.6C70.6 217.4 71.1 217.3 71.6 217.3C72.1 217.3 72.5 217.4 72.9 217.7C73.3 217.9 73.6 218.2 73.9 218.5C74.1 218.9 74.2 219.4 74.2 219.9C74.2 220.4 74.1 220.8 73.9 221.2C73.6 221.6 73.3 221.9 72.9 222.1C72.5 222.3 72.1 222.4 71.6 222.4C71.1 222.4 70.6 222.3 70.2 222.1C69.8 221.9 69.5 221.6 69.3 221.2C69 220.8 68.9 220.4 68.9 219.9ZM69.6 219.9C69.6 220.2 69.7 220.5 69.8 220.8C70 221 70.2 221.2 70.5 221.3C70.8 221.5 71.2 221.6 71.6 221.6C72.2 221.6 72.6 221.4 73 221.1C73.3 220.8 73.5 220.4 73.5 219.9C73.5 219.4 73.3 218.9 73 218.6C72.6 218.3 72.2 218.2 71.6 218.2C71.2 218.2 70.8 218.2 70.5 218.4C70.2 218.5 70 218.7 69.8 219C69.7 219.2 69.6 219.5 69.6 219.9ZM68.9 225.6C68.9 225.1 69 224.7 69.2 224.3C69.5 224 69.8 223.7 70.2 223.5C70.6 223.3 71.1 223.2 71.6 223.2C72.1 223.2 72.5 223.3 72.9 223.5C73.3 223.7 73.6 224 73.9 224.3C74.1 224.7 74.2 225.1 74.2 225.6C74.2 226 74.1 226.3 74 226.6C73.8 226.9 73.6 227.2 73.4 227.4C73.1 227.6 72.8 227.7 72.4 227.7L72.4 227C72.7 226.9 73 226.8 73.2 226.5C73.4 226.3 73.5 226 73.5 225.6C73.5 225.3 73.4 225 73.3 224.8C73.1 224.5 72.9 224.3 72.6 224.2C72.3 224.1 72 224 71.6 224C71.2 224 70.8 224.1 70.5 224.2C70.2 224.3 70 224.5 69.8 224.8C69.7 225 69.6 225.3 69.6 225.6C69.6 226 69.7 226.3 69.9 226.5C70.1 226.8 70.4 226.9 70.7 227L70.7 227.7C70.3 227.7 70 227.6 69.7 227.3C69.5 227.1 69.3 226.9 69.1 226.6C69 226.3 68.9 226 68.9 225.6ZM69 232C69.1 232 69.2 232 69.4 232C69.5 232 69.7 232 70 232L70 231.9L72.4 231.9C72.8 231.9 73.1 231.8 73.2 231.6C73.4 231.5 73.5 231.2 73.5 230.8C73.5 230.4 73.4 230.1 73.3 229.9C73.1 229.6 72.9 229.5 72.6 229.5L72.6 228.7C73.1 228.7 73.5 228.9 73.8 229.3C74.1 229.7 74.2 230.2 74.2 230.8C74.2 231.4 74.1 231.9 73.8 232.2C73.5 232.5 73 232.7 72.4 232.7L70 232.7C69.8 232.7 69.7 232.7 69.5 232.7C69.3 232.7 69.2 232.8 69 232.8L69 232ZM68.9 230.3C68.9 229.7 69 229.3 69.3 229C69.5 228.7 69.9 228.6 70.3 228.6C70.8 228.6 71.1 228.7 71.4 229C71.6 229.3 71.8 229.8 71.9 230.4L72.2 232.1L71.5 232.1L71.3 230.5C71.2 230.1 71.1 229.8 71 229.6C70.8 229.4 70.6 229.3 70.4 229.3C70.1 229.3 69.9 229.4 69.8 229.6C69.6 229.8 69.6 230 69.6 230.4C69.6 230.8 69.7 231.2 69.9 231.5C70.1 231.8 70.4 231.9 70.7 231.9L70 232C69.6 231.9 69.4 231.7 69.2 231.4C69 231.1 68.9 230.7 68.9 230.3ZM69 234.2L76.2 234.2L76.2 235L69 235L69 234.2ZM66.9 240.7C66.9 240.1 67 239.5 67.3 239.1C67.6 238.7 67.9 238.5 68.4 238.4L68.4 239.2C68.1 239.2 67.9 239.4 67.8 239.7C67.6 239.9 67.5 240.3 67.5 240.7C67.5 241.2 67.7 241.6 68 241.9C68.2 242.2 68.7 242.3 69.2 242.3L70.3 242.3L70.3 242.4C69.9 242.3 69.6 242 69.3 241.7C69.1 241.4 69 241 69 240.5C69 240.1 69.1 239.7 69.3 239.3C69.5 239 69.8 238.7 70.2 238.5C70.6 238.3 71.1 238.2 71.6 238.2C72.1 238.2 72.6 238.3 73 238.5C73.3 238.7 73.6 239 73.9 239.3C74.1 239.7 74.2 240.1 74.2 240.6C74.2 241.1 74.1 241.5 73.8 241.8C73.6 242.1 73.3 242.3 72.8 242.4L72.8 242.3L74.1 242.3L74.1 243.1L69.2 243.1C68.5 243.1 67.9 242.9 67.5 242.4C67.1 242 66.9 241.4 66.9 240.7ZM69.7 240.7C69.7 241.2 69.9 241.6 70.2 241.9C70.6 242.2 71 242.3 71.6 242.3C72.2 242.3 72.7 242.2 73 241.9C73.3 241.6 73.5 241.2 73.5 240.7C73.5 240.2 73.3 239.8 73 239.5C72.7 239.2 72.2 239.1 71.6 239.1C71 239.1 70.5 239.2 70.2 239.5C69.9 239.8 69.7 240.2 69.7 240.7ZM68.9 246.8C68.9 246.3 69 245.9 69.2 245.5C69.5 245.1 69.8 244.8 70.2 244.6C70.6 244.4 71.1 244.3 71.6 244.3C72.1 244.3 72.5 244.4 72.9 244.6C73.3 244.8 73.7 245.1 73.9 245.5C74.1 245.9 74.2 246.3 74.2 246.8C74.2 247.3 74.1 247.7 73.9 248C73.7 248.4 73.4 248.7 73 248.8C72.6 249 72.2 249.1 71.7 249.1C71.6 249.1 71.6 249.1 71.5 249.1C71.5 249.1 71.4 249.1 71.3 249.1L71.3 244.9L72 244.9L72 248.6L71.6 248.4C72.2 248.4 72.7 248.2 73 247.9C73.4 247.7 73.5 247.3 73.5 246.8C73.5 246.3 73.3 245.9 73 245.6C72.6 245.3 72.2 245.1 71.6 245.1C71 245.1 70.5 245.3 70.1 245.6C69.8 245.9 69.6 246.3 69.6 246.8C69.6 247.1 69.7 247.4 69.8 247.7C69.9 247.9 70.1 248.1 70.4 248.2L70.4 249C69.9 248.8 69.6 248.5 69.3 248.1C69 247.8 68.9 247.3 68.9 246.8ZM69 250.3L74.1 250.3L74.1 251.1L72.9 251.1L72.9 251.1L69 251.1L69 250.3ZM69 253.8L72.4 253.8C72.8 253.8 73.1 253.7 73.2 253.5C73.4 253.3 73.5 253.1 73.5 252.8C73.5 252.5 73.4 252.2 73.3 251.9C73.1 251.7 72.9 251.5 72.7 251.3C72.4 251.2 72.1 251.1 71.8 251.1L73 251C73.4 251.2 73.7 251.4 73.9 251.8C74.1 252.1 74.2 252.5 74.2 252.9C74.2 253.4 74.1 253.8 73.8 254.1C73.5 254.4 73.1 254.6 72.6 254.6L69 254.6L69 253.8ZM69 257.2L72.4 257.2C72.8 257.2 73.1 257.1 73.2 257C73.4 256.8 73.5 256.5 73.5 256.2C73.5 255.9 73.4 255.6 73.3 255.4C73.1 255.1 72.9 254.9 72.7 254.8C72.4 254.6 72.1 254.6 71.8 254.6L73 254.4C73.4 254.5 73.7 254.8 73.9 255.2C74.1 255.5 74.2 255.9 74.2 256.3C74.2 256.8 74.1 257.2 73.8 257.5C73.5 257.9 73.1 258 72.6 258L69 258L69 257.2ZM68.9 261.3C68.9 260.6 69 260.1 69.3 259.8C69.6 259.4 70 259.2 70.6 259.1L70.6 259.9C70.2 259.9 70 260.1 69.8 260.3C69.6 260.6 69.6 260.9 69.6 261.3C69.6 261.6 69.6 261.9 69.8 262.1C69.9 262.3 70.1 262.4 70.3 262.4C70.5 262.4 70.7 262.4 70.8 262.2C70.9 262.1 71 261.9 71.1 261.6L71.3 260.7C71.4 260.3 71.6 259.9 71.9 259.7C72.1 259.5 72.4 259.3 72.8 259.3C73.2 259.3 73.6 259.5 73.8 259.8C74.1 260.2 74.2 260.6 74.2 261.2C74.2 261.7 74.1 262.2 73.8 262.5C73.5 262.9 73.2 263.1 72.7 263.1L72.7 262.3C73 262.3 73.2 262.2 73.3 262C73.5 261.7 73.5 261.5 73.5 261.1C73.5 260.8 73.5 260.6 73.4 260.4C73.2 260.2 73.1 260.1 72.8 260.1C72.7 260.1 72.5 260.2 72.4 260.3C72.3 260.4 72.1 260.6 72.1 261L71.8 261.8C71.7 262.2 71.5 262.6 71.3 262.8C71 263.1 70.7 263.2 70.3 263.2C69.9 263.2 69.5 263 69.3 262.7C69 262.3 68.9 261.9 68.9 261.3ZM69 264L70 264L70 265L69 265L69 264Z' fill='%230E1219'%3E%3C/path%3E%3Cuse xlink:href='%23image12_514_1247' transform='translate(78.3 267.7) scale(0.1) rotate(90)'%3E%3C/use%3E%3Crect x='107' y='156' width='28' height='216' rx='8' fill='%23EFF2E6'%3E%3C/rect%3E%3Cg clip-path='url(%23clip4_514_1247)'%3E%3Cpath d='M129 172C130.1 172 131 172.9 131 174L131 354C131 355.1 130.1 356 129 356C127.9 356 127 355.1 127 354L127 174C127 172.9 127.9 172 129 172Z' fill='%23DBDECF'%3E%3C/path%3E%3Crect x='131' y='172' width='137' height='4' rx='2' transform='rotate(90 131 172)' fill='%23C4E860'%3E%3C/rect%3E%3C/g%3E%3Cpath d='M114 172.7L119.8 172.7L119.8 173.3L114 173.3L114 172.7ZM114 173L114.6 173L114.6 176.3L114 176.3L114 173ZM114 177.9L118.1 176.2L118.1 176.9L114.4 178.3L114.4 178L118.1 179.4L118.1 180.1L114 178.4L114 177.9ZM114 180.1L114.8 180.1L114.8 181L114 181L114 180.1ZM114 183.5L114.6 183.5C115 184.1 115.5 184.5 115.8 184.9C116.2 185.3 116.5 185.6 116.8 185.9C117 186.1 117.3 186.3 117.5 186.3C117.8 186.4 118 186.5 118.2 186.5C118.5 186.5 118.8 186.4 119 186.2C119.2 186 119.3 185.7 119.3 185.4C119.3 185 119.2 184.7 119 184.5C118.8 184.3 118.5 184.2 118.1 184.1L118.1 183.4C118.6 183.5 119 183.7 119.4 184C119.7 184.4 119.8 184.9 119.8 185.4C119.8 186 119.7 186.4 119.4 186.7C119.1 187 118.7 187.2 118.2 187.2C118 187.2 117.7 187.2 117.4 187C117.1 186.9 116.9 186.8 116.6 186.5C116.3 186.3 115.9 186 115.6 185.6C115.2 185.2 114.8 184.7 114.3 184.2L114.6 184L114.6 187.3L114 187.3L114 183.5ZM113.9 189.9C113.9 189.3 114.1 188.8 114.4 188.5C114.7 188.2 115.1 187.9 115.6 187.9L115.6 188.6C115.2 188.6 115 188.8 114.8 189C114.6 189.2 114.5 189.5 114.5 189.8C114.5 190.2 114.6 190.5 114.8 190.7C115 190.9 115.4 191.1 115.8 191.1C116.3 191.1 116.6 190.9 116.9 190.7C117.1 190.5 117.2 190.2 117.2 189.8C117.2 189.6 117.2 189.3 117.1 189.1C117 188.9 116.8 188.8 116.7 188.7L116.7 188.2L119.8 188.4L119.8 191.5L119.2 191.5L119.2 188.8L119.4 189L117.1 188.9L117.2 188.7C117.3 188.8 117.5 189 117.6 189.2C117.7 189.4 117.8 189.6 117.8 189.9C117.8 190.3 117.7 190.6 117.5 190.9C117.4 191.2 117.1 191.4 116.9 191.5C116.6 191.7 116.2 191.8 115.8 191.8C115.4 191.8 115.1 191.7 114.8 191.5C114.5 191.4 114.3 191.2 114.1 190.9C114 190.6 113.9 190.3 113.9 189.9Z' fill='%2383868C'%3E%3C/path%3E%3Cpath d='M114 288.7L119.8 288.7L119.8 289.3L114 289.3L114 288.7ZM114 289L114.6 289L114.6 292.3L114 292.3L114 289ZM114 293.9L118.1 292.2L118.1 292.9L114.4 294.3L114.4 294L118.1 295.4L118.1 296.1L114 294.4L114 293.9ZM114 296.1L114.8 296.1L114.8 297L114 297L114 296.1ZM113.9 301.5C113.9 301.1 114 300.8 114.1 300.5C114.3 300.2 114.5 300 114.8 299.8C115 299.6 115.4 299.5 115.7 299.5L115.7 300.2C115.3 300.2 115 300.4 114.8 300.6C114.6 300.8 114.5 301.2 114.5 301.5C114.5 301.9 114.6 302.2 114.8 302.4C115 302.6 115.2 302.7 115.6 302.7C115.9 302.7 116.2 302.6 116.4 302.4C116.6 302.2 116.7 301.9 116.7 301.6L116.7 300.9L117.3 300.9L117.3 301.6C117.3 301.9 117.4 302.1 117.6 302.3C117.7 302.5 118 302.6 118.3 302.6C118.6 302.6 118.8 302.5 119 302.3C119.2 302.1 119.3 301.8 119.3 301.5C119.3 301.2 119.2 300.9 119 300.7C118.8 300.4 118.5 300.3 118.2 300.3L118.2 299.6C118.5 299.6 118.8 299.7 119 299.9C119.3 300 119.5 300.3 119.6 300.5C119.8 300.8 119.8 301.2 119.8 301.5C119.8 301.9 119.8 302.2 119.7 302.4C119.5 302.7 119.4 302.9 119.1 303.1C118.9 303.2 118.6 303.3 118.3 303.3C118.1 303.3 117.8 303.2 117.6 303.1C117.4 303 117.2 302.8 117.1 302.6C117 302.4 117 302.1 117 301.9L117.1 301.8C117.1 302.2 117.1 302.4 116.9 302.7C116.8 302.9 116.6 303.1 116.4 303.2C116.1 303.4 115.9 303.4 115.5 303.4C115.2 303.4 114.9 303.3 114.7 303.2C114.5 303 114.3 302.8 114.1 302.5C114 302.2 113.9 301.9 113.9 301.5ZM113.9 306.6C113.9 306.1 114 305.7 114.3 305.4C114.6 305 114.9 304.8 115.4 304.6C115.8 304.4 116.3 304.3 116.9 304.3C117.5 304.3 118 304.4 118.4 304.6C118.9 304.8 119.2 305 119.5 305.4C119.7 305.7 119.8 306.1 119.8 306.6C119.8 307 119.7 307.4 119.5 307.7C119.2 308.1 118.9 308.4 118.4 308.5C118 308.7 117.5 308.8 116.9 308.8C116.3 308.8 115.8 308.7 115.4 308.5C114.9 308.4 114.6 308.1 114.3 307.7C114 307.4 113.9 307 113.9 306.6ZM114.5 306.6C114.5 306.9 114.6 307.2 114.8 307.4C115 307.6 115.3 307.8 115.6 307.9C116 308 116.4 308.1 116.9 308.1C117.4 308.1 117.8 308 118.2 307.9C118.5 307.8 118.8 307.6 119 307.4C119.2 307.2 119.3 306.9 119.3 306.6C119.3 306.2 119.2 306 119 305.7C118.8 305.5 118.5 305.3 118.2 305.2C117.8 305.1 117.4 305 116.9 305C116.4 305 116 305.1 115.6 305.2C115.3 305.3 115 305.5 114.8 305.7C114.6 306 114.5 306.2 114.5 306.6ZM113.9 314C113.9 313.6 114 313.2 114.1 312.9C114.3 312.5 114.5 312.2 114.8 312C115 311.8 115.3 311.6 115.7 311.4C116.1 311.3 116.4 311.2 116.9 311.2C117.3 311.2 117.7 311.3 118.1 311.4C118.4 311.6 118.7 311.7 119 312C119.3 312.2 119.5 312.5 119.6 312.9C119.8 313.2 119.8 313.6 119.8 313.9C119.8 314.4 119.8 314.8 119.6 315.1C119.4 315.5 119.2 315.7 118.8 316C118.5 316.2 118.1 316.3 117.7 316.4L117.7 315.7C118.2 315.7 118.6 315.5 118.8 315.1C119.1 314.8 119.2 314.4 119.2 314C119.2 313.5 119.1 313.2 118.9 312.9C118.7 312.6 118.5 312.3 118.1 312.2C117.8 312 117.3 311.9 116.9 311.9C116.4 311.9 116 312 115.6 312.2C115.3 312.3 115 312.6 114.8 312.9C114.6 313.2 114.5 313.5 114.5 313.9C114.5 314.4 114.7 314.8 114.9 315.2C115.2 315.5 115.6 315.7 116 315.7L116 316.4C115.6 316.3 115.2 316.2 114.9 316C114.6 315.8 114.4 315.5 114.2 315.1C114 314.8 113.9 314.4 113.9 314ZM114 317.4L118.1 317.4L118.1 318L114 318L114 317.4ZM119 317.3L119.8 317.3L119.8 318L119 318L119 317.3ZM113.9 320.9C113.9 320.4 114 320.1 114.2 319.9C114.4 319.7 114.7 319.6 115.1 319.6L119 319.6L119.3 320.2L115.1 320.2C114.9 320.2 114.7 320.3 114.6 320.4C114.5 320.5 114.5 320.7 114.5 321C114.5 321.1 114.5 321.2 114.5 321.3C114.5 321.3 114.5 321.4 114.5 321.4L114 321.4C114 321.4 114 321.3 114 321.2C113.9 321.1 113.9 321 113.9 320.9ZM117.5 318.8L118.1 318.8L118.1 321.4L117.5 321.4L117.5 318.8ZM112.4 322.7L114.5 323.6L114.7 323.8L118.1 325.1L118.1 325.8L112.4 323.4L112.4 322.7ZM114 323.7L118.1 321.9L118.1 322.6L114.4 324.1L114 323.7ZM114 328.2L119.8 328.2L119.8 328.9L114 328.9L114 328.2ZM114 332.1L119.8 332.1L119.8 332.7L114 332.7L114 332.1ZM117.3 328.5L117.3 332.3L116.7 332.3L116.7 328.5L117.3 328.5ZM113.9 335.7C113.9 335.3 114 335 114.2 334.7C114.4 334.4 114.6 334.1 115 334C115.3 333.8 115.7 333.7 116.1 333.7C116.5 333.7 116.8 333.8 117.1 334C117.5 334.1 117.7 334.4 117.9 334.7C118.1 335 118.2 335.3 118.2 335.7C118.2 336.1 118.1 336.5 117.9 336.8C117.7 337.1 117.5 337.3 117.1 337.5C116.8 337.7 116.5 337.8 116.1 337.8C115.7 337.8 115.3 337.7 115 337.5C114.6 337.3 114.4 337.1 114.2 336.8C114 336.5 113.9 336.1 113.9 335.7ZM114.5 335.7C114.5 336 114.5 336.3 114.7 336.5C114.8 336.7 115 336.8 115.2 336.9C115.5 337 115.7 337.1 116.1 337.1C116.5 337.1 116.9 337 117.2 336.7C117.5 336.5 117.6 336.1 117.6 335.7C117.6 335.3 117.5 335 117.2 334.8C116.9 334.5 116.5 334.4 116.1 334.4C115.7 334.4 115.5 334.4 115.2 334.5C115 334.7 114.8 334.8 114.7 335C114.5 335.2 114.5 335.5 114.5 335.7ZM113.9 340.7C113.9 340.3 114 340 114.2 339.8C114.4 339.5 114.7 339.3 115 339.2L115 339.4L112.4 339.4L112.4 338.7L118.1 338.7L118.1 339.3L117.1 339.3L117.2 339.2C117.5 339.3 117.7 339.5 117.9 339.8C118.1 340.1 118.2 340.4 118.2 340.8C118.2 341.1 118.1 341.5 117.9 341.7C117.7 342 117.5 342.2 117.2 342.4C116.8 342.5 116.5 342.6 116.1 342.6C115.6 342.6 115.3 342.5 114.9 342.4C114.6 342.2 114.4 342 114.2 341.7C114 341.4 113.9 341.1 113.9 340.7ZM114.5 340.6C114.5 341 114.6 341.4 114.9 341.6C115.2 341.8 115.6 341.9 116.1 341.9C116.5 341.9 116.9 341.8 117.2 341.6C117.5 341.4 117.6 341 117.6 340.6C117.6 340.2 117.5 339.9 117.2 339.7C116.9 339.4 116.5 339.3 116 339.3C115.6 339.3 115.2 339.4 114.9 339.7C114.6 339.9 114.5 340.2 114.5 340.6ZM113.9 345.6C113.9 345.2 114 344.9 114.2 344.6C114.4 344.3 114.7 344.2 115 344.1L115 344.2L112.4 344.2L112.4 343.6L118.1 343.6L118.1 344.2L117.1 344.2L117.2 344.1C117.5 344.2 117.7 344.4 117.9 344.7C118.1 344.9 118.2 345.3 118.2 345.6C118.2 346 118.1 346.3 117.9 346.6C117.7 346.9 117.5 347.1 117.2 347.2C116.8 347.4 116.5 347.4 116.1 347.4C115.6 347.4 115.3 347.4 114.9 347.2C114.6 347 114.4 346.8 114.2 346.6C114 346.3 113.9 346 113.9 345.6ZM114.5 345.5C114.5 345.9 114.6 346.2 114.9 346.4C115.2 346.7 115.6 346.8 116.1 346.8C116.5 346.8 116.9 346.7 117.2 346.4C117.5 346.2 117.6 345.9 117.6 345.5C117.6 345.1 117.5 344.8 117.2 344.5C116.9 344.3 116.5 344.2 116 344.2C115.6 344.2 115.2 344.3 114.9 344.5C114.6 344.8 114.5 345.1 114.5 345.5ZM113.9 350.1C113.9 349.7 114 349.4 114.2 349.1C114.4 348.8 114.6 348.5 115 348.3C115.3 348.2 115.6 348.1 116.1 348.1C116.5 348.1 116.8 348.2 117.2 348.3C117.5 348.5 117.7 348.7 117.9 349.1C118.1 349.4 118.2 349.7 118.2 350.1C118.2 350.5 118.1 350.8 117.9 351.1C117.7 351.4 117.5 351.6 117.2 351.7C116.9 351.9 116.6 352 116.2 352C116.1 352 116.1 352 116 352C116 352 115.9 352 115.8 351.9L115.8 348.6L116.4 348.6L116.4 351.5L116.1 351.3C116.6 351.3 117 351.2 117.2 351C117.5 350.8 117.6 350.5 117.6 350.1C117.6 349.7 117.5 349.4 117.2 349.1C116.9 348.9 116.5 348.7 116.1 348.7C115.6 348.7 115.2 348.9 114.9 349.1C114.6 349.4 114.5 349.7 114.5 350.1C114.5 350.4 114.5 350.6 114.6 350.8C114.7 351 114.9 351.1 115.1 351.2L115.1 351.8C114.8 351.7 114.5 351.5 114.2 351.2C114 350.9 113.9 350.5 113.9 350.1ZM114 352.9L118.1 352.9L118.1 353.5L117 353.5L117 353.6L114 353.6L114 352.9ZM116.1 353.6L117.1 353.5C117.4 353.6 117.7 353.7 117.9 354C118.1 354.2 118.2 354.5 118.2 354.8C118.2 355 118.1 355 118.1 355.1L117.5 355.1C117.5 355.1 117.5 355 117.5 355C117.5 354.9 117.5 354.9 117.5 354.8C117.5 354.4 117.4 354.1 117.2 353.9C116.9 353.7 116.6 353.6 116.1 353.6Z' fill='%2383868C'%3E%3C/path%3E%3Cpath d='M179 156C183.4 156 187 159.6 187 164L187 223C187 227.4 183.4 231 179 231L159 231C154.6 231 151 227.4 151 223L151 164C151 159.6 154.6 156 159 156L179 156Z' fill='%23C4E860'%3E%3C/path%3E%3Cpath d='M174 160.7L179.8 160.7L179.8 162.8C179.8 163.2 179.7 163.6 179.6 163.9C179.4 164.2 179.2 164.4 179 164.5C178.8 164.7 178.5 164.8 178.2 164.8C177.8 164.8 177.5 164.7 177.3 164.5C177.1 164.4 176.9 164.2 176.7 163.9C176.6 163.6 176.5 163.2 176.5 162.8L176.5 161.2L177.1 161.2L177.1 162.8C177.1 163.2 177.2 163.5 177.4 163.8C177.6 164 177.8 164.1 178.2 164.1C178.5 164.1 178.7 164 178.9 163.8C179.1 163.5 179.2 163.2 179.2 162.8L179.2 161.3L174 161.3L174 160.7ZM174 164.1L176.9 161L176.9 161.9L174 165.1L174 164.1ZM174 165.5L179.8 167.8L179.8 168.3L174 166.2L174 165.5ZM174 170.1L179.8 167.9L179.8 168.6L174 170.8L174 170.1ZM176.3 166.6L176.3 169.7L175.8 169.7L175.8 166.6L176.3 166.6ZM174 175.4L176.7 173.6L179.8 171.4L179.8 172.2L177.2 174L174 176.2L174 175.4ZM177.2 173.6L179.8 175.5L179.8 176.2L176.7 174L177.2 173.6ZM176.6 173.9L174 172L174 171.3L177.2 173.6L176.6 173.9Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M169.7 169.7C169.7 172.4 167.4 174.7 164.7 174.7L161.3 174.7C158.6 174.7 156.3 172.4 156.3 169.7L156.3 166.3C156.3 166.1 156.3 165.9 156.4 165.7C157 165.8 158.1 165.9 158.1 165.9C158.1 165.9 165.9 167 166 168.7C166 168.9 165.9 169 165.8 169.1C165.5 169.3 163.6 169 162.3 167.7C162.2 167.7 162.2 167.6 162.2 167.6C161.8 167.2 161.3 167.2 160.9 167.4C160.5 167.6 159.7 168.1 159.9 168.6C160 169.1 160.4 170.9 159.3 173L161.7 173.8L161.7 173.8C162.3 172.6 162.5 171.5 162.6 170.5C163.3 170.9 165.7 172.1 167.1 171.1C167.6 170.7 168.4 169.9 168.4 168.6C168.4 167.2 167.4 165.5 164.9 164.6L158 162.6C158.9 161.8 160 161.3 161.3 161.3L164.7 161.3C167.4 161.3 169.7 163.6 169.7 166.3L169.7 169.7Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M158.9 185.5C158.9 184.9 159 184.4 159.2 183.9C159.4 183.5 159.7 183.1 160.1 182.8C160.5 182.6 160.9 182.5 161.4 182.5C161.8 182.5 162.2 182.6 162.6 182.7C162.9 182.9 163.2 183.2 163.4 183.5C163.6 183.9 163.7 184.2 163.7 184.6L163.4 184.7C163.4 184.3 163.5 184 163.7 183.7C163.9 183.4 164.1 183.1 164.4 182.9C164.7 182.8 165.1 182.7 165.4 182.7C165.9 182.7 166.3 182.8 166.6 183C167 183.3 167.3 183.6 167.5 184C167.7 184.5 167.8 185 167.8 185.6C167.8 186.1 167.7 186.6 167.5 187C167.3 187.5 167 187.8 166.6 188C166.3 188.3 165.9 188.4 165.4 188.4C165.1 188.4 164.7 188.3 164.4 188.1C164.1 188 163.9 187.7 163.7 187.4C163.5 187.1 163.4 186.8 163.4 186.3L163.7 186.4C163.7 186.9 163.6 187.2 163.4 187.6C163.2 187.9 162.9 188.1 162.6 188.3C162.2 188.5 161.8 188.6 161.4 188.6C160.9 188.6 160.5 188.5 160.1 188.2C159.7 188 159.4 187.6 159.2 187.2C159 186.7 158.9 186.2 158.9 185.5ZM159.9 185.5C159.9 186.1 160.1 186.5 160.3 186.8C160.6 187.1 161 187.3 161.5 187.3C162 187.3 162.3 187.1 162.6 186.8C162.9 186.5 163 186.1 163 185.5C163 185 162.9 184.6 162.6 184.3C162.3 184 162 183.8 161.5 183.8C161 183.8 160.6 184 160.3 184.3C160.1 184.6 159.9 185 159.9 185.5ZM164 185.5C164 186 164.1 186.4 164.4 186.6C164.6 186.9 164.9 187 165.3 187C165.8 187 166.1 186.9 166.3 186.6C166.6 186.3 166.7 186 166.7 185.5C166.7 185.1 166.6 184.7 166.3 184.4C166.1 184.2 165.8 184 165.3 184C164.9 184 164.6 184.2 164.4 184.4C164.1 184.7 164 185.1 164 185.5ZM158.9 192.6C158.9 191.7 159.1 191 159.6 190.5C160 190 160.6 189.6 161.4 189.5L161.4 190.8C160.9 190.9 160.6 191.1 160.3 191.4C160.1 191.8 159.9 192.1 159.9 192.6C159.9 193 160.1 193.4 160.4 193.7C160.7 194 161.1 194.2 161.8 194.2C162.4 194.2 162.9 194 163.2 193.7C163.5 193.4 163.7 193 163.7 192.5C163.7 192.2 163.6 191.9 163.5 191.7C163.4 191.4 163.2 191.2 162.9 191.1L162.9 190L167.6 190.4L167.6 195.1L166.6 195.1L166.6 191L166.9 191.5L163.7 191.3L163.7 190.9C164 191.1 164.2 191.3 164.4 191.6C164.6 192 164.7 192.3 164.7 192.8C164.7 193.3 164.5 193.8 164.3 194.2C164.1 194.7 163.8 195 163.3 195.2C162.9 195.4 162.4 195.6 161.8 195.6C161.2 195.6 160.7 195.4 160.2 195.2C159.8 194.9 159.5 194.6 159.2 194.2C159 193.7 158.9 193.2 158.9 192.6ZM158.9 200C158.9 199.4 159.1 198.7 159.4 198.2C159.8 197.7 160.4 197.3 161 197C161.7 196.7 162.5 196.5 163.4 196.5C164.2 196.5 165 196.7 165.6 197C166.3 197.3 166.8 197.7 167.2 198.2C167.6 198.7 167.8 199.4 167.8 200C167.8 200.7 167.6 201.4 167.2 201.9C166.8 202.4 166.3 202.8 165.6 203.1C165 203.4 164.2 203.6 163.4 203.6C162.5 203.6 161.7 203.4 161 203.1C160.4 202.8 159.8 202.4 159.4 201.9C159.1 201.3 158.9 200.7 158.9 200ZM160 200C160 200.5 160.1 200.9 160.4 201.2C160.7 201.5 161.1 201.8 161.6 201.9C162.1 202.1 162.7 202.2 163.4 202.2C164 202.2 164.6 202.1 165.1 201.9C165.6 201.8 166 201.5 166.3 201.2C166.5 200.9 166.7 200.5 166.7 200C166.7 199.6 166.5 199.2 166.3 198.9C166 198.5 165.6 198.3 165.1 198.1C164.6 198 164 197.9 163.4 197.9C162.7 197.9 162.1 198 161.6 198.2C161.1 198.3 160.7 198.6 160.4 198.9C160.1 199.2 160 199.6 160 200Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M174 249.3L179.2 249.3L179.2 247.3L179.8 247.3L179.8 251.9L179.2 251.9L179.2 249.9L174 249.9L174 249.3ZM173.9 253.7C173.9 253.3 174 252.9 174.2 252.6C174.4 252.3 174.6 252.1 175 251.9C175.3 251.7 175.7 251.7 176.1 251.7C176.5 251.7 176.8 251.7 177.1 251.9C177.5 252.1 177.7 252.3 177.9 252.6C178.1 252.9 178.2 253.3 178.2 253.7C178.2 254.1 178.1 254.4 177.9 254.7C177.7 255 177.5 255.3 177.1 255.4C176.8 255.6 176.5 255.7 176.1 255.7C175.7 255.7 175.3 255.6 175 255.4C174.6 255.3 174.4 255 174.2 254.7C174 254.4 173.9 254.1 173.9 253.7ZM174.5 253.7C174.5 253.9 174.5 254.2 174.7 254.4C174.8 254.6 175 254.8 175.2 254.9C175.5 255 175.7 255 176.1 255C176.5 255 176.9 254.9 177.2 254.7C177.5 254.4 177.6 254.1 177.6 253.7C177.6 253.3 177.5 252.9 177.2 252.7C176.9 252.4 176.5 252.3 176.1 252.3C175.7 252.3 175.5 252.4 175.2 252.5C175 252.6 174.8 252.7 174.7 253C174.5 253.2 174.5 253.4 174.5 253.7ZM173.9 258.2C173.9 257.8 174 257.5 174.2 257.2C174.4 257 174.7 256.9 175.1 256.9L179 256.9L179.3 257.6L175.1 257.6C174.9 257.6 174.7 257.6 174.6 257.8C174.5 257.9 174.5 258.1 174.5 258.3C174.5 258.4 174.5 258.5 174.5 258.6C174.5 258.7 174.5 258.8 174.5 258.8L174 258.8C174 258.7 174 258.7 174 258.6C173.9 258.5 173.9 258.4 173.9 258.2ZM177.5 256.1L178.1 256.1L178.1 258.8L177.5 258.8L177.5 256.1ZM174 262.1C174.1 262.1 174.2 262.1 174.3 262.1C174.4 262.1 174.6 262.1 174.8 262.1L174.8 262L176.7 262C177 262 177.2 262 177.4 261.8C177.5 261.7 177.6 261.5 177.6 261.1C177.6 260.8 177.6 260.6 177.4 260.4C177.3 260.2 177.1 260.1 176.9 260.1L176.9 259.5C177.3 259.5 177.6 259.7 177.8 260C178 260.3 178.2 260.7 178.2 261.2C178.2 261.7 178 262 177.8 262.3C177.6 262.5 177.2 262.7 176.7 262.7L174.8 262.7C174.6 262.7 174.5 262.7 174.4 262.7C174.3 262.7 174.1 262.7 174 262.7L174 262.1ZM173.9 260.7C173.9 260.3 174 260 174.2 259.7C174.4 259.5 174.7 259.4 175.1 259.4C175.4 259.4 175.7 259.5 175.9 259.7C176.1 260 176.2 260.3 176.3 260.8L176.6 262.2L176 262.2L175.8 260.9C175.8 260.6 175.7 260.4 175.6 260.2C175.5 260.1 175.3 260 175.1 260C174.9 260 174.7 260 174.6 260.2C174.5 260.3 174.5 260.5 174.5 260.8C174.5 261.2 174.5 261.5 174.7 261.7C174.9 261.9 175.1 262 175.3 262L174.8 262.1C174.5 262.1 174.3 261.9 174.1 261.6C174 261.4 173.9 261.1 173.9 260.7ZM174 263.9L179.8 263.9L179.8 264.5L174 264.5L174 263.9ZM173.9 269.4C173.9 268.7 174.1 268.2 174.4 267.8C174.8 267.4 175.2 267.2 175.8 267.1L175.8 267.7C175.4 267.8 175.1 268 174.8 268.3C174.6 268.5 174.5 268.9 174.5 269.4C174.5 269.8 174.6 270.1 174.7 270.3C174.9 270.6 175.1 270.7 175.4 270.7C175.7 270.7 175.9 270.6 176.1 270.4C176.2 270.3 176.3 270.1 176.4 269.8L176.8 268.8C176.9 268.3 177.2 268 177.4 267.7C177.6 267.5 177.9 267.4 178.3 267.4C178.6 267.4 178.9 267.4 179.1 267.6C179.3 267.8 179.5 268 179.7 268.3C179.8 268.5 179.8 268.9 179.8 269.2C179.8 269.8 179.7 270.3 179.4 270.6C179.1 271 178.7 271.2 178.1 271.2L178.1 270.6C178.5 270.5 178.8 270.4 179 270.1C179.2 269.9 179.3 269.6 179.3 269.2C179.3 268.8 179.2 268.5 179 268.3C178.9 268.1 178.7 268 178.4 268C178.1 268 178 268.1 177.8 268.2C177.7 268.4 177.5 268.6 177.4 268.9L177.1 270C176.9 270.4 176.7 270.7 176.4 271C176.2 271.2 175.8 271.3 175.4 271.3C175 271.3 174.6 271.1 174.3 270.8C174.1 270.5 173.9 270 173.9 269.4ZM173.9 273.9C173.9 273.5 174 273.1 174.2 272.9C174.4 272.7 174.7 272.6 175.1 272.6L179 272.6L179.3 273.3L175.1 273.3C174.9 273.3 174.7 273.3 174.6 273.4C174.5 273.6 174.5 273.7 174.5 274C174.5 274.1 174.5 274.2 174.5 274.3C174.5 274.4 174.5 274.4 174.5 274.5L174 274.5C174 274.4 174 274.3 174 274.2C173.9 274.1 173.9 274 173.9 273.9ZM177.5 271.8L178.1 271.8L178.1 274.5L177.5 274.5L177.5 271.8ZM174 277.8C174.1 277.8 174.2 277.8 174.3 277.8C174.4 277.7 174.6 277.7 174.8 277.7L174.8 277.7L176.7 277.7C177 277.7 177.2 277.6 177.4 277.5C177.5 277.4 177.6 277.1 177.6 276.8C177.6 276.5 177.6 276.3 177.4 276.1C177.3 275.9 177.1 275.8 176.9 275.8L176.9 275.1C177.3 275.2 177.6 275.3 177.8 275.6C178 275.9 178.2 276.3 178.2 276.8C178.2 277.3 178 277.7 177.8 278C177.6 278.2 177.2 278.3 176.7 278.3L174.8 278.3C174.6 278.3 174.5 278.3 174.4 278.4C174.3 278.4 174.1 278.4 174 278.4L174 277.8ZM173.9 276.4C173.9 276 174 275.6 174.2 275.4C174.4 275.1 174.7 275 175.1 275C175.4 275 175.7 275.1 175.9 275.4C176.1 275.6 176.2 276 176.3 276.5L176.6 277.9L176 277.9L175.8 276.6C175.8 276.3 175.7 276 175.6 275.9C175.5 275.7 175.3 275.6 175.1 275.6C174.9 275.6 174.7 275.7 174.6 275.9C174.5 276 174.5 276.2 174.5 276.5C174.5 276.8 174.5 277.1 174.7 277.4C174.9 277.6 175.1 277.7 175.3 277.7L174.8 277.8C174.5 277.7 174.3 277.6 174.1 277.3C174 277.1 173.9 276.8 173.9 276.4ZM174 279.6L178.1 279.6L178.1 280.2L177.1 280.2L177.1 280.2L174 280.2L174 279.6ZM174 282.3L176.7 282.3C177 282.3 177.2 282.2 177.4 282.1C177.5 282 177.6 281.8 177.6 281.5C177.6 281.3 177.5 281 177.4 280.8C177.3 280.6 177.1 280.5 176.9 280.4C176.7 280.3 176.5 280.2 176.2 280.2L177.2 280.1C177.5 280.2 177.7 280.4 177.9 280.7C178.1 281 178.2 281.3 178.2 281.6C178.2 282 178 282.3 177.8 282.6C177.6 282.8 177.3 283 176.9 283L174 283L174 282.3ZM174 285.1L176.7 285.1C177 285.1 177.2 285 177.4 284.9C177.5 284.7 177.6 284.5 177.6 284.3C177.6 284 177.5 283.8 177.4 283.6C177.3 283.4 177.1 283.2 176.9 283.1C176.7 283 176.5 283 176.2 283L177.2 282.8C177.5 282.9 177.7 283.1 177.9 283.4C178.1 283.7 178.2 284 178.2 284.4C178.2 284.8 178 285.1 177.8 285.3C177.6 285.6 177.3 285.7 176.9 285.7L174 285.7L174 285.1ZM173.9 289C173.9 288.6 174 288.2 174.2 288C174.4 287.7 174.7 287.5 175 287.4L175 287.6L172.4 287.6L172.4 286.9L178.1 286.9L178.1 287.5L177.1 287.5L177.2 287.4C177.5 287.6 177.7 287.7 177.9 288C178.1 288.3 178.2 288.6 178.2 289C178.2 289.4 178.1 289.7 177.9 290C177.7 290.2 177.5 290.4 177.2 290.6C176.8 290.7 176.5 290.8 176.1 290.8C175.6 290.8 175.3 290.7 174.9 290.6C174.6 290.4 174.4 290.2 174.2 289.9C174 289.7 173.9 289.3 173.9 289ZM174.5 288.9C174.5 289.3 174.6 289.6 174.9 289.8C175.2 290 175.6 290.2 176.1 290.2C176.5 290.2 176.9 290 177.2 289.8C177.5 289.6 177.6 289.3 177.6 288.9C177.6 288.5 177.5 288.1 177.2 287.9C176.9 287.7 176.5 287.5 176 287.5C175.6 287.5 175.2 287.7 174.9 287.9C174.6 288.1 174.5 288.5 174.5 288.9Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M158.9 250.5C158.9 249.9 159 249.4 159.2 248.9C159.4 248.5 159.7 248.1 160.1 247.8C160.5 247.6 160.9 247.5 161.4 247.5C161.8 247.5 162.2 247.6 162.6 247.7C162.9 247.9 163.2 248.2 163.4 248.5C163.6 248.9 163.7 249.2 163.7 249.6L163.4 249.7C163.4 249.3 163.5 249 163.7 248.7C163.9 248.4 164.1 248.1 164.4 247.9C164.7 247.8 165.1 247.7 165.4 247.7C165.9 247.7 166.3 247.8 166.6 248C167 248.3 167.3 248.6 167.5 249C167.7 249.5 167.8 250 167.8 250.6C167.8 251.1 167.7 251.6 167.5 252C167.3 252.5 167 252.8 166.6 253C166.3 253.3 165.9 253.4 165.4 253.4C165.1 253.4 164.7 253.3 164.4 253.1C164.1 253 163.9 252.7 163.7 252.4C163.5 252.1 163.4 251.8 163.4 251.3L163.7 251.4C163.7 251.9 163.6 252.2 163.4 252.6C163.2 252.9 162.9 253.1 162.6 253.3C162.2 253.5 161.8 253.6 161.4 253.6C160.9 253.6 160.5 253.5 160.1 253.2C159.7 253 159.4 252.6 159.2 252.2C159 251.7 158.9 251.2 158.9 250.5ZM159.9 250.5C159.9 251.1 160.1 251.5 160.3 251.8C160.6 252.1 161 252.3 161.5 252.3C162 252.3 162.3 252.1 162.6 251.8C162.9 251.5 163 251.1 163 250.5C163 250 162.9 249.6 162.6 249.3C162.3 249 162 248.8 161.5 248.8C161 248.8 160.6 249 160.3 249.3C160.1 249.6 159.9 250 159.9 250.5ZM164 250.5C164 251 164.1 251.4 164.4 251.6C164.6 251.9 164.9 252 165.3 252C165.8 252 166.1 251.9 166.3 251.6C166.6 251.3 166.7 251 166.7 250.5C166.7 250.1 166.6 249.7 166.3 249.4C166.1 249.2 165.8 249 165.3 249C164.9 249 164.6 249.2 164.4 249.4C164.1 249.7 164 250.1 164 250.5ZM158.9 257.6C158.9 256.7 159.1 256 159.6 255.5C160 255 160.6 254.6 161.4 254.5L161.4 255.8C160.9 255.9 160.6 256.1 160.3 256.4C160.1 256.8 159.9 257.1 159.9 257.6C159.9 258 160.1 258.4 160.4 258.7C160.7 259 161.1 259.2 161.8 259.2C162.4 259.2 162.9 259 163.2 258.7C163.5 258.4 163.7 258 163.7 257.5C163.7 257.2 163.6 256.9 163.5 256.7C163.4 256.4 163.2 256.2 162.9 256.1L162.9 255L167.6 255.4L167.6 260.1L166.6 260.1L166.6 256L166.9 256.5L163.7 256.3L163.7 255.9C164 256.1 164.2 256.3 164.4 256.6C164.6 257 164.7 257.3 164.7 257.8C164.7 258.3 164.5 258.8 164.3 259.2C164.1 259.7 163.8 260 163.3 260.2C162.9 260.4 162.4 260.6 161.8 260.6C161.2 260.6 160.7 260.4 160.2 260.2C159.8 259.9 159.5 259.6 159.2 259.2C159 258.7 158.9 258.2 158.9 257.6Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M174 310.5L179.8 308.3L179.8 309L174.3 311.1L174.3 310.8L179.8 312.9L179.8 313.5L174 311.3L174 310.5ZM174 314.3L178.1 314.3L178.1 315L174 315L174 314.3ZM179 314.3L179.8 314.3L179.8 315L179 315L179 314.3ZM173.9 317.6C173.9 317.1 174 316.7 174.3 316.4C174.5 316.2 174.8 316 175.3 315.9L175.3 316.6C175 316.6 174.8 316.7 174.7 316.9C174.5 317.1 174.4 317.3 174.4 317.7C174.4 317.9 174.5 318.2 174.6 318.3C174.7 318.5 174.9 318.6 175.1 318.6C175.2 318.6 175.3 318.5 175.4 318.4C175.5 318.3 175.6 318.2 175.7 317.9L175.9 317.2C176 316.9 176.1 316.6 176.3 316.4C176.5 316.2 176.7 316.1 177 316.1C177.4 316.1 177.6 316.2 177.8 316.5C178.1 316.8 178.2 317.1 178.2 317.6C178.2 318 178.1 318.4 177.8 318.6C177.6 318.9 177.3 319.1 177 319.1L177 318.5C177.2 318.5 177.3 318.4 177.5 318.2C177.6 318 177.6 317.8 177.6 317.5C177.6 317.3 177.6 317.1 177.5 316.9C177.4 316.8 177.2 316.7 177.1 316.7C176.9 316.7 176.8 316.8 176.7 316.9C176.6 317 176.5 317.2 176.4 317.4L176.3 318C176.2 318.4 176 318.7 175.8 318.9C175.6 319.1 175.3 319.2 175.1 319.2C174.7 319.2 174.4 319 174.2 318.8C174 318.5 173.9 318.1 173.9 317.6ZM174 320.1L178.1 320.1L178.1 320.7L174 320.7L174 320.1ZM179 320.1L179.8 320.1L179.8 320.8L179 320.8L179 320.1ZM173.9 323.6C173.9 323.2 174 322.9 174.2 322.7C174.4 322.5 174.7 322.4 175.1 322.4L179 322.4L179.3 323L175.1 323C174.9 323 174.7 323.1 174.6 323.2C174.5 323.3 174.5 323.5 174.5 323.7C174.5 323.9 174.5 323.9 174.5 324C174.5 324.1 174.5 324.2 174.5 324.2L174 324.2C174 324.2 174 324.1 174 324C173.9 323.9 173.9 323.8 173.9 323.6ZM177.5 321.5L178.1 321.5L178.1 324.2L177.5 324.2L177.5 321.5ZM173.9 326.4C173.9 325.9 174 325.5 174.3 325.2C174.5 324.9 174.8 324.7 175.3 324.7L175.3 325.3C175 325.3 174.8 325.5 174.7 325.6C174.5 325.8 174.4 326.1 174.4 326.4C174.4 326.7 174.5 326.9 174.6 327.1C174.7 327.2 174.9 327.3 175.1 327.3C175.2 327.3 175.3 327.3 175.4 327.2C175.5 327.1 175.6 326.9 175.7 326.6L175.9 326C176 325.6 176.1 325.3 176.3 325.1C176.5 325 176.7 324.9 177 324.9C177.4 324.9 177.6 325 177.8 325.3C178.1 325.5 178.2 325.9 178.2 326.3C178.2 326.8 178.1 327.1 177.8 327.4C177.6 327.7 177.3 327.8 177 327.9L177 327.3C177.2 327.2 177.3 327.1 177.5 327C177.6 326.8 177.6 326.6 177.6 326.3C177.6 326 177.6 325.8 177.5 325.7C177.4 325.5 177.2 325.5 177.1 325.5C176.9 325.5 176.8 325.5 176.7 325.6C176.6 325.7 176.5 325.9 176.4 326.2L176.3 326.8C176.2 327.2 176 327.5 175.8 327.6C175.6 327.8 175.3 327.9 175.1 327.9C174.7 327.9 174.4 327.8 174.2 327.5C174 327.3 173.9 326.9 173.9 326.4Z' fill='%230E1219'%3E%3C/path%3E%3Cpath d='M159 308.4L160 308.4C160.7 309.3 161.3 310 161.8 310.5C162.4 311.1 162.8 311.5 163.2 311.9C163.6 312.2 164 312.5 164.3 312.6C164.6 312.7 165 312.8 165.3 312.8C165.7 312.8 166.1 312.7 166.3 312.4C166.6 312.2 166.7 311.8 166.7 311.3C166.7 310.9 166.6 310.5 166.3 310.2C166 309.9 165.6 309.7 165.1 309.6L165.1 308.3C165.9 308.4 166.6 308.7 167 309.3C167.5 309.8 167.8 310.5 167.8 311.4C167.8 312.3 167.5 312.9 167.1 313.4C166.6 313.9 166 314.2 165.2 314.2C164.8 314.2 164.4 314.1 164 313.9C163.6 313.8 163.2 313.6 162.8 313.2C162.4 312.9 161.9 312.4 161.4 311.9C160.9 311.3 160.3 310.6 159.6 309.8L160 309.5L160 314.3L159 314.3L159 308.4ZM158.9 318.2C158.9 317.6 159 317 159.2 316.6C159.4 316.1 159.7 315.8 160.1 315.5C160.6 315.2 161.1 315.1 161.7 315L161.7 316.3C161.1 316.4 160.7 316.6 160.4 316.9C160.1 317.2 159.9 317.6 159.9 318.1C159.9 318.6 160.1 319 160.3 319.3C160.6 319.6 160.9 319.7 161.4 319.7C161.9 319.7 162.3 319.6 162.6 319.3C162.9 319 163 318.6 163 318.1L163 317.1L164 317.1L164 318.1C164 318.5 164.2 318.9 164.4 319.1C164.6 319.4 165 319.5 165.4 319.5C165.8 319.5 166.1 319.4 166.4 319.2C166.6 318.9 166.7 318.6 166.7 318.1C166.7 317.7 166.6 317.3 166.3 317C166.1 316.7 165.7 316.5 165.2 316.4L165.2 315.1C165.7 315.2 166.2 315.3 166.6 315.6C166.9 315.8 167.2 316.2 167.4 316.6C167.7 317.1 167.8 317.6 167.8 318.1C167.8 318.7 167.7 319.2 167.5 319.6C167.3 320 167 320.3 166.7 320.5C166.3 320.8 165.9 320.9 165.5 320.9C165.1 320.9 164.7 320.8 164.4 320.6C164.1 320.4 163.9 320.2 163.7 319.9C163.5 319.6 163.4 319.2 163.4 318.9L163.7 318.8C163.7 319.3 163.6 319.7 163.4 320C163.2 320.4 162.9 320.6 162.5 320.8C162.2 321 161.8 321.1 161.4 321.1C160.9 321.1 160.4 321 160 320.7C159.7 320.5 159.4 320.1 159.2 319.7C159 319.2 158.9 318.7 158.9 318.2Z' fill='%230E1219'%3E%3C/path%3E%3Crect width='20' height='173' transform='translate(203 156)' fill='%230E1219'%3E%3C/rect%3E%3Cpath d='M205.7 168.2C205.7 167.6 205.8 166.9 206 166.2C206.2 165.5 206.4 164.9 206.7 164.4L209.3 165C208.9 165.6 208.7 166.2 208.6 166.7C208.5 167.3 208.5 167.8 208.5 168.2C208.5 168.7 208.5 169 208.7 169.2C208.8 169.4 209 169.5 209.2 169.5C209.4 169.5 209.6 169.4 209.7 169.2C209.9 168.9 210 168.6 210.1 168.2C210.2 167.8 210.3 167.4 210.4 167C210.6 166.5 210.8 166.1 211 165.7C211.3 165.3 211.6 165 212 164.8C212.4 164.5 212.9 164.4 213.5 164.4C214.3 164.4 214.9 164.6 215.5 165C216.1 165.3 216.5 165.9 216.8 166.6C217.1 167.3 217.2 168.1 217.2 169C217.2 169.7 217.2 170.3 217 170.9C216.8 171.5 216.6 172 216.3 172.3L214 171.8C214.2 171.2 214.4 170.7 214.5 170.3C214.6 169.9 214.6 169.5 214.6 169.1C214.6 168.6 214.6 168.3 214.4 168.1C214.3 167.8 214.1 167.7 213.9 167.7C213.7 167.7 213.6 167.8 213.4 168.1C213.3 168.3 213.2 168.6 213.1 169C212.9 169.4 212.8 169.8 212.7 170.3C212.5 170.7 212.3 171.1 212.1 171.5C211.8 171.9 211.5 172.2 211.1 172.4C210.7 172.7 210.2 172.8 209.6 172.8C208.4 172.8 207.4 172.4 206.8 171.6C206.1 170.8 205.7 169.7 205.7 168.2ZM206 173.1L217 176.1L217 181.3L206 184.5L206 180.6L208.1 180.2L208.1 177.3L206 176.8L206 173.1ZM210.1 177.6L210.1 179.8L214.9 178.7L210.1 177.6ZM206 185.3L217 185.3L217 188.7L211.7 191.4L217 194.1L217 197.4L206 197.4L206 194.1L211.8 194.1L207.9 192.1L207.9 190.7L211.8 188.7L206 188.7L206 185.3ZM206 198.4L217 201.4L217 206.6L206 209.8L206 205.9L208.1 205.5L208.1 202.6L206 202.2L206 198.4ZM210.1 203L210.1 205.1L214.9 204L210.1 203ZM206 210.7L217 210.7L217 213.9L211.2 218.2L217 218.2L217 221.1L206 221.1L206 217.9L211.6 213.6L206 213.6L206 210.7ZM206 224.6L214.5 224.6L214.5 222.1L217 222.1L217 230.8L214.5 230.8L214.5 228.3L206 228.3L206 224.6ZM206 231.8L217 231.8L217 235.4L212.9 235.4L212.9 238.8L217 238.8L217 242.4L206 242.4L206 238.8L210.3 238.8L210.3 235.4L206 235.4L206 231.8ZM206 243.4L217 246.4L217 251.6L206 254.8L206 250.9L208.1 250.5L208.1 247.6L206 247.2L206 243.4ZM210.1 248L210.1 250.1L214.9 249L210.1 248ZM205.7 262C205.7 261.3 205.8 260.7 206 260C206.2 259.3 206.4 258.7 206.7 258.2L209.3 258.8C208.9 259.4 208.7 260 208.6 260.5C208.5 261 208.5 261.5 208.5 262C208.5 262.4 208.5 262.8 208.7 263C208.8 263.2 209 263.3 209.2 263.3C209.4 263.3 209.6 263.2 209.7 262.9C209.9 262.7 210 262.4 210.1 262C210.2 261.6 210.3 261.2 210.4 260.7C210.6 260.3 210.8 259.9 211 259.5C211.3 259.1 211.6 258.8 212 258.6C212.4 258.3 212.9 258.2 213.5 258.2C214.3 258.2 214.9 258.4 215.5 258.7C216.1 259.1 216.5 259.6 216.8 260.3C217.1 261 217.2 261.9 217.2 262.8C217.2 263.4 217.2 264 217 264.6C216.8 265.2 216.6 265.7 216.3 266.1L214 265.5C214.2 265 214.4 264.5 214.5 264.1C214.6 263.6 214.6 263.2 214.6 262.9C214.6 262.4 214.6 262.1 214.4 261.8C214.3 261.6 214.1 261.5 213.9 261.5C213.7 261.5 213.6 261.6 213.4 261.8C213.3 262.1 213.2 262.4 213.1 262.8C212.9 263.2 212.8 263.6 212.7 264C212.5 264.5 212.3 264.9 212.1 265.3C211.8 265.6 211.5 266 211.1 266.2C210.7 266.4 210.2 266.6 209.6 266.6C208.4 266.6 207.4 266.2 206.8 265.4C206.1 264.6 205.7 263.4 205.7 262ZM206 267.7L217 267.7L217 271.1L208.5 271.1L208.5 275L206 274.9L206 267.7ZM205.7 281.3C205.7 280.1 206 279.1 206.5 278.2C207 277.3 207.6 276.6 208.5 276.1C209.4 275.6 210.4 275.4 211.5 275.4C212.6 275.4 213.6 275.6 214.5 276.1C215.3 276.6 216 277.3 216.5 278.2C217 279.1 217.2 280.1 217.2 281.3C217.2 282.5 217 283.5 216.5 284.4C216 285.2 215.4 285.9 214.5 286.4C213.6 286.9 212.6 287.2 211.5 287.2C210.4 287.2 209.4 286.9 208.5 286.4C207.6 285.9 207 285.2 206.5 284.4C206 283.5 205.7 282.5 205.7 281.3ZM208.7 281.3C208.7 282 208.9 282.5 209.4 282.9C210 283.4 210.7 283.6 211.5 283.6C212.1 283.6 212.6 283.5 213 283.3C213.5 283.1 213.8 282.8 214 282.5C214.3 282.1 214.4 281.7 214.4 281.3C214.4 280.6 214.2 280.1 213.6 279.6C213.1 279.2 212.4 279 211.5 279C210.7 279 210 279.2 209.4 279.6C208.9 280.1 208.7 280.6 208.7 281.3ZM206 287.5L217 290.5L217 295.7L206 298.9L206 295L208.1 294.5L208.1 291.7L206 291.2L206 287.5ZM210.1 292L210.1 294.2L214.9 293.1L210.1 292ZM206 299.7L217 299.7L217 302.9L211.2 307.3L217 307.3L217 310.2L206 310.2L206 307L211.6 302.7L206 302.7L206 299.7ZM206 312L217 312L217 319.7L214.6 319.7L214.6 315.8L212.6 315.8L212.6 319.4L210.6 319.4L210.6 315.8L208.5 315.8L208.5 319.7L206 319.7L206 312Z' fill='white'%3E%3C/path%3E%3Cdefs%3E%3Cpattern id='pattern0_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_514_1247' transform='matrix(0 0 0 0 -0.2 0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern1_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image1_514_1247' transform='scale(0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern2_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image2_514_1247' transform='scale(0 0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern3_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image3_514_1247' transform='matrix(0 0 0 0 0 0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern4_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image4_514_1247' transform='scale(0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern5_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image5_514_1247' transform='matrix(0 0 0 0 0 -0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern6_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image6_514_1247' transform='translate(-0.8 -0.8) scale(0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern7_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image7_514_1247' transform='translate(-0 -0) scale(0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern8_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image8_514_1247' transform='matrix(0 0 0 0 0 -0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern9_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image9_514_1247' transform='scale(0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern10_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image10_514_1247' transform='scale(0)'%3E%3C/use%3E%3C/pattern%3E%3Cpattern id='pattern11_514_1247' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image11_514_1247' transform='scale(0)'%3E%3C/use%3E%3C/pattern%3E%3CclipPath id='clip0_514_1247'%3E%3Crect x='323' y='193' width='57' height='57' rx='4' fill='white'%3E%3C/rect%3E%3C/clipPath%3E%3CclipPath id='clip1_514_1247'%3E%3Crect x='389' y='193' width='58' height='58' rx='4' fill='white'%3E%3C/rect%3E%3C/clipPath%3E%3CclipPath id='clip2_514_1247'%3E%3Crect x='523' y='128' width='57' height='56' rx='4' fill='white'%3E%3C/rect%3E%3C/clipPath%3E%3CclipPath id='clip3_514_1247'%3E%3Cpath d='M89 40.5C91.8 40.5 94 42.7 94 45.5C94 48.3 91.8 50.5 89 50.5C86.2 50.5 84 48.3 84 45.5C84 42.7 86.2 40.5 89 40.5Z' fill='white'%3E%3C/path%3E%3C/clipPath%3E%3CclipPath id='clip4_514_1247'%3E%3Cpath d='M129 172C130.1 172 131 172.9 131 174L131 354C131 355.1 130.1 356 129 356C127.9 356 127 355.1 127 354L127 174C127 172.9 127.9 172 129 172Z' fill='white'%3E%3C/path%3E%3C/clipPath%3E%3Cimage id='image0_514_1247' width='1934' height='1062' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image1_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image2_514_1247' width='1000' height='1340' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image3_514_1247' width='1584' height='672' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image4_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image5_514_1247' width='1584' height='672' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image6_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image7_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image8_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image9_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image10_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image11_514_1247' width='1024' height='1024' preserveAspectRatio='none'%3E%3C/image%3E%3Cimage id='image12_514_1247' width='160' height='160' preserveAspectRatio='none'%3E%3C/image%3E%3C/defs%3E%3C/svg%3E";
Object.assign(__ds_scope, { PASSPORT_CLOSED, PASSPORT_OPEN });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/passport/passportArt.js", error: String((e && e.message) || e) }); }

// components/passport/Passport.jsx
try { (() => {
const W = 601,
  H = 400,
  SPINE = 300;
const EASE = 'cubic-bezier(.65,0,.35,1)';

/** Ventur.City passport — cover flips open on the spine to reveal the stamp spread. */
function Passport({
  open,
  defaultOpen = false,
  onToggle,
  width = 601,
  duration = 900,
  autoplay = false,
  autoplayDelay = 600,
  interactive = true,
  centerClosed = true,
  closedSrc = __ds_scope.PASSPORT_CLOSED,
  openSrc = __ds_scope.PASSPORT_OPEN,
  style
}) {
  const [inner, setInner] = React.useState(defaultOpen);
  const isOpen = open ?? inner;
  const set = v => {
    if (open === undefined) setInner(v);
    onToggle && onToggle(v);
  };
  React.useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => set(true), autoplayDelay);
    return () => clearTimeout(t);
  }, [autoplay]);
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const d = reduce ? 0 : duration;
  const k = width / W;
  const shift = centerClosed && !isOpen ? -SPINE / 2 : 0;
  const face = {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    overflow: 'hidden'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    "aria-pressed": interactive ? isOpen : undefined,
    "aria-label": isOpen ? 'Close passport' : 'Open passport',
    onClick: interactive ? () => set(!isOpen) : undefined,
    onKeyDown: interactive ? e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        set(!isOpen);
      }
    } : undefined,
    style: {
      width,
      height: H * k,
      position: 'relative',
      cursor: interactive ? 'pointer' : 'default',
      outline: 'none',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: W,
      height: H,
      transform: `scale(${k}) translateX(${shift}px)`,
      transformOrigin: '0 0',
      transition: `transform ${d}ms ${EASE}`,
      perspective: 2200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: SPINE,
      top: 0,
      width: W - SPINE,
      height: H,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: openSrc,
    alt: "",
    draggable: "false",
    style: {
      position: 'absolute',
      left: -SPINE,
      top: 0,
      width: W,
      height: H,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: SPINE,
      top: 0,
      width: W - SPINE,
      height: H,
      transformStyle: 'preserve-3d',
      transformOrigin: '0 50%',
      transform: `rotateY(${isOpen ? -180 : 0}deg)`,
      transition: `transform ${d}ms ${EASE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      filter: 'drop-shadow(0 10px 18px rgba(14,18,25,.25))',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: closedSrc,
    alt: "Passport",
    draggable: "false",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      transform: 'rotateY(180deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: openSrc,
    alt: "",
    draggable: "false",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: W,
      height: H,
      display: 'block',
      transform: 'translateX(0)'
    }
  })))));
}
Object.assign(__ds_scope, { Passport });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/passport/Passport.jsx", error: String((e && e.message) || e) }); }

// components/places/CategoryIcon.jsx
try { (() => {
const CATEGORIES = {
  food: {
    label: 'Food & Drink',
    icon: 'food'
  },
  nightclub: {
    label: 'Nightclub',
    icon: 'nightclub'
  },
  shopping: {
    label: 'Shopping',
    icon: 'shopping'
  },
  beauty: {
    label: 'Beauty',
    icon: 'beauty'
  },
  wellness: {
    label: 'Wellness',
    icon: 'wellness'
  },
  entertainment: {
    label: 'Entertainment',
    icon: 'entertainment'
  },
  outdoors: {
    label: 'Outdoors',
    icon: 'outdoors'
  },
  services: {
    label: 'Services',
    icon: 'services'
  }
};
function CategoryIcon({
  category = 'food',
  size = 24,
  color = 'currentColor',
  style
}) {
  const c = CATEGORIES[category] || CATEGORIES.food;
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: size,
    color: color,
    style: style
  });
}
Object.assign(__ds_scope, { CATEGORIES, CategoryIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/places/CategoryIcon.jsx", error: String((e && e.message) || e) }); }

// components/places/CategoryChip.jsx
try { (() => {
function CategoryChip({
  category = 'food',
  label,
  partner = false,
  selected = false,
  onClick,
  style
}) {
  const c = __ds_scope.CATEGORIES[category] || __ds_scope.CATEGORIES.food;
  const bg = partner ? 'var(--blue-100)' : 'var(--black-30)';
  const fg = partner ? 'var(--black-120)' : 'var(--green-0)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 20px 0 16px',
      borderRadius: 'var(--radius-round)',
      background: bg,
      color: fg,
      border: 0,
      font: '500 18px/24px var(--font-sans)',
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      boxShadow: selected ? '0 0 0 2px var(--green-100)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryIcon, {
    category: category,
    size: 24
  }), label || c.label);
}
Object.assign(__ds_scope, { CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/places/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/places/CategoryPin.jsx
try { (() => {
function CategoryPin({
  category = 'food',
  partner = false,
  size = 56,
  style
}) {
  const ring = Math.max(2, Math.round(size * 0.06));
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": (partner ? 'Partner ' : '') + category,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: partner ? 'var(--blue-100)' : 'var(--black-30)',
      border: `${ring}px solid var(--green-10)`,
      color: 'var(--green-0)',
      boxShadow: '0 2px 6px rgba(14,18,25,.25)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryIcon, {
    category: category,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { CategoryPin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/places/CategoryPin.jsx", error: String((e && e.message) || e) }); }

// components/places/PhotoStackMarker.jsx
try { (() => {
const POSE = {
  front: 'translate(8%, 4%) rotate(4deg)',
  back: 'translate(-10%, -2%) rotate(-7deg)',
  out: 'translate(-48%, 6%) rotate(-16deg) scale(.96)'
};
function Card({
  src,
  w,
  pose,
  z,
  idx
}) {
  const b = Math.round(w * 0.045);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: w,
      height: w * 4 / 3,
      boxSizing: 'border-box',
      padding: b,
      background: 'var(--green-10)',
      borderRadius: w * 0.07,
      boxShadow: '0 6px 16px rgba(14,18,25,.28)',
      transform: POSE[pose],
      zIndex: z,
      transition: 'transform 520ms cubic-bezier(.45,.05,.25,1)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      borderRadius: w * 0.07 - b
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: w * 0.07 - b,
      background: idx % 2 ? 'var(--green-20)' : 'var(--green-15)'
    }
  }));
}
function PhotoStackMarker({
  photos = [],
  count,
  category = 'food',
  partner = false,
  width = 150,
  interval = 2800,
  animate = true,
  style
}) {
  const n = photos.length;
  const total = count ?? n;
  const stacked = Math.max(n, total) > 1;
  // two physical cards (A,B) swap roles; the card going behind gets the next photo.
  const [st, setSt] = React.useState({
    front: 0,
    imgs: [0, 1 % Math.max(n, 1)],
    phase: 'rest',
    next: 2
  });
  React.useEffect(() => {
    if (!animate || !stacked || n < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t1, t2;
    const id = setInterval(() => {
      setSt(s => ({
        ...s,
        phase: 'out'
      }));
      t1 = setTimeout(() => setSt(s => ({
        ...s,
        phase: 'tuck',
        front: 1 - s.front
      })), 260);
      t2 = setTimeout(() => setSt(s => {
        const imgs = s.imgs.slice();
        imgs[1 - s.front] = s.next % n;
        return {
          ...s,
          phase: 'rest',
          imgs,
          next: s.next + 1
        };
      }), 820);
    }, interval);
    return () => {
      clearInterval(id);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [animate, stacked, n, interval]);
  const h = width * 4 / 3;
  const poseOf = slot => {
    const isFront = st.front === slot;
    if (st.phase === 'out' && isFront) return 'out';
    if (st.phase === 'tuck' && !isFront) return 'out';
    return isFront ? 'front' : 'back';
  };
  const zOf = slot => st.front === slot ? 2 : 1;
  const badge = Math.round(width * 0.4),
    pin = Math.round(width * 0.62);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: width * 1.25,
      height: h * 1.12,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: width * 0.12,
      top: h * 0.06,
      width,
      height: h
    }
  }, stacked && /*#__PURE__*/React.createElement(Card, {
    src: photos[st.imgs[1]] ?? photos[0],
    w: width,
    pose: poseOf(1),
    z: zOf(1),
    idx: 1
  }), /*#__PURE__*/React.createElement(Card, {
    src: photos[st.imgs[0]],
    w: width,
    pose: stacked ? poseOf(0) : 'front',
    z: stacked ? zOf(0) : 2,
    idx: 0
  })), total > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 3,
      width: badge,
      height: badge,
      borderRadius: '50%',
      background: 'var(--green-10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `400 ${Math.round(badge * 0.46)}px/1 var(--font-sans)`,
      color: 'var(--black-120)',
      boxShadow: '0 2px 6px rgba(14,18,25,.2)'
    }
  }, total > 99 ? '99+' : total), /*#__PURE__*/React.createElement(__ds_scope.CategoryPin, {
    category: category,
    partner: partner,
    size: pin,
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 3
    }
  }));
}
Object.assign(__ds_scope, { PhotoStackMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/places/PhotoStackMarker.jsx", error: String((e && e.message) || e) }); }

// components/places/PlaceMarker.jsx
try { (() => {
function PlaceMarker({
  src,
  alt = '',
  size = 140,
  style
}) {
  const border = Math.round(size * 0.055);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      boxSizing: 'border-box',
      padding: border,
      background: 'var(--green-0)',
      borderRadius: size * 0.2,
      boxShadow: '0 4px 12px rgba(14,18,25,.18)',
      flex: 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      borderRadius: size * 0.2 - border
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: size * 0.2 - border,
      background: 'var(--green-15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--sm-medium)',
      color: 'var(--black-10)'
    }
  }, "Place photo"));
}
Object.assign(__ds_scope, { PlaceMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/places/PlaceMarker.jsx", error: String((e && e.message) || e) }); }

// components/web/WebHeadline.jsx
try { (() => {
const BAR = {
  dark: {
    bg: 'var(--black-120)',
    fg: 'var(--green-0)'
  },
  brand: {
    bg: 'var(--green-100)',
    fg: 'var(--black-120)'
  }
};
const SUB_FONT = '600 18px/24px var(--font-sans)';
const EASE = 'cubic-bezier(.65,0,.35,1)';

/** WEBSITE ONLY. Uppercase display title + highlight-bar subtitle lines. Never use for body copy or in the mobile app. */
function WebHeadline({
  title,
  lines = [],
  titleColor = 'light',
  size = 'lg',
  as = 'h2',
  animate = false,
  wipeSpeed = 900,
  startDelay = 0,
  replayKey,
  style
}) {
  const T = as;
  const titleFont = size === 'xl' ? 'var(--display-xl)' : size === 'md' ? 'var(--display-md)' : 'var(--display-lg)';
  const subs = lines.map((l, i) => typeof l === 'string' ? {
    text: l,
    tone: i === 0 ? 'dark' : 'brand'
  } : l);
  const root = React.useRef(null),
    measureRef = React.useRef(null);
  const [layout, setLayout] = React.useState(null); // [[{text,w}]] per subtitle
  const [play, setPlay] = React.useState(!animate);
  const key = subs.map(s => s.text + s.tone).join('|');
  React.useLayoutEffect(() => {
    if (layout || !measureRef.current) return;
    const out = [...measureRef.current.querySelectorAll('[data-sub]')].map(sub => {
      const rows = [];
      sub.querySelectorAll('[data-w]').forEach(w => {
        const r = w.getBoundingClientRect();
        const last = rows[rows.length - 1];
        if (!last || Math.abs(r.top - last.top) > 4) rows.push({
          top: r.top,
          left: r.left,
          right: r.right,
          words: [w.textContent]
        });else {
          last.right = r.right;
          last.words.push(w.textContent);
        }
      });
      return rows.map(r => ({
        text: r.words.join('').trim(),
        w: r.right - r.left + 32
      }));
    });
    setLayout(out);
  });
  React.useEffect(() => {
    setLayout(null);
  }, [key]);
  React.useEffect(() => {
    const el = root.current;
    if (!el) return;
    let w = el.clientWidth;
    const ro = new ResizeObserver(() => {
      if (el.clientWidth !== w) {
        w = el.clientWidth;
        setLayout(null);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  React.useEffect(() => {
    if (!animate) {
      setPlay(true);
      return;
    }
    setPlay(false);
    const el = root.current;
    let raf;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        io.disconnect();
        raf = requestAnimationFrame(() => requestAnimationFrame(() => setPlay(true)));
      }
    }, {
      threshold: 0.3
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animate, replayKey]);
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = startDelay;
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement(T, {
    style: {
      margin: '0 0 8px',
      font: titleFont,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      textWrap: 'balance',
      color: titleColor === 'dark' ? 'var(--black-120)' : 'var(--green-0)'
    }
  }, title), !layout ? /*#__PURE__*/React.createElement("div", {
    ref: measureRef,
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      visibility: animate ? 'hidden' : 'visible'
    }
  }, subs.map((s, i) => {
    const b = BAR[s.tone] || BAR.dark;
    const words = s.text.split(/(\s+)/).filter(Boolean);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      "data-sub": "",
      style: {
        font: SUB_FONT,
        maxWidth: 'calc(100% - 32px)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: b.bg,
        color: b.fg
      }
    }, words.map((w, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      "data-w": ""
    }, w))));
  })) : layout.map((rows, i) => {
    const b = BAR[subs[i]?.tone] || BAR.dark;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2
      }
    }, rows.map((r, j) => {
      const dur = Math.max(260, r.w / wipeSpeed * 1000),
        delay = t;
      t += dur;
      const shown = play || reduce;
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        style: {
          display: 'inline-block',
          background: b.bg,
          color: b.fg,
          font: SUB_FONT,
          padding: '4px 16px',
          whiteSpace: 'nowrap',
          clipPath: shown ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
          transition: animate && !reduce ? `clip-path ${dur}ms ${EASE} ${delay}ms` : 'none'
        }
      }, r.text);
    }));
  }));
}
Object.assign(__ds_scope, { WebHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/WebHeadline.jsx", error: String((e && e.message) || e) }); }

// reference/app.jsx
try { (() => {
const {
  Toast: RefToast,
  Icon: RefIcon
} = window.VenturCityDesignSystem_a97b28;
function mdToHtml(src) {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inl = s => s.split(/(`[^`]+`)/).map(p => p.length > 1 && p[0] === '`' && p[p.length - 1] === '`' ? '<code>' + esc(p.slice(1, -1)) + '</code>' : esc(p).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')).join('');
  let html = '',
    depth = 0,
    code = false,
    para = [];
  const flush = () => {
    if (para.length) {
      html += '<p>' + inl(para.join(' ')) + '</p>';
      para = [];
    }
  };
  const close = () => {
    while (depth > 0) {
      html += '</ul>';
      depth--;
    }
  };
  for (const raw of src.split('\n')) {
    if (raw.startsWith('```')) {
      flush();
      close();
      html += code ? '</code></pre>' : '<pre><code>';
      code = !code;
      continue;
    }
    if (code) {
      html += esc(raw) + '\n';
      continue;
    }
    const h = raw.match(/^(#{1,4})\s+(.*)/);
    if (h) {
      flush();
      close();
      const n = Math.min(h[1].length + 1, 4);
      html += `<h${n}>${inl(h[2])}</h${n}>`;
      continue;
    }
    const li = raw.match(/^(\s*)[-*]\s+(.*)/);
    if (li) {
      flush();
      const lvl = Math.floor(li[1].length / 2) + 1;
      while (depth < lvl) {
        html += '<ul>';
        depth++;
      }
      while (depth > lvl) {
        html += '</ul>';
        depth--;
      }
      html += '<li>' + inl(li[2]) + '</li>';
      continue;
    }
    if (!raw.trim()) {
      flush();
      close();
      continue;
    }
    close();
    para.push(raw.trim());
  }
  flush();
  close();
  return html;
}
function ReadmeTab() {
  const src = (document.getElementById('readme-src') || {}).textContent || '';
  const html = React.useMemo(() => mdToHtml(src.trim()), [src]);
  return /*#__PURE__*/React.createElement("section", {
    className: "md",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
const RAMPS = [['Green', 'green', [0, 5, 10, 15, 20, 30, 50, 70, 100, 120], 'Brand ramp. 100 is the Ventur lime; 0–20 are the warm off-white surfaces.'], ['Black', 'black', [0, 5, 10, 20, 30, 50, 70, 100, 120, 150], 'Cool slate neutrals. 0 is the lightest step.'], ['Red', 'red', [50, 70, 100, 120], 'Danger.'], ['Orange', 'orange', [50, 70, 100, 120], 'Warning.'], ['Blue', 'blue', [50, 70, 100, 120], 'Info, water, and partnered merchants (100).']];
const SEMANTIC = [['Surface', 'Fills for buttons, pages and panels.', ['surface-brand', 'surface-brand-hover', 'surface-brand-disable', 'surface-light', 'surface-light-hover', 'surface-light-disable', 'surface-dark', 'surface-dark-hover', 'surface-dark-disable', 'surface-off', 'surface-void']], ['Elevation', 'Layer stacks — higher number sits closer to the viewer.', ['elevation-light-0', 'elevation-light-1', 'elevation-light-2', 'elevation-light-3', 'elevation-light-4', 'elevation-dark-0', 'elevation-dark-1', 'elevation-dark-2', 'elevation-dark-3', 'elevation-dark-4', 'elevation-dark-5']], ['Text', 'Foreground by role.', ['text-brand', 'text-brand-hover', 'text-brand-disable', 'text-primary-light', 'text-primary-dark', 'text-hint-light', 'text-hint-dark', 'text-secondary', 'text-success', 'text-warn', 'text-danger', 'text-info']], ['Stroke', 'Borders and dividers.', ['stroke-brand', 'stroke-primary-light', 'stroke-primary-dark', 'stroke-secondary']], ['Toast', 'Feedback surfaces.', ['surface-neutral-toast', 'surface-success-toast', 'surface-warn-toast', 'surface-danger-toast']], ['Map — light', 'CityMap palette, light theme.', ['map-light-land', 'map-light-building', 'map-light-road-minor', 'map-light-road-major', 'map-light-path', 'map-light-rail', 'map-light-park', 'map-light-water', 'map-light-waterway']], ['Map — dark', 'CityMap palette, dark theme.', ['map-dark-land', 'map-dark-building', 'map-dark-road-minor', 'map-dark-road-major', 'map-dark-path', 'map-dark-rail', 'map-dark-park', 'map-dark-water', 'map-dark-waterway']]];
function useTokenValues() {
  return React.useMemo(() => {
    const cs = getComputedStyle(document.documentElement),
      out = {},
      byHex = {};
    const read = n => cs.getPropertyValue('--' + n).trim().toUpperCase();
    RAMPS.forEach(([, k, steps]) => steps.forEach(s => {
      const v = read(`${k}-${s}`);
      out[`${k}-${s}`] = v;
      if (!byHex[v]) byHex[v] = `${k}.${s}`;
    }));
    SEMANTIC.forEach(([,, list]) => list.forEach(n => {
      out[n] = read(n);
    }));
    return {
      out,
      byHex
    };
  }, []);
}
function Swatch({
  token,
  hex,
  alias,
  onCopy
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sw-tile",
    onClick: () => onCopy(token),
    title: `Copy var(--${token})`
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-chip",
    style: {
      background: `var(--${token})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sw-name"
  }, token), /*#__PURE__*/React.createElement("span", {
    className: "sw-meta"
  }, hex, alias ? ' · ' + alias : ''));
}
function ColorTab({
  onCopy
}) {
  const {
    out,
    byHex
  } = useTokenValues();
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", {
    className: "ref-h1"
  }, "Color"), /*#__PURE__*/React.createElement("p", {
    className: "ref-lede"
  }, "Palette ramps first, then the semantic tokens that point at them. Build with the semantic token for the job; reach for a raw step only when no role fits. Click any swatch to copy its variable."), /*#__PURE__*/React.createElement("h2", {
    className: "ref-h2"
  }, "Palette"), RAMPS.map(([label, k, steps, note]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "sw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-head"
  }, /*#__PURE__*/React.createElement("strong", null, label), /*#__PURE__*/React.createElement("span", null, note)), /*#__PURE__*/React.createElement("div", {
    className: "sw-ramp"
  }, steps.map(s => /*#__PURE__*/React.createElement(Swatch, {
    key: s,
    token: `${k}-${s}`,
    hex: out[`${k}-${s}`],
    onCopy: onCopy
  }))))), /*#__PURE__*/React.createElement("h2", {
    className: "ref-h2"
  }, "Semantic tokens"), SEMANTIC.map(([label, note, list]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "sw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-head"
  }, /*#__PURE__*/React.createElement("strong", null, label), /*#__PURE__*/React.createElement("span", null, note)), /*#__PURE__*/React.createElement("div", {
    className: "sw-grid"
  }, list.map(n => /*#__PURE__*/React.createElement(Swatch, {
    key: n,
    token: n,
    hex: out[n],
    alias: byHex[out[n]],
    onCopy: onCopy
  }))))));
}
const TYPE = [['Display — Paytone One', 'Always uppercase. Website heroes, section openers, posters.', [['display-2xl', 'Ride the city', 'Hero headline', '72 / 72 · 400 · +2%', {
  textTransform: 'uppercase',
  letterSpacing: '.02em'
}], ['display-xl', 'Ride the city', 'Page hero', '56 / 60 · 400 · +1%', {
  textTransform: 'uppercase',
  letterSpacing: '.01em'
}], ['display-lg', 'Now the table’s full', 'WebHeadline default', '40 / 42 · 400', {
  textTransform: 'uppercase'
}], ['display-md', 'Your neighborhood', 'Section title', '32 / 36 · 400', {
  textTransform: 'uppercase'
}], ['display-sm', 'Stamps collected', 'Card or module title', '24 / 28 · 400', {
  textTransform: 'uppercase'
}]]], ['Headings — Instrument Sans', 'Screen and section titles inside the product.', [['h1-bold', 'Your next stop', 'Screen title', '32 / 40 · 700 · +1%', {
  letterSpacing: '.01em'
}], ['h1-medium', 'Your next stop', 'Screen title, quieter', '32 / 40 · 500 · +1%', {
  letterSpacing: '.01em'
}], ['h2-bold', 'Places near you', 'Section or sheet title', '24 / 30 · 700 · +1%', {
  letterSpacing: '.01em'
}], ['h2-medium', 'Places near you', 'Section title, quieter', '24 / 30 · 500 · +1%', {
  letterSpacing: '.01em'
}], ['h3-bold', 'Corner table, best light', 'Item title', '20 / 24 · 700', {}], ['h3-medium', 'Corner table, best light', 'Item title, quieter', '20 / 24 · 600', {}]]], ['Body & small — Instrument Sans', 'Running text, labels and detail.', [['body-bold', 'Continue with Platform', 'Button labels, emphasis', '16 / 20 · 700', {}], ['body-medium', 'Been here five times', 'Comment text, list primary', '16 / 20 · 500', {}], ['body-regular', 'Come back enough and the place starts to know you.', 'Paragraphs, inputs, toasts', '16 / 20 · 400', {}], ['body-italic', 'Come back enough and the place starts to know you.', 'Quotes, asides', '16 / 20 · 400 italic', {}], ['sm-bold', 'dana_s', 'Small button labels, names', '12 / 16 · 700', {}], ['sm-medium', 'Updated 2 min ago', 'Meta, chips', '12 / 16 · 500', {}], ['sm-regular', 'Email', 'Field labels, captions', '12 / 16 · 400', {}], ['sm-italic', 'Optional', 'Hints', '12 / 16 · 400 italic', {}]]]];
function FonttypeTab() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", {
    className: "ref-h1"
  }, "Fonttype"), /*#__PURE__*/React.createElement("p", {
    className: "ref-lede"
  }, "Two families. Paytone One speaks loud and always in capitals; Instrument Sans does everything else. Each role below is a single ", /*#__PURE__*/React.createElement("code", null, "font"), " shorthand token \u2014 size, line height, weight and family in one."), /*#__PURE__*/React.createElement("div", {
    className: "ty-families"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ty-family"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 56px/1 var(--font-display)'
    }
  }, "Aa"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Paytone One"), /*#__PURE__*/React.createElement("span", null, "--font-display \xB7 400 \xB7 Google Fonts"))), /*#__PURE__*/React.createElement("div", {
    className: "ty-family"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 56px/1 var(--font-sans)'
    }
  }, "Aa"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Instrument Sans"), /*#__PURE__*/React.createElement("span", null, "--font-sans \xB7 400 / 500 / 600 / 700 \xB7 Google Fonts")))), TYPE.map(([group, note, rows]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    className: "ty-block"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ref-h2"
  }, group), /*#__PURE__*/React.createElement("p", {
    className: "ref-sub"
  }, note), /*#__PURE__*/React.createElement("div", {
    className: "ty-card"
  }, rows.map(([tok, sample, use, spec, extra]) => /*#__PURE__*/React.createElement("div", {
    key: tok,
    className: "ty-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ty-sample",
    style: {
      font: `var(--${tok})`,
      ...extra
    }
  }, sample), /*#__PURE__*/React.createElement("div", {
    className: "ty-spec"
  }, /*#__PURE__*/React.createElement("code", null, "--", tok), /*#__PURE__*/React.createElement("span", null, use), /*#__PURE__*/React.createElement("span", {
    className: "ty-num"
  }, spec))))))));
}
const TABS = [['readme', 'Readme'], ['color', 'Color'], ['fonttype', 'Fonttype'], ['library', 'Component Library']];
function App() {
  const initial = (location.hash || '').slice(1);
  const [tab, setTab] = React.useState(TABS.some(t => t[0] === initial) ? initial : 'readme');
  const [copied, setCopied] = React.useState(null);
  const timer = React.useRef();
  const choose = t => {
    setTab(t);
    history.replaceState(null, '', '#' + t);
    window.scrollTo(0, 0);
  };
  const onCopy = token => {
    navigator.clipboard && navigator.clipboard.writeText(`var(--${token})`);
    setCopied(token);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1800);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "ref-hdr",
    "data-screen-label": "Header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-wrap ref-hdr-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/primary-horizontal-colored.png",
    alt: "Ventur.City"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ref-title"
  }, "Design system reference"), /*#__PURE__*/React.createElement("div", {
    className: "ref-tag"
  }, "Colours, type and components every Ventur.City screen is built from. For designers and developers.")))), /*#__PURE__*/React.createElement("nav", {
    className: "ref-tabs",
    "aria-label": "Sections"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-wrap ref-tabs-in",
    role: "tablist"
  }, TABS.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    role: "tab",
    "aria-selected": tab === k,
    className: 'ref-tab' + (tab === k ? ' on' : ''),
    onClick: () => choose(k)
  }, l)))), /*#__PURE__*/React.createElement("main", {
    className: "ref-wrap ref-main",
    "data-screen-label": TABS.find(t => t[0] === tab)[1]
  }, tab === 'readme' && /*#__PURE__*/React.createElement(ReadmeTab, null), tab === 'color' && /*#__PURE__*/React.createElement(ColorTab, {
    onCopy: onCopy
  }), tab === 'fonttype' && /*#__PURE__*/React.createElement(FonttypeTab, null), tab === 'library' && /*#__PURE__*/React.createElement(window.LibraryTab, null)), copied && /*#__PURE__*/React.createElement("div", {
    className: "ref-toast"
  }, /*#__PURE__*/React.createElement(RefToast, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(RefIcon, {
      name: "check"
    }),
    actionLabel: null
  }, "Copied var(--", copied, ")")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/app.jsx", error: String((e && e.message) || e) }); }

// reference/library.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  TextField,
  Option,
  Toggle,
  Toast,
  CityMap,
  WebHeadline,
  CategoryIcon,
  CategoryChip,
  CategoryPin,
  PlaceMarker,
  PhotoStackMarker,
  CursorCharacter,
  GuestbookNote,
  Passport
} = window.VenturCityDesignSystem_a97b28;
const CATS = ['food', 'nightclub', 'shopping', 'beauty', 'wellness', 'entertainment', 'outdoors', 'services'];
const BRAND = ['food', 'nightclub', 'shopping', 'beauty', 'wellness', 'entertainment', 'outdoors', 'services', 'badge', 'locate-me', 'no-edit', 'play', 'rax', 'socials', 'stamps', 'theatre', 'vicon', 'vicon-1'];
function Panel({
  dark,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'lib-panel' + (dark ? ' is-dark' : ''),
    style: style
  }, children);
}
function Note({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "lib-note"
  }, children);
}
const Row = ({
  children,
  gap = 12,
  wrap = true,
  align = 'center'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: align
  }
}, children);
function ButtonDemo() {
  const [last, setLast] = React.useState(null);
  const p = l => () => setLast(l);
  return /*#__PURE__*/React.createElement(React.Fragment, null, ['primary', 'secondary', 'tertiary'].map(v => /*#__PURE__*/React.createElement(Panel, {
    key: v
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    variant: v,
    onClick: p(v + ' · lg'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "locate-me",
      size: 16
    }),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, v[0].toUpperCase() + v.slice(1)), /*#__PURE__*/React.createElement(Button, {
    variant: v,
    disabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    variant: v,
    size: "sm",
    onClick: p(v + ' · sm'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 12
    })
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    variant: v,
    size: "sm",
    disabled: true
  }, "Small")))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, {
    gap: 24
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: p('ghost'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-brand",
    onClick: p('ghost-brand')
  }, "Ghost brand"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    disabled: true
  }, "Disabled"))), /*#__PURE__*/React.createElement(Panel, {
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(Button, {
    social: true,
    onClick: p('social'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "socials",
      size: 20
    })
  }, "Continue with Platform"))), /*#__PURE__*/React.createElement(Note, null, last ? 'Pressed: ' + last : 'Nothing pressed yet.'));
}
function IconButtonDemo() {
  return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Back"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    label: "Locate"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "locate-me",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "primary",
    label: "Play"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    disabled: true,
    label: "Disabled"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    size: "lg",
    label: "Stamps"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stamps",
    size: 26
  }))));
}
function TextFieldDemo() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    defaultValue: "Dana S."
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "City",
    defaultValue: "Stuttgart",
    disabled: true
  }))), /*#__PURE__*/React.createElement(Panel, {
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    theme: "dark",
    placeholder: "Search places"
  }), /*#__PURE__*/React.createElement(TextField, {
    theme: "dark",
    defaultValue: "Value"
  }), /*#__PURE__*/React.createElement(TextField, {
    theme: "dark",
    defaultValue: "Disabled",
    disabled: true
  }))));
}
function OptionDemo() {
  const [pick, setPick] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Option, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "locate-me"
    }),
    onClick: () => setPick('Near me')
  }, "Near me"), /*#__PURE__*/React.createElement(Option, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "stamps"
    }),
    onClick: () => setPick('My stamps')
  }, "My stamps"), /*#__PURE__*/React.createElement(Option, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "no-edit"
    }),
    disabled: true
  }, "Locked"))), /*#__PURE__*/React.createElement(Note, null, pick ? 'Selected: ' + pick : 'Nothing selected yet.'));
}
function ToggleDemo() {
  const [on, setOn] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, {
    gap: 20
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: on,
    onChange: setOn,
    label: "Notifications"
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "Off"
  }), /*#__PURE__*/React.createElement(Toggle, {
    disabled: true,
    label: "Disabled"
  }))), /*#__PURE__*/React.createElement(Note, null, "Notifications are ", on ? 'on' : 'off', "."));
}
function ToastDemo() {
  const all = [['neutral', 'info', 'Ride booked'], ['success', 'check', 'Saved to your trips'], ['warn', 'triangle-alert', 'Low battery on scooter'], ['danger', 'circle-x', 'Payment failed']];
  const [shown, setShown] = React.useState(all.map(a => a[0]));
  return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 400
    }
  }, all.filter(a => shown.includes(a[0])).map(([t, i, m]) => /*#__PURE__*/React.createElement(Toast, {
    key: t,
    tone: t,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: i
    }),
    onAction: () => setShown(s => s.filter(x => x !== t))
  }, m)), shown.length < 4 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "sm",
    onClick: () => setShown(all.map(a => a[0]))
  }, "Show all again"))));
}
function WebHeadlineDemo() {
  const [k, setK] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    dark: true
  }, /*#__PURE__*/React.createElement(WebHeadline, {
    animate: true,
    replayKey: k,
    size: "md",
    title: "Now the table's full",
    lines: ['Come back enough and the place starts to know you', 'RAX turns that into something real.'],
    style: {
      maxWidth: 360
    }
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(WebHeadline, {
    animate: true,
    replayKey: k,
    startDelay: 200,
    size: "md",
    titleColor: "dark",
    title: "The map of your whole neighborhood",
    lines: ['Every pin leads somewhere.', 'Make plans, leave a mark, and explore more.'],
    style: {
      maxWidth: 360
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "sm",
    onClick: () => setK(x => x + 1),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-ccw",
      size: 12
    })
  }, "Replay")));
}
function CityMapDemo() {
  const [theme, setTheme] = React.useState('light');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    gap: 8
  }, ['light', 'dark'].map(t => /*#__PURE__*/React.createElement(Button, {
    key: t,
    size: "sm",
    variant: theme === t ? 'primary' : 'tertiary',
    onClick: () => setTheme(t)
  }, t === 'light' ? 'Light' : 'Dark'))), /*#__PURE__*/React.createElement(CityMap, {
    theme: theme,
    height: 320
  }));
}
function CursorDemo() {
  const people = [['Mia', 'orange', 'Best coffee on this street'], ['Leo', 'red', 'Who is coming tonight?'], ['Ana', 'blue', 'Partner deal here'], ['Kai', 'green', 'Been here 5 times']];
  const [msgs, setMsgs] = React.useState({});
  const say = (n, m) => setMsgs(s => ({
    ...s,
    [n]: m
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    dark: true,
    style: {
      minHeight: 140
    }
  }, /*#__PURE__*/React.createElement(Row, {
    gap: 28,
    align: "flex-start"
  }, people.map(([n, c, m]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    onClick: () => say(n, m),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(CursorCharacter, {
    name: n,
    color: c,
    message: msgs[n],
    onDone: () => say(n, undefined)
  }))))), /*#__PURE__*/React.createElement(Note, null, "Click a character to make it comment. The comment types out, holds 3s, then hides."));
}
function GuestbookDemo() {
  const seq = [{
    m: 'Ask for the corner table, best light in the house.',
    p: []
  }, {
    m: 'Came for the poke, stayed for the matcha.',
    p: ['']
  }, {
    m: 'Decent vibe but the weekend wait is brutal. Food was good once we sat down.',
    p: ['', '']
  }];
  const [i, setI] = React.useState(0);
  const s = seq[i % seq.length];
  return /*#__PURE__*/React.createElement(Panel, {
    dark: true,
    style: {
      minHeight: 230,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(GuestbookNote, {
    key: i,
    name: "dana_s",
    color: "green",
    message: s.m,
    photos: s.p,
    onDone: () => setTimeout(() => setI(x => x + 1), 2500)
  }));
}
function PassportDemo() {
  const [o, setO] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Passport, {
    width: 420,
    open: o,
    onToggle: setO
  })), /*#__PURE__*/React.createElement(Note, null, "Click the passport to ", o ? 'close' : 'open', " it."));
}
const LIBRARY = [{
  group: 'Core',
  items: [{
    code: 'VC0001',
    name: 'Icon',
    desc: '18 filled brand glyphs on a 24 grid, coloured by currentColor. Anything the set lacks falls back to Lucide outline icons.',
    demo: () => /*#__PURE__*/React.createElement(Panel, {
      dark: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(78px,1fr))',
        gap: 8
      }
    }, BRAND.map(n => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "lib-glyph"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 28
    }), /*#__PURE__*/React.createElement("span", null, n))))),
    snippet: `<Icon name="food" size={24} />\n<Icon name="locate-me" size={20} color="var(--green-100)" />`
  }]
}, {
  group: 'Actions',
  items: [{
    code: 'VC0002',
    name: 'Button',
    desc: 'Lime primary for the one main action, slate secondary, warm-grey tertiary, ghost for low emphasis. Hover goes one step lighter; disabled is a paler fill.',
    demo: ButtonDemo,
    snippet: `<Button variant="primary" iconRight={<Icon name="arrow-right" />}>\n  Continue\n</Button>\n<Button variant="secondary" size="sm">Small</Button>\n<Button social iconLeft={<Icon name="socials" size={20} />}>\n  Continue with Platform\n</Button>`
  }, {
    code: 'VC0003',
    name: 'IconButton',
    desc: 'Square icon-only action at 24, 40 or 54px — for back, close and map controls where a label would repeat the icon.',
    demo: IconButtonDemo,
    snippet: `<IconButton variant="secondary" label="Locate me">\n  <Icon name="locate-me" size={20} />\n</IconButton>`
  }]
}, {
  group: 'Forms',
  items: [{
    code: 'VC0004',
    name: 'TextField',
    desc: 'Borderless 44px field with an optional 12px label. Light on white, dark on slate; focus draws a 2px lime ring.',
    demo: TextFieldDemo,
    snippet: `<TextField label="Email" placeholder="you@example.com" />\n<TextField theme="dark" placeholder="Search places" />`
  }, {
    code: 'VC0005',
    name: 'Option',
    desc: 'Icon and label row for menus, settings and choice lists.',
    demo: OptionDemo,
    snippet: `<Option icon={<Icon name="locate-me" />} onClick={pick}>\n  Near me\n</Option>`
  }, {
    code: 'VC0006',
    name: 'Toggle',
    desc: 'On/off switch for settings that apply instantly. Lime when on, slate when off; the knob is a rounded square.',
    demo: ToggleDemo,
    snippet: `<Toggle checked={on} onChange={setOn} label="Notifications" />`
  }]
}, {
  group: 'Feedback',
  items: [{
    code: 'VC0007',
    name: 'Toast',
    desc: 'Short, non-blocking confirmation in four tones, with one bold text action.',
    demo: ToastDemo,
    snippet: `<Toast tone="success" icon={<Icon name="check" />} onAction={close}>\n  Saved to your trips\n</Toast>`
  }]
}, {
  group: 'Website',
  items: [{
    code: 'VC0008',
    name: 'WebHeadline',
    desc: 'Website only. Uppercase display title with highlight-bar subtitles that wipe in line by line. Never used on body copy or in the app.',
    demo: WebHeadlineDemo,
    snippet: `<WebHeadline\n  animate\n  title="Now the table's full"\n  lines={[\n    "Come back enough and the place starts to know you",\n    "RAX turns that into something real.",\n  ]}\n/>`
  }]
}, {
  group: 'Places',
  items: [{
    code: 'VC0009',
    name: 'CategoryIcon',
    desc: 'The glyph for one of the eight place categories.',
    demo: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, {
      gap: 20
    }, CATS.map(c => /*#__PURE__*/React.createElement(CategoryIcon, {
      key: c,
      category: c,
      size: 28
    })))),
    snippet: `<CategoryIcon category="wellness" size={24} />`
  }, {
    code: 'VC0010',
    name: 'CategoryChip',
    desc: 'Pill label for category filters and legends. Cyan marks a partnered merchant.',
    demo: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, {
      gap: 8
    }, CATS.map((c, i) => /*#__PURE__*/React.createElement(CategoryChip, {
      key: c,
      category: c,
      partner: i === 0,
      selected: i === 1,
      style: {
        height: 40,
        font: '500 16px/20px var(--font-sans)'
      }
    })))),
    snippet: `<CategoryChip category="outdoors" selected onClick={toggle} />\n<CategoryChip category="food" partner />`
  }, {
    code: 'VC0011',
    name: 'CategoryPin',
    desc: 'Round map pin for a place. Cyan is a partnered merchant, slate a regular one.',
    demo: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, {
      gap: 16
    }, /*#__PURE__*/React.createElement(CategoryPin, {
      category: "food",
      size: 40
    }), /*#__PURE__*/React.createElement(CategoryPin, {
      category: "food",
      partner: true,
      size: 40
    }), /*#__PURE__*/React.createElement(CategoryPin, {
      category: "nightclub",
      size: 56
    }), /*#__PURE__*/React.createElement(CategoryPin, {
      category: "nightclub",
      partner: true,
      size: 56
    }))),
    snippet: `<CategoryPin category="food" partner />`
  }, {
    code: 'VC0012',
    name: 'PlaceMarker',
    desc: "The place's own photo, square, in a thick white frame.",
    demo: () => /*#__PURE__*/React.createElement(Panel, {
      dark: true
    }, /*#__PURE__*/React.createElement(PlaceMarker, {
      size: 120
    })),
    snippet: `<PlaceMarker src={storefrontUrl} size={140} />`
  }, {
    code: 'VC0013',
    name: 'PhotoStackMarker',
    desc: 'User-shared photos as 3:4 cards, never more than two stacked, shuffling endlessly. The badge counts every photo shared.',
    demo: () => /*#__PURE__*/React.createElement(Panel, {
      dark: true
    }, /*#__PURE__*/React.createElement(Row, {
      gap: 28
    }, /*#__PURE__*/React.createElement(PhotoStackMarker, {
      photos: ['', '', ''],
      count: 10,
      category: "food",
      width: 120
    }), /*#__PURE__*/React.createElement(PhotoStackMarker, {
      photos: ['', ''],
      count: 4,
      category: "wellness",
      partner: true,
      width: 120,
      interval: 3400
    }))),
    snippet: `<PhotoStackMarker\n  photos={photoUrls}\n  count={10}\n  category="food"\n  partner\n/>`
  }]
}, {
  group: 'Map',
  items: [{
    code: 'VC0014',
    name: 'CityMap',
    desc: 'Street-level OpenStreetMap base layer in brand colours — white or black land, green parks, blue water. No pins, labels or traffic.',
    demo: CityMapDemo,
    snippet: `<CityMap\n  center={[52.36, 4.877]}\n  radius={900}\n  theme="dark"\n  onMapClick={({ lat, lng }) => …}\n/>`
  }]
}, {
  group: 'Characters',
  items: [{
    code: 'VC0015',
    name: 'CursorCharacter',
    desc: 'Arrow and name pill. Give it a message and the pill types it out, holds three seconds, then closes again.',
    demo: CursorDemo,
    snippet: `<CursorCharacter\n  name="Mia"\n  color="blue"\n  message={msg}\n  onDone={() => setMsg(undefined)}\n/>`
  }, {
    code: 'VC0016',
    name: 'GuestbookNote',
    desc: 'A cursor types a note, attaches photos or not, posts it, and leaves a profile photo behind as its mark.',
    demo: GuestbookDemo,
    snippet: `<GuestbookNote\n  name="dana_s"\n  color="green"\n  message="Ask for the corner table."\n  photos={[photoUrl]}\n  avatarSrc={avatarUrl}\n/>`
  }, {
    code: 'VC0017',
    name: 'Passport',
    desc: 'The passport cover swings open on its spine to show the stamp pages.',
    demo: PassportDemo,
    snippet: `<Passport width={480} />\n<Passport open={isOpen} onToggle={setOpen} />`
  }]
}];
function CodeBlock({
  code
}) {
  const [copied, setCopied] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "lib-code"
  }, /*#__PURE__*/React.createElement("pre", null, code), /*#__PURE__*/React.createElement("button", {
    className: "lib-copy",
    onClick: () => {
      navigator.clipboard && navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  }, copied ? 'Copied' : 'Copy'));
}
function Entry({
  item,
  group
}) {
  const [tab, setTab] = React.useState('output');
  const Demo = item.demo;
  return /*#__PURE__*/React.createElement("article", {
    className: "lib-card",
    id: item.code,
    "data-screen-label": item.name
  }, /*#__PURE__*/React.createElement("header", {
    className: "lib-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lib-id"
  }, item.code), /*#__PURE__*/React.createElement("span", {
    className: "lib-name"
  }, item.name), /*#__PURE__*/React.createElement("span", {
    className: "lib-group"
  }, group)), /*#__PURE__*/React.createElement("p", {
    className: "lib-desc"
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    className: "lib-tabs",
    role: "tablist"
  }, ['output', 'code'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": tab === t,
    className: 'lib-tab' + (tab === t ? ' on' : ''),
    onClick: () => setTab(t)
  }, t === 'output' ? 'Output' : 'Code'))), /*#__PURE__*/React.createElement("div", {
    className: "lib-body"
  }, tab === 'output' ? /*#__PURE__*/React.createElement(Demo, null) : /*#__PURE__*/React.createElement(CodeBlock, {
    code: item.snippet
  })));
}
function LibraryTab() {
  const [q, setQ] = React.useState('');
  const [active, setActive] = React.useState(null);
  const needle = q.trim().toLowerCase();
  const groups = LIBRARY.map(g => ({
    ...g,
    items: g.items.filter(i => !needle || (i.name + ' ' + i.code + ' ' + i.desc + ' ' + g.group).toLowerCase().includes(needle))
  })).filter(g => g.items.length);
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  React.useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => e.isIntersecting && setActive(e.target.id));
    }, {
      rootMargin: '-120px 0px -60% 0px'
    });
    document.querySelectorAll('.lib-card').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [needle]);
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 76,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", {
    className: "ref-h1"
  }, "Component Library"), /*#__PURE__*/React.createElement("p", {
    className: "ref-lede"
  }, "Every component in the shared library, rendered live. Each one loads from the same bundle consuming projects use, so what you see here is what ships."), /*#__PURE__*/React.createElement("div", {
    className: "lib-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--black-5)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search components\u2026",
    "aria-label": "Search components"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lib-layout"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "lib-side",
    "aria-label": "Components"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lib-count"
  }, total, " component", total === 1 ? '' : 's'), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    className: "lib-side-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lib-side-title"
  }, g.group), g.items.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.code,
    className: 'lib-side-item' + (active === i.code ? ' on' : ''),
    onClick: () => go(i.code)
  }, /*#__PURE__*/React.createElement("span", null, i.code), i.name))))), /*#__PURE__*/React.createElement("div", {
    className: "lib-main"
  }, groups.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "lib-note"
  }, "No components match \u201C", q, "\u201D."), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    className: "lib-sec"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ref-h2"
  }, g.group), g.items.map(i => /*#__PURE__*/React.createElement(Entry, {
    key: i.code,
    item: i,
    group: g.group
  })))))));
}
Object.assign(window, {
  LibraryTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/library.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CursorCharacter = __ds_scope.CursorCharacter;

__ds_ns.GuestbookNote = __ds_scope.GuestbookNote;

__ds_ns.BRAND_ICONS = __ds_scope.BRAND_ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Option = __ds_scope.Option;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.CityMap = __ds_scope.CityMap;

__ds_ns.Passport = __ds_scope.Passport;

__ds_ns.PASSPORT_CLOSED = __ds_scope.PASSPORT_CLOSED;

__ds_ns.PASSPORT_OPEN = __ds_scope.PASSPORT_OPEN;

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.CATEGORIES = __ds_scope.CATEGORIES;

__ds_ns.CategoryIcon = __ds_scope.CategoryIcon;

__ds_ns.CategoryPin = __ds_scope.CategoryPin;

__ds_ns.PhotoStackMarker = __ds_scope.PhotoStackMarker;

__ds_ns.PlaceMarker = __ds_scope.PlaceMarker;

__ds_ns.WebHeadline = __ds_scope.WebHeadline;

})();
