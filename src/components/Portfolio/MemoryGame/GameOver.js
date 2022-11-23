import React, { Fragment } from 'react'

export default function GameOver(props) {
  return (props.show ?
    <div id="gameOver">
      <div id="textoFinal">
        Gratz! <br />
      </div>
      <button id="restart" onClick={props.handleRestart}>Play Again.</button>
    </div> : <Fragment />

  )
}
