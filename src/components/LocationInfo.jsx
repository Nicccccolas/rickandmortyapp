import React from 'react'
import './styles/locationInfo.css'
const LocationInfo = ({ location }) => {
  return (
    <article className='card__location'>
      <h2 className='card__location-name'>{location?.name}</h2>
      <ul className='card__location-list'>
        <li className='card__location-items'><span className='card__location-span'>Id: </span>{location?.id}</li>
        <li className='card__location-items'><span className='card__location-span'>Type: </span>{location?.type}</li>
        <li className='card__location-items'><span className='card__location-span'>Dimension: </span>{location?.dimension}</li>
        <li className='card__location-items'><span className='card__location-span'>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo