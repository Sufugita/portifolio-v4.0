import React from "react";
import Home from './pages/Home';
import MemoryGame from "./pages/MemoryGame";
import Crud from "./pages/Crud";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="memorygame" element={<MemoryGame />} />
        <Route path="crud" element={<Crud />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
