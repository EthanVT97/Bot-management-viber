# ViberBotControl - Complete SaaS Platform

A production-ready SaaS platform to manage and broadcast messages via verified Viber Bots. Built with a modern full-stack architecture for performance, scalability, and developer agility.

---

## 🏗️ Architecture Overview

**Frontend**: [Next.js 14 (App Router)](https://nextjs.org/docs/app) + [TailwindCSS](https://tailwindcss.com) + [SWR](https://swr.vercel.app/)  
**Backend**: [NestJS](https://nestjs.com) + [Prisma ORM](https://www.prisma.io/) + Axios  
**Database**: Supabase PostgreSQL (hosted)  
**Deployment**: Vercel (Frontend) + Render (Backend)

---

## 📁 Project Structure

viber-bot-control/ ├── frontend/                 # Next.js 14 App (admin panel, auth, dashboard) ├── backend/                  # NestJS API (Viber bot engine, auth, analytics) ├── database/                 # Prisma schema & migration logic ├── deployment/               # Docker, CI/CD, env configs └── docs/                     # System documentation, API references

---

## 🚀 Key Features

- ✅ **Verified Viber Bot Support**  
- 📲 **Message Broadcasting Engine** (bulk, scheduled, targeted)
- 👤 **User Role Management** (Admin, Bot Manager, Viewer)
- 💬 **Real-Time Chat Logs + Webhook Capture**
- 📊 **Analytics & Message Insights** (delivered, seen, failed)
- 📁 **Content Management System** (media, templates, variables)
- 🔐 **Auth & Permissions** (JWT + Supabase Integration)
- 📦 **Multi-Tenant Ready** (SaaS-optimized DB schema)
- 🔌 **API-First Design** (REST endpoints for automation)

---

## 🔧 Local Development

### Prerequisites

- Node.js ≥ 18.x
- Docker (for database)
- Supabase project setup
- Vercel + Render accounts (for deployment)

### Setup Instructions

```bash
# 1. Clone repo
git clone https://github.com/your-org/viber-bot-control.git
cd viber-bot-control

# 2. Install frontend dependencies
cd frontend
pnpm install

# 3. Install backend dependencies
cd ../backend
pnpm install

# 4. Setup .env for backend (Refer to /deployment/backend.example.env)

# 5. Start local dev
pnpm dev  # For both frontend and backend (run in separate terminals)


---

⚙️ Deployment Workflow

Component	Platform	Method

Frontend	Vercel	Git-integrated
Backend	Render	Docker deploy
Database	Supabase	Hosted PostgreSQL


All secrets and environment variables should be configured in the respective dashboard.


---

📌 Security Notes

All webhook endpoints are authenticated using bot tokens and verified IPs

Admin panel protected via JWT-based session tokens

Rate limiting and abuse detection integrated at API layer

Scoped access controls for bot managers and operators



---

🧩 Integrations

Viber Public Account API

Supabase Auth + PostgreSQL

Axios for outgoing HTTP requests

Stripe/LicenseKey (optional SaaS tiering)



---

📄 License

This project is licensed under MIT. See LICENSE.md for details.


---

🤝 Contributing

Open to PRs, feature requests, and forks. Please check out /docs/contributing.md before submitting.


---

📬 Contact

For support or business inquiries:
📧 info@ygnb2b.com
🌐 ygnb2b.com
