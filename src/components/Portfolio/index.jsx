import React from 'react'

import {
  PortfolioContainer, PortfolioH1,
  CardsContainer, CardsWrapper,
  CardsItems
} from './CardsElements'
import CardItem from './CardItem'
import img1 from '../../images/memoryGame.jpg'
import img2 from '../../images/svg-2.svg'
import img3 from '../../images/svg-3.svg'
import img4 from '../../images/svg-4.svg'
import img5 from '../../images/svg1.svg'



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
                label='CRUD - Create | Read | Update | Delete'
                path='/crud'
              />

            </CardsItems>
            <CardsItems>
              <CardItem
                src={img3}
                text="JavaScript | CSS3 | ReactJS "
                label='Calculadora'
                path='/calculadora'
              /><br />
              <CardItem
                src={img4}
                text="JavaScript | ReactJS"
                label='Desktop Aplication'
                path='/electronjs'
              />
              <CardItem
                src={img5}
                text="API autentication? Backend? Vue? Angular?"
                label='Under Construction'
                path='/notfound'
              />
            </CardsItems>
          </CardsWrapper>
        </CardsContainer>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio