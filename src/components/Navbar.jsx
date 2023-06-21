import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputValue, setInputValue] = useState('')

  const movieFavorites = JSON.parse(
    localStorage.getItem('favorite-movie')
  )

  const navigate = useNavigate()
  return (
    <div className='container'>
      <nav className="nav">
        <Link to='/'><img className="header-img" src={ logo } alt="logo" /></Link>
        <ul className="nav-list">
          <li className="nav-list-item"><Link to='/' className="nav-list-item-link">Фильмы</Link></li>
          <li className="nav-list-item"><Link to='/people' className="nav-list-item-link">Актёры</Link></li>
          <li className="nav-list-item"><Link to='/favorites' className="nav-list-item-link">Избранное<span>({ movieFavorites? movieFavorites.length : 0})</span></Link></li>
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