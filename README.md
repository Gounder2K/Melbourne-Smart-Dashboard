# Melbourne Smart Dashboard

A full-stack web application to visualize real-time public data for Melbourne, Australia.

## Tech Stack
- **Frontend:** React (Next.js) + TypeScript + Tailwind CSS + React-Leaflet + Recharts
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL (planned)
- **Monorepo:** Custom (apps/frontend, apps/backend, packages/types)

## Features
- Weather, public transport, rental prices, and crime data visualizations
- Interactive map for crime data
- Responsive dashboard UI
- Search and filter by suburb

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Install dependencies

```bash
# Frontend
cd apps/frontend
npm install

# Backend
cd ../backend
npm install

# Shared types (if used as a package)
cd ../../packages/types
npm install
```

### Development

- Frontend: `npm run dev` in `apps/frontend`
- Backend: `npm run dev` (after TypeScript setup) in `apps/backend`

---

## Next Steps
- Set up Tailwind CSS in the frontend
- Add TypeScript to the backend
- Plan database schema
- Connect to public APIs 