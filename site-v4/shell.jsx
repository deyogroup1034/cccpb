// Shell components: top bar, nav, footer, cart drawer

const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────────────────────
// Countdown utilities
// ─────────────────────────────────────────────────────────────
function useCountdown(target) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

// ─────────────────────────────────────────────────────────────
// Sticky countdown bar
// ─────────────────────────────────────────────────────────────
function CountdownBar({ go }) {
  const { event } = window.CCCPB;
  const { days, hours, mins } = useCountdown(event.date);
  return (
    <div className="countdown-bar" data-screen-label="countdown bar">
      <span className="countdown-bar__lbl">{event.edition} Prayer Breakfast • {event.dateLabel} • National Day of Prayer</span>
      <span className="countdown-bar__nums">
        <b>{days}d</b> <b>{String(hours).padStart(2,'0')}h</b> <b>{String(mins).padStart(2,'0')}m</b>
      </span>
      <a href="#" onClick={(e) => { e.preventDefault(); go('tickets'); }}>Reserve your seat →</a>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Logo
// ─────────────────────────────────────────────────────────────
function CrossMark({ size = 46 }) {
  return <img className="nav__logo-img" src="assets/logo-mark.png" alt="Collin County Christian Prayer Breakfast" style={{ height: size }} />;
}

function Logo({ go }) {
  return (
    <div className="nav__logo" onClick={() => go('home')}>
      <CrossMark size={46} />
      <div className="nav__logo-text">
        <b>Collin County</b>
        <span>Christian Prayer Breakfast</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Top navigation
// ─────────────────────────────────────────────────────────────
function Nav({ current, go, cartCount, openCart }) {
  const { nav } = window.CCCPB;
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  // close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const onDoc = (e) => {
      if (!e.target.closest('[data-nav-dropdown]')) setOpenDropdown(null);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [openDropdown]);

  const isItemActive = (n) => {
    if (n.id === current) return true;
    if (n.children) return n.children.some(c => c.id === current);
    return false;
  };

  return (
    <React.Fragment>
    <header className="nav" data-screen-label="top nav">
      <div className="nav__inner">
        <Logo go={go} />
        <nav className="nav__links">
          {nav.map(n => {
            if (n.children) {
              const open = openDropdown === n.id;
              return (
                <div
                  key={n.id}
                  data-nav-dropdown
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setOpenDropdown(n.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`nav__link ${isItemActive(n) ? 'nav__link--active' : ''}`}
                    onClick={() => { go(n.id); setOpenDropdown(null); }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  >
                    {n.label}
                    <svg width="8" height="8" viewBox="0 0 8 8" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
                      <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {open && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)',
                      minWidth: 220, padding: '8px 0',
                      background: 'var(--bone)',
                      border: '1px solid var(--rule-soft)',
                      boxShadow: '0 20px 50px -10px rgba(80,40,10,0.18), 0 4px 14px -4px rgba(80,40,10,0.10)',
                      animation: 'fadeIn 0.16s ease both',
                      zIndex: 50,
                    }}>
                      {/* hover bridge */}
                      <div style={{ position: 'absolute', top: -10, left: 0, right: 0, height: 10 }} />
                      {/* gold rule accent on top */}
                      <div style={{ position: 'absolute', top: -1, left: 16, right: 16, height: 1, background: 'var(--gold)' }} />
                      {n.children.map(c => (
                        <button
                          key={c.id}
                          onClick={() => { go(c.id); setOpenDropdown(null); }}
                          style={{
                            display: 'block', width: '100%', textAlign: 'left',
                            padding: '12px 22px',
                            background: c.id === current ? 'var(--cream)' : 'transparent',
                            border: 'none', cursor: 'pointer',
                            fontFamily: 'var(--serif)',
                            fontSize: 17, fontWeight: 400,
                            color: c.id === current ? 'var(--oxblood)' : 'var(--ink)',
                            fontStyle: c.id === current ? 'italic' : 'normal',
                            transition: 'background 0.12s',
                            letterSpacing: 0,
                          }}
                          onMouseEnter={e => { if (c.id !== current) e.currentTarget.style.background = 'var(--cream)'; }}
                          onMouseLeave={e => { if (c.id !== current) e.currentTarget.style.background = 'transparent'; }}
                        >{c.label}</button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button
                key={n.id}
                className={`nav__link ${current === n.id ? 'nav__link--active' : ''}`}
                onClick={() => go(n.id)}
              >{n.label}</button>
            );
          })}
        </nav>
        <div className="nav__cta">
          <button className="cart-btn" onClick={openCart}>
            Cart {cartCount > 0 && <span className="cart-btn__count">{cartCount}</span>}
          </button>
          <button className="btn btn--sm btn--oxblood" onClick={() => go('donate')}>Donate</button>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}><span></span></button>
        </div>
      </div>
    </header>
    {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>×</button>
          {nav.map(n => {
            if (n.children) {
              const expanded = mobileExpanded === n.id;
              return (
                <div key={n.id} style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                  <button
                    className={`nav__link ${isItemActive(n) ? 'nav__link--active' : ''}`}
                    onClick={() => setMobileExpanded(expanded ? null : n.id)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: 'none' }}
                  >
                    <span>{n.label}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'none' }}>
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {expanded && (
                    <div style={{ paddingLeft: 16, paddingBottom: 8, display: 'flex', flexDirection: 'column' }}>
                      {n.children.map(c => (
                        <button
                          key={c.id}
                          className={`nav__link ${current === c.id ? 'nav__link--active' : ''}`}
                          onClick={() => { setMenuOpen(false); go(c.id); }}
                          style={{
                            display: 'block', width: '100%', textAlign: 'left',
                            fontFamily: 'var(--serif)',
                            fontSize: 18, textTransform: 'none', letterSpacing: 0,
                            fontStyle: 'italic', color: 'var(--ink-2)',
                            padding: '12px 0', borderBottom: 'none',
                          }}
                        >{c.label}</button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button
                key={n.id}
                className={`nav__link ${current === n.id ? 'nav__link--active' : ''}`}
                onClick={() => { setMenuOpen(false); go(n.id); }}
              >{n.label}</button>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
function Footer({ go }) {
  const { event } = window.CCCPB;
  return (
    <footer className="foot" data-screen-label="footer">
      <div className="container">
        <div className="foot__grid">
          <div>
            <div className="foot__mark"><img src="assets/logo-lockup.png" alt="Collin County Christian Prayer Breakfast" /></div>
            <p style={{ opacity: 0.7, fontSize: 14, maxWidth: 360, lineHeight: 1.6 }}>
              One morning every National Day of Prayer, Collin County gathers over breakfast — churches, city halls, schools, businesses, families — to pray together. Since {event.founded}.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
              <a href="#" aria-label="Facebook" style={{ width: 38, height: 38, border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', opacity: 0.7 }}>f</a>
              <a href="#" aria-label="Twitter" style={{ width: 38, height: 38, border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', opacity: 0.7, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>t</a>
            </div>
          </div>
          <div>
            <span className="foot__h">Event</span>
            <div className="foot__list">
              <a onClick={() => go('program')}>Program</a>
              <a onClick={() => go('tickets')}>Tickets</a>
              <a onClick={() => go('speaker')}>Speaker</a>
              <a onClick={() => go('location')}>Location</a>
            </div>
          </div>
          <div>
            <span className="foot__h">About</span>
            <div className="foot__list">
              <a onClick={() => go('about')}>Our History</a>
              <a onClick={() => go('board')}>Our Board Members</a>
              <a onClick={() => go('speakers')}>Previous Speakers</a>
              <a onClick={() => go('involved')}>Sponsors & Volunteers</a>
              <a onClick={() => go('donate')}>Donate</a>
            </div>
          </div>
          <div>
            <span className="foot__h">Contact</span>
            <div className="foot__list">
              <a href={`tel:${event.phone}`}>{event.phone}</a>
              <a href={`mailto:${event.email}`}>{event.email}</a>
              <span style={{ opacity: 0.6, fontSize: 13, marginTop: 10 }}>{event.mailPo}</span>
              <span style={{ opacity: 0.6, fontSize: 13 }}>{event.mailCity}</span>
              <a onClick={() => go('contact')} style={{ marginTop: 10 }}>Contact page →</a>
            </div>
          </div>
        </div>
        <div className="foot__bottom">
          <span>© {new Date().getFullYear()} CCCPB. All Rights Reserved.</span>
          <span>“To Him alone be the glory.” — Psalm 115:1</span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// Cart drawer
// ─────────────────────────────────────────────────────────────
function CartDrawer({ cart, setCart, onClose, go }) {
  const { tickets, sponsorships } = window.CCCPB;
  const allItems = [...tickets, ...sponsorships];
  const lines = Object.entries(cart).filter(([_, q]) => q > 0).map(([id, qty]) => {
    const item = allItems.find(t => t.id === id);
    return item ? { ...item, qty } : null;
  }).filter(Boolean);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const setQty = (id, qty) => setCart(c => ({ ...c, [id]: Math.max(0, qty) }));

  return (
    <React.Fragment>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer" data-screen-label="cart drawer">
        <div className="drawer__head">
          <h3>Your Cart</h3>
          <button className="drawer__close" onClick={onClose}>×</button>
        </div>
        <div className="drawer__body">
          {lines.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 12px', color: 'var(--muted)' }}>
              <div className="italic" style={{ fontSize: 22, marginBottom: 8, color: 'var(--ink)' }}>Your cart is empty.</div>
              <p style={{ fontSize: 14 }}>Choose a ticket option or sponsorship to begin.</p>
              <button className="btn btn--sm" style={{ marginTop: 20 }} onClick={() => { onClose(); go('tickets'); }}>See Tickets</button>
            </div>
          )}
          {lines.map(l => (
            <div className="cart-line" key={l.id}>
              <div>
                <div className="cart-line__name">{l.name}</div>
                <div className="cart-line__sub">${l.price.toLocaleString()} each</div>
              </div>
              <div className="qty">
                <button onClick={() => setQty(l.id, l.qty - 1)}>−</button>
                <span>{l.qty}</span>
                <button onClick={() => setQty(l.id, l.qty + 1)}>+</button>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>${(l.price * l.qty).toLocaleString()}</div>
            </div>
          ))}
        </div>
        {lines.length > 0 && (
          <div className="drawer__foot">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18, alignItems: 'baseline' }}>
              <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>Subtotal</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 500 }}>${total.toLocaleString()}</span>
            </div>
            <button className="btn btn--oxblood btn--lg" style={{ width: '100%' }}>
              Check out →
            </button>
            <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 12, lineHeight: 1.6 }}>
              Secure checkout. Your seats are not confirmed until payment is complete.<br/>
              A receipt goes to you; a copy goes to the CCCPB treasurer and chair.
            </p>
          </div>
        )}
      </aside>
    </React.Fragment>
  );
}

Object.assign(window, { CountdownBar, Nav, Footer, CartDrawer, useCountdown, Logo, CrossMark });
