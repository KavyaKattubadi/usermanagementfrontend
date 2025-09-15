import React from 'react'

export default function UserCard({ user }) {
  return (
    <div className="card">
      <h3 className="card-name">{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
    </div>
  )
}
