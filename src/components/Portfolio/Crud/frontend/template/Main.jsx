import './Main.css'
import React from 'react'
import Header from './Header'

export default function Main(props) {
  return <React.Fragment>
    <Header {...props} />
    <main className="content">
      <div className="texto" >
        {props.children}
      </div>
    </main>
  </React.Fragment>
}
