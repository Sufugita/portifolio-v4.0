import React from 'react'

import {
  PortfolioContainer, PortfolioH1,
  CardsContainer, CardsWrapper,
  CardsItems
} from './CardsElements'
import CardItem from './CardItem'
import img1 from '../../images/memoryGame.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'



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
                text="JavaScript | CSS3 | ReactJS"
                label='Memory Game'
                path='/memorygame'
              /><br />
              <CardItem
                src={img2}
                text="Backend | Frontend | ReactJS | Firebase"
                label='Crud - Create | Read | Update | Delete'
                path='/crud'
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