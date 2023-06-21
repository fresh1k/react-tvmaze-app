import React, { useEffect } from 'react'
import './FilterMovie.css'

const FilterMovie = ({ setActiveGenre, setFiltered, activeGenre, data }) => {
  
  useEffect(() => {
    if (activeGenre === '') {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((movie) => movie.genres.includes(activeGenre))
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div className='filter-container'>
      <button className={ activeGenre === '' ? "active" : "" } onClick={() => setActiveGenre('')}>All</button>
      <button className={ activeGenre === 'Comedy' ? "active" : "" }  onClick={() => setActiveGenre('Comedy')}>Comedy</button>
      <button className={activeGenre === 'Family' ? "active" : ""} onClick={() => setActiveGenre('Family')}>Family</button>
      <button className={activeGenre === 'Food' ? "active" : ""} onClick={() => setActiveGenre('Food')}>Food</button>
      <button className={activeGenre === 'Fantasy' ? "active" : ""} onClick={() => setActiveGenre('Fantasy')}>Fantasy</button>
      <button className={activeGenre === 'Adventure' ? "active" : ""} onClick={() => setActiveGenre('Adventure')}>Adventure</button>
      <button className={activeGenre === 'Anime' ? "active" : ""} onClick={() => setActiveGenre('Anime')}>Anime</button>
      <button className={activeGenre === 'Adult' ? "active" : ""} onClick={() => setActiveGenre('Adult')}>Adult</button>
      <button className={activeGenre === 'Drama' ? "active" : ""} onClick={() => setActiveGenre('Drama')}>Drama</button>
      <button className={activeGenre === 'Travel' ? "active" : ""} onClick={() => setActiveGenre('Travel')}>Travel</button>
      <button className={activeGenre === 'Sports' ? "active" : ""} onClick={() => setActiveGenre('Sports')}>Sports</button>
      <button className={activeGenre === 'Nature' ? "active" : ""} onClick={() => setActiveGenre('Nature')}>Nature</button>
      <button className={activeGenre === 'Mystery' ? "active" : ""} onClick={() => setActiveGenre('Mystery')}>Mystery</button>
      <button className={activeGenre === 'Horror' ? "active" : ""} onClick={() => setActiveGenre('Horror')}>Horror</button>
      <button className={activeGenre === 'Crime' ? "active" : ""} onClick={() => setActiveGenre('Crime')}>Crime</button>
      <button className={activeGenre === 'Children' ? "active" : ""} onClick={() => setActiveGenre('Children')}>Children</button>
      <button className={activeGenre === 'Science-Fiction' ? "active" : ""} onClick={() => setActiveGenre('Science-Fiction')}>Science-Fiction </button>
    </div>
  )
}

export default FilterMovie