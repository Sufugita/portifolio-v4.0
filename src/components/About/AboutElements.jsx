import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${(props) => props.theme.BackColor};
  
  @media screen and (max-width: 768px) {
    padding: 20px 0;    
  }
`

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
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
  grid-template-areas:'col2 col1';
// Muito bom para pequenas telas e deixar um em cima de outro.
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';   
    grid-auto-columns: minmax(auto, auto);
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
 

`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
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
    height: auto;
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
  max-width: 700px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  padding-right: 0; 
  border-radius: 25%;
  scale:0.6;
`
