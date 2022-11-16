import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import MemoryGame from "./pages/MemoryGame";
import Crud from "./pages/Crud";
import NoPage from "./pages/NoPage";

export default (props) =>
   <Routes>
      <Route index element={<Home />} />
      <Route path="memorygame" element={<MemoryGame />} />
      <Route path="crud" element={<Crud />} />
      <Route path="*" element={<NoPage />} />
   </Routes>