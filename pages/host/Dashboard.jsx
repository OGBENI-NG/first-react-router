import React from "react"
import StarIcon from "../pageImg/star.png"


export default function Dashboard() {
    return (
        <div className="host--dashboard--container">
            <div className="dashboard">
                <h4>Welcome!</h4>
                <div className="details-container">
                    <span>Income last 30 days</span>
                    <span>Details</span>
                </div>
                <h1>$2,260</h1>
            </div>
            <div className="dashboard-stars-container">
                <span>Review score</span>
                <img src={StarIcon} />
                <span>5.0/<span id="five">5</span></span>
                <span>Details</span>
            </div>
        </div>
    )
}
