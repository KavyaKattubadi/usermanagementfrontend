# User Dashboard – React Frontend Intern Assignment

## Overview
A simple React.js User Dashboard that fetches users from API and displays them in card layout. Includes search/filter and routing to user details page.

## Features
- Fetch users from `https://jsonplaceholder.typicode.com/users`
- Show name, email, phone, company in cards
- Search/filter by name
- Create New User form (client-side only)
- User details page with full info
- Responsive design

## Tech Stack
- React.js (functional components + hooks)
- Axios
- React Router DOM
- CSS / Tailwind

## Project Structure
frontend/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Dashboard & User Details pages
│ ├── context/ # Global state using React Context
│ └── App.js # Main routes
