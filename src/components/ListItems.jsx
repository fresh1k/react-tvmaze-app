import React from 'react'
import { Link } from 'react-router-dom'

const ListItems = ({id, name, rating, image,}) => {
  return (
    <div className='shows__item'>
      <Link to={`/${id}`} className='shows__item-link'>
        <img className='shows__item-img' src={image} alt="" />
        <div className='shows__item-info'>
          <p className='shows__item-text'>{name}</p>
          <p className='shows__item-rating'>{ rating }</p>
        </div>
      </Link>
    </div>
  )
}

export default ListItems