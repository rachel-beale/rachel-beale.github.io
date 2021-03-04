import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)

  return <nav>
    <div className="navbar">
      <Hamburger
        toggled={isOpen} toggle={setOpen}
      />
      <div className={isOpen ? 'burger' : 'hide'}>
        <a className="anchor" href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
}

export default NavBar

