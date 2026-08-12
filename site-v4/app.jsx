// Main app — routing + cart state

function App() {
  const [page, setPage] = React.useState('home');
  const [cart, setCart] = React.useState({});
  const [cartOpen, setCartOpen] = React.useState(false);
  const [tweaks, setTweaks] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('cccpb_tweaks') || '{}'); } catch { return {}; }
  });

  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);

  const go = React.useCallback((id) => {
    setPage(id);
    // scroll the iframe content to top
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, []);

  // Listen for cross-frame nav from the shell (quick-jump tweaks)
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data && e.data.type === 'cccpb:nav' && typeof e.data.page === 'string') {
        go(e.data.page);
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [go]);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const pages = {
    home: window.HomePage,
    about: window.AboutPage,
    speaker: window.SpeakerPage,
    program: window.ProgramPage,
    tickets: window.TicketsPage,
    donate: window.DonatePage,
    gallery: window.GalleryPage,
    location: window.LocationPage,
    board: window.BoardPage,
    speakers: window.SpeakersPage,
    involved: window.InvolvedPage,
    contact: window.ContactPage,
  };
  const PageComp = pages[page] || window.HomePage;

  return (
    <React.Fragment>
      <window.CountdownBar go={go} />
      <window.Nav current={page} go={go} cartCount={cartCount} openCart={openCart} />
      <main>
        <PageComp key={page} go={go} cart={cart} setCart={setCart} openCart={openCart} />
      </main>
      <window.Footer go={go} />
      {cartOpen && <window.CartDrawer cart={cart} setCart={setCart} onClose={closeCart} go={go} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
