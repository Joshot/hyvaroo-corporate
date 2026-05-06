# Hyvaroo Corporate

> Premium company profile website for **Hyvaroo Labs** — a technology-focused software house.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Database-3FCF8E?logo=supabase)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## ✨ Features

- 🎨 **Ultra-clean, minimal design** — inspired by Stripe, Vercel, Linear
- 🌙 **Dark/Light mode** toggle with smooth transitions
- 📱 **Fully responsive** across all devices
- ⚡ **Smooth animations** — section fade-in, hover effects, glow buttons
- 📬 **Contact form with Supabase** — messages saved to database
- 🔍 **SEO friendly** — full meta tags, Open Graph, Twitter cards
- 🚀 **Production ready** — TypeScript, clean architecture

## 📋 Sections

1. **Hero** — Headline, subheadline, CTA buttons, stats
2. **Services** — Web Dev, Frontend, UI/UX, Performance
3. **Portfolio** — 4 project showcase cards
4. **About** — Company description + stats grid
5. **Why Choose Us** — 4 value propositions
6. **Testimonials** — 3 client reviews
7. **CTA** — Call-to-action banner
8. **Contact** — Form connected to Supabase
9. **Footer** — Links, socials, email

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Joshot/hyvaroo-corporate.git
cd hyvaroo-corporate
npm install
```

### 2. Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the migration:

```sql
-- from: supabase/migrations/001_create_contact_messages.sql
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON public.contact_messages FOR INSERT WITH CHECK (true);
```

3. Copy your **Project URL** and **anon key** from Settings → API

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Joshot/hyvaroo-corporate)

1. Click the button above or go to [vercel.com](https://vercel.com)
2. Import the repository
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#0A0F1C` (Deep Navy) |
| White | `#FFFFFF` |
| Accent | `#4F8CFF → #8A5CFF` (Gradient) |
| Soft Gray | `#F1F5F9` |

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 3.4
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Icons**: Lucide React
- **Theme**: next-themes

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts  # Contact form API
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── WhyUs.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
└── lib/
    └── supabase.ts
supabase/
└── migrations/
    └── 001_create_contact_messages.sql
```

## 📧 Contact

**Hyvaroo Labs** · [hello@hyvaroolabs.com](mailto:hello@hyvaroolabs.com)
