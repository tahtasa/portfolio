const { Button, IconButton, Icon, TextField, Option, Toggle, Toast, CityMap, WebHeadline, CategoryIcon, CategoryChip, CategoryPin, PlaceMarker, PhotoStackMarker, CursorCharacter, GuestbookNote, Passport } = window.VenturCityDesignSystem_a97b28;

const CATS = ['food', 'nightclub', 'shopping', 'beauty', 'wellness', 'entertainment', 'outdoors', 'services'];
const BRAND = ['food', 'nightclub', 'shopping', 'beauty', 'wellness', 'entertainment', 'outdoors', 'services', 'badge', 'locate-me', 'no-edit', 'play', 'rax', 'socials', 'stamps', 'theatre', 'vicon', 'vicon-1'];

function Panel({ dark, children, style }) {
  return <div className={'lib-panel' + (dark ? ' is-dark' : '')} style={style}>{children}</div>;
}
function Note({ children }) { return <p className="lib-note">{children}</p>; }
const Row = ({ children, gap = 12, wrap = true, align = 'center' }) => <div style={{ display: 'flex', gap, flexWrap: wrap ? 'wrap' : 'nowrap', alignItems: align }}>{children}</div>;

function ButtonDemo() {
  const [last, setLast] = React.useState(null);
  const p = l => () => setLast(l);
  return <>
    {['primary', 'secondary', 'tertiary'].map(v => <Panel key={v}><Row>
      <Button variant={v} onClick={p(v + ' · lg')} iconLeft={<Icon name="locate-me" size={16} />} iconRight={<Icon name="arrow-right" />}>{v[0].toUpperCase() + v.slice(1)}</Button>
      <Button variant={v} disabled>Disabled</Button>
      <Button variant={v} size="sm" onClick={p(v + ' · sm')} iconRight={<Icon name="arrow-right" size={12} />}>Small</Button>
      <Button variant={v} size="sm" disabled>Small</Button>
    </Row></Panel>)}
    <Panel><Row gap={24}>
      <Button variant="ghost" onClick={p('ghost')} iconRight={<Icon name="arrow-right" />}>Ghost</Button>
      <Button variant="ghost-brand" onClick={p('ghost-brand')}>Ghost brand</Button>
      <Button variant="ghost" disabled>Disabled</Button>
    </Row></Panel>
    <Panel dark><div style={{ maxWidth: 300 }}><Button social onClick={p('social')} iconLeft={<Icon name="socials" size={20} />}>Continue with Platform</Button></div></Panel>
    <Note>{last ? 'Pressed: ' + last : 'Nothing pressed yet.'}</Note>
  </>;
}
function IconButtonDemo() {
  return <Panel><Row>
    <IconButton size="sm" label="Close"><Icon name="x" size={14} /></IconButton>
    <IconButton label="Back"><Icon name="chevron-left" size={20} /></IconButton>
    <IconButton variant="secondary" label="Locate"><Icon name="locate-me" size={20} /></IconButton>
    <IconButton variant="primary" label="Play"><Icon name="play" size={20} /></IconButton>
    <IconButton variant="secondary" disabled label="Disabled"><Icon name="plus" size={20} /></IconButton>
    <IconButton size="lg" label="Stamps"><Icon name="stamps" size={26} /></IconButton>
  </Row></Panel>;
}
function TextFieldDemo() {
  return <>
    <Panel><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
      <TextField label="Name" defaultValue="Dana S." />
      <TextField label="Email" placeholder="you@example.com" />
      <TextField label="City" defaultValue="Stuttgart" disabled />
    </div></Panel>
    <Panel dark><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
      <TextField theme="dark" placeholder="Search places" />
      <TextField theme="dark" defaultValue="Value" />
      <TextField theme="dark" defaultValue="Disabled" disabled />
    </div></Panel>
  </>;
}
function OptionDemo() {
  const [pick, setPick] = React.useState(null);
  return <><Panel><div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    <Option icon={<Icon name="locate-me" />} onClick={() => setPick('Near me')}>Near me</Option>
    <Option icon={<Icon name="stamps" />} onClick={() => setPick('My stamps')}>My stamps</Option>
    <Option icon={<Icon name="no-edit" />} disabled>Locked</Option>
  </div></Panel><Note>{pick ? 'Selected: ' + pick : 'Nothing selected yet.'}</Note></>;
}
function ToggleDemo() {
  const [on, setOn] = React.useState(true);
  return <><Panel><Row gap={20}><Toggle checked={on} onChange={setOn} label="Notifications" /><Toggle label="Off" /><Toggle disabled label="Disabled" /></Row></Panel>
    <Note>Notifications are {on ? 'on' : 'off'}.</Note></>;
}
function ToastDemo() {
  const all = [['neutral', 'info', 'Ride booked'], ['success', 'check', 'Saved to your trips'], ['warn', 'triangle-alert', 'Low battery on scooter'], ['danger', 'circle-x', 'Payment failed']];
  const [shown, setShown] = React.useState(all.map(a => a[0]));
  return <Panel><div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
    {all.filter(a => shown.includes(a[0])).map(([t, i, m]) => <Toast key={t} tone={t} icon={<Icon name={i} />} onAction={() => setShown(s => s.filter(x => x !== t))}>{m}</Toast>)}
    {shown.length < 4 && <div><Button variant="tertiary" size="sm" onClick={() => setShown(all.map(a => a[0]))}>Show all again</Button></div>}
  </div></Panel>;
}
function WebHeadlineDemo() {
  const [k, setK] = React.useState(0);
  return <>
    <Panel dark><WebHeadline animate replayKey={k} size="md" title="Now the table's full" lines={['Come back enough and the place starts to know you', 'RAX turns that into something real.']} style={{ maxWidth: 360 }} /></Panel>
    <Panel><WebHeadline animate replayKey={k} startDelay={200} size="md" titleColor="dark" title="The map of your whole neighborhood" lines={['Every pin leads somewhere.', 'Make plans, leave a mark, and explore more.']} style={{ maxWidth: 360 }} /></Panel>
    <div><Button variant="tertiary" size="sm" onClick={() => setK(x => x + 1)} iconLeft={<Icon name="rotate-ccw" size={12} />}>Replay</Button></div>
  </>;
}
function CityMapDemo() {
  const [theme, setTheme] = React.useState('light');
  return <>
    <Row gap={8}>{['light', 'dark'].map(t => <Button key={t} size="sm" variant={theme === t ? 'primary' : 'tertiary'} onClick={() => setTheme(t)}>{t === 'light' ? 'Light' : 'Dark'}</Button>)}</Row>
    <CityMap theme={theme} height={320} />
  </>;
}
function CursorDemo() {
  const people = [['Mia', 'orange', 'Best coffee on this street'], ['Leo', 'red', 'Who is coming tonight?'], ['Ana', 'blue', 'Partner deal here'], ['Kai', 'green', 'Been here 5 times']];
  const [msgs, setMsgs] = React.useState({});
  const say = (n, m) => setMsgs(s => ({ ...s, [n]: m }));
  return <><Panel dark style={{ minHeight: 140 }}><Row gap={28} align="flex-start">
    {people.map(([n, c, m]) => <div key={n} onClick={() => say(n, m)} style={{ cursor: 'pointer' }}>
      <CursorCharacter name={n} color={c} message={msgs[n]} onDone={() => say(n, undefined)} /></div>)}
  </Row></Panel><Note>Click a character to make it comment. The comment types out, holds 3s, then hides.</Note></>;
}
function GuestbookDemo() {
  const seq = [{ m: 'Ask for the corner table, best light in the house.', p: [] }, { m: 'Came for the poke, stayed for the matcha.', p: [''] }, { m: 'Decent vibe but the weekend wait is brutal. Food was good once we sat down.', p: ['', ''] }];
  const [i, setI] = React.useState(0); const s = seq[i % seq.length];
  return <Panel dark style={{ minHeight: 230, display: 'flex', justifyContent: 'center' }}>
    <GuestbookNote key={i} name="dana_s" color="green" message={s.m} photos={s.p} onDone={() => setTimeout(() => setI(x => x + 1), 2500)} />
  </Panel>;
}
function PassportDemo() {
  const [o, setO] = React.useState(false);
  return <><Panel style={{ display: 'flex', justifyContent: 'center' }}><Passport width={420} open={o} onToggle={setO} /></Panel>
    <Note>Click the passport to {o ? 'close' : 'open'} it.</Note></>;
}

