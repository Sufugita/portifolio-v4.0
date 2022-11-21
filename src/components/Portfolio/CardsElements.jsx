import styled from "styled-components";
import { Link } from 'react-router-dom';


export const PortfolioContainer = styled.div`
   padding: 3rem;
   background: ${(props) => props.theme.BackColor};
   height: auto;
   z-index: 4;
   /* margin-top: -60px; */
   
   @media screen and (max-width: 768px) {
    padding: 20px 0;    
  }
   
`
export const PortfolioH1 = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.TextColor};
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  
  
`

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`
export const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`

export const CardsItems = styled.li`
   margin-bottom: 24px;
   list-style: none;
/* Ver se funciona em MOBILE */
   @media screen and (min-width: 1024px) { 
    display: flex;
}
`
export const CardsItem = styled.ul`
   display: flex;
   flex: 1;
   margin: 0 1rem;
   border-radius: 10px;
   

   @media screen and (max-width: 1024px) {
    margin-bottom: 2rem;
}

`
export const CardLink = styled(Link)`
   display: flex;
   flex-flow: column;
   width: 100%;
   box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
   -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
   filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
   border-radius: 10px;
   overflow: hidden;
   text-decoration: none;
`
export const CardsItemPicWrap = styled.div`
   position: relative;
   width: 100%;
   padding-top: 67%;
   overflow: hidden;

   ::after {
      content: attr(data-category);
      position: absolute;
      bottom: 0;
      padding: 4px 5px;
      max-width: calc((100%) - 60px);
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      background-color: ${(props) => props.theme.PrimaryColor};
      box-sizing: border-box;
   }

`
export const CardsItemImg = styled.img`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   display: block;
   width: 100%;
   max-width: 100%;
   height: 100%;
   max-height: 100%;
   object-fit: contain;
   transition: all 0.2s linear;

   &:hover {
      transform: scale(1.1)
   }
   
`
export const CardsItemInfo = styled.div`
   padding: 20px 30px 30px;
`

export const CardsItemText = styled.h5`
   color: ${(props) => props.theme.TextColor};
   font-size: 18px;
   line-height: 24px;
`







