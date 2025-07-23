# Binge+ OTT Platform

Binge+ is a modern, feature-rich Over-The-Top (OTT) streaming platform designed to deliver a seamless and engaging video streaming experience. Built with a robust frontend using React, Vite, and Tailwind CSS, and a scalable backend (Node.js/Express/Supabase), Binge+ aims to provide users with a Netflix-like interface, personalized recommendations, and a responsive, mobile-friendly design.

---

## Table of Contents
- [Project Purpose](#project-purpose)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Frontend Application Flow](#frontend-application-flow)
- [Folder & File Details](#folder--file-details)
- [Setup & Usage](#setup--usage)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Project Purpose
Binge+ is built to demonstrate a scalable, maintainable OTT streaming platform. It showcases:
- Modern UI/UX for video streaming
- Modular, component-driven frontend architecture
- Integration with backend APIs for dynamic content
- Real-world features like authentication, search, watchlists, and more

---

## Key Features
- **User Authentication:** Secure login, registration, and profile management
- **Video Streaming:** Adaptive bitrate streaming (backend integration required)
- **Content Discovery:** Categorized movies/series, search, and recommendations
- **User Profiles:** Personalized watchlists, preferences, and settings
- **Responsive Design:** Optimized for all devices
- **Real-Time Updates:** Notifications and live content updates (backend integration required)
- **Error Handling:** Custom 404 and error pages

---

## Tech Stack
### Frontend
- **React 18:** Component-based UI
- **Vite:** Fast build tool and dev server
- **Tailwind CSS:** Utility-first styling
- **React Router:** Client-side routing
- **Axios:** API requests

### Backend (not included in this repo, but referenced)
- **Node.js & Express:** REST API
- **Supabase:** Database & authentication

---

## Project Structure
```
BINGE-PLUS-FE/
├── client/                 # Frontend React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── App.jsx         # Main app component (routing)
│   │   ├── main.jsx        # Entry point
│   │   ├── index.css       # Global styles
│   │   └── ui/
│   │       ├── features/   # Main feature pages (Home, Movie, Series, Login, etc.)
│   │       ├── components/ # Reusable UI components (Navbar, Modal, etc.)
│   │       └── lib/        # Utility libraries (e.g., axios.js)
│   ├── package.json        # Project metadata & scripts
│   └── README.md           # Frontend-specific docs
└── README.md               # Project overview (this file)
```

---

## Frontend Application Flow
- **Entry Point:** `main.jsx` renders the `App` component.
- **Routing:** `App.jsx` uses `react-router` to define routes for Home, Movies, Series, Login, Register, Profile, Settings, Movie/Series Details, Search, and 404.
- **Data Fetching:** Pages like Home fetch movie data from the backend using Axios (`lib/axios.js`).
- **UI Components:** Navbar, Modal, Carousels, Cards, etc., are composed to build each page.
- **State Management:** React hooks (`useState`, `useEffect`) manage local state and side effects.
- **Feature Pages:**
  - **Home:** Hero carousel, categorized carousels (Action, Adventure, Drama, etc.), latest uploads, and more.
  - **Movie:** Detail pages with cast, crew, reviews, and related content.
  - **PageNotFound:** Custom 404 page for invalid routes.

---

## Folder & File Details
### `client/src/ui/features/`
- **Home.jsx:** Main landing page, fetches and displays movies in carousels by genre and recency.
- **Movie.jsx, Series.jsx:** List and detail pages for movies and series.
- **MovieDetail.jsx, SeriesDetail.jsx:** Detailed info, cast, reviews, and more.
- **PageNotFound.jsx:** 404 error page.
- **ComingSoon.jsx, View.jsx, CastCrewDetails.jsx, Search.jsx:** Additional features and placeholders.

### `client/src/ui/components/`
- **Navbar.jsx:** Main navigation bar.
- **Modal.jsx:** Reusable modal dialog.
- **base/:** Core UI elements (movie-card, hero-carousel, movie-carousel).
- **movieDetails/:** Components for displaying movie details (Hero, Title, Cast, Clips, Review, etc.).
- **profile/:** Profile-related UI (MovieWatchedList, MovieWatchinList, Preference, ProfileCard).
- **settings/:** Settings UI (Logout, Password, Theme, Username).

### `client/src/ui/lib/`
- **axios.js:** Axios instance for API requests.

---

## Setup & Usage
### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Supabase account (for backend)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/binge-ott-platform.git
   cd binge-ott-platform
   ```
2. Install dependencies:
   ```bash
   cd client
   npm install
   ```
3. Set up environment variables:
   - Create `.env` files in both `client` and `server` directories (see `.env.example` if available)
4. Start the development server:
   ```bash
   npm run dev
   ```
5. The app will be available at `http://localhost:5173` (default Vite port).

### Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint codebase

---

## Contribution Guidelines
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Special thanks to all contributors! 