const LIBRARY = [
  { group: 'Core', items: [
    { code: 'VC0001', name: 'Icon', desc: '18 filled brand glyphs on a 24 grid, coloured by currentColor. Anything the set lacks falls back to Lucide outline icons.',
      demo: () => <Panel dark><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(78px,1fr))', gap: 8 }}>{BRAND.map(n => <div key={n} className="lib-glyph"><Icon name={n} size={28} /><span>{n}</span></div>)}</div></Panel>,
      snippet: `<Icon name="food" size={24} />\n<Icon name="locate-me" size={20} color="var(--green-100)" />` },
  ] },
  { group: 'Actions', items: [
    { code: 'VC0002', name: 'Button', desc: 'Lime primary for the one main action, slate secondary, warm-grey tertiary, ghost for low emphasis. Hover goes one step lighter; disabled is a paler fill.',
      demo: ButtonDemo, snippet: `<Button variant="primary" iconRight={<Icon name="arrow-right" />}>\n  Continue\n</Button>\n<Button variant="secondary" size="sm">Small</Button>\n<Button social iconLeft={<Icon name="socials" size={20} />}>\n  Continue with Platform\n</Button>` },
    { code: 'VC0003', name: 'IconButton', desc: 'Square icon-only action at 24, 40 or 54px — for back, close and map controls where a label would repeat the icon.',
      demo: IconButtonDemo, snippet: `<IconButton variant="secondary" label="Locate me">\n  <Icon name="locate-me" size={20} />\n</IconButton>` },
  ] },
  { group: 'Forms', items: [
    { code: 'VC0004', name: 'TextField', desc: 'Borderless 44px field with an optional 12px label. Light on white, dark on slate; focus draws a 2px lime ring.',
      demo: TextFieldDemo, snippet: `<TextField label="Email" placeholder="you@example.com" />\n<TextField theme="dark" placeholder="Search places" />` },
    { code: 'VC0005', name: 'Option', desc: 'Icon and label row for menus, settings and choice lists.',
      demo: OptionDemo, snippet: `<Option icon={<Icon name="locate-me" />} onClick={pick}>\n  Near me\n</Option>` },
    { code: 'VC0006', name: 'Toggle', desc: 'On/off switch for settings that apply instantly. Lime when on, slate when off; the knob is a rounded square.',
      demo: ToggleDemo, snippet: `<Toggle checked={on} onChange={setOn} label="Notifications" />` },
  ] },
  { group: 'Feedback', items: [
    { code: 'VC0007', name: 'Toast', desc: 'Short, non-blocking confirmation in four tones, with one bold text action.',
      demo: ToastDemo, snippet: `<Toast tone="success" icon={<Icon name="check" />} onAction={close}>\n  Saved to your trips\n</Toast>` },
  ] },
  { group: 'Website', items: [
    { code: 'VC0008', name: 'WebHeadline', desc: 'Website only. Uppercase display title with highlight-bar subtitles that wipe in line by line. Never used on body copy or in the app.',
      demo: WebHeadlineDemo, snippet: `<WebHeadline\n  animate\n  title="Now the table's full"\n  lines={[\n    "Come back enough and the place starts to know you",\n    "RAX turns that into something real.",\n  ]}\n/>` },
  ] },
  { group: 'Places', items: [
    { code: 'VC0009', name: 'CategoryIcon', desc: 'The glyph for one of the eight place categories.',
      demo: () => <Panel><Row gap={20}>{CATS.map(c => <CategoryIcon key={c} category={c} size={28} />)}</Row></Panel>, snippet: `<CategoryIcon category="wellness" size={24} />` },
    { code: 'VC0010', name: 'CategoryChip', desc: 'Pill label for category filters and legends. Cyan marks a partnered merchant.',
      demo: () => <Panel><Row gap={8}>{CATS.map((c, i) => <CategoryChip key={c} category={c} partner={i === 0} selected={i === 1} style={{ height: 40, font: '500 16px/20px var(--font-sans)' }} />)}</Row></Panel>,
      snippet: `<CategoryChip category="outdoors" selected onClick={toggle} />\n<CategoryChip category="food" partner />` },
    { code: 'VC0011', name: 'CategoryPin', desc: 'Round map pin for a place. Cyan is a partnered merchant, slate a regular one.',
      demo: () => <Panel><Row gap={16}><CategoryPin category="food" size={40} /><CategoryPin category="food" partner size={40} /><CategoryPin category="nightclub" size={56} /><CategoryPin category="nightclub" partner size={56} /></Row></Panel>,
      snippet: `<CategoryPin category="food" partner />` },
    { code: 'VC0012', name: 'PlaceMarker', desc: "The place's own photo, square, in a thick white frame.",
      demo: () => <Panel dark><PlaceMarker size={120} /></Panel>, snippet: `<PlaceMarker src={storefrontUrl} size={140} />` },
    { code: 'VC0013', name: 'PhotoStackMarker', desc: 'User-shared photos as 3:4 cards, never more than two stacked, shuffling endlessly. The badge counts every photo shared.',
      demo: () => <Panel dark><Row gap={28}><PhotoStackMarker photos={['', '', '']} count={10} category="food" width={120} /><PhotoStackMarker photos={['', '']} count={4} category="wellness" partner width={120} interval={3400} /></Row></Panel>,
      snippet: `<PhotoStackMarker\n  photos={photoUrls}\n  count={10}\n  category="food"\n  partner\n/>` },
  ] },
  { group: 'Map', items: [
    { code: 'VC0014', name: 'CityMap', desc: 'Street-level OpenStreetMap base layer in brand colours — white or black land, green parks, blue water. No pins, labels or traffic.',
      demo: CityMapDemo, snippet: `<CityMap\n  center={[52.36, 4.877]}\n  radius={900}\n  theme="dark"\n  onMapClick={({ lat, lng }) => …}\n/>` },
  ] },
  { group: 'Characters', items: [
    { code: 'VC0015', name: 'CursorCharacter', desc: 'Arrow and name pill. Give it a message and the pill types it out, holds three seconds, then closes again.',
      demo: CursorDemo, snippet: `<CursorCharacter\n  name="Mia"\n  color="blue"\n  message={msg}\n  onDone={() => setMsg(undefined)}\n/>` },
    { code: 'VC0016', name: 'GuestbookNote', desc: 'A cursor types a note, attaches photos or not, posts it, and leaves a profile photo behind as its mark.',
      demo: GuestbookDemo, snippet: `<GuestbookNote\n  name="dana_s"\n  color="green"\n  message="Ask for the corner table."\n  photos={[photoUrl]}\n  avatarSrc={avatarUrl}\n/>` },
    { code: 'VC0017', name: 'Passport', desc: 'The passport cover swings open on its spine to show the stamp pages.',
      demo: PassportDemo, snippet: `<Passport width={480} />\n<Passport open={isOpen} onToggle={setOpen} />` },
  ] },
];

