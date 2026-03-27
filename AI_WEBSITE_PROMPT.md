# Complete Website Build Prompt - Professional Business Advisory Website

## Project Overview
Build a modern, professional multi-page business website for a financial advisory firm with a focus on clean design, smooth animations, and excellent user experience. The website should be fully responsive, SEO-friendly, and built with React + TypeScript + Vite + Tailwind CSS.

---

## Tech Stack Requirements

### Core Technologies
- **Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 8.0+
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **Routing**: React Router DOM 6.30+
- **Animations**: Framer Motion 12.38+
- **UI Components**: Radix UI primitives + shadcn/ui components
- **State Management**: TanStack Query (React Query) 5.83+
- **Form Handling**: React Hook Form 7.61+ with Zod validation
- **Icons**: Lucide React 0.462+
- **Notifications**: Sonner (toast notifications)

### Additional Libraries
- `class-variance-authority` for component variants
- `tailwind-merge` and `clsx` for className management
- `tailwindcss-animate` for animations
- `date-fns` for date formatting
- `embla-carousel-react` for carousels

---

## Design System & Brand Identity

### Color Palette (CSS Variables in HSL)
```css
--primary: 218 79% 19%        /* Navy Blue #09285A - Main brand color */
--secondary: 172 72% 63%      /* Aqua #5EE4CF - Accent color */
--accent: 144 96% 38%         /* Emerald Green #03C359 - Success/CTA */
--muted-blue: 196 33% 44%     /* Muted Blue #4B8697 - Secondary text */
--dark-teal: 184 84% 21%      /* Dark Teal #085B63 - Dark accents */
--gold: 38 92% 60%            /* Gold - Premium highlights */
--background: 0 0% 100%       /* White */
--foreground: 218 79% 19%     /* Navy (text) */
```

### Typography
- **Primary Font**: "Plus Jakarta Sans" (300, 400, 500, 600, 700, 800)
- **Display Font**: "Space Grotesk" (400, 500, 600, 700) - for hero sections
- **Base Font Size**: 17px
- **Headings**: Bold (700), Plus Jakarta Sans
- **Body**: Regular (400), Plus Jakarta Sans

### Design Principles
- Clean, modern, professional aesthetic
- Generous white space
- Smooth scroll animations with Framer Motion
- Consistent rounded corners (0.75rem default radius)
- Subtle shadows and hover effects
- Mobile-first responsive design
- Accessibility-compliant (ARIA labels, semantic HTML)

---

## Site Structure & Pages

### 1. Homepage (`/`)
**Sections in order:**
1. **Navbar** - Fixed, transparent on hero, solid on scroll
2. **Hero Section** - Full viewport height, animated background zoom, CTA buttons
3. **Clients Section** - Logo carousel or grid of client brands
4. **Stats Section** - Key metrics with animated counters
5. **Why Section** - Why choose us / value propositions
6. **Services Section** - Overview of service offerings with cards
7. **Showcase Section** - Portfolio/case studies/success stories
8. **Founders Section** - Team leadership with photos and bios
9. **Testimonials Section** - Client reviews with carousel
10. **Vision & Mission Section** - Company values and goals
11. **Blog Section** - Latest blog posts preview
12. **Contact Section** - Contact form with validation
13. **FAQ Section** - Accordion-style frequently asked questions
14. **Footer** - Multi-column with links, contact info, social media
15. **Floating Contact Button** - Fixed bottom-right, expandable contact widget

### 2. About Page (`/about`)
- Company history and story
- Mission, vision, values
- Team section
- Awards and certifications
- Office locations

### 3. UAE Services Page (`/services/uae`)
- Services specific to UAE market
- Detailed service descriptions
- Pricing or consultation CTA
- Related case studies

### 4. India Services Page (`/services/india`)
- Services specific to India market
- Detailed service descriptions
- Pricing or consultation CTA
- Related case studies

### 5. Team Page (`/team`)
- Full team directory
- Individual profiles with photos
- Expertise areas
- Contact information

### 6. FAQ Page (`/faq`)
- Comprehensive FAQ with categories
- Accordion UI for questions
- Search functionality (optional)

### 7. Contact Page (`/contact`)
- Contact form with validation
- Office locations with maps
- Phone, email, social links
- Business hours

### 8. Blog Page (`/blog`)
- Blog post listings
- Categories and tags
- Search and filter
- Pagination

### 9. 404 Not Found Page (`/404` or `*`)
- Friendly error message
- Navigation back to home
- Suggested pages

---

## Component Architecture

### Layout Components

#### Navbar
```typescript
Features:
- Fixed position with backdrop blur
- Transparent on hero section (homepage only)
- Solid white background on scroll or other pages
- Logo + brand name on left
- Desktop: Horizontal navigation links
- Mobile: Hamburger menu with slide-down animation
- Active link highlighting
- Smooth color transitions based on scroll position
- Links: Home, About Us, UAE Services, India Services, Blog, Contact Us
```

#### Footer
```typescript
Features:
- Dark navy background (#07142e)
- 4-column grid (responsive to 1 column on mobile)
- Column 1: Logo, tagline, company description
- Column 2: Quick links (all pages)
- Column 3: Contact information (phone, email, location)
- Column 4: Social media icons (WhatsApp, Instagram, Facebook, LinkedIn)
- Bottom bar: Copyright, Privacy Policy, Terms of Service
- Custom SVG icons with brand colors
```

#### Floating Contact Widget
```typescript
Features:
- Fixed bottom-right position (z-index: 100)
- Circular button with MessageCircle icon
- Click to expand contact options card
- Animated with Framer Motion (scale + fade)
- Contact options: Phone, Email, Contact Form link
- Social media quick links
- Close button (X icon) when expanded
```

### Content Sections

#### Hero Section
```typescript
Features:
- Full viewport height (100vh)
- Background image with continuous zoom animation (scale 1 → 1.08 → 1, 10s loop)
- Dark overlay (primary/50 + gradient)
- Centered content with fade-up animations
- Eyebrow text (small, uppercase, tracked)
- Large headline (4xl to 6xl responsive)
- Subheadline paragraph
- Two CTA buttons: Primary (Get Started) + Secondary (Learn More)
- Smooth scroll to sections on click
```

#### Stats Section
```typescript
Features:
- Grid of 3-4 key metrics
- Large numbers with animated counting effect
- Icons or visual elements
- Brief descriptions
- Responsive grid (1 col mobile, 2-4 cols desktop)
```

#### Services Section
```typescript
Features:
- Grid of service cards (2-3 columns)
- Each card: Icon, title, description, "Learn More" link
- Hover effects (lift, shadow, scale)
- Staggered fade-in animations
```

#### Testimonials Section
```typescript
Features:
- Carousel or grid of testimonial cards
- Client photo, name, company, role
- Quote text
- Star ratings (optional)
- Navigation arrows or dots
```

#### FAQ Section
```typescript
Features:
- Accordion UI (Radix UI Accordion)
- Question as trigger, answer as collapsible content
- Smooth expand/collapse animations
- Icons (ChevronDown) that rotate on open
- Categories or all in one list
```

#### Contact Section
```typescript
Features:
- Contact form with fields: Name, Email, Phone, Message
- Form validation with React Hook Form + Zod
- Submit button with loading state
- Success/error toast notifications (Sonner)
- Optional: reCAPTCHA integration
```

---

## Animation Patterns

### Framer Motion Variants
```typescript
// Fade up on scroll
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
}

// Stagger children
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

// Scale on hover
const scaleHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
}
```

### Scroll Behavior
- Smooth scroll enabled globally
- Navbar transparency based on scroll position
- Sections fade in as they enter viewport
- Parallax effects on hero background

---

## Responsive Breakpoints
```typescript
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1400px // Extra large (max-width container)
```

### Mobile Optimizations
- Hamburger menu for navigation
- Single column layouts
- Touch-friendly button sizes (min 44x44px)
- Optimized images (WebP format)
- Reduced animation complexity on mobile

---

## File Structure
```
project-root/
├── public/
│   ├── logo.png
│   ├── hero.png
│   ├── favicon.ico
│   └── [other assets]
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingContact.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── WhySection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ShowcaseSection.tsx
│   │   ├── FoundersSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── VisionMissionSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── [other components]
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── About.tsx
│   │   ├── UAEServices.tsx
│   │   ├── IndiaServices.tsx
│   │   ├── Team.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── components.json
```

---

## Key Features & Functionality

### Navigation
- Smooth scroll to sections with anchor links
- Active page highlighting in navbar
- Mobile menu with slide animation
- Logo click returns to homepage

