import React from 'react'
import { Link } from 'react-router-dom'

const ShowDetailCast = ({id, name, image, character }) => {
  return (
    <div>
      <div className="cast-item">
      <Link to={`/people/${id}`}>
        <img className="cast-img" src={ image } alt="cast-img" />
          <h2 className="cast-name">{name}</h2>
        </Link>
        <p className="cast-type">{ character }</p>
      </div>
    </div>
  )
}

export default ShowDetailCast