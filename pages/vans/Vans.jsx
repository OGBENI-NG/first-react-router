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
        <Link to={`/vans/${van.id}`}>
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

  return (
    <div className="van-main-container">
      <h1>Explore our van options</h1>
      <div className="van-filter-container">
        <button  
          className="van-type simple"
          onClick={() => setSearchParams({type: 'simple'})}
        >
          Simple
        </button>
        <button  
          className="van-type luxury"
          onClick={() => setSearchParams({type: 'luxury'})}
        >
          Luxury
        </button>
        <button  
          className="van-type rugged"
          onClick={() => setSearchParams({type: 'rugged'})}
        >
          Rugged
        </button>
        <button  
          className="van-type clear-filters"
          onClick={() => setSearchParams({})}
        >
          Clear filters
        </button>
      </div>
      <div className="vans-list-container">
        {vansElements}
      </div>
    </div>
  )
}