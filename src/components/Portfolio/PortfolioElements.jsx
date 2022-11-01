import styled from "styled-components";

export const PortfolioContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.BackColor};
  padding-bottom: 3rem;
  padding-top:80px;
  
  
  @media screen and (max-width: 768px) {
    height: auto;
    background: ${(props) => props.theme.BackColor};
  }
  
  @media screen and (max-width: 480px) {
    //Important part for not overflow.
    height: 1250px; 
    background: ${(props) => props.theme.BackColor};
    padding-top: auto;
  }
  `
export const PortfolioH1 = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.TextColor};
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const PortfolioWrapper = styled.div`
  max-width: 1100px;
  margin: 0 15px;
  display: grid;
  //Aqui vai a quantidade de imagens lado a lado.
  grid-template-columns: 1fr 1fr 1fr; 
  align-items: center;
  grid-gap: 2rem;
  width:100%;
  padding: 0 20px;
  
 

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    width: 95%;
  
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const PortfolioCard = styled.div`
  background: ${(props) => props.theme.CardColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`
export const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`


export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: bold;
`

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`