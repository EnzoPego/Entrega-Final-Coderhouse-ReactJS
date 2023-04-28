
import React from 'react'
import './Header.css'
import logo from '../Header/HeaderLogo/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Link to="/">
    <div className="Header">
      <img src={logo} alt="logo" className="responsive-image" />
    </div>
    </Link>
  )
}

export default Header