// import About from "../pages/About"
// import Help from "../pages/Help"
// import Create from "../pages/Create"
// import Home from "../pages/Home"
import { NavLink } from "react-router-dom"

// import {Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <nav className="nav-items">

        <NavLink className="nav-logo" to='/'>loGO</NavLink>
        
        <nav className="nav-links">
          <ul className="nav-links-items">
            <NavLink className="navbarlink" to='/'>Home</NavLink>
            <NavLink className="navbarlink" to='about'>About</NavLink>
            <NavLink className="navbarlink" to='help'>Help</NavLink>
            <NavLink className="navbarlink" to='careers'>Careers</NavLink>
          </ul>
        </nav>

      </nav>
      
    </nav>
  )
}
