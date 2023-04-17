import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const [currentVan] = useOutletContext()
    return (
        <section className="host-van-info">
            <p><strong>Name: </strong>{currentVan.name}</p>
            <p><strong>Category: </strong>{currentVan.type}</p>
            <p><strong>Description: </strong>{currentVan.description}</p>
        </section>
    )
}