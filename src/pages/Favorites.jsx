import React, { useContext, useEffect } from 'react'
import ShowListItems from '../components/ShowListItems'
import FavoritesContext from '../context/FavoritesContext'
import noimage from '../images/noimage.jpg'

const Favorites = () => {
  const { favorites,  setFavorites} = useContext(FavoritesContext)

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('favorite-movie')
    )
    setFavorites(movieFavorites)
  }, [])



  return (
    <div className='container'>
      <section className='films-section'>
        <div className="films">
          {
            favorites !== null || undefined ? 
              favorites.map((item) => {
                return <ShowListItems
                key={item?.id}
                id={item?.id}
                name={item?.name}
                image={item?.image?.medium ? item.image.medium : noimage}
                rating={item?.rating?.average ? item.rating?.average : 0.0}
                genres={item?.genres ? `${item.genres.join(', ')}` : 'No genres'}
                data={item}  
                />
              })
            :
            null  
          }
        </div>
      </section>
    </div>
  )
}

export default Favorites