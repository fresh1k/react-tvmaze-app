import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="header">
        {/* <nav class="nav">
          <img class="header-img" src="images/logo.png" alt="logo" />
          <ul class="nav-list">
            <li class="nav-list-item"><a class="nav-list-item-link"  href="#">Фильмы</a></li>
            <li class="nav-list-item"><a class="nav-list-item-link"  href="#">Актёры</a></li>
            <li class="nav-list-item"><a class="nav-list-item-link"  href="#">Медиа</a></li>
            <li class="nav-list-item"><a class="nav-list-item-link"  href="#">Новости</a></li>
          </ul>
          <input class="header-input" type="text" placeholder="Type text to search..." />
        </nav> */}
        <Navbar />
    </header>
  )
}

export default Header