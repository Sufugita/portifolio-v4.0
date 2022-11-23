import React from 'react'
import '../components/Portfolio/Crud/frontend/CrudStyle/crud.css'
import Nav from '../components/Portfolio/Crud/frontend/template/Nav'
import Footer from "../components/Footer"
import NavbarPortfolio from "../components/Portfolio/NavbarPortfolio"

const Crud = function (props) {
   return <>
       <NavbarPortfolio />
       <div className="crud">
         <Nav />
       </div>
       <Footer />
     </>
 
 }
 
 export default Crud
 