import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActorListItems from '../components/ActorListItems'
import { Input, Pagination } from 'antd';
import { useNavigate } from "react-router-dom";
import noimage from '../images/noimage.jpg'

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
    // <div>
    //   <div className='container'>
    //   <h1>Shows</h1>
    //   <Input placeholder="Press Enter to search something"
    //     style={{width: '95%', marginLeft: '28px'}}
    //     value={searchData}
    //     onChange={(e) => setSearchData(e.target.value)}
    //     onKeyUp={(e) => e.key === 'Enter' ? navigate(`/search?query=${searchData}`) : null}
    //   />
    //     <div className='shows'>
    //       {data.map((item) => {
    //         return <ActorListItems
    //           key={item.id}
    //           id={item.id}
    //           name={item.name}
    //           image={item.image?.medium ? item.image.medium : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`}
    //         />
    //       }) }
    //     </div>
    //   </div>
    // </div>
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
          }) }
        </div>
      </section>
    </div>
  )
}

export default Actors