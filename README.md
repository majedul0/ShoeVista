# ShoeVista

A full-stack e-commerce shoe store built with React (Vite) and Express/MongoDB.

---

## Changes Made

### 1. Best Sellers Section — Display Top Brands Products
- **File:** `client/src/pages/Home.jsx`
- Added the `<Brands />` component inside the "Best Sellers" section so the same Top Brands (Adidas, Nike, Skechers, Puma) are also displayed under Best Sellers on the home page.

### 2. About Us Navigation Link
- **File:** `client/src/components/Header.jsx`
- Added an **"About Us"** option to the navigation bar linking to `/about-us`.
- The route was already configured in `main.jsx`; this change makes it accessible from the navbar.

### 3. Frontend–Backend Connection Fix
- **File:** `server/index.js`
- Added the missing `app.use('/api', router);` line to mount the API router.
- Without this, the backend server was running but no API routes were reachable (all frontend calls to `localhost:5000/api/...` were failing).

### 4. Upgraded About Us Page
- **File:** `client/src/components/About.jsx`
- Redesigned with a full-width dark gradient hero banner and large heading.
- Added 3-column feature cards (Premium Quality, For Everyone, Fast Delivery) with hover effects.
- Added a stats section (500+ Products, 50K+ Customers, 4.8★ Rating, 24/7 Support).
- Added a Trusted Brands row at the bottom.
- Organized content into clearly labeled sections with accent-line markers.

### 5. Upgraded Navbar Styling
- **File:** `client/src/components/Header.jsx`
- Frosted glass effect (`backdrop-blur-md`, semi-transparent background).
- Gradient text logo with hover color transition.
- Pill-shaped active link state with subtle background highlight.
- Muted inactive links that transition to black on hover.
- Vertical divider between nav links and icon actions.
- Improved badge positioning and icon hover areas.

---

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React, Vite, Tailwind CSS         |
| Backend  | Node.js, Express                  |
| Database | MongoDB (Mongoose)                |

## Getting Started

```bash
# Install & run the backend
cd server
npm install
npm start

# Install & run the frontend
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and the API on `http://localhost:5000/api/`.
