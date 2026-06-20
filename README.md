# AT-Management

A full-stack business management dashboard built with **Next.js** and **Supabase**.task tracking, client management, and financial deal monitoring in one place. UI is in Georgian (ქართული).

## Features

- **Dashboard** — KPI cards (total income, expenses, net profit), income/expense chart by month, recent tasks, and transaction list
- **Tasks** — Kanban board with four status columns: To Do, In Progress, Done, Cancelled. Assign tasks to team members, set priorities and due dates
- **Clients** — CRM table for managing business contacts with status tracking (active, inactive, archived)
- **Deals** — Financial transaction log with income/expense types, payment methods, and status (pending, paid, cancelled)
- **Auth** — Email/password login via Supabase Auth with cookie-based session management

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Actions, SSR)
- [React 19](https://react.dev)
- [Supabase](https://supabase.com) (PostgreSQL, Auth, Row-Level Security)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Recharts](https://recharts.org) — income/expense chart
- [Motion](https://motion.dev) — animations
- [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com)

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project

### Install

```bash
git clone https://github.com/4RN1/AT-Managment.git
cd AT-Managment
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<your-anon-key>
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected to `/login` if not authenticated.

## Project Structure

```
app/
  (auth)/login/       # Login page
  (dashboard)/        # Protected pages (layout with sidebar + navbar)
    page.js           # Main dashboard
    tasks/            # Task board
    clients/          # Client table
    deals/            # Financial deals table
action/
  ClientActions.js    # Generic CRUD server actions (get, add, edit, delete…)
  dashboardActions.js # Financial aggregates (income, expense, netIncome)
  logout.js           # Sign-out action
components/
  navigation/         # Sidebar, Navbar
  dashboard/          # StatCard, Priority, TransactionList
  tasks-page/         # Tasks board, modals, status dropdown
  client-page/        # Client table and modals
  deals-page/         # Deals table and modals
  Chart.jsx           # Recharts bar chart
  Calendar.jsx        # Date picker
utils/supabase/       # Browser, server, and middleware Supabase clients
```

## Database Tables

| Table | Key Columns |
|---|---|
| `profiles` | `id` (FK → auth.users), `name` |
| `tasks` | `id`, `title`, `description`, `priority`, `status`, `due_date`, `assigned_to`, `created_by` |
| `clients` | `id`, `name`, `company`, `industry`, `project`, `email`, `status` |
| `deals` | `id`, `amount`, `type` (income/expense), `status`, `payment_method`, `client_id` |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com). Import the repo, add the two environment variables, and deploy.
