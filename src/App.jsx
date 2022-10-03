import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorSearch from './components/ErrorSearch'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import image2 from './assets/img/image2.png'
import header4 from './assets/img/header4.png'


function App() {

  // Para guardar una location
  const [location, setLocation] = useState()
  //Para guardar la info del Input y hacer petición cuando se hace submit
  const [searchInput, setSearchInput] = useState('')
  //Para guardar las sugerencias de la api
  const [suggestedList, setSuggestedList] = useState()
  //Para indicar si hay erro o no
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios
      .get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }

  const handleChange = event => {
    if (event.target.value === '') {
      setSuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios
        .get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="App">
      <header className='header__app'>
        <img className='header__logo' src={header4} alt="Rick & Morty header" />
        <img className='header__title' src={image2} alt="Rick & Morty header" />
      </header>

      <div className='container'>
        <aside className='search-container'>
          <form
            className='form'
            onSubmit={handleSubmit}>
            <input
              className='form__input'
              id='idLocation'
              placeholder='Enter number from 1 to 126' type="text"
              onChange={handleChange} />
            <button className='form__button'>🔍
              {/* <h3 className='form_button-txt'>GO!</h3> */}
            </button>
            <FilterList
              suggestedList={suggestedList}
              setSearchInput={setSearchInput}
            />
          </form>
        </aside>
        {
          hasError ?
            <ErrorSearch />
            :
            <div>
              <LocationInfo
                location={location}
              />
              <div className='card-container'>
                {
                  location?.residents.map(url => (
                    <CardResident
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
              <button>Next</button>
              <button>Prev</button>
            </div>
        }
      </div>

    </div>
  )
}

export default App
