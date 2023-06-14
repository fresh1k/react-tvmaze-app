import React from 'react'
import { Link } from 'react-router-dom'

const ShowDetailCrew = ({id, name, image, type }) => {
  return (
    <div>
      <div className="crew-item">
      <Link to={`/people/${id}`}>
        <img className="crew-img" src={image} alt="crew-img"/>
          <h2 className="crew-name">{name}</h2>
      </Link>
        <p className="crew-type">{ type }</p>
      </div>
    </div>
  )
}

export default ShowDetailCrew