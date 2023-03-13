import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import headLogo from "../../assets/headLogo.svg";


const NavBar = () => {
  const menu = [
    { url: "/", title: "Home", id: 1 },
    { url: "/companion", title: "Companion", id: 2 },
    { url: "/conocimiento", title: "Conocimiento", id: 3 },
    { url: "/contacto", title: "Contacto", id: 4 },
  ]
  let activeStyle = { color: "crimson" };
  return (

<nav className="navbar navbar-expand-md navbar-dark bg-dark container-fluid">
  <div className="container-fluid">
    <a className="navbar-brand d-md-none" href="#">
      <img className='logoNav' src={headLogo} alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
      {menu.map((link) => (
                <li className='nav-item' key={link.id}>
                  <NavLink
                    className='nav-link'
                    to={link.url}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    {link.title}
                  </NavLink>
                </li>
              ))}
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar