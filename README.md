<div align="center">

# Shahani Meyen - Hospitality Portfolio

### First impressions. Lasting loyalty.

A modern, responsive portfolio created for **Shahani Thasneem Meyen**, presenting her guest-service experience, capabilities, career journey, and professional profile through a refined hospitality-inspired interface.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=06121f)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Responsive-D4AF37?style=for-the-badge&logo=css3&logoColor=white)](#responsive-experience)

[View Repository](https://github.com/AmjadAzward/ShahaniMeyen.github.io) · [Report an Issue](https://github.com/AmjadAzward/ShahaniMeyen.github.io/issues)

</div>

---

## About the Project

This portfolio translates hospitality values - warmth, confidence, attention to detail, and calm service - into a premium digital experience. It is intentionally more expressive than a conventional résumé while remaining easy for recruiters and hiring teams to scan.

The interface combines editorial typography, warm gold accents, subtle motion, layered depth, and concise content. Every section has been refined for both desktop and mobile viewing.

### Portfolio sections

- **Home** - a focused introduction with direct contact and CV actions.
- **About** - profile, service philosophy, and professional portrait.
- **Skills** - guest-service capabilities displayed through a modern card system.
- **Experience** - career history and education presented as a clear journey.
- **Services** - practical strengths Shahani brings to a hospitality team.
- **Contact** - direct email details and an accessible message composer.

---

## Design Direction

The visual language is inspired by boutique hotels, premium concierge service, and contemporary editorial portfolios.

| Token | Colour | Purpose |
| --- | --- | --- |
| Midnight | `#0A1128` | Immersive dark-mode foundation |
| Hospitality Gold | `#D4AF37` | Primary accent and interactive emphasis |
| Warm Gold | `#F0C674` | Gradient highlights and soft illumination |
| Ivory | `#FAF9F6` | Calm light-mode background |
| Charcoal | `#1A1A1A` | Strong light-mode headings |

Typography uses four complementary roles:

- **Sora** for confident display headings.
- **Manrope** for readable interface and body copy.
- **Newsreader** for selective editorial character.
- **Space Mono** for labels, indexes, and technical details.

---

## Key Features

- **Midnight and ivory themes** with remembered user preference.
- **Responsive layouts** designed for desktop, tablet, and mobile.
- **Full-screen mobile navigation** with numbered links and a dedicated close control.
- **Hospitality-focused 3D hero artwork** and professional profile photography.
- **Subtle scroll reveals, hover states, glow, and depth effects.**
- **Modern capability cards** instead of generic percentage-based skill bars.
- **Downloadable CV** served directly from the public assets folder.
- **Functional contact form** that prepares a pre-filled email draft.
- **Keyboard-friendly interactions**, visible labels, semantic sections, and reduced-motion support.
- **SEO and social metadata** for a professional public presence.

---

## Technology Stack

| Layer | Technology |
| --- | --- |
| Application shell | React 18 |
| Development and bundling | Vite 8 |
| Main portfolio document | Semantic HTML, modern CSS, and vanilla JavaScript |
| Styling foundation | Tailwind CSS plus portfolio-specific CSS variables |
| Icons and artwork | Inline SVG and optimized image assets |
| Code quality | ESLint and TypeScript checking through `jsconfig.json` |

### Architecture note

The React application intentionally stays lightweight. [`src/pages/Home.jsx`](./src/pages/Home.jsx) imports [`src/portfolio.html`](./src/portfolio.html) as raw text and renders it inside a full-viewport `iframe` using `srcDoc`. This keeps the portfolio experience self-contained while still using Vite for local development and production output.

`src/portfolio.html` is the primary portfolio document used by the React application. The root [`portfolio.html`](./portfolio.html) is maintained as a standalone mirror/reference.

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── hospitality-hero.png   # 3D hospitality hero artwork
│   ├── profile.jpeg           # About-section portrait
│   └── ShahaniCV.pdf          # Downloadable résumé
├── src/
│   ├── pages/
│   │   └── Home.jsx           # Loads the portfolio document
│   ├── components/            # Reusable UI primitives
│   ├── portfolio.html         # Main portfolio markup, styles, and interactions
│   ├── App.jsx                # Application entry component
│   ├── main.jsx               # React DOM bootstrap
│   └── index.css              # Tailwind layers and shared tokens
├── portfolio.html             # Standalone portfolio mirror
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and project scripts
└── README.md                  # Project documentation
```

---

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) - a current LTS release is recommended.
- npm - included with Node.js.
- Git - required only when cloning the repository.

### 1. Clone the repository

```bash
git clone https://github.com/AmjadAzward/ShahaniMeyen.github.io.git
cd ShahaniMeyen.github.io
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, normally:

```text
http://localhost:5173
```

Vite automatically refreshes the browser as source files change.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Vite development server. |
| `npm run lint` | Runs ESLint and reports code-quality problems. |
| `npm run lint:fix` | Automatically fixes supported ESLint issues. |
| `npm run typecheck` | Checks the JavaScript project using TypeScript. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for final review. |

Recommended verification before publishing:

```bash
npm run lint
npm run typecheck
npm run build
```

---

## Customization Guide

### Update portfolio content

Edit [`src/portfolio.html`](./src/portfolio.html). The document contains the section markup, visual styles, themes, and page interactions in one place.

### Replace the profile photograph

Replace `public/profile.jpeg` with a new image using the same filename, or update the image path inside `src/portfolio.html`.

For the best crop, use a high-resolution vertical portrait with the subject centred.

### Replace the CV

Replace `public/ShahaniCV.pdf` while preserving the filename. The Home section’s **Download CV** button will continue working without further changes.

### Update the 3D hero artwork

Replace `public/hospitality-hero.png` with a transparent PNG or update its source path in the Home section.

### Change colours or typography

Theme values live near the top of `src/portfolio.html` as CSS custom properties. Update the `midnight` and `ivory` token groups to adjust backgrounds, text, accents, gradients, glass borders, and shadows consistently.

### Update contact details

Search `src/portfolio.html` for `shahani.meyen@gmail.com`. Update both the visible email link and the email destination used by the contact form.

> [!IMPORTANT]
> Never commit private credentials or API keys. Keep local-only environment values inside `.env.local`.

---

## Responsive Experience

The interface adapts across three broad layout ranges:

- **Desktop** - two-column hero, editorial layouts, and floating navigation.
- **Tablet** - simplified grids, resized artwork, and stacked content where necessary.
- **Mobile** - compact typography, content-first About layout, full-screen navigation, single-column cards, and touch-friendly controls.

Motion respects the user’s `prefers-reduced-motion` setting, and interactive controls maintain practical touch sizes.

---

## Production and Deployment

Create a production-ready build with:

```bash
npm run build
```

Preview the generated output locally:

```bash
npm run preview
```

The optimized site is written to `dist/`. Deploy that directory to a static hosting service such as GitHub Pages, Netlify, Cloudflare Pages, or Vercel.

Before publishing, verify:

1. Navigation works at desktop and mobile widths.
2. Both themes remain readable.
3. The CV opens correctly.
4. The email form prepares the expected draft.
5. Images load from the deployed public path.

---

## Contributing

Focused improvements are welcome.

1. Create a new branch.
2. Make and test the change.
3. Run linting and type checks.
4. Open a pull request with a concise explanation and screenshots for visual changes.

Please preserve the existing hospitality aesthetic, responsive behaviour, accessibility considerations, and concise portfolio content.

---

<div align="center">

---

Made with care, clarity, and a warm welcome.

</div>
