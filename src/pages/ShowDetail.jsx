import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import ShowDetailItem from '../components/ShowDetailItem';

const ShowDetail = () => {

  const params = useParams()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const regex = /(<([^>]+)>)/gi;

  const getData = async (id) => {
    setLoading(true)
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    if (response.data) {
      console.log(response.data)
      setData({
        ...response.data,
        summary: response.data.summary.replace(regex, '')
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    const paramId = params.id ?? '';
    getData(paramId)
  }, [params])

  const { id, name, image,  rating, summary, status, genres, premiered, ended}  = data

  return (
    <div>
      <ShowDetailItem
        key={id}
        name={name}
        image={image?.medium}
        rating={rating?.average}
        summary={summary}
        status={status}
        genres={genres}
        premiered={premiered}
        ended={ended}
      />

    </div>
  )
}

export default ShowDetail