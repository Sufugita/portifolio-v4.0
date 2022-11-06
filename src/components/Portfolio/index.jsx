import React from 'react'
import {
  PortfolioContainer, PortfolioH1,
  CardsContainer, CardsWrapper,
  CardsItems
} from './CardsElements'
import CardItem from './CardItem'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

// import { BrowserRouter as Router } from 'react-router-dom;

function Portfolio() {
  return (
    <>
      <PortfolioContainer id='portfolio'>
        <PortfolioH1>Portfolio</PortfolioH1>
        <CardsContainer>
          <CardsWrapper>
            <CardsItems>
              <CardItem
                src={img1}
                text="React Hooks"
                label='Memory Game'
                path='/memory'
              /><br />
              <CardItem
                src={img2}
                text="Experience Football on Top of the Himilayan Mountains"
                label='Adventure'
                path='/products'
              />
              
            </CardsItems>
            <CardsItems>
              <CardItem
                src={img3}
                text="Set Sail in the Atlantic Ocean visiting"
                label='Mystery'
                path='/services'
              /><br />
              <CardItem
                src={img3}
                text="Experience Football on Top of the Himilayan Mountains"
                label='Adventure'
                path='/products'
              /><br />
              <CardItem
                src={img3}
                text="Experience Football on Top of the Himilayan Mountains"
                label='Adventure'
                path='/products'
              />
            </CardsItems>
          </CardsWrapper>
        </CardsContainer>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio