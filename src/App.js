import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <Home />

      <Projects />
      <Skills />
      <About />
      <Contact/> 
       <Footer/> 
    </>
  )
}

export default App
