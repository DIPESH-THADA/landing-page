# Light Nation Church — Modern Website

A premium, fully responsive church landing page built with **HTML5, TypeScript, SCSS, and Webpack**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm start

# Build for production
npm run build
```

The dev server runs at: **http://localhost:3000**

Production output goes to the `/dist` folder.

---

## 📁 Project Structure

```
lightnation/
├── src/
│   ├── index.html          # Main HTML template
│   ├── assets/
│   │   └── images/         # All church photos
│   ├── scss/
│   │   ├── main.scss       # SCSS entry point
│   │   ├── _variables.scss # CSS design tokens + theme vars
│   │   ├── _base.scss      # Reset, typography, buttons
│   │   ├── _navbar.scss    # Navigation + mobile menu
│   │   ├── _hero.scss      # Full-screen hero section
│   │   ├── _about.scss     # About, Services, Ministries, Sermons
│   │   ├── _verse-banner.scss
│   │   ├── _events.scss    # Upcoming events + countdown timers
│   │   ├── _stats.scss     # Animated statistics counter
│   │   ├── _donation.scss  # Giving/donation section
│   │   ├── _testimonials.scss
│   │   ├── _gallery.scss   # Gallery + Branches + Contact + Footer
│   │   ├── _utilities.scss # Back to top, toast, scroll reveal
│   │   └── _animations.scss
│   └── ts/
│       └── main.ts         # All TypeScript interactivity
├── webpack.config.js
├── tsconfig.json
└── package.json
```

---

## ✨ Features

- 🌙 **Dark / Light Theme Toggle** — saved to localStorage
- 🎨 **Orange & Black brand design** (matching Light Nation reference)
- 📱 **Fully Responsive** — mobile-first design
- ⚡ **Animated Hero** — zoom background + floating particles
- 🔢 **Statistics Counters** — animated on scroll
- ⏱️ **Live Event Countdowns** — real-time timers
- 🖼️ **Image Gallery Lightbox** — keyboard navigable
- 🎥 **Video Modal** — embedded sermon player
- 💬 **Testimonials Slider** — auto-play carousel
- 💳 **Donation Widget** — amount selector + custom input
- 📬 **Contact Form** — with success state
- 🔍 **Scroll Reveal Animations**
- 🔝 **Back to Top Button**
- 📧 **Newsletter Signup**
- 🍔 **Hamburger Mobile Menu**
- ♿ **Accessible** — ARIA labels, semantic HTML

---

## 🎨 Customization

### Colors
Edit `src/scss/_variables.scss`:
```scss
--accent: #E85C1A;       // Main brand orange
--accent-light: #FF7A3D; // Hover states
```

### Fonts
Update the Google Fonts link in `src/index.html` and font variables in `_variables.scss`.

### Images
Replace images in `src/assets/images/` — same filenames.

### Content
Edit text directly in `src/index.html`.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| TypeScript | Type-safe interactivity |
| SCSS | Modular styling |
| Webpack 5 | Bundling + optimization |
| CSS Custom Properties | Theme switching |
| Intersection Observer | Scroll animations |

---

## 📦 Production Build

```bash
npm run build
```

Outputs optimized files to `/dist`:
- Minified CSS
- Minified + tree-shaken JS
- Compressed images
- Optimized HTML

Deploy the `/dist` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

---

*Built with faith & purpose for Light Nation Church* ✦
