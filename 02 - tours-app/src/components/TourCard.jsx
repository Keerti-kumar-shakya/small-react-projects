import React, { useState } from 'react'

const TourCard = ({id, image, name, info, price, removeTours}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='tour-card-container'>
      <div className="image-container">
        <img src= {image} alt="" className="tour-image" />
        <p className="tour-price">${price}</p>
      </div>

        <div className="description-tours-container">
          <h3 className='tour-name'>{name}</h3>

          <p className='tour-desc'>{readMore? info: `${info.substring(0,180)}...`}
          <button 
          className='btn-read'
          onClick={() => setReadMore(!readMore)}
          >{readMore? 'showLess': 'readMore'}</button>
          </p>
          <button onClick={() => removeTours(id)} className='btn-tour'>not interested</button>
        </div>
    </article>
  )
}

export default TourCard
