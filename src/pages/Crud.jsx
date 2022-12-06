import React from 'react'
import '../components/Portfolio/Crud/frontend/CrudStyle/crud.css'
import Nav from '../components/Portfolio/Crud/frontend/template/Nav'
import Footer from "../components/Footer"
import NavbarPortfolio from "../components/Portfolio/NavbarPortfolio"
import MainHome from "../components/Portfolio/Crud/frontend/template/MainHome"

const Crud = function (props) {
  return <>
    <NavbarPortfolio title="Project CRUD React" />
    <div className="crud">
      <Nav />
      <MainHome/>
    </div>
    <Footer />
  </>

}

export default Crud
