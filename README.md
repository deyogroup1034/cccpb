# CCCPB — Site Redesign (2026)

A high-fidelity interactive prototype for the Collin County Christian Prayer Breakfast website redesign.

**Live preview**: open `index.html` in any modern browser.

## What's here

- `index.html` — Presentation shell: shows the prototype inside a desktop browser frame and an iPhone frame side-by-side. Tweaks panel toggles Desktop / Split / Mobile views and quick-jumps between pages.
- `site/` — The actual responsive prototype (8 pages, full interactions):
  - `site/index.html` — entry point
  - `site/style.css` — design system (warm & reverent palette, Cormorant Garamond + Public Sans)
  - `site/data.js` — all copy + content
  - `site/shell.jsx` — nav, footer, cart drawer, countdown bar
  - `site/pages-main.jsx` — Home, About, Speaker, Program
  - `site/pages-actions.jsx` — Tickets, Donate, Gallery, Location
  - `site/app.jsx` — routing + cart state
- `browser-window.jsx`, `ios-frame.jsx`, `tweaks-panel.jsx` — UI scaffolding for the presentation shell

## Design direction

- **Aesthetic**: Warm & reverent — cream/parchment background with subtle paper grain, oxblood accent (`#7a1e1e`), warm gold rules
- **Type**: Cormorant Garamond (display) + Public Sans (body), small-caps eyebrows
- **Imagery**: All photos are placeholder boxes labeled with what should go there — to be replaced with real photography in production

## Pages

Home · About · Program (dropdown: Program / Speaker / Gallery / Location) · Tickets · Donate

## Interactive features

- Live countdown to April 30, 2026 (sticky top bar + big hero card)
- Animated hero with rotating scripture quote
- Full ticket cart drawer — tickets, tables, sponsorships, live subtotal
- Donate page with range slider, preset chips, monthly toggle, live tier label
- Filterable gallery with lightbox
- Stylized SVG map on Location page
- Mobile menu (hamburger drawer) with collapsible Program submenu

## Running locally

No build step. Just open `index.html` in a browser. (Or serve the folder with any static server: `python -m http.server` etc.)

## Notes for reviewers

- Use the **Tweaks** toggle (top right) to switch between Desktop / Split / Mobile views
- Click into the desktop browser window or iPhone frame to interact with the prototype directly
- All copy is editable in `site/data.js`
- This is a prototype — checkout, donation, and form submissions are not wired to a backend
