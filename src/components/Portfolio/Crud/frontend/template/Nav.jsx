import './Nav.css'
import React from 'react'
import { FaHome, FaUserCircle } from 'react-icons/fa'

export default function Nav(props) {
  return <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar em casa (NavItem) */}
      <a href="/crud">
        <FaHome /> Home
      </a>
      <a href="/crud/users">
        < FaUserCircle /> Users
      </a>
    </nav>
  </aside>
}
