// V4 additions: Board, Previous Speakers, Get Involved, Contact

function PageHead({ eyebrow, title, em, lede }) {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow center">{eyebrow}</div>
        <h1 style={{ marginTop: 22, fontSize: 'clamp(44px, 5vw, 74px)', lineHeight: 1.02 }}>
          {title}{em && <React.Fragment><br/><em style={{ color: 'var(--flag-red)' }}>{em}</em></React.Fragment>}
        </h1>
        {lede && <p style={{ marginTop: 26, fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 640, margin: '26px auto 0' }}>{lede}</p>}
      </div>
    </section>
  );
}

// ── Our Board Members ────────────────────────────────────────
function BoardPage({ go }) {
  const { board, event } = window.CCCPB;
  return (
    <div className="page" data-screen-label="board page">
      <PageHead
        eyebrow="About · Our Board"
        title="An all‑volunteer"
        em="board."
        lede={`Every person who plans this breakfast does it on their own time. The board meets year‑round to secure the venue, invite the speaker, raise sponsorships, and return every dollar after expenses to Collin County ministries.`}
      />
      <section className="section">
        <div className="container">
          <div className="roster">
            {board.map((m, i) => (
              <div key={i}>
                <div className="roster__ph">Headshot</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>{m.name}</div>
                <div style={{ marginTop: 6, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--flag-red)' }}>{m.role}</div>
                <div style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-2)' }}>{m.org}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: 'var(--muted)', textAlign: 'center' }}>
            Board roster and headshots to be supplied — names, roles, and organizations shown are placeholders.
          </p>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--rule-soft)', textAlign: 'center' }}>
        <div className="container container--narrow">
          <h2>Interested in serving with us?</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: 'var(--ink-2)' }}>
            The board adds members as the breakfast grows. Write to <a href={`mailto:${event.email}`} style={{ color: 'var(--flag-red)' }}>{event.email}</a> or start by volunteering for the 2027 morning.
          </p>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn--oxblood" onClick={() => go('involved')}>Volunteer</button>
            <button className="btn btn--ghost" onClick={() => go('contact')}>Contact the board</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Previous Speakers ────────────────────────────────────────
function SpeakersPage({ go }) {
  const { pastSpeakers, speaker } = window.CCCPB;
  return (
    <div className="page" data-screen-label="previous speakers page">
      <PageHead
        eyebrow="About · Previous Speakers"
        title="Twenty‑seven years of"
        em="testimony."
        lede="Athletes, pastors, executives, and public servants have stood at this podium. Each one came to say the same thing a different way."
      />

      <section className="section">
        <div className="container">
          {/* This year, featured */}
          <div style={{ display: 'grid', gridTemplateColumns: '4fr 6fr', gap: 48, alignItems: 'center', border: '1px solid var(--ink)', padding: 40 }} className="speaker-prev-grid">
            <window.Placeholder label={`Portrait · ${speaker.name}`} style={{ aspectRatio: '4/5' }} />
            <div>
              <div className="chip" style={{ background: 'var(--flag-red)', color: '#fff', border: 'none' }}>2027 · This year</div>
              <h2 style={{ marginTop: 18 }}>{speaker.name}</h2>
              <p style={{ marginTop: 10, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--flag-red)' }}>{speaker.headline}</p>
              <p style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.7 }}>{speaker.bio[0]}</p>
              <button className="btn btn--sm btn--oxblood" style={{ marginTop: 24 }} onClick={() => go('speaker')}>Read his story</button>
            </div>
          </div>

          {/* Past years */}
          <div style={{ marginTop: 64, borderTop: '1px solid var(--rule)' }}>
            {pastSpeakers.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 200px 1fr 240px', gap: 28, alignItems: 'baseline', padding: '26px 0', borderBottom: '1px solid var(--rule-soft)' }} className="past-row">
                <div style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 600, color: 'var(--navy)' }}>{s.y}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500 }}>{s.name}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.note}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>{s.title}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: 13, color: 'var(--muted)' }}>
            Speaker names, years, and summaries to be supplied.
          </p>
        </div>
      </section>
    </div>
  );
}

