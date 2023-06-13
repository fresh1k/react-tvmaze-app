import React, { useEffect, useState } from 'react'
import { useLocation, } from "react-router-dom";
import axios from 'axios'
import ShowListItems from '../components/ShowListItems'
import ActorListItems from '../components/ActorListItems'
import noimage from '../images/noimage.jpg'
const SearchPage = () => {

  const [searchShowResults, setShowSearchResults] = useState([]);
  const [searchPersonResults, setPersonSearchResults] = useState([])

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const endpoints = [
    `https://api.tvmaze.com/search/shows?q=${query}`,
    `https://api.tvmaze.com/search/people?q=${query}`
  ]

  const getRequest = async () => {
    const responseRequest = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    const [list1, list2] = responseRequest
    const showData = list1.data.map((item) => {
      return {
        ...item.show
      }
    })
    setShowSearchResults(showData)
    const personData = list2.data.map((item) => {
      return {
        ...item.person
      }
    })
    setPersonSearchResults(personData)
    console.log(showData)
    console.log(personData)
    // const getShowRequest = async () => {
    //   setLoading(true)
    //   const responseShowRequest = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    //   if (responseShowRequest.data) {
    //     const list = responseShowRequest.data.map((item) => {
    //       return {
    //         ...item,
    //         // image: item.show.image
    //       }
    //     })
    //     console.log(list)
    //     setSearchResults(list)
    //   }
    //   setLoading(false)
    // }
  }

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <div className='container'>
      <section className="films-section">
        <h1 className='section-title'>Фильмы</h1>
        <div className="films">
          {searchShowResults.map((item) => {
            return <ShowListItems
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image?.medium ? item.image.medium : noimage}
              rating={item.rating.average ? item.rating.average : 0.0}
              genres={item.genres ? item.genres : 'No genres'}
            />
          }) }
        </div>
      </section>
      <section className="films-section">
      <h1 className='section-title'>Актёры</h1>
        <div className="films">
          {searchPersonResults.map((item) => {
            return <ActorListItems
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image?.medium ? item.image.medium : noimage}
            />
          }) }
        </div>
      </section>
    </div>
  )
}

export default SearchPage