import React from 'react'
import './Header.css'
import Buttons from './Buttons'
import Nav from '../nav/Nav'

const header = () => {
  return (
    <header id='home'>
        <div className="container header_container">
            <h3>Hello I'm</h3>
            <h1>Maksim Filius</h1>
            <h2>Frontend Developer</h2>
            <Buttons />
            <Nav />
        </div>
    </header>
  )
}

export default header