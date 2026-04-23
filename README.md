# ProRevenue

ProRevenue is a modern, premium revenue-generation platform built with Next.js 15, TypeScript, and React. It consolidates multiple monetization strategies—such as affiliate marketing, e-commerce, ad placements, and premium content—into a single, highly optimized web application.

## 🚀 Features

- **Affiliate Marketing Hub**: Dashboard to browse 340+ affiliate programs with real-time tracking metrics (EPC, commission rates).
- **Digital E-Commerce Shop**: A seamless shopping experience with a globally integrated sliding cart.
- **Stripe Checkout Integration**: Secure payments for digital goods (courses, templates, tools) with instant delivery.
- **Ad RevOps Module**: Dedicated layouts optimized for display/native ad placements built with Core Web Vitals in mind.
- **Premium Blog**: Content monetization strategies incorporating SEO best practices, email list building, and featured posts.
- **Modern Responsive UI**: Built with CSS Modules in a stunning dark mode aesthetic, featuring interactive micro-animations and glowing glassmorphism effects.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with tailored CSS Variables & bespoke animations
- **Payments:** Stripe / `@stripe/stripe-js`
- **State Management:** React Context + `useReducer` + LocalStorage Hydration

## 🚦 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm installed.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables. The project uses mock keys for testing. In production, update `.env.local` to include your actual Stripe keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/`: Next.js App Router endpoints, including layout, globals, and all page components (`/shop`, `/blog`, `/affiliate`, `/about`, `/checkout/success`).
- `src/app/api/`: Edge-compatible Serverless API routes (e.g., Stripe Checkout integration).
- `src/components/`: Reusable, modular React components like `Navbar`, `Footer`, and `CartDrawer`.
- `src/context/`: React context providers (e.g., `CartContext`).
- `public/`: Static assets like the Hero image.

## 🎨 Design System

ProRevenue features a dynamic visual design heavily influenced by modern top-tier SaaS aesthetics. You'll find CSS animations throughout `globals.css` alongside customized scrolling interactions, premium typography pairings (Inter & Outfit), and highly optimized layouts across viewports.

---

*ProRevenue - Empowering anyone to build financial freedom online.*
