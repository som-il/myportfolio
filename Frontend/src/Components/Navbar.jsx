import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
   <>
   <div className='container'>
    <navbar className="nav">
        <NavLink to={'/'} className='nav-link'>Home</NavLink>
        <NavLink to={'/about'}  className='nav-link'>About</NavLink>
        <NavLink to={'/project'}  className='nav-link'>Project</NavLink>
       <NavLink to={'/skills'}  className='nav-link'>Skills</NavLink>
      <NavLink to={'/contact'}  className='nav-link'>Contact</NavLink>
    </navbar>
   </div>
   </>
  )
}

export default Navbar
