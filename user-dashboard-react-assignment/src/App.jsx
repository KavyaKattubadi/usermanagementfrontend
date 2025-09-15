import React, { useEffect, useState } from 'react'
import UserCard from './components/UserCard'

export default function App() {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch users from placeholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const filtered = users.filter(u => 
    u.name.toLowerCase().includes(query.toLowerCase().trim())
  )

  return (
    <div className="app-container">
      <header className="header">
        <h1>User Dashboard</h1>
        <p className="subtitle">Simple React app — shows users and search</p>
      </header>

      <section className="controls">
        <input
          aria-label="Search by name"
          className="search"
          placeholder="Search users by name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </section>

      <main className="grid">
        {loading && <div className="status">Loading users...</div>}
        {error && <div className="status error">Error: {error}</div>}
        {!loading && !error && filtered.length === 0 && (
          <div className="status">No users found.</div>
        )}
        {!loading && !error && filtered.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </main>

      <footer className="footer">
        <small>Built for the React Frontend Intern assignment</small>
      </footer>
    </div>
  )
}
