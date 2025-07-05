import React from 'react'
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (

  <div>
    <div className='header'>
        <div className='logo'>
          <img src="/logo1.jpg" alt="Logo" />
        </div>
        <input id='inputval' type='search' placeholder='Search'></input>

        <input type='checkbox' id='menubar' ></input>
        <label for="menubar" className='menu-icon '>
        <i className="ri-menu-line"></i>
        
        </label>
      <div className='navbar'>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/tutorial"> Tutorials </Link></li>
            <li> <Link to ="/aboutus">Aboutus </Link> </li>
            <li><Link to ="/contact">Contact </Link></li>
            </ul>
      </div>
    </div>

    </div>  
  )
}

export default Header;
