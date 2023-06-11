import React, { useEffect, useState } from 'react'
import { useParams, useLocation, } from "react-router-dom";
import axios from 'axios'
import ListItems from '../components/ListItems'
const SearchPage = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false)

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const getShowRequest = async () => {
    setLoading(true)
    const responseShowRequest = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    if (responseShowRequest.data) {
      const list = responseShowRequest.data.map((item) => {
        return {
          ...item.show,
          image: item.show.image
        }
      })
      console.log(list)
      setSearchResults(list)
    }
    setLoading(false)
  }

  useEffect(() => {
    getShowRequest()
  }, [])

  return (
    <div>
      <h1>Search Page</h1>
      <div className='shows'>
        {searchResults.map((item) => {
          return <ListItems
            key={item.id}
            id={item.id}
            name={item.name}
            // image={item.image.medium ? item.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
            image={item.image?.medium ? item.image.medium : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`}
            rating={item.rating.average ? item.rating.average : 0.0}
          />
        })}
      </div>
    </div>
  )
}

export default SearchPage