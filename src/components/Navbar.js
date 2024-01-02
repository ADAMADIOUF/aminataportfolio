import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { links } from '../data'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/f2logo.png'
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  
  const navbarHeight = 80 

  return (
    <nav className='navbar'>
      <div className='nav-header nav-center'>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <span className='logo'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Apply the negative navbar height as an offset
          >
            <img src={logo} alt='' />
          </Link>
        </span>
       
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id} className='nav-item'>
                <Link
                  activeClass='active'
                  to={href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  onClick={handleItemClick}
                >
                  {text}
                </Link>
                
              </li>
               
            )
          })}
        </ul>
       
      </div>
    </nav>
  )
}

export default Navbar
