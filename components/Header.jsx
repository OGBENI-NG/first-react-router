import React from "react"
import { NavLink, Link } from "react-router-dom"
 

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
      </nav>
    </header>
  )
}