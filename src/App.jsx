import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";



function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Home setTheme={changeTheme} />
      </ThemeProvider>
    </Router>
  );
}

export default App; 
