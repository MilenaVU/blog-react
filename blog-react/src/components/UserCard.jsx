import React from 'react';

export default function UserCard({ user }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '0.5rem',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <img src={user.photo} alt={user.name} style={{ width: '100%', borderRadius: '50%' }} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}