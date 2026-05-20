# Innovate Solutions — Company Profile Template

A clean, modern **company profile / landing page** template built with React, Vite, Tailwind CSS v4, and shadcn/ui components. Ready to clone, customize, and deploy.

![Preview](https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?w=1200&q=80)

## ✨ Features

- **Fully responsive** — mobile-first design with a hamburger menu
- **Smooth scroll navigation** — header links scroll to sections
- **7 pre-built sections** — Hero, About, Stats, Services, Portfolio, Team, Contact
- **Working contact form** — with loading state and success feedback
- **Dark mode ready** — CSS variables wired for light/dark themes
- **Accessible** — semantic HTML, ARIA labels, keyboard-navigable
- **Zero backend required** — pure frontend, easy to extend

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 6 |
| Tailwind CSS | 4 |
| shadcn/ui (Radix UI) | latest |
| Lucide React | latest |
| TypeScript | ✓ |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Root layout + footer
│   └── components/
│       ├── Header.tsx           # Sticky nav with mobile menu
│       ├── HeroSection.tsx      # Hero with CTA buttons
│       ├── AboutSection.tsx     # Mission / Vision / Values
│       ├── StatsSection.tsx     # Key metrics banner
│       ├── ServicesSection.tsx  # Service cards
│       ├── PortfolioSection.tsx # Project grid with hover overlay
│       ├── TeamSection.tsx      # Team cards with social links
│       ├── ContactSection.tsx   # Contact info + form
│       └── ui/                  # shadcn/ui primitives
├── styles/
│   ├── globals.css              # CSS variables & base styles
│   └── index.css                # Tailwind entry
└── main.tsx
```

## 🎨 Customization

### 1. Brand & Colors

Edit `src/styles/globals.css` to change the color palette:

```css
:root {
  --primary: #030213;          /* Main brand color */
  --background: #ffffff;       /* Page background */
  --muted-foreground: #717182; /* Subtle text */
}
```

### 2. Content

Each section has its data defined at the top of the file as a plain array/object — no CMS needed. Just edit the values:

- **Company name / tagline** → `HeroSection.tsx`, `Header.tsx`, `App.tsx`
- **Services** → `ServicesSection.tsx` → `services` array
- **Portfolio projects** → `PortfolioSection.tsx` → `projects` array
- **Team members** → `TeamSection.tsx` → `teamMembers` array
- **Contact details** → `ContactSection.tsx` → `contactInfo` array

### 3. Contact Form

The form currently simulates a submission. To wire it to a real backend, replace the `setTimeout` in `ContactSection.tsx` with your API call (e.g., Formspree, EmailJS, or your own endpoint).

## 📄 License

MIT — free to use for personal and commercial projects.

---

Made with ❤️ using [React](https://react.dev) + [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
