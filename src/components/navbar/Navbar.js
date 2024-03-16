import React from 'react'
import "./navbar.css";

// IMages
import LOGO from "./assets/logo.png";


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={LOGO} alt='logo'/>
        </div>
    </div>
  )
}

export default Navbar
