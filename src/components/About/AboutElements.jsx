import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${(props) => props.theme.BackColor};
  min-height: 850px;
  @media screen and (max-width: 768px) {
    padding: 20px 0;    
    min-height: 950px;
  }
`

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 3;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: auto 24px;
  justify-content: center;
  height:100vh;
`

// Importante Cols! Learning more about.
export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas:'col1 col2';
// Muito bom para pequenas telas e deixar um em cima de outro.
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';   
    grid-auto-columns: minmax(auto, auto);
    grid-auto-rows: minmax(auto,450px);
  }
 
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    grid-auto-rows: minmax(auto,360px);
    max-height: auto;
  }
  @media screen and (max-width: 360px) {
    display: none; 
  }
  
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    max-height: auto;
  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  
`

export const TopLine = styled.p`
  color: ${(props) => props.theme.TextColor};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;    
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color:${(props) => props.theme.PrimaryColor};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;    
  }
 
`

export const Subtitle = styled.p`
  max-width: 768px;
  margin-top: 4rem;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  color: ${(props) => props.theme.TextColor};
  display: flex;
  justify-content: center;
`


export const ImgWrap = styled.div`
  max-width: auto;
  height: auto;
`

export const Img = styled.img`
  width: 100%;
  border-radius: 25%;
  scale:0.8;
  @media screen and (max-width: 768px) {
    scale: 0.5;
  }
  @media screen and (max-width: 300px) {
    display: none;
  }
`
