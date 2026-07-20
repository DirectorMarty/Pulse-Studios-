# Pulse Studios™ — 2026

**Built by real people, real work, real passion.**  
Everything here is hand‑made, thought out, and crafted with intention. No shortcuts, no auto‑generated noise. Just us, creating what feels right.

## 📋 Platform Overview

A complete, modern, handcrafted digital platform featuring **15 integrated systems**:

### Core Systems
1. **Dashboard** — Metrics, activity, quick stats
2. **AI Assistant** — Full chat with history & personality
3. **Shop System** — Browse, cart, checkout, subscriptions
4. **Discord Integration** — OAuth, roles, verification
5. **Subscriptions** — Plans, billing, management
6. **Support System** — Tickets, categories, Discord sync
7. **Blogs** — Articles, tags, author profiles
8. **Account Settings** — Profile, security, connections
9. **Admin Panel** — Product, blog, user management
10. **Marketing Tools** — Banners, promos, referrals
11. **Community Features** — Profiles, activity, comments
12. **Policies & Notifications** — Terms, privacy, preferences
13. **Footer** — Branding, links, newsletter
14. **Store Tabs** — Categories, featured, trending
15. **Security** — Sessions, devices, login history

---

## 🗂️ Project Structure

```
Pulse-Studios-/
├── frontend/                    # React 18 + TypeScript
│   ├── public/
│   │   └── assets/
│   │       ├── logos/           # Editable SVG logos
│   │       ├── icons/           # Icon library
│   │       └── illustrations/
│   ├── src/
│   │   ├── components/          # 50+ UI components
│   │   ├── pages/               # All 15 systems as pages
│   │   ├── layouts/             # Layout wrappers
│   │   ├── hooks/               # Custom React hooks
│   │   ├── context/             # Global state
│   │   ├── utils/               # Utilities
│   │   ├── services/            # API services
│   │   ├── types/               # TypeScript types
│   │   ├── brand/               # Branding system (EDITABLE)
│   │   ├── styles/              # Global styles
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── vite.config.ts
│   └── .env.example
│
├── backend/                     # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── config/              # Config files
│   │   ├── models/              # MongoDB schemas (15 models)
│   │   ├── routes/              # API routes
│   │   ├── services/            # Business logic
│   │   ├── middleware/          # Auth, validation
│   │   ├── controllers/         # Request handlers
│   │   ├── types/               # TypeScript types
│   │   ├── utils/               # Utilities
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── docs/
│   ├── BRANDING.md              # Branding system
│   ├── API.md                   # API documentation
│   ├── SETUP.md                 # Setup guide
│   ├── ARCHITECTURE.md          # Architecture
│   └── DEPLOYMENT.md            # Deployment
│
├── package.json
└── README.md
```

---

## 🎨 Branding System (Fully Editable)

Located in `/frontend/src/brand/`:

- **colors.ts** — Primary, accent, backgrounds, text
- **typography.ts** — Font families, sizes, weights
- **spacing.ts** — Consistent 4px grid
- **components.ts** — Component defaults
- **themes.ts** — Light/dark mode

All **logos and icons** are SVG-based and editable:
- `/public/assets/logos/` — Brand logos (primary, secondary, icon, favicon)
- `/public/assets/icons/` — Icon library (60+ icons across all systems)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Git

### Installation

```bash
git clone https://github.com/DirectorMarty/Pulse-Studios-.git
cd Pulse-Studios-

# Install dependencies
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Setup environment
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start development
npm run dev
```

Access:
- Frontend: http://localhost:5173
- API: http://localhost:5000
- Admin: http://localhost:5173/admin

---

## 📚 Full System Documentation

See `/docs/` for complete guides:
- **[BRANDING.md](./docs/BRANDING.md)** — Customization guide
- **[API.md](./docs/API.md)** — API endpoints
- **[SETUP.md](./docs/SETUP.md)** — Full setup
- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** — System design
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** — Production

---

## 🛠️ Tech Stack

**Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Zustand, Axios, React Router, Framer Motion

**Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, Stripe, Discord.js, OpenAI

---

## © 2026 Pulse Studios™

Built with intention. Crafted with care. No shortcuts.
