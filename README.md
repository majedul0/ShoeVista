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
| DevOps   | Docker, Docker Compose            |

---

## Getting Started

### Option 1 — Docker (Recommended)

Run the entire stack (client + server + MongoDB) with a single command:

```bash
docker-compose up --build
```

This starts:
| Service  | URL                          |
|----------|------------------------------|
| Frontend | http://localhost:5173         |
| API      | http://localhost:5000/api/    |
| MongoDB  | mongodb://localhost:27017     |

To stop everything:

```bash
docker-compose down
```

To stop and remove all data (volumes):

```bash
docker-compose down -v
```

### Option 2 — Manual

```bash
# Install & run the backend
cd server
npm install
npm start

# Install & run the frontend (in another terminal)
cd client
npm install
npm run dev
```

> **Note:** For manual setup you need a running MongoDB instance and a `.env` file in `server/` with:
> ```
> PORT=5000
> MONGO_URI=mongodb://localhost:27017/shoevista
> ```
> And a `.env` file in `client/` with:
> ```
> VITE_BASE_URL=http://localhost:5000
> ```

---

## Docker Architecture

```
ShoeVista/
├── client/
│   ├── Dockerfile          # Node 18 Alpine — runs Vite dev server
│   └── .dockerignore
├── server/
│   ├── Dockerfile          # Node 18 Alpine — runs Express API
│   └── .dockerignore
└── docker-compose.yml      # Orchestrates client + server + MongoDB
```

All three services share a `shoevista-net` bridge network. MongoDB data is persisted in a named volume (`mongo-data`).

Frontend runs on `http://localhost:5173` and the API on `http://localhost:5000/api/`.
