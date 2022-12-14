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
        <HeroH1>  Welcome to my site! <br /> My name is Fernando Fugita. </HeroH1>
        <HeroP>  <br />
          I design and develop services for clients,
          creating new ideas and modern websites.
          I also edit and create videos for social midia and give tips
          for the current ​​digital marketing area.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} spy={true} smooth={true} offset={0} duration={500}
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