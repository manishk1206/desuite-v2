# DeSuite Design Guidelines

## Design Approach
**Reference-Based:** Drawing from Stripe and Bridge's sophisticated, minimal aesthetic with fluid animations and premium feel. Core principles: clarity, sophistication, and purposeful motion.

## Typography System
- **Primary Font:** Inter (via Google Fonts CDN)
- **Accent Font:** Space Grotesk for headings (adds technical sophistication)

**Hierarchy:**
- Hero Headline: text-6xl to text-7xl, font-bold, Space Grotesk
- Section Headings: text-4xl to text-5xl, font-semibold, Space Grotesk
- Subheadings: text-xl to text-2xl, font-medium, Inter
- Body Text: text-base to text-lg, font-normal, Inter
- UI Elements: text-sm to text-base, font-medium, Inter

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-8 to gap-12
- Content margins: mx-auto with max-w-7xl containers
- Grid spacing: space-y-16 to space-y-24 between major sections

## Page Structure (7 Sections)

### 1. Hero Section (80vh minimum)
- Full-width with gradient mesh background animation (subtle, slow-moving)
- Centered content: max-w-4xl container
- Headline emphasizing "Stablecoin and Tokenization Layer for Oracle ERP"
- Subheadline explaining value proposition (2-3 lines)
- Dual CTA: Primary "Book a Demo" button + Secondary "Learn More" link
- Floating UI element showcasing mini product preview or animated logo
- No large hero image - rely on gradient animations and UI elements

### 2. Problem/Solution Section
- Two-column layout (lg:grid-cols-2)
- Left: The Challenge (current ERP limitations with Web3)
- Right: The DeSuite Solution (seamless integration)
- Include subtle icon illustrations for each point
- Responsive: stacks to single column on mobile

### 3. Interactive Flow Diagram Section
- Full-width section with py-24
- Heading: "How DeSuite Works"
- Horizontal flow diagram showing: Oracle ERP → DeSuite Layer → Blockchain Networks
- Animated connections between nodes (SVG paths with stroke animations)
- Clickable/hoverable nodes revealing detailed information in cards
- Use three main nodes with sub-components beneath each
- Responsive: converts to vertical flow on mobile (md:horizontal)

### 4. Key Features Grid
- Three-column grid (lg:grid-cols-3, md:grid-cols-2)
- 6 feature cards with icons (Heroicons), titles, and descriptions
- Features: Real-time Tokenization, Stablecoin Integration, Oracle Native, Compliance Layer, Multi-chain Support, API-First
- Cards with subtle hover lift effect (transform)
- Icons: 48x48px in containers

### 5. Trust Section (Partners & Clients)
- Centered heading: "Trusted By"
- Logo grid: 6-8 partner logos in grayscale (grid-cols-3 lg:grid-cols-6)
- Logos: 120px height, auto width, opacity-60 default, opacity-100 on hover
- Include mix of: Oracle, blockchain partners, enterprise clients
- Logos should be placeholder SVGs or image placeholders

### 6. Technical Architecture Snapshot
- Two-column split (lg:grid-cols-5, left: col-span-2, right: col-span-3)
- Left: "Enterprise Grade" heading with bullet points (security, scalability, compliance)
- Right: Code snippet showing API example or architecture diagram
- Use monospace font for code (font-mono)
- Syntax highlighting with muted tones

### 7. CTA Section + Footer
**CTA Block:**
- Full-width with gradient background treatment
- Centered content: "Ready to modernize your ERP?"
- Large "Book a Demo" button (px-8 py-4, text-lg)
- Supporting text: "Schedule a personalized walkthrough with our team"

**Footer:**
- Four-column grid (lg:grid-cols-4)
- Column 1: DeSuite logo + tagline
- Column 2: Product (Features, Pricing, Documentation)
- Column 3: Company (About, Careers, Contact)
- Column 4: Newsletter signup + Social links
- Bottom bar: Copyright + Privacy/Terms links

## Component Library

### Buttons
- Primary: Rounded-lg, px-6 py-3, font-medium, with subtle shadow
- Secondary: Outlined variant with border-2
- When on gradient/image backgrounds: Add backdrop-blur-sm to button background

### Cards
- Rounded-2xl borders
- p-8 internal padding
- Subtle shadow on hover: shadow-xl transition
- Border treatment: border with low opacity

### Navigation
- Sticky header with backdrop-blur-lg when scrolled
- Logo left, nav center, "Book Demo" button right
- Mobile: Hamburger menu transitioning to slide-out panel
- Nav items: 5-6 links (Product, Features, Pricing, Docs, Company)

### Modal (Book a Demo Form)
- Centered overlay with backdrop-blur-sm background
- Form fields: Name, Email, Company, Use Case (textarea)
- Submit button: "Schedule Demo"
- Close button: top-right X icon

## Icons
**Library:** Heroicons (via CDN)
- Use outline variant for most UI elements
- Solid variant for filled states and emphasis
- Consistent 24x24px sizing (w-6 h-6)

## Animations
**Sparingly Applied:**
- Hero gradient: Slow ambient movement (30s loop)
- Flow diagram: Staggered entrance animations on scroll
- Card hover: Subtle lift (translateY(-4px))
- Button hover: Scale(1.02) + shadow enhancement
- Scroll reveal: Fade-up for section headings (100ms delay between elements)
- NO complex parallax or distracting motion

## Accessibility
- Focus states: Ring-2 with appropriate offset on all interactive elements
- ARIA labels on icon-only buttons
- Form inputs: Proper labels and error states
- Contrast ratio: Minimum 4.5:1 for all text
- Keyboard navigation: Tab through all interactive elements logically

## Images
No large hero image. Use gradient backgrounds with UI element overlays throughout. Partner logos are the only image content needed.