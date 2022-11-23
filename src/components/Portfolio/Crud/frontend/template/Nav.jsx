import './Nav.css'
import React from 'react'

export default function Nav(props) {
  return <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar em casa (NavItem) */}
      <a href="/crud">
        <i className="fa fa-home"></i> Home
      </a>
      <a href="/crud/users">
        <i className="fa fa-users"></i> Users
      </a>
    </nav>
  </aside>
}