### Forms
- Contact form with validation
- Real-time error messages
- Success/error toast notifications
- Email integration (optional: EmailJS, Formspree, or backend API)

### Performance
- Code splitting with React.lazy (optional)
- Image optimization (WebP, lazy loading)
- Minimal bundle size
- Fast page transitions

### SEO
- Semantic HTML5 elements
- Meta tags for each page
- Open Graph tags for social sharing
- Sitemap and robots.txt
- Descriptive alt text for images

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast (WCAG AA)
- Screen reader friendly

---

## Content Guidelines

### Homepage Hero
- **Eyebrow**: "Financial Advisory · UAE & India"
- **Headline**: "Strategic Expertise From Dedicated Advisors"
- **Subheadline**: "At ScaleSight, we deliver tailored, insight-driven advisory to help businesses see clearly, stay compliant, and grow confidently."
- **CTA 1**: "Get Started" (links to #contact)
- **CTA 2**: "Learn More" (links to #showcase)

### Company Information
- **Company Name**: ScaleSight
- **Tagline**: "Your trusted partner for expert financial advisory"
- **Services**: Financial advisory, compliance, strategic growth consulting
- **Locations**: India & UAE
- **Contact**: +00 00000 00000, hello@scalesight.com

### Social Media Links
- WhatsApp: https://wa.me/919999999999
- Instagram: https://instagram.com
- Facebook: https://facebook.com
- LinkedIn: https://linkedin.com

---

## Implementation Instructions

### Step 1: Project Setup
```bash
npm create vite@latest project-name -- --template react-ts
cd project-name
npm install
```

### Step 2: Install Dependencies
```bash
npm install react-router-dom @tanstack/react-query framer-motion lucide-react
npm install tailwindcss postcss autoprefixer tailwindcss-animate
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install react-hook-form @hookform/resolvers zod
npm install sonner class-variance-authority clsx tailwind-merge
npm install date-fns embla-carousel-react
```

### Step 3: Configure Tailwind
- Initialize Tailwind: `npx tailwindcss init -p`
- Copy the provided `tailwind.config.ts` with custom colors
- Copy the provided `index.css` with CSS variables and fonts

### Step 4: Setup shadcn/ui
```bash
npx shadcn@latest init
npx shadcn@latest add button card accordion dialog form input textarea
```

### Step 5: Build Components
- Create all layout components (Navbar, Footer, FloatingContact)
- Create all section components (Hero, Stats, Services, etc.)
- Create all page components (Index, About, Contact, etc.)
- Implement routing in App.tsx

### Step 6: Add Content & Assets
- Add logo and images to `/public`
- Replace placeholder content with actual company information
- Update contact information and social links

### Step 7: Testing & Optimization
- Test all navigation and links
- Test form validation and submission
- Test responsive design on multiple devices
- Optimize images and bundle size
- Run Lighthouse audit for performance and accessibility

---

## Additional Enhancements (Optional)

### Advanced Features
- Blog with CMS integration (Contentful, Sanity, Strapi)
- Multi-language support (i18next)
- Dark mode toggle
- Analytics integration (Google Analytics, Plausible)
- Live chat widget (Intercom, Tawk.to)
- Newsletter subscription
- Cookie consent banner
- Loading animations and skeleton screens

### Backend Integration
- Contact form API endpoint
- Newsletter subscription API
- Blog post fetching from CMS
- Authentication for admin panel (optional)

---

## Deployment

### Build for Production
```bash
npm run build
```

### Hosting Options
- **Vercel**: Zero-config deployment for Vite apps
- **Netlify**: Continuous deployment from Git
- **AWS S3 + CloudFront**: Scalable static hosting
- **GitHub Pages**: Free hosting for static sites

### Environment Variables
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=hello@scalesight.com
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

---

## Success Criteria

✅ All pages load in under 2 seconds
✅ Mobile responsive on all devices (320px to 2560px)
✅ Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
✅ All forms validate correctly
✅ Smooth animations without jank (60fps)
✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)
✅ No console errors or warnings
✅ SEO meta tags on all pages
✅ Accessible to screen readers

---

## Final Notes

This prompt provides a complete blueprint for building a professional, modern business website. Follow the structure, design system, and component architecture exactly as specified for consistency. Customize content, colors, and features as needed for your specific business requirements.

**Remember**: Focus on clean code, performance, accessibility, and user experience. Test thoroughly before deployment.
