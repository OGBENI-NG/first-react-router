import React, {useState, useEffect} from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch('/api/vans')
    .then(res => res.json())
    .then(data => setVans(data.vans))
  }, [])

  const filterVans = searchParams.get("type")
  const displayVans = filterVans 
    ? vans.filter(van => van.type.toLowerCase() === filterVans) 
    : vans

  const vansElements = displayVans.map(van => {
    return (
      <div className="vans-pre-setup" key={van.id}>
        <Link to={van.id} state={{search: searchParams.toString()}}>
          <img src={van.imageUrl} />
          <div className="vans-names-container">
            <p className="van--name">{van.name}</p>
            <p>${van.price} <span>/day</span></p>
          </div>
          <span className={`van-type ${van.type} selected`}>{van.type}</span>
        </Link>
      </div>
    )
  })

  //filter van function
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if(value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <div className="van-main-container">
      <h3>Explore our van options</h3>
      <div className="van-filter-container">
        <button  
          onClick={() => handleFilterChange('type', 'simple')}
          className={`van-type simple ${filterVans === 'simple' ? 'selected' : '' }`}
        >
          Simple
        </button>
        <button  
          onClick={() => handleFilterChange('type', 'luxury')}
          className={`van-type luxury ${filterVans === 'luxury' ? 'selected' : ''}`}
        >
          Luxury
        </button>
        <button  
          onClick={() => handleFilterChange('type', 'rugged')}
          className={`van-type rugged ${filterVans === 'rugged' ? 'selected' : ''}`}
        >
          Rugged
        </button>
        {filterVans ? ( <button  
          className="van-type clear-filters"
          onClick={() => handleFilterChange('type', null)}
        >
          Clear Filters
        </button>) : null}
      </div>
      <div className="vans-list-container">
        {vansElements}
      </div>
    </div>
  )
}