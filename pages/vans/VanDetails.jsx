import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


export default function VanDetails() {
    const {id} = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [id])

    return(
        <div className="vans--profile--container">
            {van && 
                <Link 
                    to=".." 
                    className="back-to-vans"
                    relative="path"
                >&larr; 
                    <span>Back to all vans</span> 
                </Link>
            }
            {van ? (
                <div className="vans--profile">
                    <img src={van.imageUrl} />
                    <span className={`van-type ${van.type} selected`}>{van.type}</span>
                    <h1>{van.name}</h1>
                    <p>${van.price}/<span className="day">day</span></p>
                    <p>{van.description}</p>
                    <button>Rent this van</button>
                </div>
            ) : <h2>loading...</h2>}
        </div>
    )
}