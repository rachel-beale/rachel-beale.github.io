import React from 'react'

import './styles/style.scss'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (<>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
  )
}


export default App