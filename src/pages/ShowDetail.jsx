import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import ShowDetailItem from '../components/ShowDetailItem';
import ShowDetailCast from '../components/ShowDetailCast';
import ShowDetailCrew from '../components/ShowDetailCrew';
import noimage from '../images/noimage.jpg'

const ShowDetail = () => {

  const params = useParams()

  const [showData, setShowData] = useState([])
  const [crewData, setCrewData] = useState([])
  const [castData, setCastData] = useState([])
  const [loading, setLoading] = useState(false)

  const regex = /(<([^>]+)>)/gi;



  const getData = async (id) => {
    const endpoints = [
      `https://api.tvmaze.com/shows/${id}/crew`,
      `https://api.tvmaze.com/shows/${id}/cast`,
      `https://api.tvmaze.com/shows/${id}`
    ]
    setLoading(true)
    // const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    // if (response.data) {
    //   console.log(response.data)
    //   setData({
    //     ...response.data,
    //     summary: response.data.summary.replace(regex, '')
    //   })
    // }
    // setLoading(false)
    const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    const [crew, cast, show] = response
    if (crew.data) {
      const crewList = crew.data.map((item) => {
        return {
          ...item.person,
          type: item.type
        }
      })
      console.log(crewList)
      setCrewData(crewList)
    }
    if (cast.data) {
      const castList = cast.data.map((item) => {
        return {
          ...item.person,
          character: item.character
        }
      })
      console.log(castList)
      setCastData(castList)
    }
    if (show.data) {
        console.log(show.data)
      setShowData({
          ...show.data,
          summary: show.data.summary.replace(regex, '')
        })
      }
  }

  useEffect(() => {
    const paramId = params.id ?? '';
    getData(paramId)
  }, [params])

  const { id, name, image,  rating, summary, status, genres, premiered, ended}  = showData

  return (
    <div className='container'>
      <ShowDetailItem
        key={id}
        name={name}
        image={image?.medium ? image.medium : noimage}
        rating={rating?.average}
        summary={summary}
        status={status}
        genres={genres}
        premiered={premiered}
        ended={ended}
      />
      <section className="crew-section" >
        <p className="section-title">Создатели</p>
        <div className="crew">
      {
        crewData.map((item) => {
          return <ShowDetailCrew
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image?.medium ? item.image.medium : noimage}
            type={item.type}
          />
        })
          }
          </div>
      </section>
      <section className="cast-section">
        <p className="section-title">Актёры</p>
        <div className="cast">
          {castData.map((item) => {
            return <ShowDetailCast
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image?.medium ? item.image.medium : noimage}
            character={item.character.name}  
            />
          }) }
        </div>
      </section>
    </div>
  )
}

export default ShowDetail