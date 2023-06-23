import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import ActorDetailItem from '../components/ActorDetailItem';
import noimage from '../images/noimage.jpg'
import { Link } from 'react-router-dom'

const ActorDetail = () => {

  const params = useParams()

  const [data, setData] = useState([])
  const [actorShowData, setActorShowData] = useState([])
  const [actorShowCrewData, setActorShowCrewData] = useState([])
  const [loading, setLoading] = useState(false)



  const getData = async (id) => {
    const endpoints = [
      `https://api.tvmaze.com/people/${id}`,
      `https://api.tvmaze.com/people/${id}/castcredits?embed=show`,
      `https://api.tvmaze.com/people/${id}/crewcredits?embed=show`,
    ]
    setLoading(true)
    const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    const [actor, actorCastShow, actorCrewShow] = response
    if (actor.data) {
      console.log(actor.data)
      setData(actor.data)
    }
    if (actorCastShow.data) {
      const actorShowList = actorCastShow.data?.map((item) => {
        return {
          ...item._embedded.show
        }
      })

      console.log(actorShowList)
      setActorShowData(actorShowList)
    }
    if (actorCrewShow.data) {
      const actorCrewShowList = actorCrewShow.data?.map((item) => {
        return {
          ...item._embedded.show
        }
      })
      console.log(actorCrewShowList)
      setActorShowCrewData(actorCrewShowList)
    }
    setLoading(false)
  }

  useEffect(() => {
    const paramId = params.id ?? '';
    getData(paramId)
  }, [params])

  const { id, name, image, birthday, country, gender} = data

  return (
    <>
      <ActorDetailItem
        key={id}
        name={name}
        image={image?.medium ? image.medium : noimage}
        country={country?.name}
        birthday={birthday}
        gender={gender}
      />

      {
        actorShowData.length > 0 ?
          <section className="cast-section">
            <div className='container'>

              <p className="section-title">Шоу, в которых {name} <span>{ gender === 'Female' ? 'снималась' : 'снимался' }</span></p>
              <div className="cast">
                {actorShowData.map((item) => 
                  <div className="cast-item" key={item?.id}>
                    <Link to={`/shows/${item?.id}`}>
                      <img className="cast-img" src={item.image ? item.image.medium : noimage} alt="cast-img" />
                      <h2 className="cast-name">{item.name}</h2>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
          :
          null
      }

{
        actorShowCrewData.length > 0 ?
          <section className="crew-section">
            <div className='container'>

              <p className="section-title">Шоу, которые { name } продюсировал</p>
              <div className="crew">
                {actorShowCrewData.map((item) => 
                  <div className="crew-item" key={item?.id}>
                    <Link to={`/shows/${item?.id}`}>
                      <img className="crew-img" src={item.image ? item.image.medium : noimage} alt="cast-img" />
                      <h2 className="crew-name">{item.name}</h2>
                    </Link>
                    <p className="crew-type">{ item?.type }</p>
                  </div>
                )}
              </div>
            </div>
          </section>
          :
          null
      }

    </>
  )
}

export default ActorDetail