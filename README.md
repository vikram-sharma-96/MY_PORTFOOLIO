# Vikram Sharma — Portfolio

A personal React + Vite portfolio with a charcoal and muted-lime design, reusable components, lightweight CSS animations, responsive project previews, and truthful placeholders.

## Run locally

Use Node.js 22.12+ (Node 24 recommended) and npm. See the [Vite setup guide](https://vite.dev/guide/).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build    # Production files in dist/
npm run preview  # Preview the production build
```

The project is a static frontend. Node.js runs the development/build tools; no backend or database is needed. Deployment is not configured. Deploy `dist/` with a static hosting provider when ready. For a subdirectory deployment, set the appropriate `base` in `vite.config.js` before building.

## Packages

| Package                    | Purpose                                 |
| -------------------------- | --------------------------------------- |
| react, react-dom           | Components and rendering                |
| lucide-react               | Tree-shaken SVG icons                   |
| vite, @vitejs/plugin-react | Development server and production build |
| prettier                   | Source formatting only                  |

No animation library, router, or UI framework is required. All exact installed versions are recorded in `package-lock.json`.

## Project structure

```text
PORTFOLIO/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Journey.jsx
│   │   ├── Certificates.jsx
│   │   ├── Coding.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── UI.jsx
│   ├── data/portfolio.js
│   ├── hooks/useMotion.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── motion.css
│   └── cinematic.css
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Add your real details

Edit **`src/data/portfolio.js`**. Empty strings intentionally show disabled controls rather than invented destinations.

| Detail                                     | Field                                      |
| ------------------------------------------ | ------------------------------------------ |
| GitHub profile                             | `profile.github`                           |
| LinkedIn                                   | `profile.linkedin`                         |
| Email address (address only, no `mailto:`) | `profile.email`                            |
| Resume                                     | `profile.resume`                           |
| Project repositories                       | Each entry in `projects`: `github`         |
| Project live demos                         | Each entry in `projects`: `live`           |
| Certificate links                          | Each entry in `certificates`: `url`        |
| Certificate details                        | Each entry: exact `name`, `issuer`, `year` |

For your resume, place the real PDF in `public/resume.pdf`, then set `profile.resume` to `'/resume.pdf'`. Certificate PDFs can also go in `public/certificates/` and use paths such as `'/certificates/your-certificate.pdf'`. Otherwise use actual HTTPS credential URLs. Local files download most reliably; browsers may open cross-origin resume URLs instead of downloading them.

Adding a GitHub URL enables the profile links; it does **not** implement an activity API. `Coding.jsx` deliberately displays no live contributions, solved-problem counts, or invented statistics. Update its progress copy with verified information or implement a real integration separately.

Certificate cards are placeholders and do not claim completion. No employment, institution name, certificate dates, or database technologies have been invented. Add a Database / API group to `skillGroups` only when you have actual technologies to list.

## Contact form behavior

- With no email configured: validates required fields and creates a copyable draft, clearly stating that nothing was sent.
- With an email configured: opens a prefilled `mailto:` draft in the visitor’s email app. The visitor must send it there. The copyable draft remains available as a fallback.
- The site stores and transmits no form data to a server. A visitor needs an email app to use `mailto:`. For direct delivery, add and test a form backend separately; never put secret API keys into frontend code.

## Design and animation

- Global colors and fonts: variables at the top of `src/styles.css`.
- Layout and card styling: named component sections in the stylesheet.
- Motion: `src/motion.css`, the base keyframes in `src/styles.css`, and `src/hooks/useMotion.js`.
- Cinematic light, the CSS 3D hero object, and project image sheen: `src/cinematic.css`. No GetLayers account, MCP connection, video, or 3D package is needed.
- Breakpoints: responsive section at the end of the stylesheet.
- Project previews: lightweight illustrative interfaces in `Projects.jsx`, explicitly labeled as concepts. Replace them with real screenshots when available.
- Fonts: DM Sans and Manrope from Google Fonts, with local sans-serif fallbacks if the network is unavailable.

Section reveals use IntersectionObserver and stop observing once revealed. Floating hero animations only run while the visual is in view. Magnetic motion and parallax apply only to fine pointers. Scroll effects are throttled with requestAnimationFrame and do not trigger React renders. Reduced-motion preferences disable animated movement, and content remains visible if motion is disabled. Native focus styles, labeled inputs, a skip link, and an Escape-dismissable mobile menu are included.

The motion update takes inspiration from the dimensional project cards and atmospheric hero at [the reference portfolio](https://portfolionext-js.netlify.app/#projects), while preserving this portfolio’s content, colors, and layout. It adds pointer-responsive card tilt with a decorative glowing pin, word-by-word headings, code-line entrances, a soft moving spotlight, pointer highlights on skill/certificate cards, button sheen, and a scroll-driven journey line. The thin top bar shows page reading progress. Project pins are decorative, not additional links. No new dependencies were added.

The later cinematic pass adds a slow-moving light field, a rotating CSS 3D cube and orbital rings beside the code visual, pointer-responsive depth on desktop, and a light sweep over project previews on hover. The scene pauses when out of view or when the page is hidden, and reduced-motion settings show a static version.

To tune the effects, change the tilt limits in `attachPointerEffect` in `useMotion.js`, word timing in `RevealText` in `UI.jsx`, and animation durations in `motion.css`. Hover-only effects use fine-pointer media queries; mobile keeps scroll entrances without requiring hover. Effects clean up on unmount and when motion or pointer preferences change. Focused cards become visible immediately for keyboard users.

To format after changes:

```sh
npm run format
```

## Verification

- Production build: passed (`npm run build`).
- Browser console: no warnings or errors during the reviewed flows.
- Viewport widths checked: 320, 390, 768, 1280, and 1440 pixels. A tablet overflow issue was corrected and rechecked.
- Mobile navigation opens, closes on selection, and dismisses with Escape.
- All internal anchor destinations exist; unknown external destinations are disabled placeholders.
- Contact form required-field validation, draft creation, and copy feedback were checked in the browser.
- Semantic headings, input labels, focus indicators, and reduced-motion handling were reviewed. This is not a formal accessibility certification.
- Motion uses CSS transforms/opacity and intersection observers, without an animation dependency or continuous JavaScript loop.
- Source is formatted with Prettier. Unused starter code and fabricated metrics were omitted.
- Actual resume downloads, certificate URLs, external social links, and email-app delivery cannot be verified until real values are supplied.

## Before sharing publicly

Add your real links and documents, confirm certificate details, verify every new external URL, and replace project concepts with real screenshots if desired. Update the title/description in `index.html` as needed. There is deliberately no invented canonical domain or social-preview image.
