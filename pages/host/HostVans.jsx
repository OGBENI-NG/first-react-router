import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const holdVansDetails = vans.map(van => {
        return (
            <Link 
                to={`/host/vans/${van.id}`} 
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
        )
    })
    return (
        <div className="hold-van-list">
            <h4>Your listed vans</h4>
            <div className="hold-vans-list">
                {vans.length > 0 ? (
                    <section>{holdVansDetails}</section>
                ) : (
                    <h4>loading...</h4>
                )}
            </div>
        </div>
    )
}