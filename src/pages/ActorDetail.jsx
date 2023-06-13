import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import ActorDetailItem from '../components/ActorDetailItem';
import noimage from '../images/noimage.jpg'

const ActorDetail = () => {

  const params = useParams()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async (id) => {
    setLoading(true)
    const response = await axios.get(`https://api.tvmaze.com/people/${id}`)
    if (response.data) {
      console.log(response.data)
      setData(response.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    const paramId = params.id ?? '';
    getData(paramId)
  }, [params])

  const { id, name, image, birthday, country, gender} = data

  return (
    <div>
      <ActorDetailItem
        key={id}
        name={name}
        image={image?.medium ? image.medium : noimage}
        country={country?.name}
        birthday={birthday}
        gender={gender}
      />

    </div>
  )
}

export default ActorDetail