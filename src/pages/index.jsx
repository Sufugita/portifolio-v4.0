import React, { useState } from 'react'
import AboutSection from '../components/About'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Sidebar from '../components/Sidebar'

const Home = ({ setTheme }) => {

  //Alternância do botão
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar setTheme={setTheme} toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home