# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application dedicated to preserving the legacy of Father Diego Fares SJ. It features a biographical section, document archive, liturgical calendar, and interactive chat functionality. The project uses the App Router architecture with TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Development Commands

- **Development server**: `pnpm dev` or `npm run dev`
- **Build production**: `pnpm build` or `npm run build`
- **Start production**: `pnpm start` or `npm run start`
- **Linting**: `pnpm lint` or `npm run lint`

## Architecture & Structure

### Key Directories
- `app/` - Next.js App Router pages and layouts
  - `biografia/` - Biography section with dedicated page
  - `documentos/` - Documents archive with dedicated page
- `components/` - React components
  - `ui/` - shadcn/ui component library (50+ pre-built components)
  - Custom components: `header.tsx`, `footer.tsx`, `liturgical-calendar.tsx`, `chat-section.tsx`
- `lib/` - Utility functions (`utils.ts` with clsx/tailwind-merge)
- `hooks/` - Custom React hooks (`use-mobile.ts`, `use-toast.ts`)
- `styles/` - Global CSS and Tailwind configuration

### Technology Stack
- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS, uses Geist font family
- **UI Components**: Complete shadcn/ui library with Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics integration
- **Theme**: Next-themes for dark/light mode support

### Component Architecture
- Uses shadcn/ui "new-york" style with neutral base color
- Path aliases configured: `@/components`, `@/lib`, `@/hooks`, `@/ui`
- Components follow modern React patterns with TypeScript
- Mobile-responsive design with Tailwind breakpoints

### Build Configuration
- ESLint and TypeScript errors are ignored during builds (development setup)
- Images are unoptimized for deployment flexibility
- Uses pnpm for package management

## Content Structure

The application focuses on Father Diego Fares SJ with:
- Hero section with video testimonial
- Biography page (`app/biografia/page.tsx`)
- Documents archive (`app/documentos/page.tsx`)
- Liturgical calendar component
- Interactive chat section
- Footer with spiritual content

## Development Notes

- All UI components are pre-built using shadcn/ui - prefer using existing components over creating new ones
- The project uses Tailwind CSS v4 with CSS variables for theming
- Form validation uses Zod schemas with React Hook Form
- Mobile responsiveness is handled through Tailwind's responsive utilities
- The codebase follows TypeScript strict mode settings