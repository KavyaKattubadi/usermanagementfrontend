# User Dashboard - React (Vite)

This is a small React application made for the **React Frontend Intern Assignment**.
It fetches users from a public API and displays them in card layout with name, email, phone, and company.
It also supports client-side search by name.

## Features implemented as per requirements
- Fetch and display list of users with name, email, phone, company name.
- Card layout UI.
- Basic search / filter by name (case-insensitive).
- Clear, minimal structure for easy review.
- Uses Vite + React (fast dev server).

## How to run locally
1. Ensure Node.js (v16+) and npm are installed.
2. In project root, run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:5173 in your browser.

## Files of interest
- `src/App.jsx` — main app, fetch + search logic.
- `src/components/UserCard.jsx` — single user card component.
- `src/styles.css` — minimal styling.
- `public/index.html` — app entry HTML.
- `package.json` — project config and scripts.

If you want a plain Create React App (CRA) structure instead, tell me and I'll provide it.

Good luck with your assignment!