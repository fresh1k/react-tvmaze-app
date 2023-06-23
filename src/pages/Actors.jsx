import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActorListItems from '../components/ActorListItems'
import { Pagination } from 'antd';
import { useNavigate } from "react-router-dom";
import noimage from '../images/noimage.jpg'
import ClipLoader from 'react-spinners/ClipLoader';


const Actors = () => {


  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [searchData, setSearchData] = useState('')

  const navigate = useNavigate();

  const getData = async (pageNumber) => {
    const page = pageNumber ? pageNumber : currentPage;
    setLoading(true)
    const response = await axios.get(`https://api.tvmaze.com/people?page=${page}`)
    if (response.data) {
      const list = response.data.map((item) => {
        return {
          ...item,
          image: item.image
        }
      })
      console.log(list)
      setData(list)
      setTotal(response.data.length)
    }
    setLoading(false)
  }

  async function onPageChange(page) {
    if (currentPage !== page) {
      setCurrentPage(page);
      await getData(page);
    }
  }

  useEffect(() => {
    getData(currentPage)
  }, [])

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color={'#3657CB'} loading={loading} size={50} cssOverride={{border: '8px solid #3657CB'}} />
        </div>
      ) : (
        
        <div className='container'>
        <section className="films-section">
          <Pagination
            current={currentPage}
            total={total}
            onChange={onPageChange}
            hideOnSinglePage={true}
            showSizeChanger={false}
          />


          <div className="films">
            {data.map((item) => {
              return <ActorListItems
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image?.medium ? item.image.medium : noimage}
              />
            })}
          </div>


          </section>
        </div>
      )}
    </>
  )
}

export default Actors