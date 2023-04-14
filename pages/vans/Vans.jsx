import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = useState([])
  useEffect(() => {
    fetch('/api/vans')
    .then(res => res.json())
    .then(data => setVans(data.vans))
  }, [])
  
  const vansElements = vans.map(van => {
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
      <div className="vans-list-container">
        {vansElements}
      </div>
    </div>
  )
}