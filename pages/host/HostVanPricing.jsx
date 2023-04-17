import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const [currentVan] = useOutletContext()
    return (
        <section>
            <h1>${currentVan.price}/<span className="day">day</span></h1>
        </section>
    )
}