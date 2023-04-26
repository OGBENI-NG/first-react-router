import React, { Suspense } from "react"
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getVans } from "../../api"


export function loader({params}) {
    return defer({van: getVans(params.id)})
}

export default function VanDetails() {
    const location = useLocation()
    const promiseData = useLoaderData()

    function renderVanDetails(van)  {
        //conditionally joining functions
        //const search = location.state && location.state.search || ''
        const search = location.state?.search || ''
        const type = location.state?.type || 'all'
        return (

            <>
                <Link 
                    to={`..${search}`} 
                    className="back-to-vans"
                    relative="path"
                >
                    &larr;<span>Back to {type} vans</span> 
                </Link>
                
                <div className="vans--profile">
                    <img src={van.imageUrl} />
                    <span className={`van-type ${van.type} selected`}>{van.type}</span>
                    <h1>{van.name}</h1>
                    <p>${van.price}/<span className="day">day</span></p>
                    <p>{van.description}</p>
                    <button>Rent this van</button>
                </div>
            </>
        )
    }
    return(
        <div className="vans--profile--container">
            <Suspense fallback={<h2>loading vans details</h2>}>
                <Await resolve={promiseData.van}>
                    {renderVanDetails}
                </Await>
            </Suspense>
        </div>
    )
}