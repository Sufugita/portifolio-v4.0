import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  PortfolioContainer, PortfolioH1, PortfolioWrapper,
  PortfolioCard, PortfolioIcon, PortfolioH2, PortfolioP
} from './PortfolioElements'
// import { BrowserRouter as Router } from 'react-router-dom;

function Portfolio() {
  return (
    <>
      <PortfolioContainer id='portfolio'>
        <PortfolioH1>Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioCard >
            <PortfolioIcon src={Icon1} />
            <PortfolioH2 >Memory Game</PortfolioH2>
            <PortfolioP> React Hooks </PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2>Travel Site</PortfolioH2>
            <PortfolioP> Side Navigation Dropbar Routes</PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2>Figma to React</PortfolioH2>
            <PortfolioP> Rocketseat Project Tailwind Storybook</PortfolioP>
          </PortfolioCard>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio