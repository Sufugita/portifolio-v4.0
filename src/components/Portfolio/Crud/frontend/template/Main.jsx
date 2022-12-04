import './Main.css'
import React from 'react'

export default function Main(props) {
  return <>
    <main className="content">
      <div className="texto" >
        {props.children}
        Opa
      </div>
    </main>
  </>
}
