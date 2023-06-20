import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import FavoritesContext from '../context/FavoritesContext'
const ShowListItems = ({ id, name, image, rating, genres, data }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { toggleFavoriteMovie } = useContext(FavoritesContext)


  const onClick = (item) => {
    toggleFavoriteMovie(item)
    if (!isFavorite) {
      setIsFavorite(true)
    }
    else {
      setIsFavorite(false)
    }
  }
  

  return (
      <div className="film-card">
      <Link to={`/shows/${id}`}>
        <img className="film-poster" src={image} alt="film-poster" />
        <h2 className="film-title">{name}</h2>
        </Link>
        <p className="film-genres">{`${genres}`}</p>
      {
        rating >= 5 ?
          <div className="film-rating film-rating-good">
          <p className="rating">{rating}</p>
        </div> 
        :
        <div className="film-rating film-rating-bad">
        <p className="rating">{rating}</p>
      </div>  
          }
      {/* <FontAwesomeIcon onClick={() => addFavouriteMovie(data)} icon={faHeart} size='lg' style={{ color: '#005eff', cursor: 'pointer' }} /> */}
      <FontAwesomeIcon
        onClick={() =>  onClick(data)}  
        icon={isFavorite ? faHeartSolid : faHeartRegular }
        size='lg'
        style={{ color: '#005eff', cursor: 'pointer' }} />
    </div>
  )
}

export default ShowListItems