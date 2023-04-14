import React from "react"
import aboutImg from "../img/image2.png"

export default function About() {
    return(
      <section>
        <img src={aboutImg} className="about-pic" alt="about-pics"/>
        <div className="about--container">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        </div>
      </section>
    )
}