import React from "react"
import { NavLink, Outlet } from "react-router-dom"



export default function HostLayouts(){
    const activeLink = {
        fontWeight: "600",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <div>
            <div className="host-layouts">
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeLink : null}
                    
                >Dashboard</NavLink>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? activeLink : null} 
                >Income</NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeLink : null} 
                >Vans</NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive ? activeLink : null}
                    
                >Reviews</NavLink>
            </div>
            <Outlet />
        </div>
    )
}