import React, { Suspense } from "react"
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom"
import { getVans } from "../../api"
import { Dna } from "react-loader-spinner"

export function loader() {
  return defer({vans: getVans()})
}


export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const promiseData = useLoaderData()

  const typeFilterVans = searchParams.get("type")
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
  
  function renderVansElement(vans) {
    const displayVans = typeFilterVans 
      ? vans.filter(van => van.type === typeFilterVans) 
      : vans

    const vansElements = displayVans.map(van => (
      <div className="vans-pre-setup" key={van.id}>
        <Link 
          to={van.id} 
          state={{
            search: `?${searchParams.toString()}`, 
            type: typeFilterVans}
          }
        >
          <img src={van.imageUrl} />
          <div className="vans-names-container">
            <p className="van--name">{van.name}</p>
            <p>${van.price} <span>/day</span></p>
          </div>
          <span className={`van-type ${van.type} selected`}>{van.type}</span>
        </Link>
      </div>
    ))
    return (
      <>
        <h3>Explore our van options</h3>
        <div className="van-filter-container">
          <button  
            onClick={() => handleFilterChange('type', 'simple')}
            className={`van-type simple ${typeFilterVans === 'simple' ? 'selected' : '' }`}
          >
            Simple
          </button>
          <button  
            onClick={() => handleFilterChange('type', 'luxury')}
            className={`van-type luxury ${typeFilterVans === 'luxury' ? 'selected' : ''}`}
          >
            Luxury
          </button>
          <button  
            onClick={() => handleFilterChange('type', 'rugged')}
            className={`van-type rugged ${typeFilterVans === 'rugged' ? 'selected' : ''}`}
          >
            Rugged
          </button>
          {typeFilterVans ? ( <button  
            className="van-type clear-filters"
            onClick={() => handleFilterChange('type', null)}
          >
            Clear Filters
          </button>) : null}
        </div>
        <div className="vans-list-container">
          {vansElements}
        </div>
      </>
    )

  }
  return(
    <div className="van-main-container">
      <Suspense fallback={<Dna wrapperClass="
            loading"/>}>
        <Await resolve={promiseData.vans}>
          {renderVansElement}
        </Await>
      </Suspense>
    </div>
  )

}