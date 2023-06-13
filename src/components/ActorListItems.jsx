import React from 'react'
import { Link } from 'react-router-dom'

const ActorListItems = ({id, name, rating, image, url}) => {
  return (
    <div className="film-card">
      <Link to={`/people/${id}`}>
        <img className="film-poster" src={ image } alt="film-poster" />
        <h2 className="film-title">{name}</h2>
        </Link>
    </div>
  )
}

export default ActorListItems