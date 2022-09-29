import React, { useState } from 'react'

const Buttons = () => {
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className='buttons'>
        <a href='#' download className='btn' id={isActive ? "wiggle" : null} onClick={handleToggle}>Download CV</a>
        <a href='#contact' className='btn btn_second'>Contact me</a>
    </div>
  )
}

export default Buttons