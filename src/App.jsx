import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  //Alternância do botão
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar setTheme={setTheme} toggle={toggle} />
        <Home setTheme={changeTheme} />
      </ThemeProvider>
    </Router>
  );
}

export default App; 