// ── Get Involved: sponsors, in-kind, volunteers ──────────────
function InvolvedPage({ go, openCart }) {
  const { sponsorships, inKind, volunteerRoles, event } = window.CCCPB;
  return (
    <div className="page" data-screen-label="get involved page">
      <PageHead
        eyebrow="Get Involved"
        title="We need"
        em="help to fill the room."
        lede="Six hundred seats, one morning, and no paid staff. Sponsors underwrite the breakfast, in‑kind partners cover what money shouldn't have to, and volunteers make the morning run."
      />

      {/* three ways, at a glance */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="involved-grid">
            {[
              { n: '01', t: 'Sponsor the breakfast', b: 'Four levels, from $500 to $2,500. Every level includes seats and recognition in the program.', cta: 'See sponsorship levels', to: 'tickets', tone: 'red' },
              { n: '02', t: 'Give in kind', b: 'Printing, A/V, coffee, flowers, guest gifts, professional services. Goods and services count fully as sponsorship.', cta: 'See what we need', to: null, tone: 'navy' },
              { n: '03', t: 'Volunteer the morning', b: 'Table hosts, check‑in, set‑up, church liaisons, photography. Most roles are done by 9 a.m.', cta: 'See volunteer roles', to: null, tone: 'ink' },
            ].map((c, i) => (
              <div key={i} style={{
                padding: 36,
                border: '1px solid var(--rule-soft)',
                background: c.tone === 'ink' ? 'var(--ink)' : c.tone === 'navy' ? 'var(--navy)' : 'var(--flag-red)',
                color: '#fff', display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 600, opacity: 0.5 }}>{c.n}</div>
                <h3 style={{ color: '#fff', fontSize: 27, lineHeight: 1.15 }}>{c.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.85, flex: 1 }}>{c.b}</p>
                <button className="btn btn--sm btn--ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', alignSelf: 'flex-start' }}
                  onClick={() => { if (c.to) { go(c.to); return; } const el = document.getElementById(i === 1 ? 'inkind' : 'volunteer'); if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' }); }}>
                  {c.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors strip */}
      <section className="section" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="eyebrow">Sponsorship</div>
              <h2 style={{ marginTop: 14 }}>Sponsors carry the morning.</h2>
            </div>
            <span className="needline">18 of 24 sponsorships still open for 2027</span>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="sponsor-grid">
            {sponsorships.map(s => (
              <div key={s.id} style={{
                padding: 28,
                background: s.featured ? 'var(--ink)' : 'var(--bone)',
                color: s.featured ? 'var(--bone)' : 'var(--ink)',
                border: '1px solid var(--rule-soft)',
              }}>
                <div style={{ fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: s.featured ? 'var(--navy-soft)' : 'var(--muted)' }}>{s.name}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 600, marginTop: 8, color: s.featured ? '#fff' : 'var(--flag-red)' }}>${s.price.toLocaleString()}</div>
                <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{s.seats} seats included</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <button className="btn btn--oxblood" onClick={() => go('tickets')}>Compare levels & reserve →</button>
          </div>
        </div>
      </section>

      {/* In kind */}
      <section className="section" id="inkind">
        <div className="container">
          <div className="eyebrow">Sponsors in kind</div>
          <h2 style={{ marginTop: 14, maxWidth: 720 }}>Goods and services we'd rather not pay for.</h2>
          <p style={{ marginTop: 18, fontSize: 17, color: 'var(--ink-2)', maxWidth: 640, lineHeight: 1.7 }}>
            An in‑kind gift is credited at full value and recognized exactly like a cash sponsorship at the same level. It also keeps more of every ticket in Collin County ministries.
          </p>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--rule-soft)', border: '1px solid var(--rule-soft)' }} className="involved-grid">
            {inKind.map(k => (
              <div key={k.t} style={{ background: 'var(--bone)', padding: '30px 28px' }}>
                <h3 style={{ fontSize: 22 }}>{k.t}</h3>
                <p style={{ marginTop: 10, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.65 }}>{k.b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a className="btn btn--navy" href={`mailto:${event.email}?subject=In-kind%20sponsorship`}>Offer an in‑kind gift</a>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="section" id="volunteer" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="eyebrow" style={{ color: '#fff' }}>Volunteers</div>
              <h2 style={{ marginTop: 14, color: 'var(--bone)' }}>Fifty volunteers. <em style={{ color: 'var(--navy-soft)' }}>One morning.</em></h2>
            </div>
            <span className="needline" style={{ color: '#fff' }}>Sign‑ups open now</span>
          </div>
          <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="involved-grid">
            {volunteerRoles.map(v => (
              <div key={v.t} style={{ border: '1px solid rgba(255,255,255,0.14)', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <h3 style={{ color: '#fff', fontSize: 22 }}>{v.t}</h3>
                  <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--navy-soft)', whiteSpace: 'nowrap' }}>{v.need}</span>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, opacity: 0.75 }}>{v.b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a className="btn btn--oxblood" href={`mailto:${event.email}?subject=Volunteering%20for%202027`}>Sign up to volunteer</a>
            <button className="btn btn--ghost" style={{ color: 'var(--bone)', borderColor: 'var(--bone)' }} onClick={() => go('contact')}>Ask a question first</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Contact ──────────────────────────────────────────────────
function ContactPage({ go }) {
  const { event } = window.CCCPB;
  return (
    <div className="page" data-screen-label="contact page">
      <PageHead
        eyebrow="Contact"
        title="Reach the"
        em="board directly."
        lede="The breakfast is run by volunteers, so email is usually fastest. We answer every message."
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="involved-grid">
            <div className="contact-card">
              <b>Email</b>
              <a href={`mailto:${event.email}`}>{event.email}</a>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', marginTop: 6 }}>Tickets, sponsorships, volunteering, press.</span>
            </div>
            <div className="contact-card">
              <b>Phone</b>
              <a href={`tel:${event.phone}`}>{event.phone}</a>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', marginTop: 6 }}>Voicemail is checked daily by a board member.</span>
            </div>
            <div className="contact-card">
              <b>Mail & checks</b>
              <span>{event.mailPo}<br/>{event.mailCity}</span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', marginTop: 6 }}>Make checks payable to <b style={{ fontFamily: 'var(--sans)', letterSpacing: 0, textTransform: 'none', fontSize: 14, color: 'var(--ink)' }}>Collin County Christian Prayer Breakfast</b>.</span>
            </div>
          </div>

          <div className="flagrule" style={{ margin: '56px 0' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64 }} className="about-grid">
            <div>
              <div className="eyebrow">Follow along</div>
              <h2 style={{ marginTop: 14, fontSize: 34 }}>Photos, speaker news, and next year's date.</h2>
              <p style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                Social handles to be confirmed. Once set, they'll appear here, in the footer, and on every purchase confirmation.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
                {['Facebook', 'Instagram', 'LinkedIn'].map(s => (
                  <a key={s} href="#" style={{ padding: '10px 16px', border: '1px solid var(--rule)', fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--navy)', textDecoration: 'none' }}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow">Send a message</div>
              <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 20, display: 'grid', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <input placeholder="Name" style={{ height: 52, padding: '0 16px', border: '1px solid var(--rule)', background: 'var(--bone)', fontFamily: 'var(--sans)', fontSize: 15 }} />
                  <input placeholder="Email" style={{ height: 52, padding: '0 16px', border: '1px solid var(--rule)', background: 'var(--bone)', fontFamily: 'var(--sans)', fontSize: 15 }} />
                </div>
                <select style={{ height: 52, padding: '0 16px', border: '1px solid var(--rule)', background: 'var(--bone)', fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)' }}>
                  <option>What's this about?</option>
                  <option>Tickets or a reserved table</option>
                  <option>Sponsorship</option>
                  <option>In‑kind sponsorship</option>
                  <option>Volunteering</option>
                  <option>Bringing my church or organization</option>
                  <option>Something else</option>
                </select>
                <textarea placeholder="Message" rows="5" style={{ padding: 16, border: '1px solid var(--rule)', background: 'var(--bone)', fontFamily: 'var(--sans)', fontSize: 15, resize: 'vertical' }}></textarea>
                <button className="btn btn--oxblood" style={{ justifySelf: 'start' }}>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { BoardPage, SpeakersPage, InvolvedPage, ContactPage, PageHead });
