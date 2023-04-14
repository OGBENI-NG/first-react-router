import React from "react"
import { Link, Outlet } from "react-router-dom"


export default function HostLayouts(){
    return (
        <>
            <div className="host-layouts">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </div>
            <Outlet />
        </>
    )
}