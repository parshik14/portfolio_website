import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'

const Header = () => {
  return (
    <>
      <div 
        className='sticky top-4 z-50 bg-blue-300 flex justify-around items-center w-[90%] mx-auto gap-[30px] rounded-xl shadow-md py-2'
      >
        {/* Logo Section */}
        <div className="logo bg-cover">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink to="/" className="hover:text-white">About Me</NavLink>
          <NavLink to="/projects" className="hover:text-white">My Projects</NavLink>
          <NavLink to="/future" className="hover:text-white">Future Plan</NavLink>
        </div>

        {/* Contact Button */}
        <div>
          <NavLink to="/contact">
            <Button variant="contained" color="primary">
              Contact Me
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Header
