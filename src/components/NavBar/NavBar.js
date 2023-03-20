import React from 'react';
import Shop from '../Shop/Shop';
import './NavBar.css';

const NavBar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com/">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com/">Contacto</a>
          </li>
          <li className="nav-item">

           <spam>2</spam>

            <Shop />
             
          </li>
          

        </ul>
      </nav>
    );
  }
  
export default NavBar;