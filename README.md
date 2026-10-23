# S Square Elite — React + Vite

A responsive toy and gift e-commerce storefront built with React, Vite, React Router and Lucide icons. Uses the supplied hero/product images and includes category routes, search, product cards, a demo bag interaction, customer review cards, editorial gift sections and a responsive footer.

## Run locally

1. Install Node.js (LTS).
2. Extract this ZIP and open the `ssquare-elite-react-vite` folder in VS Code or IntelliJ IDEA.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

To check production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` — home page
- `/categories` — all categories
- `/category/:slug` — category-specific product page

## Important notes

- The three supplied lamp photos and the supplied hero banner are in `public/images/`.
- Product names, prices, ratings, category listings and testimonials are demo data in `src/data/products.js` and `src/components/Reviews.jsx`. Replace them with your real catalogue before launch. The reviews section includes a visible note that testimonials are samples.
- The bag currently demonstrates front-end add-to-bag feedback only. It does not persist after refresh and is not connected to a backend or payment gateway.
- The newsletter form shows a demo confirmation only. Connect it to your email service before launch.
- Product images are supplied assets; replace category emoji with real category photos as you add them.
