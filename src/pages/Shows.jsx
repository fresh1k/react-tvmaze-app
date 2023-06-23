import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Pagination  } from 'antd';
import ShowListItems from '../components/ShowListItems'
import noimage from '../images/noimage.jpg'
import FilterMovie from '../components/FilterMovie/FilterMovie';
import { motion, AnimatePresence } from 'framer-motion';
import ClipLoader from 'react-spinners/ClipLoader';


const Shows = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState('')


  const getData = async (pageNumber) => {
    const page = pageNumber ? pageNumber : currentPage;
    setLoading(true)
    const response = await axios.get(`https://api.tvmaze.com/shows?page=${page}`)
    if (response.data) {
      const list = response.data.map((item) => {
        return {
          ...item,
        }
      })
      setData(list)
      setFiltered(list)
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
          <ClipLoader color={'#3657CB'} loading={loading} size={50} cssOverride={{ border: '8px solid #3657CB' }} />
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
            <FilterMovie data={data} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
            <motion.div className="films">
              <AnimatePresence>
                {filtered.map((item) => {
                  return <ShowListItems
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image?.medium ? item.image.medium : noimage}
                    rating={item.rating?.average ? item.rating?.average : 0.0}
                    genres={item.genres ? `${item.genres.join(', ')}` : 'No genres'}
                    data={item}
                  />
                })}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>
      )}
    </>
  )
}

export default Shows