import React from 'react'
import {
  AboutContainer, AboutWrapper, AboutRow, Column1, Column2,
  TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img
} from './AboutElements'
import SuBwc from "../../images/SuBWc.png";

const AboutSection = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutWrapper>
          <AboutRow >
            <Column1>
              <ImgWrap>
                <Img src={SuBwc} alt="" />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>About Me</TopLine>
                <Heading>Web Developer</Heading>
                <Subtitle> Undergraduated in Civil Engineering from Unesp,
                  where I went through some areas and felt dissatisfied,
                  I looked for areas of technology, where I found myself
                  in programming. Today I love programming, I rediscovered
                  myself in the area of ​​web development, always looking to
                  be updated and adapting to the market.
                </Subtitle>
              </TextWrapper>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection