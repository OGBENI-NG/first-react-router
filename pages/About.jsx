import React from "react"
import aboutImg from "../img/image2.png"
import { Link } from "react-router-dom"

export default function About() {
    return(
      <section className="about-page-container">
        <img src={aboutImg} className="about-pic" alt="about-pics"/>
        <div className="about-page-content">
          <h4>Don’t squeeze in a sedan when you could relax in a van.</h4>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="about-page-cta">
          <p>Your destination is waiting.<br />Your van is ready.</p>
          <button className="link-button"><Link 
            to="/vans"
          >
            Explore our vans
          </Link></button>
        </div>
      </section>
    )
}