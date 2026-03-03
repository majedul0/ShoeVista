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

## Docker Setup

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (v20+)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2+)

### Architecture

The project uses a **3-container** setup orchestrated by Docker Compose:

```
                 ┌────────────────────────────────────────────┐
                 │           shoevista-net (bridge)            │
                 │                                            │
  :5173 ◄───────┤  ┌──────────┐    ┌──────────┐    ┌───────┐ │
  Browser ──────►│  │  client  │───►│  server  │───►│ mongo │ │
                 │  │ (Vite)   │    │ (Express)│    │ (v7)  │ │
                 │  │ :5173    │    │ :5000    │    │ :27017│ │
                 │  └──────────┘    └──────────┘    └───────┘ │
                 │                                     │      │
                 └─────────────────────────────────────┼──────┘
                                                       │
                                              mongo-data volume
```

| Container           | Image / Build  | Port  | Purpose                    |
|---------------------|----------------|-------|----------------------------|
| `shoevista-client`  | `client/`      | 5173  | React + Vite dev server    |
| `shoevista-server`  | `server/`      | 5000  | Express REST API           |
| `shoevista-mongo`   | `mongo:7`      | 27017 | MongoDB database           |

### File Structure

```
ShoeVista/
├── docker-compose.yml          # Orchestrates all 3 services
├── client/
│   ├── Dockerfile              # Node 18 Alpine → npm run dev
│   └── .dockerignore
└── server/
    ├── Dockerfile              # Node 18 Alpine → node index.js
    └── .dockerignore
```

### Quick Start

```bash
# Clone the repo
git clone https://github.com/majedul0/ShoeVista.git
cd ShoeVista

# Build and start all containers
docker-compose up --build
```

Open **http://localhost:5173** in your browser.

### Useful Commands

```bash
# Start in detached (background) mode
docker-compose up --build -d

# View running containers
docker-compose ps

# Follow logs for a specific service
docker-compose logs -f server

# Restart a single service
docker-compose restart client

# Stop all containers
docker-compose down

# Stop and wipe all data (removes MongoDB volume)
docker-compose down -v

# Rebuild a single service without cache
docker-compose build --no-cache server
```

### Environment Variables

Docker Compose injects these automatically — no `.env` files needed:

| Variable         | Service  | Default Value                         |
|------------------|----------|---------------------------------------|
| `PORT`           | server   | `5000`                                |
| `MONGO_URI`      | server   | `mongodb://mongo:27017/shoevista`     |
| `VITE_BASE_URL`  | client   | `http://localhost:5000`               |

> **Customizing:** To override values, create a `.env` file in the project root:
> ```env
> MONGO_URI=mongodb://mongo:27017/my_custom_db
> VITE_BASE_URL=http://my-server:5000
> ```
> Then reference them in `docker-compose.yml` with `${VARIABLE_NAME}`.

### Data Persistence

MongoDB data is stored in a Docker named volume (`mongo-data`). Your data survives `docker-compose down` but is removed with `docker-compose down -v`.

### Networking

All services communicate over a private bridge network (`shoevista-net`). Inside the network, services reference each other by name (e.g., the server connects to MongoDB at `mongodb://mongo:27017`). Only the mapped ports (5173, 5000, 27017) are exposed to the host.

### Troubleshooting

| Issue | Fix |
|-------|-----|
| Port already in use | Stop the conflicting process or change the port mapping in `docker-compose.yml` |
| MongoDB connection refused | Make sure the `mongo` container is healthy: `docker-compose logs mongo` |
| Frontend can't reach API | Verify `VITE_BASE_URL` is set to `http://localhost:5000` |
| Changes not reflected | Rebuild with `docker-compose up --build` |
