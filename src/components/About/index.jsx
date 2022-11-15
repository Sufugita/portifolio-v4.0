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
                <Subtitle>
                  My first contact with development technology was in 2001, creating websites in html, hosting on HpG (Home Page 'Free'), 
                  just for fun, in an era of dial-up internet (56kbps) that was constantly disconnecting.
                  I have always been passionate about innovations, I remember the times of creating animations in Macromedia Flash, from the delay in 
                  formatting Windows 98 by booting via floppy disk, keeping all the media and cds in the mobo box to be able to install the drivers,
                  And everything for the old computer to be able to work and lessen the problems of BSOD (blue screen of death).
                  <br/>
                  <br/>
                  Undergraduated in Civil Engineering (Unesp),
                  I looked for areas of technology, where I found myself
                  in programming. Today I love programming, I rediscovered
                  myself in ​​web development area.
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