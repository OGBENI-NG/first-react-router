import React, { Suspense } from "react"
import { Link, Outlet, NavLink, useLoaderData } from 'react-router-dom'
import { getHostVans } from "../../api"
//import { requireAuth } from "../../utils"

export async function loader({params}) {
    //await requireAuth()
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const activeLink = {
        fontWeight: "600",
        textDecoration: "underline",
        color: "#161616"
    }
    
    const currentVan = useLoaderData()

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
