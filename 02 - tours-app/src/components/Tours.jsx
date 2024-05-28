import React from 'react'
import TourCard from './TourCard'

const Tours = ({tourData, removeTours}) => {
  console.log(tourData);
  return (
   <section className='tours-container'>
    {tourData.map( (tours) => <TourCard 
    key={tours.id} {...tours}
    removeTours = {removeTours}
    />)}
   </section>
  )
}

export default Tours
