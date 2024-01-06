import React from 'react'
import { Link } from 'react-router-dom'
import navstyle from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={navstyle.nav_container}>
      <Link to='/'><h1>#VANLIFE</h1></Link>
      <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
      </nav>
    </header>
  )
}

export default Navigation
