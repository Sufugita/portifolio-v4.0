import React, { useState } from 'react'
import Video from '../../videos/456.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id='hero'>
      <HeroBg> 
        <VideoBg 
        autoPlay 
        loop 
        muted 
        src={Video} 
        type='video/mp4' 
        />
      </HeroBg>
      <HeroContent>
        <HeroH1> Hello! <br/> Welcome to my site! <br/> My name is <br/> Fernando Fugita. </HeroH1>
        <HeroP>  <br/> I design and develop services for clients, 
          specializing in creating new ideas, elegant and modern websites. 
          I edit and create videos for social media and give tips for the 
          current area of ​​digital marketing.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover}
          primary="true"
          dark="true">
            Contact Me{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection