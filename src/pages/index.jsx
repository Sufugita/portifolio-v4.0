import React from 'react'
import AboutSection from '../components/About'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import Portfolio from '../components/Portfolio'

const Home = () => {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home