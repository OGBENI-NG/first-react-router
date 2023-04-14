import React from "react"
import { Link } from "react-router-dom"
export default function VanLife() {
  return(
    <main className="home-page">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
          Add adventure to your life by joining
          the #vanlife movement. Rent the perfect van
          to make your perfect road trip.
      </p>
      <Link to="vans">Find your van</Link>
    </main>
  )
}