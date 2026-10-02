const { Mark, Button, Icon, Tag, Card } = window.DerekUrbanDesignSystem_3bae67;

function SiteHeader({ onHome }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0' }}>
      <a href="#" onClick={e => { e.preventDefault(); onHome(); }} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink)', textDecoration: 'none' }}>
        <Mark size={28} /><span style={{ font: '500 16px/20px var(--font-title)', letterSpacing: '-0.01em' }}>Derek Urban</span>
      </a>
      <nav style={{ display: 'flex', gap: 24 }}>
        {['Work', 'Writing', 'About'].map(l => <a key={l} href="#" onClick={e => e.preventDefault()} style={{ font: 'var(--font-small)', color: 'var(--ink-secondary)', textDecoration: 'none' }}>{l}</a>)}
      </nav>
    </header>
  );
}

function ProjectRow({ p, onOpen }) {
  return (
    <Card as="a" href="#" interactive padding="sm" onClick={e => { e.preventDefault(); onOpen(p.id); }} style={{ display: 'grid', gridTemplateColumns: '220px minmax(0,1fr) auto', gap: 24, alignItems: 'center' }}>
      <div style={{ aspectRatio: '4 / 3', borderRadius: 'var(--radius-sm)', background: 'var(--sunk)', boxShadow: 'inset 0 0 0 1px var(--image-outline)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="du-caption">Project image</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 className="du-heading" style={{ margin: 0 }}>{p.title}</h3>
        <p className="du-small" style={{ margin: 0, color: 'var(--ink-secondary)', maxWidth: '52ch' }}>{p.summary}</p>
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>{p.tags.map(t => <Tag key={t} size="sm">{t}</Tag>)}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, alignSelf: 'start', paddingTop: 4 }}>
        <span className="du-caption du-tabular">{p.year}</span>
        <span style={{ color: 'var(--ink-tertiary)', display: 'flex' }}><Icon name="arrow-up-right" /></span>
      </div>
    </Card>
  );
}

function Home({ onOpen }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, paddingBottom: 64 }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 48, maxWidth: 820 }}>
        <h1 className="du-display" style={{ margin: 0 }}>I build software and AI tools around how people actually think and behave.</h1>
        <p className="du-body" style={{ margin: 0, color: 'var(--ink-secondary)', maxWidth: '60ch' }}>Most of my work starts with a question about behavior or attention, then becomes a small tool that tests it. These are a few of those.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" iconEnd={<Icon name="arrow-right" />} onClick={() => onOpen(window.PROJECTS[0].id)}>Read the latest case study</Button>
          <Button variant="ghost">Get in touch</Button>
        </div>
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}><h2 className="du-title" style={{ margin: 0 }}>Selected work</h2><span className="du-caption">{window.PROJECTS.length} projects</span></div>
        {window.PROJECTS.map(p => <ProjectRow key={p.id} p={p} onOpen={onOpen} />)}
      </section>
    </div>
  );
}

Object.assign(window, { Home, SiteHeader });
