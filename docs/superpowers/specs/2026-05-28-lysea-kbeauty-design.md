# Lyséa K-Beauty E-Commerce — Design Specification

**Project:** K-beauty startup web application  
**Brand:** Lyséa  
**Tagline:** "Cosmética para tu piel, no para la tendencia" (Cosmetics for your skin, not the trend)  
**Scope:** Homepage + product catalog + shopping cart + skin type quiz  
**Date:** 2026-05-28

---

## 1. Brand & Aesthetic Direction

### Visual Identity
- **Primary Typography:** Playfair Display (serif, elegant, display) for headings and brand
- **Secondary Typography:** Lato (sans-serif, clean, readable) for body copy and UI
- **Color Palette:**
  - Dominant: Cream (#f5f5f0)
  - Accent 1: Sage green (#a8d5c4)
  - Accent 2: Warm taupe (#d4c5b0)
  - Text: Dark charcoal (#2d3436)
  - Backgrounds: Off-white, light cream

### Brand Tone
- Educational and approachable—not pretentious
- Scientific credibility (K-beauty formulations) + emotional warmth
- Anti-trend: focuses on skin health over hype
- Inclusive and accessible language

---

## 2. Core User Flows

### Flow A: First-Time User (Discovery)
1. Land on homepage
2. See hero with tagline + "Discover your routine" CTA
3. Complete quick quiz (3 questions about skin type)
4. Receive personalized routine recommendation (5-7 products)
5. Click "Shop this routine" → filtered product grid
6. Browse, add to cart, view cart, checkout

### Flow B: Returning User / Product-Specific
1. Land on homepage
2. Use search bar (top nav) to find product by name
3. View product details (in modal or dedicated page)
4. Add to cart
5. Checkout

### Flow C: Browser (Self-Guided)
1. Land on homepage
2. Skip quiz
3. Browse full product grid with category/skin type filters
4. Explore products, add to cart
5. Checkout

---

## 3. Page Structure

### 3.1 Header (Fixed)
- **Logo:** Left side, text-based (Playfair Display)
- **Search Bar:** Center, typeahead product search
- **Right side:** Quiz link + Cart icon (with item count badge)
- **Sticky** on scroll; minimal, refined

### 3.2 Homepage Sections

#### Section 1: Hero
- Full-width, high contrast
- Headline: "Cosmética para tu piel, no para la tendencia"
- Subtitle: "En Lysea te ayudamos a descubrir qué rutina necesitas y qué productos usar según tu tipo de piel, tus necesidades y tu presupuesto."
- CTA Button: "Discover Your Routine" (quiz entry point)
- Background: Subtle gradient or texture (cream to light sage)
- Mobile: Adjusted font sizes, single-column layout

#### Section 2: Discover Your Routine (Quiz)
- **Title:** "¿Cuál es tu tipo de piel?" (What's your skin type?)
- **Quick Quiz:** 3 questions (radio button or card selection)
  - Q1: Skin type (oily, dry, sensitive, mature)
  - Q2: [Secondary concern if chosen—optional, adds refinement]
  - Q3: [Budget preference if chosen—optional]
- **Result Display:** 
  - Skin type badge (colored, icon-based)
  - "Your recommended routine:" heading
  - 5-7 product cards in a mini grid (name, image, price)
  - "Shop this routine" button (links to filtered grid)
  - "Browse all products" link
- **Design:** Clean white/cream background, rounded cards, subtle shadows
- **Interaction:** Smooth transitions, no page reload

#### Section 3: Product Grid
- **Filters:**
  - Category dropdown (cleansers, oils, toners, serums, creams, SPF)
  - Skin type checkboxes (oily, dry, sensitive, mature)
  - Ability to combine filters
- **Grid Layout:**
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
- **Product Cards:** (see Section 4)
- **Responsive:** Adjusts grid, maintains readability

#### Section 4: K-Beauty Ritual Education Block
- **Title:** "La rutina coreana de cuidado de la piel" (The Korean skincare routine)
- **Content:** 3-4 paragraphs explaining steps (cleanse, tone, serum, cream, SPF) + benefits of K-beauty approach
- **Visuals:** 3-column layout (1 step per column) with simple icons or illustrations
- **Design:** Light background, icons, minimal text

#### Section 5: Testimonials
- **Title:** "Lo que dicen nuestros clientes" (What our customers say)
- **Cards:** 4-5 testimonial cards
  - Customer name, skin type, quote, star rating
  - Optional: small avatar/image
- **Layout:** 2 columns (tablet/desktop), 1 column (mobile)
- **Design:** Card-based, light borders, subtle shadows

#### Section 6: Newsletter Signup
- **Copy:** "Recibe tips de skincare y ofertas exclusivas" (Get skincare tips and exclusive offers)
- **Input:** Email field + "Subscribe" button
- **Design:** Centered, simple, call-to-action color (sage or warm accent)

#### Section 7: Footer
- **Content:**
  - Links: Shop, About Lyséa, Contact, FAQ
  - Social media icons
  - Copyright + privacy policy link
  - Newsletter signup (secondary)
- **Design:** Dark footer (charcoal or dark cream), light text, organized columns

---

## 4. Product Card Component

### Visual Design
- **Image area:** Placeholder gradient (cream to sage) or soft illustration, 1:1 aspect ratio, rounded corners
- **Content area:**
  - Product name (Playfair Display, medium weight, 16px)
  - 1-line benefit/description (Lato, 12px, grey text)
  - Price (bold, 14px, dark text)
  - Skin type tags (small badges: oily, dry, sensitive, mature—color-coded)
  - "Add to cart" button (sage green background, white text, rounded)
- **Hover state:** 
  - Card lifts (subtle box-shadow increase)
  - Image slight zoom (CSS transform)
  - Button color deepens slightly

### Data Structure
```
{
  id: string,
  name: string,
  category: string,           // "cleanser", "oil", "toner", "serum", "cream", "spf"
  benefit: string,            // "Gentle cleansing, low pH"
  price: number,              // €8-25
  skinTypes: string[],        // ["oily", "dry", "sensitive", "mature"]
  image: string,              // placeholder or image URL
  description: string         // longer description (for modal/detail view if needed)
}
```

---

## 5. Quiz Component

### Quick Quiz (MVP)
- **3 questions**, radio buttons or card selection
- **Q1:** "What's your skin type?" (oily, dry, sensitive, mature)
- **Q2:** "Any specific concerns?" (optional, acne, dark spots, dryness, aging—multi-select)
- **Q3:** "Budget preference?" (optional, budget, mid-range, premium)

### Result Generation
- Match selected skin type to products tagged with that type
- If Q2 selected, boost products matching those benefits
- Filter by Q3 price range if provided
- Return 5-7 products

### Design
- Full-screen modal or overlay (mobile-friendly)
- Progress indicator (step 1/3, 2/3, 3/3)
- Large, readable questions
- Smooth transitions between steps
- "Back" button to revise answers
- "See your routine" CTA at end

---

## 6. Shopping Cart

### Functionality
- **State:** Managed in React/component state (no backend needed for MVP)
- **Operations:**
  - Add to cart (product ID + quantity)
  - Update quantity (+ / - buttons)
  - Remove item
  - Calculate subtotal (real-time)
  - Clear cart
- **Persistence:** localStorage (survives page refresh)

### UI
- **Cart Panel:** Side panel, slides in from right, overlays page
  - Header: "Your Cart" + close button (X)
  - Item list: scrollable, shows product name/image/price/quantity
  - Quantity controls: - (button) | number (input or display) | + (button)
  - Remove button: trash icon or "Remove" text
  - Subtotal: bold, at bottom
  - "Proceed to checkout" button (full width, sage green)
  - "Continue shopping" link

### Checkout (MVP)
- Click "Proceed to checkout" → thank you modal or page
- Message: "Thanks for shopping at Lyséa! Demo mode—no real payment."
- Optional: show order summary
- "Shop more" button returns to homepage

---

## 7. Data & Products

### Product Catalog
- **Total:** 30 products
- **Categories:** 6 (5 products each)
  1. Cleansers (gel, oil, foam variants)
  2. Oils/Balms (cleansing oils, balms)
  3. Toners/Essences (hydrating, soothing)
  4. Serums/Ampoules (treatment, brightening, calming)
  5. Creams/Moisturizers (hydrating, barrier, soothing)
  6. SPF/Sunscreens (aqua, cream, essence)
- **Skin Type Tags:** Each product tagged with 1-3 skin types (oily, dry, sensitive, mature)
- **Pricing:** €8–25 range, realistic for K-beauty
- **Descriptions:** 1-line benefit + optional longer description

### Product Source
- **From README:** Products from user's provided routine (COSRX, Anua, Klairs, Benton, Sioris, Beauty of Joseon, etc.)
- **Invented:** Additional products filling out categories, coherent with K-beauty universe

---

## 8. Technical Architecture

### Frontend Stack
- **Framework:** React (Vite) or Next.js (user's choice via plugin)
- **Styling:** Tailwind CSS (or utility-first approach matching palette)
- **State Management:** React hooks (useState, useContext for cart)
- **Fonts:** Google Fonts (Playfair Display, Lato)
- **Component Structure:**
  - `Header.jsx` (logo, search, cart icon)
  - `Hero.jsx`
  - `QuizModal.jsx` (quiz logic)
  - `ProductGrid.jsx` (grid + filters)
  - `ProductCard.jsx`
  - `KBeautyBlock.jsx` (education section)
  - `Testimonials.jsx`
  - `Newsletter.jsx`
  - `Footer.jsx`
  - `CartPanel.jsx` (side cart)
  - `App.jsx` (main layout + cart state)

### Data
- `products.js` — hardcoded product array (30 items)
- `quizLogic.js` — quiz scoring, product matching
- No backend required for MVP

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Test on: iPhone, iPad, desktop

---

## 9. Accessibility & QA

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, etc.)
- ARIA labels for interactive elements (buttons, search, filters)
- Color contrast: WCAG AA minimum
- Keyboard navigation: all buttons/links tab-accessible
- Alt text on images (or descriptive placeholders)
- Focus states visible (outline or highlight)

### Performance
- Code splitting (lazy load components if needed)
- Optimized images (SVG icons, compressed placeholders)
- No unnecessary re-renders (React.memo, useCallback where needed)
- Lighthouse target: 90+ on desktop, 80+ on mobile

### Testing (Out of Scope for MVP, but note)
- Manual smoke tests (quiz flow, add to cart, filters)
- Browser testing (Chrome, Safari, Firefox)
- Mobile testing (iOS Safari, Chrome mobile)

---

## 10. Success Criteria

1. ✅ Homepage loads cleanly, responsive on all devices
2. ✅ Quiz completes and returns a routine recommendation
3. ✅ Product grid filters work (by category + skin type)
4. ✅ Add to cart, update qty, remove items work
5. ✅ Cart persists across page refresh (localStorage)
6. ✅ Checkout modal appears, thank you message shown
7. ✅ All text is in Spanish (per user context)
8. ✅ Design feels premium, cohesive, K-beauty appropriate
9. ✅ Meets accessibility baseline (WCAG AA)

---

## 11. Deliverables

1. **Codebase:** React/Vite project with all components
2. **Assets:** Product data file, fonts configured
3. **README:** Instructions to run locally (`npm run dev`)
4. **Figma/Mockups:** (Optional—visual companion captures design rationale)

---

**Status:** Ready for implementation planning.
