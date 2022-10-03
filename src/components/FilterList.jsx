import React from 'react'
import './styles/cardFilter.css'

const FilterList = ({ suggestedList, setSearchInput }) => {

  const handleClick = id => setSearchInput(id)

  return (
    <div className='search'>
      <ul className='search__list'>
        {
          suggestedList?.map(location => (
            <li
              className='search__items'
              onClick={() => handleClick(location.id)}
              key={location.id}>
              {location.name}
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default FilterList