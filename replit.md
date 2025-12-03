# DeSuite - Stablecoin and Tokenization Layer for Oracle ERP

## Overview

DeSuite is a marketing/landing page application for an enterprise Web3 infrastructure product that bridges Oracle ERP systems with blockchain networks. The application showcases how organizations can integrate stablecoin payments and asset tokenization into their existing Oracle workflows without disrupting operations.

The project is a full-stack TypeScript application with a React frontend and Express backend, designed to capture demo requests from potential enterprise customers interested in Web3 ERP integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture

**UI Component System**
- Shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Framer Motion for animations and transitions
- Design follows Stripe/Bridge-inspired aesthetic with gradient animations and premium feel

**State Management**
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling
- Local component state for UI interactions

**Typography & Design System**
- Inter font family for body text
- Space Grotesk for display headings
- JetBrains Mono for code snippets
- Custom CSS variables for theming with light/dark mode support
- Consistent spacing primitives using Tailwind's spacing scale

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- HTTP server without WebSocket support
- Middleware-based request processing
- JSON request/response handling with raw body capture for webhooks

**API Design**
- RESTful API endpoints under `/api` prefix
- Two main endpoints:
  - `POST /api/demo-requests` - Submit new demo requests
  - `GET /api/demo-requests` - Retrieve all demo requests
- Zod schema validation on API requests
- Structured error responses with validation feedback

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage`) for demo requests and users
- Interface-based storage abstraction (`IStorage`) for future database migration
- Drizzle ORM configured for PostgreSQL but not actively used
- Data models defined in shared schema with Drizzle and Zod

**Development vs Production**
- Development: Vite dev server with HMR via middleware mode
- Production: Serves pre-built static files from `dist/public`
- Single build script bundles both client and server code

### Database Schema

**Configured (Not Active)**
- PostgreSQL via Neon serverless driver
- Two tables defined:
  - `users`: Basic authentication structure (id, username, password)
  - `demo_requests`: Lead capture (id, name, email, company, use_case, created_at)
- Schema defined with Drizzle ORM in `shared/schema.ts`
- Validation schemas generated via `drizzle-zod`

**Current Implementation**
- Data stored in-memory using Maps
- UUIDs generated via crypto module for IDs
- No persistence between server restarts

### External Dependencies

**UI Component Libraries**
- Radix UI: Headless accessible components (dialogs, dropdowns, accordions, etc.)
- Lucide React: Icon library
- Framer Motion: Animation library
- Embla Carousel: Carousel functionality

**Form & Validation**
- React Hook Form: Form state management
- Zod: Runtime type validation
- @hookform/resolvers: Zod integration with React Hook Form

**Database & ORM** (Configured but not active)
- @neondatabase/serverless: PostgreSQL client for Neon
- Drizzle ORM: Type-safe SQL query builder
- drizzle-kit: Schema management and migrations

**Development Tools**
- @replit/vite-plugin-runtime-error-modal: Error overlay
- @replit/vite-plugin-cartographer: Replit integration
- @replit/vite-plugin-dev-banner: Development banner

**Build & Tooling**
- esbuild: Server-side bundling with selective dependency bundling
- TypeScript: Type checking across client, server, and shared code
- PostCSS with Tailwind CSS and Autoprefixer
- Path aliases configured for clean imports (@/, @shared/, @assets/)

**Session Management** (Dependencies present but not implemented)
- express-session
- connect-pg-simple
- Passport.js for authentication strategy

**Fonts**
- Google Fonts CDN: Inter, Space Grotesk, JetBrains Mono
- Loaded via HTML link tags in index.html