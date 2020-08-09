import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"
import LogoSanber from '../../Assets/img/logo.png'

const Nav = () => {
  return (
    <nav>
      <img src={LogoSanber} alt="Sanber" className='logoSanber' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/movie-list-editor">Movie List Editor</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
