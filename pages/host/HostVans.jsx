import React, {Suspense} from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
//import { requireAuth } from "../../utils"

export async function loader() {
    //await requireAuth()
    return defer({vans: getHostVans()})
}

export default function HostVans() {
    const promiseData = useLoaderData()

    function renderVansData(vans) {
        const holdVansDetails = vans.map(van => (
            <Link 
                to={van.id} 
                key={van.id} 
                className="hold-single-van-container"
            >
                <div 
                    className="list-img-container" 
                    key={van.id}
                >
                    <img src={van.imageUrl}/>
                </div>
                <div className="van-info-container">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </Link>
        ))
        
        return(
            <div className="hold-vans-list">
                <section>
                    {holdVansDetails}
                </section>
            </div>
        )
    }
    return (
        <div className="hold-van-list">
            <h4>Your listed vans</h4>
            <Suspense fallback={<h2>loading vans list</h2>}>
                <Await resolve={promiseData.vans}>
                    {renderVansData}
                </Await>
            </Suspense>
        </div>
    )

    
}