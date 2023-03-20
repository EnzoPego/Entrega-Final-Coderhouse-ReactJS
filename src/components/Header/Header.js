
import React from 'react'
import './Header.css'
import logo from '../Header/HeaderLogo/logo.png';


const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="logo" className="responsive-image" />
    </div>
  )
}

export default Header