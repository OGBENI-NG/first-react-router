import React from "react"
import { NavLink, Link } from "react-router-dom"
import loginAvatar from "../img/login-avatar.png"
 

export default function Header() {
  

  return (
    <header>
      <nav>
        <Link to='/'>#vanlife</Link>
        <NavLink 
          to='/host'
          className={({isActive}) => isActive ? 'active--link' : null}
        >Host</NavLink>
        <NavLink 
          to="/about"
          className={({isActive}) => isActive ? 'active--link' : null}
          >About</NavLink>
        <NavLink 
          to='/vans'
          className={({isActive}) => isActive ? 'active--link' : null}
        >Vans</NavLink>
        <NavLink to="/login" className="login-link">
          <img src={loginAvatar}  className="login-icon"/>
        </NavLink>
      </nav>
    </header>
  )
}