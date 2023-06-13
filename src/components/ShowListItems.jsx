import React from 'react'
import { Link } from 'react-router-dom'

const ShowListItems = ({id, name, rating, image, genres}) => {
  return (
    // <div className='shows__item'>
    //   <Link to={`/shows/${id}`} className='shows__item-link'>
    //     <img className='shows__item-img' src={image} alt="" />
    //     <div className='shows__item-info'>
    //       <p className='shows__item-text'>{name}</p>
    //       <p className='shows__item-rating'>{ rating }</p>
    //     </div>
    //   </Link>
    // </div>
    <div className="film-card">
      <Link to={`/shows/${id}`}>
        <img className="film-poster" src={ image } alt="film-poster" />
        <h2 className="film-title">{name}</h2>
        </Link>
      <p className="film-genres">{`${genres}`}</p>
      {/* <div className="film-rating">
        <p className="rating">{ rating }</p>
      </div> */}
      {
        rating <= 5 ?
          <div className="film-rating-good">
          <p className="rating">{ rating }</p>
        </div> 
        :
        <div className="film-rating-bad">
        <p className="rating">{ rating }</p>
      </div>  
      }
    </div>
  )
}

export default ShowListItems