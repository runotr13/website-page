import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
      <div>
    <div className="containerNavbar">
    
    <h2>ONUR <span>Web Design</span></h2>
    
    <div className="navbar">
        
    <NavLink to="/" className="Linkler">HOME</NavLink>
    <NavLink to="/About" className="Linkler">ABOUT</NavLink>
    <NavLink to="/Services" className="Linkler">SERVICES</NavLink>
    </div>
    </div>
    <div className="containerHeader">
        <h2>Subscribe To Our Bnewsletter</h2>
        <div className="form">
            <input type="text" placeholder='Enter Email'/>
            <button>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar