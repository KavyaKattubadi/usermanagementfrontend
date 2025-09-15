User Dashboard – React Frontend Intern Assignment
📌 Overview

A simple React.js User Dashboard that fetches and displays user data in card layout.
Includes search/filter by name, responsive design, and basic routing.

🚀 Features

Fetch users from the public API (https://jsonplaceholder.typicode.com/users)

Display name, email, phone, and company name in cards

Search/filter users by name

"Create New User" form (client-side only)

Mobile-friendly layout

🛠️ Tech Stack

React.js (Functional components & hooks)

React Router DOM

Axios

CSS or Tailwind (optional)

📂 Project Structure
user-dashboard-react/
├── src/
│   ├── components/       # Reusable UI components (UserCard, Header, etc.)
│   ├── pages/            # Dashboard & User Details pages
│   └── App.js            # Main component with routing
├── public/
└── package.json

⚡ Setup & Run Locally

Clone the repository:

git clone <repo-url>
cd user-dashboard-react


Install dependencies:

npm install


Start development server:

npm start


Access the app at http://localhost:3000

🚀 Deployment

Build the project:

npm run build


Deploy the build folder to Vercel or Netlify

Update API URLs if connecting to a backend server

📝 Notes

Uses React hooks: useState, useEffect

Routing via React Router DOM

Modular, reusable components

Fully responsive design
