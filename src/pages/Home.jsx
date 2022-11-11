import React, { useState } from 'react'
import AboutSection from '../components/About'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from "../components/Footer"
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "../styles/theme";
import { GlobalStyle } from '../styles/GlobalStyle';

const Home = () => {


  // Implementação dos themes DarkMode|LightMode
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  // Alternância do botão da Sidebar
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar changeTheme={changeTheme} toggle={toggle} />
        <HeroSection />
        <AboutSection />
        <Portfolio />
        <Contact />
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Home