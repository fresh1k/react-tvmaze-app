import React from 'react'

const ActorDetailItem = ({id, name, image,  birthday, country, gender}) => {
  return (
    <div className='container'>
      <section className="show-section">
        <div className="show">
          <img className="show-photo" src={image} alt="film-poster" /> 
          <div className="show-info">
            <h1 className="show-info-name">{ name }</h1>
            <div className="show-info-params">
              <p className="show-info-param">Дата рождения:</p>
              <p className="show-info-param">{ birthday ? birthday : 'Информация Отсутствует' }</p>
              <p className="show-info-param">Страна рождения:</p>
              <p className="show-info-param">{ country ? country : 'Информация Отсутствует' }</p>
              <p className="show-info-param">Пол:</p>
              <p className="show-info-param">{gender ? gender : 'Информация Отсутствует'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActorDetailItem