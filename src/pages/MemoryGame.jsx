import React, { useEffect, useState } from 'react'
import GameBoard from '../components/Portfolio/MemoryGame/GameBoard';
import GameOver from '../components/Portfolio/MemoryGame/GameOver'
import game from '../components/Portfolio/MemoryGame/game'
import '../components/Portfolio/MemoryGame/MemoryStyle/memoryGame.css'
import NavbarPortfolio from "../components/Portfolio/NavbarPortfolio";
import Footer from "../components/Footer"



export default function MemoryGame() {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }

  function handleFlip(card) {
    game.flipCard(card.id, () => {
      // GameOverCallback
      setGameOver(true)

    }, () => {
      // NoMatchCallback
      setCards([...game.cards])
    })
    setCards([...game.cards])
  }


  return (
    <>
      <NavbarPortfolio />
      <div className="memoryDiv">
        <h1 className="memoryTitle">Memory Game by Igor Oliveira</h1>
        <h2 className="memorySubtitle">ProgBr</h2>
        <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
        <GameOver show={gameOver} handleRestart={restart}></GameOver>
      </div>
      <Footer/>
    </>
  )
}
