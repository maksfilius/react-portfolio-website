import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <a href='#home'>Home</a>
      <a href='#skills'>Skills</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
      <div className="animation start-home"></div>
    </nav>
  )
}

export default Nav