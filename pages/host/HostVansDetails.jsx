import React, { useEffect, useState } from "react"
import {  useParams, Link, Outlet, NavLink } from 'react-router-dom'

export default function HostVanDetail() {
    const activeLink = {
        fontWeight: "600",
        textDecoration: "underline",
        color: "#161616"
    }
    

    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])


    if(!currentVan) {
        return <h2>loading</h2>
    }

    return (
        <section className="single-van-container">
            <Link 
                to=".." 
                relative="path" 
                className="back-to-vans"
            >
                &larr; 
                <span>Back to all vans</span>
            </Link>
            <div className="host-van-details-container">
                <div className="inner-hold-van">
                    <img src={currentVan.imageUrl} />
                    <div className="hold-van-info">
                        <span 
                            className={`van-type ${currentVan.type} selected`}
                        >
                            {currentVan.type}
                        </span>
                        <p>{currentVan.name}</p>
                        <p>${currentVan.price}/day</p>
                    </div>
                </div>
                <div className="details-nav">
                    <NavLink
                       to="." 
                       end
                       style={({isActive}) => isActive ? activeLink : null }
                    >Details</NavLink>
                    <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activeLink : null }
                    >Pricing</NavLink>
                    <NavLink 
                        to="photos"
                        style={({isActive}) => isActive ? activeLink : null }
                    >Photos</NavLink>
                </div>
                <Outlet context={[currentVan]}/>
            </div>
        </section>
    )
}
