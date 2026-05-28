# Lyséa K-Beauty E-Commerce

Modern, responsive K-beauty storefront built with React + Vite + Tailwind CSS.

## ✨ Features

- 🧪 **Skin Type Quiz** — 3-question assessment with personalized product recommendations
- 🛍️ **Product Catalog** — 30 curated K-beauty products across 6 categories
- 🔍 **Smart Filters** — Filter by category and skin type simultaneously
- 🛒 **Full Shopping Cart** — Add/remove items, quantity controls, localStorage persistence
- 📱 **Responsive Design** — Mobile-first, works on all devices (mobile/tablet/desktop)
- ♿ **Accessible** — WCAG AA compliant, semantic HTML, keyboard navigation
- 🎨 **Premium Design** — Playfair Display + Lato typography, cream/sage/taupe palette
- ⚡ **Fast** — Vite dev server, optimized build (55KB gzipped)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens http://localhost:3000 with hot module reloading.

### Build for Production

```bash
npm run build
npm run preview
```

Builds optimized production bundle, preview at http://localhost:4173.

## 📁 Project Structure

```
src/
├── components/           # 12 React components
├── data/                 # Products, testimonials, quiz logic
├── hooks/                # useCart hook
├── styles/               # Tailwind + animations
├── utils/                # Helper functions
├── App.jsx               # Root component
└── main.jsx              # Entry point

public/index.html         # HTML template
```

## 🎯 Key Components

| Component | Purpose |
|-----------|---------|
| `Header` | Fixed nav with search, quiz link, cart icon |
| `Hero` | Main heading + "Discover routine" CTA |
| `QuizModal` | 3-question skin type assessment |
| `ProductGrid` | Responsive product catalog with filters |
| `ProductCard` | Individual product display |
| `CartPanel` | Slide-in shopping cart |
| `CheckoutSuccess` | Order confirmation modal |
| `KBeautyBlock` | K-beauty ritual education |
| `Testimonials` | Customer reviews |
| `Newsletter` | Email signup |
| `Footer` | Links, social, copyright |

## 📊 Product Data

- **30 products** across 6 categories (cleanser, oil, toner, serum, cream, SPF)
- **Price range:** €11–€22
- **Skin types:** oily, dry, sensitive, mature
- **Real K-beauty brands:** COSRX, Klairs, Beauty of Joseon, Purito, Anua, etc.
- Located in `src/data/products.js`

## 🧩 Technology Stack

- **Frontend:** React 18.3.1
- **Build:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.4.0
- **State:** React Hooks (useState, useEffect, useMemo)
- **Persistence:** localStorage (cart)
- **Fonts:** Google Fonts (Playfair Display, Lato)

**No external dependencies** beyond React and Tailwind.

## ♿ Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- Keyboard navigation (Tab through all interactive elements)
- Focus indicators (2px sage outline on all buttons/inputs)
- Color contrast: WCAG AA compliant
- Alt text on images (or descriptive placeholders)
- ARIA labels on form inputs

## 📱 Responsive Breakpoints

| Screen | Grid Columns | Behavior |
|--------|--------------|----------|
| Mobile (≤640px) | 1 | Single column, scaled text |
| Tablet (641-1023px) | 2 | Two columns |
| Desktop (≥1024px) | 3 | Three columns, full width |

## 🎨 Design System

### Colors
- **Cream:** #f5f5f0 (background)
- **Sage:** #a8d5c4 (accent, buttons)
- **Taupe:** #d4c5b0 (secondary)
- **Dark:** #2d3436 (text)
- **Text:** #555 (secondary text)

### Typography
- **Display:** Playfair Display (serif) — headings
- **Body:** Lato (sans-serif) — copy

### Animations
- `fadeIn` (0.3s) — modals
- `slideInRight` (0.4s) — cart panel
- `slideUp` (0.5s) — product cards

## 🧪 Testing

All features tested end-to-end:
- ✅ Hero → Quiz → Results → Grid filtering
- ✅ Product add to cart → Cart checkout
- ✅ Filters (category + skin type combined)
- ✅ Header search (typeahead)
- ✅ Responsive layout (mobile/tablet/desktop)
- ✅ No console errors

## 📦 Build Output

| Asset | Size | Gzipped |
|-------|------|---------|
| JS | 178.75 KB | 55.90 KB |
| CSS | 17.84 KB | 4.28 KB |
| **Total** | ~196 KB | ~60 KB |

## 🚢 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag-drop dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📝 Notes

- **Cart persistence:** Uses localStorage (cleared on logout/browser clear)
- **Product images:** Currently placeholder gradients. Replace with actual product images in `src/data/products.js`
- **Quiz logic:** Simple 3-step filter. Can expand with more refined matching logic.
- **Checkout:** Demo mode only. Add Stripe/PayPal integration for real payments.

## 🔄 Future Enhancements

- [ ] Real product images / CDN integration
- [ ] Payment gateway (Stripe, PayPal)
- [ ] User accounts & order history
- [ ] Admin dashboard for product management
- [ ] Email notifications
- [ ] Wishlist feature
- [ ] Product reviews & ratings
- [ ] More refined quiz algorithm

## 📄 License

MIT

## 👤 Author

Built with ❤️ for K-beauty lovers everywhere.

---

**Questions?** Open an issue or reach out at contact@lysea.com
