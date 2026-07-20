// Home, About, Speaker, Program pages

function Placeholder({ label, style, className = '' }) {
  return (
    <div className={`placeholder ${className}`} style={style}>
      <span className="placeholder__label">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Big countdown component
// ─────────────────────────────────────────────────────────────
function BigCountdown() {
  const { event } = window.CCCPB;
  const { days, hours, mins, secs } = window.useCountdown(event.date);
  const cells = [
    { v: days, l: 'Days' },
    { v: hours, l: 'Hours' },
    { v: mins, l: 'Minutes' },
    { v: secs, l: 'Seconds' },
  ];
  return (
    <div className="bigcount">
      <div className="bigcount__lbl">
        Counting down to<br/>
        <b>April 30, 2026</b>
      </div>
      <div className="bigcount__nums">
        {cells.map((c, i) => (
          <div key={i} className="bigcount__cell">
            <b>{String(c.v).padStart(2,'0')}</b>
            <span>{c.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Home
// ─────────────────────────────────────────────────────────────
function HomePage({ go }) {
  const { event, scriptures, whatWeDo, history, mission } = window.CCCPB;
  const [scrIdx, setScrIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setScrIdx(i => (i + 1) % scriptures.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page" data-screen-label="home page">
      {/* HERO */}
      <section className="hero" data-screen-label="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <div className="hero__date">{event.edition} • Thursday, April 30, 2026</div>
              <h1 className="hero__title">
                Great leaders<br/>
                <em>kneel first.</em>
              </h1>
              <p className="hero__sub">
                The premier gathering of Christian business leaders in Collin County. One morning on the National Day of Prayer — breakfast, real connection, and a keynote from Texas Rangers Hall of Famer <b>Elvis Andrus</b>.
              </p>
              <div className="hero__ctas">
                <button className="btn btn--oxblood" onClick={() => go('tickets')}>Reserve a seat</button>
                <button className="btn btn--ghost" onClick={() => go('program')}>See the program →</button>
              </div>
              <BigCountdown />
            </div>
            <div className="hero__visual">
              <Placeholder label="Hero photo · candlelit table at sunrise" />
            </div>
          </div>
        </div>
      </section>

      {/* SCRIPTURE rotating */}
      <section style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '72px 0', position: 'relative', zIndex: 2 }} data-screen-label="scripture quote">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow center" style={{ color: 'var(--gold-soft)' }}>Scripture</div>
          <blockquote style={{
            margin: '28px 0 18px',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1.25,
            color: 'var(--bone)',
            minHeight: 180,
            transition: 'opacity 0.6s ease',
          }} key={scrIdx}>
            <span style={{ color: 'var(--gold-soft)', fontSize: '0.6em', verticalAlign: 'top' }}>“</span>
            {scriptures[scrIdx].text}
            <span style={{ color: 'var(--gold-soft)', fontSize: '0.6em' }}>”</span>
          </blockquote>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>
            — {scriptures[scrIdx].ref}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
            {scriptures.map((_, i) => (
              <button key={i}
                onClick={() => setScrIdx(i)}
                style={{
                  width: i === scrIdx ? 24 : 8, height: 2,
                  background: i === scrIdx ? 'var(--gold-soft)' : 'rgba(255,255,255,0.3)',
                  border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.3s',
                }} />
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKER preview */}
      <section className="section" data-screen-label="speaker preview">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'center' }} className="speaker-prev-grid">
            <Placeholder label="Speaker portrait · Elvis Andrus" style={{ aspectRatio: '4/5' }} />
            <div>
              <div className="eyebrow">2026 Keynote Speaker</div>
              <h2 style={{ marginTop: 18 }}>Elvis Andrus.<br/><em style={{ color: 'var(--oxblood)', fontStyle: 'italic' }}>From shortstop to servant.</em></h2>
              <p style={{ marginTop: 22, fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.65, maxWidth: 520 }}>
                Fifteen seasons in the Major Leagues. Two All‑Star selections. A 2025 induction into the Texas Rangers Hall of Fame. But Elvis will tell you — the records you set don’t outlast you. The people you love do.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 14 }}>
                <button className="btn" onClick={() => go('speaker')}>Read his story</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three column pillars */}
      <section className="section" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }} data-screen-label="pillars">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="eyebrow center">Since 1999</div>
            <h2 style={{ marginTop: 14 }}>One morning. <em style={{ fontStyle: 'italic', color: 'var(--oxblood)' }}>One purpose.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule-soft)' }} className="pillars-grid">
            {[
              { n: '01', t: 'Our History', b: history.body },
              { n: '02', t: 'What We Do', b: whatWeDo.body },
              { n: '03', t: 'Our Mission', b: mission.body2 },
            ].map((p, i) => (
              <div key={i} style={{
                padding: '48px 36px',
                borderRight: i < 2 ? '1px solid var(--rule-soft)' : 'none',
                borderBottom: '1px solid var(--rule-soft)',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 32, color: 'var(--gold)', marginBottom: 16 }}>{p.n}</div>
                <h3 style={{ marginBottom: 16 }}>{p.t}</h3>
                <p style={{ color: 'var(--ink-2)', lineHeight: 1.7, fontSize: 15 }}>{p.b}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="btn btn--ghost" onClick={() => go('about')}>Learn more about us →</button>
          </div>
        </div>
      </section>

      {/* Tickets CTA */}
      <section className="section" style={{ paddingBottom: 120 }} data-screen-label="tickets cta">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--ink)' }} className="cta-grid">
            <div style={{ padding: '64px 56px', background: 'var(--ink)', color: 'var(--cream)' }}>
              <div className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Reserve your seat</div>
              <h2 style={{ marginTop: 18, color: 'var(--bone)', fontFamily: 'var(--serif)' }}>
                Tables go quickly.<br/>
                <em style={{ color: 'var(--gold-soft)' }}>Bring your whole team.</em>
              </h2>
              <p style={{ marginTop: 22, opacity: 0.75, fontSize: 16, lineHeight: 1.65, maxWidth: 380 }}>
                Individual tickets and full tables are open now. Sponsorships are limited and close on April 1, 2026.
              </p>
              <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="btn btn--oxblood" onClick={() => go('tickets')}>See tickets</button>
                <button className="btn btn--ghost" style={{ color: 'var(--bone)', borderColor: 'var(--bone)' }} onClick={() => go('donate')}>Donate instead</button>
              </div>
            </div>
            <div style={{ padding: '64px 56px', background: 'var(--cream)' }}>
              <div className="eyebrow">Pricing</div>
              <div style={{ marginTop: 28, borderTop: '1px solid var(--rule-soft)' }}>
                {[
                  { n: 'Individual ticket', p: '$50' },
                  { n: 'Table of eight', p: '$400' },
                  { n: 'Gold sponsorship', p: '$1,000' },
                  { n: 'Patron sponsorship', p: '$2,500' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    padding: '18px 0', borderBottom: '1px solid var(--rule-soft)',
                  }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{row.n}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--oxblood)', fontWeight: 500 }}>{row.p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────────
function AboutPage({ go }) {
  const { history, mission, whatWeDo, event } = window.CCCPB;
  return (
    <div className="page" data-screen-label="about page">
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow center">About CCCPB</div>
          <h1 style={{ marginTop: 22, fontSize: 'clamp(48px, 5.4vw, 80px)' }}>
            Faith in the <em style={{ color: 'var(--oxblood)' }}>marketplace</em><br/> since 1999.
          </h1>
          <p style={{ marginTop: 28, fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.65, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            What began as seven business leaders around a single breakfast table has grown into the premier gathering of Christian business leaders in North Texas.
          </p>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <Placeholder label="Archive photo · the founding board, 1999" style={{ height: 440 }} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container container--narrow">
          <div className="eyebrow">{history.title}</div>
          <p className="dropcap" style={{ marginTop: 28, fontSize: 19, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            {history.body}
          </p>
          <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            {history.body2}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow center" style={{ color: 'var(--gold-soft)' }}>{mission.title}</div>
          <blockquote style={{
            margin: '32px auto 28px',
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(34px, 4vw, 56px)', lineHeight: 1.2,
            color: 'var(--bone)', maxWidth: 760,
          }}>
            “{mission.body.replace(/“|”/g, '')}”
          </blockquote>
          <p style={{ marginTop: 24, fontSize: 18, opacity: 0.85, lineHeight: 1.7, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            {mission.body2}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
            <div>
              <div className="eyebrow">{whatWeDo.title}</div>
              <h2 style={{ marginTop: 18 }}>One morning that <em style={{ color: 'var(--oxblood)' }}>feeds many.</em></h2>
              <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-2)' }}>{whatWeDo.body}</p>
              <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {[
                  { k: 'Founded', v: '1999' },
                  { k: 'Editions held', v: '26' },
                  { k: 'Volunteer board', v: '11' },
                  { k: 'Seats served (2024)', v: '600+' },
                ].map(s => (
                  <div key={s.k} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 14 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 500, color: 'var(--oxblood)' }}>{s.v}</div>
                    <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
            <Placeholder label="Photo · breakfast hall at first light" style={{ aspectRatio: '4/5' }} />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-2)', textAlign: 'center' }}>
        <div className="container container--narrow">
          <h2>Will you join us in <em style={{ color: 'var(--oxblood)' }}>2026</em>?</h2>
          <p style={{ marginTop: 18, fontSize: 17, color: 'var(--ink-2)' }}>Reserve a seat, host a table, or support us with a gift.</p>
          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn--oxblood" onClick={() => go('tickets')}>Reserve a seat</button>
            <button className="btn btn--ghost" onClick={() => go('donate')}>Donate</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Speaker
// ─────────────────────────────────────────────────────────────
function SpeakerPage({ go }) {
  const { speaker } = window.CCCPB;
  return (
    <div className="page" data-screen-label="speaker page">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 72, alignItems: 'start' }} className="speaker-grid">
            <Placeholder label={`Portrait · ${speaker.name}`} style={{ aspectRatio: '4/5', position: 'sticky', top: 120 }} />
            <div>
              <div className="eyebrow">2026 Keynote Speaker</div>
              <h1 style={{ marginTop: 22, fontSize: 'clamp(52px, 5.8vw, 88px)', lineHeight: 0.98 }}>
                {speaker.name}.
              </h1>
              <p style={{ marginTop: 20, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 32, color: 'var(--oxblood)', lineHeight: 1.2 }}>
                {speaker.headline}
              </p>
              <p style={{ marginTop: 14, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                {speaker.short}
              </p>

              <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)', padding: '24px 0' }}>
                {speaker.stats.map(s => (
                  <div key={s.k}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 500, color: 'var(--ink)' }}>{s.v}</div>
                    <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>{s.k}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40 }}>
                {speaker.bio.map((p, i) => (
                  <p key={i} style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 22 }}>
                    {i === 0 ? <span className="dropcap">{p}</span> : p}
                  </p>
                ))}
              </div>

              <blockquote style={{
                marginTop: 40, padding: '24px 32px',
                borderLeft: '2px solid var(--oxblood)',
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 26,
                color: 'var(--ink)', lineHeight: 1.35,
              }}>{speaker.quote}</blockquote>

              <div style={{ marginTop: 40, display: 'flex', gap: 14 }}>
                <button className="btn btn--oxblood" onClick={() => go('tickets')}>Hear him speak — reserve a seat</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Program
// ─────────────────────────────────────────────────────────────
function ProgramPage({ go }) {
  const { program, event } = window.CCCPB;
  return (
    <div className="page" data-screen-label="program page">
      <section className="section">
        <div className="container container--narrow">
          <div className="eyebrow">Program</div>
          <h1 style={{ marginTop: 22 }}>
            April 30, 2026.<br/>
            <em style={{ color: 'var(--oxblood)' }}>One quiet morning.</em>
          </h1>
          <p style={{ marginTop: 28, fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.65 }}>
            Doors open at 6:30 a.m. for a hot breakfast buffet and fellowship. The program begins promptly at 7:07 a.m. and concludes in time for the workday.
          </p>
          <div style={{ marginTop: 24, padding: 24, background: 'var(--bone)', border: '1px solid var(--rule-soft)' }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'baseline', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>Date</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500 }}>April 30, 2026</div>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>Venue</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500 }}>{event.venue}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>Dress</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500 }}>Business casual</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container container--narrow">
          <div style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 0, marginLeft: 80 }} className="timeline">
            {program.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, padding: '28px 0', borderBottom: i < program.length - 1 ? '1px solid var(--rule-soft)' : 'none', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: -10, top: 36,
                  width: 18, height: 18, borderRadius: '50%',
                  background: 'var(--cream)', border: '2px solid var(--oxblood)',
                }} />
                <div style={{ paddingLeft: 24 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, color: 'var(--oxblood)' }}>{p.t}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: 26, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: 'var(--ink-2)', lineHeight: 1.7, fontSize: 16 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, textAlign: 'center', display: 'flex', gap: 14, justifyContent: 'center' }}>
            <button className="btn btn--oxblood" onClick={() => go('tickets')}>Reserve a seat</button>
            <button className="btn btn--ghost" onClick={() => go('location')}>Plan your visit →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage, SpeakerPage, ProgramPage, Placeholder, BigCountdown });
