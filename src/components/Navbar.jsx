import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()
  return (
    <div className='container'>
    {/* // <div className='navbar'>
    //   <div className="container">
    //     <nav className='navbar__nav'>
    //       <ul className='navbar__links'>
    //         <li className='navbar__link'><Link to='/'>Home</Link></li>
    //         <li className='navbar__link'><Link to='/people'>People</Link></li>
    //         <li className='navbar__link'><Link to='#'>Networks</Link></li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div> */}
      <nav className="nav">
        <img className="header-img" src={ logo } alt="logo" />
        <ul className="nav-list">
          <li className="nav-list-item"><Link to='/' className="nav-list-item-link">Фильмы</Link></li>
          <li className="nav-list-item"><Link to='/people' className="nav-list-item-link">Актёры</Link></li>
        </ul>
        <input
          className="header-input"
          type="text"
          placeholder="Type text to search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' ? navigate(`/search?query=${inputValue}`, setInputValue('')) : null}
        />
      </nav>
    </div>
  )
}

export default Navbar