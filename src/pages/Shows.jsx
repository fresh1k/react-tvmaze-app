import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Input } from 'antd';
import { debounce } from '../utils/debounce'
import ListItems from '../components/ListItems'
import { useNavigate }  from "react-router-dom";

// const SEARCH_API = ` https://api.tvmaze.com/search/shows?q=${searchData}`

// "https://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg"


const Shows = () => {

  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true)
    const response = await axios.get('https://api.tvmaze.com/shows')
    if (response.data) {
      const list = response.data.map((item) => {
        return {
          ...item,
          image: item.image
        }
      })
      console.log(list)
      setData(list)
    }
    setLoading(false)
  }

  // const getShowRequest = async () => {
  //   setLoading(true)
  //   const responseShowRequest = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchData}`)
  //   if (responseShowRequest.data) {
  //     const list = responseShowRequest.data.map((item) => {
  //       return {
  //         ...item.show,
  //         image: item.show.image
  //       }
  //     })
  //     console.log(list)
  //     setData(list)
  //   }
  //   setLoading(false)
  // }

  // const onDebounce = debounce(getShowRequest, 200)



  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
      <h1>Shows</h1>
      <Input placeholder="Basic usage"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' ? navigate(`/search?query=${searchData}`) : null}
      />
      <div className='shows'>
        {data.map((item) => {
          return <ListItems
            key={item.id}
            id={item.id}
            name={item.name}
            // image={item.image.medium ? item.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
            image={item.image?.medium ? item.image.medium : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`}
            rating={item.rating.average ? item.rating.average : 0.0}
          />
        }) }
      </div>
    </div>
  )
}

export default Shows