function CodeBlock({ code }) {
  const [copied, setCopied] = React.useState(false);
  return <div className="lib-code"><pre>{code}</pre>
    <button className="lib-copy" onClick={() => { navigator.clipboard && navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1400); }}>{copied ? 'Copied' : 'Copy'}</button></div>;
}
function Entry({ item, group }) {
  const [tab, setTab] = React.useState('output');
  const Demo = item.demo;
  return <article className="lib-card" id={item.code} data-screen-label={item.name}>
    <header className="lib-card-head">
      <span className="lib-id">{item.code}</span><span className="lib-name">{item.name}</span><span className="lib-group">{group}</span>
    </header>
    <p className="lib-desc">{item.desc}</p>
    <div className="lib-tabs" role="tablist">
      {['output', 'code'].map(t => <button key={t} role="tab" aria-selected={tab === t} className={'lib-tab' + (tab === t ? ' on' : '')} onClick={() => setTab(t)}>{t === 'output' ? 'Output' : 'Code'}</button>)}
    </div>
    <div className="lib-body">{tab === 'output' ? <Demo /> : <CodeBlock code={item.snippet} />}</div>
  </article>;
}

function LibraryTab() {
  const [q, setQ] = React.useState('');
  const [active, setActive] = React.useState(null);
  const needle = q.trim().toLowerCase();
  const groups = LIBRARY.map(g => ({ ...g, items: g.items.filter(i => !needle || (i.name + ' ' + i.code + ' ' + i.desc + ' ' + g.group).toLowerCase().includes(needle)) })).filter(g => g.items.length);
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  React.useEffect(() => {
    const io = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting && setActive(e.target.id)); }, { rootMargin: '-120px 0px -60% 0px' });
    document.querySelectorAll('.lib-card').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [needle]);
  const go = id => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' }); };
  return <section>
    <h1 className="ref-h1">Component Library</h1>
    <p className="ref-lede">Every component in the shared library, rendered live. Each one loads from the same bundle consuming projects use, so what you see here is what ships.</p>
    <div className="lib-search">
      <Icon name="search" size={16} color="var(--black-5)" />
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search components…" aria-label="Search components" />
    </div>
    <div className="lib-layout">
      <nav className="lib-side" aria-label="Components">
        <div className="lib-count">{total} component{total === 1 ? '' : 's'}</div>
        {groups.map(g => <div key={g.group} className="lib-side-group">
          <div className="lib-side-title">{g.group}</div>
          {g.items.map(i => <button key={i.code} className={'lib-side-item' + (active === i.code ? ' on' : '')} onClick={() => go(i.code)}><span>{i.code}</span>{i.name}</button>)}
        </div>)}
      </nav>
      <div className="lib-main">
        {groups.length === 0 && <p className="lib-note">No components match “{q}”.</p>}
        {groups.map(g => <div key={g.group} className="lib-sec">
          <h2 className="ref-h2">{g.group}</h2>
          {g.items.map(i => <Entry key={i.code} item={i} group={g.group} />)}
        </div>)}
      </div>
    </div>
  </section>;
}
Object.assign(window, { LibraryTab });
