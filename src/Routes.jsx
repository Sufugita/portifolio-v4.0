import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import MemoryGame from "./pages/MemoryGame";
import Crud from "./pages/Crud";
import NoPage from "./pages/NoPage";
import UserCrud from "./components/Portfolio/Crud/frontend/user/UserCrud";

export default (props) =>
   <Routes>
      <Route index element={<Home />} />
      <Route path="memorygame" element={<MemoryGame />} />
      <Route path="crud" element={<Crud />} />
      <Route path='/crud/users/' element={<UserCrud />} />
      <Route path="*" element={<NoPage />} />
   </Routes>