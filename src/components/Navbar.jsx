import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-black'>
      <Link to="/profile">Profile</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar