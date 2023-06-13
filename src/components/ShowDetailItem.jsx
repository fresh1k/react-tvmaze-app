import React from 'react'

const ShowDetailItem = ({id, name, image,  genres, summary, status, premiered, ended}) => {
  return (
    <div className='container'>
      <section className="show-section">
        <div className="show">
          <img className="show-photo" src={image} alt="film-poster" /> 
          <div className="show-info">
            <h1 className="show-info-name">{ name }</h1>
            <div className="show-info-params">
              <p className="show-info-param">Описание:</p>
              <p className="show-info-param">{ summary }</p>
              <p className="show-info-param">Статус:</p>
              <p className="show-info-param">{ status ? status : 'Информация Отсутствует' }</p>
              <p className="show-info-param">Жанры:</p>
              <p className="show-info-param">{genres ? genres : 'Информация Отсутствует'}</p>
              <p className="show-info-param">Премьера:</p>
              <p className="show-info-param">{premiered ? premiered : 'Информация Отсутствует'}</p>
              <p className="show-info-param">Окончание:</p>
              <p className="show-info-param">{ ended ? ended : 'Информация Отсутствует' }</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShowDetailItem