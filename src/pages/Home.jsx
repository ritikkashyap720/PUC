import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ width: '200px', background: '#f2f2f2', padding: '1rem' }}>
    <h3>Menu</h3>
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Home
