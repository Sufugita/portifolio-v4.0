import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
  background:${(props) => props.theme.BackColor};
  display: flex;
  justify-content: center;
  align-items: center;
  /* Altura do video esta estranha */
  height: 960px;
  position: relative;
  z-index: 1;
  

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;   
    z-index: 2;
    background: linear-gradient(180deg, rgb(242, 242, 243,1) 0%,rgba(255,255,255,0.2) 50%,rgb(242, 242, 243,1) 100%),
    linear-gradient(180deg, rgb(242, 242, 243,0.8) 0%, transparent 100%);
  }
  @media screen and (max-width: 768px) {
    height: 770px;
  }
  @media screen and (max-width: 480px) {
    height: 570px;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #333;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const HeroP = styled.p`
  margin-top: 24px;
  color: #333;
  font-size: 24px;
  text-align: justify;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

