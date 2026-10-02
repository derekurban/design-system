const { Button: CSButton, Icon: CSIcon, Stat: CSStat, LineChart: CSLine, Tag: CSTag } = window.DerekUrbanDesignSystem_3bae67;

function Meta({ label, value }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span className="du-caption">{label}</span><span className="du-small">{value}</span></div>;
}
function Section({ title, children }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '200px minmax(0,1fr)', gap: 32, padding: '32px 0', boxShadow: 'inset 0 0.5px 0 var(--line)' }}>
      <h2 className="du-subheading" style={{ margin: 0 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: '62ch' }}>{children}</div>
    </section>
  );
}

function CaseStudy({ id, onBack }) {
  const p = window.PROJECTS.find(x => x.id === id) || window.PROJECTS[0];
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingBottom: 64 }}>
      <div><CSButton variant="ghost" size="sm" iconStart={<CSIcon name="arrow-left" />} onClick={onBack}>All work</CSButton></div>
      <header style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 820 }}>
        <div style={{ display: 'flex', gap: 6 }}>{p.tags.map(t => <CSTag key={t} size="sm">{t}</CSTag>)}</div>
        <h1 className="du-display" style={{ margin: 0 }}>{p.title}</h1>
        <p className="du-body" style={{ margin: 0, color: 'var(--ink-secondary)' }}>{p.summary}</p>
        <div style={{ display: 'flex', gap: 40, marginTop: 8 }}><Meta label="Year" value={p.year} /><Meta label="Role" value={p.role} /><Meta label="Built with" value={p.stack} /></div>
      </header>
      <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ aspectRatio: '16 / 7', borderRadius: 'var(--radius-xl)', background: 'var(--sunk)', boxShadow: 'inset 0 0 0 1px var(--image-outline)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="du-caption">Hero image</span></div>
        <figcaption className="du-caption">The pattern view, three months into daily use.</figcaption>
      </figure>
      <div>
        <Section title="The question">
          <p className="du-body" style={{ margin: 0 }}>I write a lot of notes and rarely reread them. I wanted to know whether the ideas I keep returning to are the ones I think they are.</p>
        </Section>
        <Section title="What I built">
          <p className="du-body" style={{ margin: 0 }}>A plain notes tool with one extra view. It groups notes by what they share and shows how often each group comes back. Nothing is summarized for you; it only points.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 24, padding: '8px 0' }}>
            <CSStat label="Notes written" value="1,204" delta="Over 9 months" />
            <CSStat label="Themes found" value="14" delta="4 I expected" emphasis />
            <CSStat label="Revisit gap" value="4.2 days" delta="Down from 9.8" />
          </div>
        </Section>
        <Section title="What happened">
          <p className="du-body" style={{ margin: 0 }}>Linking went up once the patterns were visible. That is one person over one year, so it is a pattern, not a rule.</p>
          <CSLine height={160} series={[4,5,5,6,8,7,9,11,10,12,14,13,16,18,17,21]} compare={[4,4,5,5,5,6,6,6,6,7,7,7,8,8,8,8]} endLabel="21 linked" compareLabel="8 before" labels={['Jan','','','','','','','','','','','','','','','Sep']} label="Ideas linked per week, before and after the pattern view" />
        </Section>
        <Section title="What I’d change">
          <p className="du-body" style={{ margin: 0 }}>The grouping is too eager with short notes. Next I want to let a group stay unnamed until it has earned a name.</p>
        </Section>
      </div>
    </article>
  );
}

Object.assign(window, { CaseStudy });
