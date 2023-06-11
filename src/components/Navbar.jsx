import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <nav className='navbar__nav'>
          <ul className='navbar__links'>
            <li className='navbar__link'><Link to='/'>Home</Link></li>
            <li className='navbar__link'><Link to='#'>People</Link></li>
            <li className='navbar__link'><Link to='#'>Networks</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar