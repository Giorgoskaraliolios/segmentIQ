# SegmentIQ - Customer Segmentation Analytics Platform

A professional SaaS marketing website for SegmentIQ, an AI-powered customer segmentation analytics platform.

## Overview

SegmentIQ helps businesses turn customer data into revenue-driving decisions through smart segmentation and actionable insights.

## Features

- **Homepage**: Hero section, features showcase, testimonials, and CTAs
- **About Page**: Company story, team profiles, values, and milestones
- **Features Page**: Detailed product capabilities and use cases
- **Pricing Page**: Three-tier pricing plans with comparison table
- **Demo Page**: Interactive product tour and use cases
- **Contact Page**: Contact form with validation and company information
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Beautiful design with Tailwind CSS

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS 3** for styling
- **React Router 7** for navigation
- **React Hook Form** for form validation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 20.10.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Giorgoskaraliolios/segmentIQ.git
   cd segmentIQ
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` (or the port shown in the terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
segmentiq/
├── src/
│   ├── components/
│   │   └── marketing/
│   │       ├── Navigation.tsx
│   │       └── Footer.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── FeaturesPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── DemoPage.tsx
│   │   └── ContactPage.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Pages

### Home (`/`)
- Hero section with value proposition
- Key features showcase
- Social proof and testimonials
- Pricing teaser
- Call-to-action sections

### About (`/about`)
- Company story and mission
- Team member profiles
- Core values
- Company milestones
- Press and recognition

### Features (`/features`)
- Segmentation & Analysis capabilities
- Strategic Decision Support tools
- Visualization & Insights features
- Action & Export functionality

### Pricing (`/pricing`)
- Three pricing tiers (Starter, Professional, Enterprise)
- Feature comparison table
- FAQ section
- Trust badges

### Demo (`/demo`)
- Interactive dashboard preview
- Product walkthrough
- Real-world use cases
- Video demonstration

### Contact (`/contact`)
- Contact form with validation
- Company contact information
- Office hours and location
- Live chat option

## Design System

### Colors
- Primary: Deep Blue (#1E40AF)
- Secondary: Vibrant Purple (#7C3AED)
- Accent: Teal (#14B8A6)

### Typography
- Headlines: Poppins (bold, 600-700 weight)
- Body: Inter (regular, 400 weight)

## License

ISC

## Author

Built with [Claude Code](https://claude.com/claude-code)
