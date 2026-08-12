// Tickets, Donate, Gallery, Location pages

// ─────────────────────────────────────────────────────────────
// Tickets
// ─────────────────────────────────────────────────────────────
function TicketsPage({ go, cart, setCart, openCart }) {
  const { tickets, sponsorships } = window.CCCPB;

  const add = (id) => {
    setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
    openCart();
  };

  return (
    <div className="page" data-screen-label="tickets page">
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow center">Tickets</div>
          <h1 style={{ marginTop: 22 }}>Reserve your <em style={{ color: 'var(--oxblood)' }}>seat at the table.</em></h1>
          <p style={{ marginTop: 24, fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.65 }}>
            Tickets include a full breakfast, fellowship, and the program. Tables sell out — host yours early.
          </p>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="ticket-grid">
            {tickets.map(t => (
              <div key={t.id} className="card card--hover" style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div className="eyebrow">{t.note}</div>
                    <h3 style={{ marginTop: 12, fontSize: 32 }}>{t.name}</h3>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 500, color: 'var(--oxblood)', lineHeight: 1 }}>
                    ${t.price}
                  </div>
                </div>
                <p style={{ color: 'var(--ink-2)', lineHeight: 1.6, fontSize: 15 }}>{t.desc}</p>
                <div style={{ display: 'flex', gap: 10, marginTop: 'auto', paddingTop: 12 }}>
                  <button className="btn btn--oxblood" onClick={() => add(t.id)}>Add to cart</button>
                  <button className="btn btn--ghost" onClick={() => { add(t.id); }}>Buy now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorships */}
      <section className="section" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--rule-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="eyebrow center">Sponsorship</div>
            <h2 style={{ marginTop: 18 }}>Put your name behind the morning.</h2>
            <p style={{ marginTop: 14, fontSize: 17, color: 'var(--ink-2)', maxWidth: 560, margin: '14px auto 0', lineHeight: 1.6 }}>
              Sponsorships underwrite the event so every ticket dollar after expenses returns to Collin County ministries.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="sponsor-grid">
            {sponsorships.map(s => (
              <div key={s.id} style={{
                padding: 32,
                background: s.featured ? 'var(--ink)' : 'var(--bone)',
                color: s.featured ? 'var(--bone)' : 'var(--ink)',
                border: s.featured ? '1px solid var(--ink)' : '1px solid var(--rule-soft)',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
              }}>
                {s.featured && (
                  <div style={{
                    position: 'absolute', top: -1, right: -1,
                    background: 'var(--gold-soft)', color: 'var(--ink)',
                    padding: '6px 12px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
                  }}>Most chosen</div>
                )}
                <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, color: s.featured ? 'var(--gold-soft)' : 'var(--oxblood)' }}>
                  {s.name}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 500, marginTop: 12, lineHeight: 1 }}>
                  ${s.price.toLocaleString()}
                </div>
                <div style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.featured ? 'rgba(255,255,255,0.6)' : 'var(--muted)', marginTop: 6, fontWeight: 500 }}>
                  {s.seats} seats included
                </div>
                <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {s.perks.map((p, i) => (
                    <li key={i} style={{ fontSize: 14, lineHeight: 1.5, display: 'flex', gap: 10, opacity: s.featured ? 0.85 : 1 }}>
                      <span style={{ color: s.featured ? 'var(--gold-soft)' : 'var(--oxblood)', flexShrink: 0 }}>✦</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${s.featured ? '' : 'btn--ghost'} btn--sm`}
                  style={{ marginTop: 24, width: '100%', ...(s.featured ? { background: 'var(--gold-soft)', color: 'var(--ink)', borderColor: 'var(--gold-soft)' } : {}) }}
                  onClick={() => add(s.id)}
                >Choose {s.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>Not ready to commit?</h2>
          <p style={{ marginTop: 18, fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            Every gift — even a small one — keeps our morning free of admission for those who could not otherwise attend.
          </p>
          <button className="btn btn--ghost" style={{ marginTop: 28 }} onClick={() => go('donate')}>Make a donation →</button>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Donate
// ─────────────────────────────────────────────────────────────
function DonatePage({ go }) {
  const { donateLevels } = window.CCCPB;
  const [amount, setAmount] = React.useState(150);
  const [recurring, setRecurring] = React.useState(false);
  const [custom, setCustom] = React.useState(false);

  const min = 10, max = 2500;
  const tier = donateLevels.slice().reverse().find(l => amount >= l.v) || donateLevels[0];

  return (
    <div className="page" data-screen-label="donate page">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="donate-grid">
            <div>
              <div className="eyebrow">Donate</div>
              <h1 style={{ marginTop: 22 }}>Pour into the <em style={{ color: 'var(--oxblood)' }}>morning</em><br/>and the year that follows.</h1>
              <p style={{ marginTop: 28, fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.65 }}>
                After event expenses, every dollar returns to Collin County ministries — youth mentorship, first‑responder chaplaincy, food pantries, and pregnancy resource centers.
              </p>
              <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid var(--rule-soft)', paddingTop: 32 }}>
                {[
                  { v: '$184k', k: 'Returned to ministry (2024)' },
                  { v: '12', k: 'Local partners supported' },
                  { v: '100%', k: 'Volunteer-led board' },
                ].map(s => (
                  <div key={s.k}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 34, fontWeight: 500, color: 'var(--oxblood)', lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, marginTop: 8 }}>{s.k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation card */}
            <div style={{ background: 'var(--bone)', border: '1px solid var(--rule-soft)', padding: 40, boxShadow: 'var(--shadow-warm)' }}>
              <div className="eyebrow">Your gift</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 16 }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 80, fontWeight: 500, color: 'var(--ink)', lineHeight: 1 }}>${amount}</span>
                {recurring && <span style={{ fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>/ month</span>}
              </div>
              <div style={{ marginTop: 6, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--oxblood)' }}>
                Gift of a <b style={{ fontWeight: 600 }}>{tier.label}</b>
              </div>

              {/* Slider */}
              <div style={{ marginTop: 32 }}>
                <input
                  type="range" min={min} max={max} step="5"
                  value={amount}
                  onChange={e => setAmount(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--oxblood)', height: 6 }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, letterSpacing: '0.12em', color: 'var(--muted)', fontWeight: 600 }}>
                  <span>${min}</span><span>${max.toLocaleString()}+</span>
                </div>
              </div>

              {/* Preset chips */}
              <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {donateLevels.map(l => (
                  <button
                    key={l.v}
                    onClick={() => { setAmount(l.v); setCustom(false); }}
                    style={{
                      padding: '14px 0', background: amount === l.v ? 'var(--ink)' : 'var(--cream)',
                      color: amount === l.v ? 'var(--bone)' : 'var(--ink)',
                      border: '1px solid', borderColor: amount === l.v ? 'var(--ink)' : 'var(--rule-soft)',
                      cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4,
                      fontFamily: 'var(--sans)', alignItems: 'center',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500 }}>${l.v}</span>
                    <span style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>{l.label}</span>
                  </button>
                ))}
              </div>

              {/* Recurring */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24, cursor: 'pointer' }}>
                <span style={{
                  width: 44, height: 24, borderRadius: 12, background: recurring ? 'var(--oxblood)' : 'var(--rule-soft)',
                  position: 'relative', transition: 'all 0.2s',
                }}>
                  <span style={{
                    position: 'absolute', top: 3, left: recurring ? 23 : 3,
                    width: 18, height: 18, borderRadius: '50%', background: 'var(--bone)',
                    transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }} />
                </span>
                <input type="checkbox" checked={recurring} onChange={() => setRecurring(r => !r)} style={{ display: 'none' }} />
                <span style={{ fontSize: 14 }}>Make this a <b>monthly</b> gift</span>
              </label>

              <button className="btn btn--oxblood btn--lg" style={{ width: '100%', marginTop: 28 }}>
                Give ${amount}{recurring ? ' / month' : ''} →
              </button>
              <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 14, lineHeight: 1.5 }}>
                CCCPB is a 501(c)(3). Your gift is tax‑deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow center" style={{ color: 'var(--gold-soft)' }}>Other ways to give</div>
          <h2 style={{ marginTop: 18, color: 'var(--bone)' }}>By check, DAF, or stock.</h2>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'left' }} className="other-give-grid">
            {[
              { t: 'By Check', b: 'Make payable to “Collin County Christian Prayer Breakfast” and mail to PO Box 6451, McKinney, TX 75071.' },
              { t: 'Donor Advised Fund', b: 'Recommend a grant through your DAF. EIN available on request.' },
              { t: 'Stock or IRA', b: 'Gifting appreciated stock or a Qualified Charitable Distribution can be tax efficient. Contact us.' },
            ].map(o => (
              <div key={o.t} style={{ padding: 28, border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 style={{ color: 'var(--gold-soft)', fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24 }}>{o.t}</h3>
                <p style={{ marginTop: 14, opacity: 0.78, fontSize: 14, lineHeight: 1.65 }}>{o.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Gallery
// ─────────────────────────────────────────────────────────────
function GalleryPage({ go }) {
  const { gallery } = window.CCCPB;
  const [filter, setFilter] = React.useState('all');
  const years = ['all', ...Array.from(new Set(gallery.map(g => g.y)))];
  const items = filter === 'all' ? gallery : gallery.filter(g => g.y === filter);

  const [lightbox, setLightbox] = React.useState(null);

  return (
    <div className="page" data-screen-label="gallery page">
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow center">Gallery</div>
            <h1 style={{ marginTop: 22 }}>Moments from <em style={{ color: 'var(--oxblood)' }}>past mornings.</em></h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 48, flexWrap: 'wrap' }}>
            {years.map(y => (
              <button key={y}
                onClick={() => setFilter(y)}
                style={{
                  padding: '10px 18px', background: filter === y ? 'var(--ink)' : 'transparent',
                  color: filter === y ? 'var(--bone)' : 'var(--ink-2)',
                  border: '1px solid', borderColor: filter === y ? 'var(--ink)' : 'var(--rule-soft)',
                  cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.2em',
                  textTransform: 'uppercase', fontWeight: 600,
                }}>
                {y === 'all' ? 'All years' : y}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }} className="gallery-grid">
            {items.map((g, i) => (
              <button key={i} onClick={() => setLightbox(i)}
                style={{
                  border: 'none', padding: 0, background: 'none', cursor: 'pointer',
                  position: 'relative', aspectRatio: i % 5 === 0 ? '3/4' : '1/1',
                  gridRow: i % 5 === 0 ? 'span 2' : 'span 1',
                  overflow: 'hidden',
                }}>
                <div className="placeholder" style={{ position: 'absolute', inset: 0 }}>
                  <span className="placeholder__label">{g.y} · {g.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(28,24,19,0.92)',
          zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 40, animation: 'fadeIn 0.25s ease both',
        }}>
          <Placeholder label={`${items[lightbox].y} · ${items[lightbox].caption}`} style={{ width: 'min(900px, 100%)', aspectRatio: '4/3' }} />
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Location
// ─────────────────────────────────────────────────────────────
function LocationPage({ go }) {
  const { event } = window.CCCPB;
  return (
    <div className="page" data-screen-label="location page">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'center' }} className="loc-grid">
            <div>
              <div className="eyebrow">Location</div>
              <h1 style={{ marginTop: 22, fontSize: 'clamp(48px, 5.4vw, 80px)' }}>
                {event.venue}.<br/>
                <em style={{ color: 'var(--oxblood)' }}>Plano, Texas.</em>
              </h1>
              <p style={{ marginTop: 28, fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.65 }}>
                A central venue in Collin County with on‑site parking, ADA access, and ample room for hundreds of guests.
              </p>
              <div style={{ marginTop: 36, borderTop: '1px solid var(--rule-soft)' }}>
                {[
                  { k: 'Address', v: <>{event.venueAddr}<br/>{event.venueCity}</> },
                  { k: 'Doors', v: '6:30 a.m.' },
                  { k: 'Program', v: '7:07 – 8:30 a.m.' },
                  { k: 'Parking', v: 'Free, on‑site' },
                  { k: 'Accessibility', v: 'ADA compliant. Reserved seating available on request.' },
                ].map(r => (
                  <div key={r.k} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, padding: '18px 0', borderBottom: '1px solid var(--rule-soft)' }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, paddingTop: 3 }}>{r.k}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.4 }}>{r.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, display: 'flex', gap: 14 }}>
                <a className="btn btn--oxblood" href="https://www.google.com/maps/place/Plano+Event+Center" target="_blank">Open in Google Maps ↗</a>
                <a className="btn btn--ghost" href="https://www.google.com/maps/dir/?api=1&destination=Plano+Event+Center" target="_blank">Get directions ↗</a>
              </div>
            </div>

            {/* Stylized map placeholder */}
            <div style={{ position: 'relative', aspectRatio: '16/10' }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `
                  repeating-linear-gradient(90deg, rgba(40,30,20,0.04) 0, rgba(40,30,20,0.04) 1px, transparent 1px, transparent 40px),
                  repeating-linear-gradient(0deg, rgba(40,30,20,0.04) 0, rgba(40,30,20,0.04) 1px, transparent 1px, transparent 40px),
                  linear-gradient(135deg, var(--parchment), var(--cream-2))
                `,
                border: '1px solid var(--rule-soft)',
                overflow: 'hidden',
              }}>
                {/* roads */}
                <svg viewBox="0 0 400 500" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <path d="M0,180 Q120,160 220,200 T400,180" stroke="rgba(176,139,61,0.5)" strokeWidth="20" fill="none" />
                  <path d="M0,180 Q120,160 220,200 T400,180" stroke="var(--cream)" strokeWidth="14" fill="none" />
                  <path d="M180,0 Q160,150 220,280 T240,500" stroke="rgba(176,139,61,0.5)" strokeWidth="20" fill="none" />
                  <path d="M180,0 Q160,150 220,280 T240,500" stroke="var(--cream)" strokeWidth="14" fill="none" />
                  <path d="M0,360 L400,340" stroke="rgba(40,30,20,0.18)" strokeWidth="2" fill="none" />
                  <path d="M40,0 L60,500" stroke="rgba(40,30,20,0.18)" strokeWidth="2" fill="none" />
                </svg>
                {/* pin */}
                <div style={{ position: 'absolute', top: '38%', left: '52%', transform: 'translate(-50%, -100%)', textAlign: 'center' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--oxblood)', border: '3px solid var(--bone)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)', margin: '0 auto' }} />
                  <div style={{ marginTop: 10, padding: '8px 14px', background: 'var(--bone)', border: '1px solid var(--rule)', fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    Plano Event Center
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'Courier New, monospace', fontSize: 10, letterSpacing: '0.1em', color: 'var(--muted)', background: 'var(--bone)', padding: '4px 8px', border: '1px solid var(--rule-soft)' }}>
                  33.0543° N, 96.6845° W
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--rule-soft)' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow center">Contact</div>
          <h2 style={{ marginTop: 18 }}>Questions? <em style={{ color: 'var(--oxblood)' }}>We’d love to hear from you.</em></h2>
          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>Phone</div>
              <a href={`tel:${event.phone}`} style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--ink)', textDecoration: 'none' }}>{event.phone}</a>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>Email</div>
              <a href={`mailto:${event.email}`} style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', textDecoration: 'none' }}>{event.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TicketsPage, DonatePage, GalleryPage, LocationPage });
