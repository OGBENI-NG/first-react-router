import React, { Suspense } from "react"
import StarIcon from "../pageImg/star.png"
import { getHostVans } from "../../api"
import { Link, defer, useLoaderData, Await } from "react-router-dom"

export async function loader() {
    return defer({vans: getHostVans()})
}

export default function Dashboard() {
    const loaderData = useLoaderData()

    function renderVansElements(vans) {
        const hostVansEl = vans.map(van => (
            <div className="hold-single-van-container host-dash-vans">
                <div 
                    className="list-img-container" 
                    key={van.id}
                >
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
                </div>
                <div className="van-info-container">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <Link className="view" to={`vans/${van.id}`}>View</Link>
            </div>
        ))

        return (
            <section className="host-dhb-vans-list">
                <div>
                    {hostVansEl}
                </div>
            </section>
        )
            
    }

    return (
        <div className="host--dashboard--container">
            <div className="dashboard">
                <h4>Welcome!</h4>
                <div className="details-container">
                    <span>Income last 30 days</span>
                    <Link 
                        to="reviews" 
                        className="details"
                    >
                        <span>Details</span>
                    </Link>
                </div>
                <h1>$2,260</h1>
            </div>
            <div className="dashboard-stars-container">
                <span>Review score</span>
                <img src={StarIcon} />
                <span>5.0/<span className="day-price">5</span></span>
                <Link 
                    to="reviews" 
                    className="details"
                >
                    <span>Details</span>
                </Link>
            </div>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                <Suspense fallback={<h2>loading...</h2>}>
                    <Await resolve={loaderData.vans}>
                        {renderVansElements}
                    </Await>
                </Suspense>
            </section>
        </div>
    )
}
