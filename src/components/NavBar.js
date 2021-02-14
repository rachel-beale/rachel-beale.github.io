import React, { useState } from 'react'

const NavBar = () => {
  const [clicked, setClicked] = useState(false)

  return <nav>
    <div className="navbar">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

  </nav>
}

export default NavBar

