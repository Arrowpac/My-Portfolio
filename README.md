<div align="center">

# ✦ My Portfolio

### Designing for the people who use it.

The personal portfolio site of **Shaurya Malik** — a CS student at Scaler School of Technology, Bengaluru, built with React, Vite, and Tailwind CSS, and animated end‑to‑end with Framer Motion.

[**View Live Site →**](https://my-portfolio-blue-seven-72.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?style=flat-square&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-Unlicensed-lightgrey?style=flat-square)

</div>

---

## 📖 Overview

This repository powers a single‑page portfolio site — a fast, animated, one‑page scroll experience that introduces who Shaurya is, what he can do, what he's built, and how to get in touch. It's built on **Vite + React 19**, styled with a fully custom **Tailwind CSS v4** theme, and brought to life with **Framer Motion** scroll‑triggered animations throughout. React Router is already wired in to support per‑project case‑study pages as the site grows.

## ✨ Features

- **One‑page scroll layout** with a sticky, blur‑on‑scroll navbar and a smooth, animated mobile menu
- **Scroll‑triggered animations** (fade‑ups, staggered lists, floating blobs) powered by Framer Motion
- **Live project showcase** — each project card links out to its live deployment and GitHub repo
- **"Beyond the Code" section** surfacing education, LeetCode stats, and featured LinkedIn posts
- **Working contact form** wired to [Formspree](https://formspree.io/), with inline success/error states
- **Custom design system** — colors, fonts, and shadows defined once as Tailwind v4 theme tokens
- **Routing scaffolded** for future project case‑study detail pages (`/projects/:slug`)
- Fully responsive across mobile, tablet, and desktop

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| UI Library | [React 19](https://react.dev/) |
| Build Tool | [Vite 7](https://vite.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Animation | [Framer Motion 12](https://motion.dev/) |
| Routing | [React Router DOM 7](https://reactrouter.com/) |
| Forms | [Formspree](https://formspree.io/) |
| Linting | [ESLint 9](https://eslint.org/) + `eslint-plugin-react-hooks` / `react-refresh` |
| Fonts | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [DM Mono](https://fonts.google.com/specimen/DM+Mono) |
| Deployment | [Vercel](https://vercel.com/) |

## 🎨 Design System

The entire visual language is defined once in `src/index.css` using Tailwind v4's `@theme` directive, so colors and fonts stay consistent across every component.

| Token | Hex | Swatch |
|---|---|---|
| `--color-bg` (background) | `#FAF8F5` | ![swatch](https://img.shields.io/badge/-%20-FAF8F5?style=flat-square) |
| `--color-surface` | `#F2EDE8` | ![swatch](https://img.shields.io/badge/-%20-F2EDE8?style=flat-square) |
| `--color-lavender` (accent) | `#C9B8E8` | ![swatch](https://img.shields.io/badge/-%20-C9B8E8?style=flat-square) |
| `--color-blush` (accent) | `#F2C4CE` | ![swatch](https://img.shields.io/badge/-%20-F2C4CE?style=flat-square) |
| `--color-sage` (accent) | `#B8D8C9` | ![swatch](https://img.shields.io/badge/-%20-B8D8C9?style=flat-square) |
| `--color-ink` (text) | `#2D2D2D` | ![swatch](https://img.shields.io/badge/-%20-2D2D2D?style=flat-square) |
| `--color-muted` (text) | `#7A7470` | ![swatch](https://img.shields.io/badge/-%20-7A7470?style=flat-square) |
| `--color-border` | `#E4DDD6` | ![swatch](https://img.shields.io/badge/-%20-E4DDD6?style=flat-square) |

**Typography:** `Cormorant Garamond` for display headings, `DM Sans` for body copy, and `DM Mono` for labels, tags, and eyebrow text — giving the site an editorial, slightly literary feel against its warm, neutral palette.

## 🧭 Sections at a Glance

| # | Section | Component | What it does |
|---|---|---|---|
| 1 | Navigation | `NavBar.jsx` | Sticky navbar that blurs on scroll, with smooth in‑page links and an animated mobile menu |
| 2 | Hero | `Hero.jsx` | Full‑viewport intro with animated gradient blobs, headline, CTAs, and a quick stats strip |
| 3 | About | `About.jsx` | Bio, profile photo, and a row of status badges |
| 4 | Skills | `Skills.jsx` | Three‑column matrix — *Code*, *Writing*, *Mindset* — each skill rated by proficiency |
| 5 | Projects | `Projects.jsx` | Showcase of shipped projects, each with live‑site and GitHub links |
| 6 | Beyond the Code | `LinkedInHighlights.jsx` | Education, LeetCode stats, and featured LinkedIn posts |
| 7 | Contact | `Contact.jsx` | Formspree‑powered contact form plus direct email/LinkedIn links |
| 8 | Footer | `Footer.jsx` | Closing credits and social links |

### Featured projects shown in the portfolio

| Project | Stack | Live | Repo |
|---|---|---|---|
| Recipe Finder | React · Node.js · Tailwind | [Live](https://recipe-finder-amber-gamma.vercel.app/) | [GitHub](https://github.com/Arrowpac/Recipe-Finder) |
| Movie Explorer | React · Node.js · Tailwind | [Live](https://movie-explorer-726.vercel.app/) | [GitHub](https://github.com/Arrowpac/Movie-Explorer) |
| Task Manager | HTML · CSS · JavaScript | [Live](https://arrowpac.github.io/Habit-Tracker/) | [GitHub](https://github.com/Arrowpac/Habit-Tracker) |

## 📁 Project Structure

```
My-Portfolio/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── assets/                  # images used across the site
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── LinkedInHighlights.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx      # reserved for future reusable project cards
│   ├── pages/
│   │   ├── Home.jsx             # assembles all sections into the one‑pager
│   │   └── CaseStudy.jsx        # placeholder for /projects/:slug detail pages
│   ├── App.jsx                  # route definitions
│   ├── main.jsx                 # app entry point
│   ├── App.css
│   └── index.css                # Tailwind import + theme tokens
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/Arrowpac/My-Portfolio.git
cd My-Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL Vite prints in your terminal (typically `http://localhost:5173`).

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite dev server with hot module reload |
| `npm run build` | Builds an optimized production bundle to `dist/` |
| `npm run preview` | Serves the production build locally for a final check |
| `npm run lint` | Runs ESLint across the project |

## 🧞 Making This Your Own

This project doubles as a clean, reusable starting point. To re‑purpose it:

1. **Identity & copy** — update the headline, subtitle, and bio text in `Hero.jsx` and `About.jsx`, and swap `src/assets/shaurya.jpg` for your own photo.
2. **Skills** — edit the `skillColumns` array in `Skills.jsx`.
3. **Projects** — edit the `projects` array in `Projects.jsx` (name, description, tags, live/GitHub links).
4. **Beyond the Code** — update `education`, `featuredPosts`, and `stats` in `LinkedInHighlights.jsx`.
5. **Contact form** — replace the Formspree endpoint in `Contact.jsx` (`https://formspree.io/f/...`) with your own form ID, and update the email/LinkedIn links in `Contact.jsx` and `Footer.jsx`.
6. **Colors & fonts** — adjust the tokens inside the `@theme` block in `src/index.css`, and update the Google Fonts `<link>` in `index.html` to match.

## 🗺️ Roadmap

- [ ] Flesh out `CaseStudy.jsx` into a full per‑project detail page
- [ ] Implement `ProjectCard.jsx` as a reusable card component for `Projects.jsx`
- [ ] Add a dark mode variant of the theme
- [ ] Add unit/integration tests for the contact form flow

## 📬 Contact

- **Email:** [shauryamalik2025@gmail.com](mailto:shauryamalik2025@gmail.com)
- **LinkedIn:** [linkedin.com/in/shaurya-malik7](https://www.linkedin.com/in/shaurya-malik7/)
- **LeetCode:** [leetcode.com/u/Shaurya726](https://leetcode.com/u/Shaurya726/)
- **GitHub:** [@Arrowpac](https://github.com/Arrowpac)

## 📄 License

This repository currently has no license file, which means default copyright applies and the code is **not** licensed for reuse. If you'd like to use this as a template, please reach out first or add a license (e.g. [MIT](https://choosealicense.com/licenses/mit/)) to clarify usage terms.

---

<div align="center">
<sub>Designed & built by Shaurya Malik · © 2026</sub>
</div>
