import './Header.css'
import React from 'react'

export default function Header(props) {
  return <header className="header">
    <h1>
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p>{props.subtitle}</p>
  </header>
}