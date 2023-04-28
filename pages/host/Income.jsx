import React from "react"
import chartImg from "../pageImg/chart.png"


export default function Income() {

    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]

    return (
        <section className="income-container">
            <h3>Income</h3>
            <p>Last <span>30 days</span></p>
            <h1>$2,260</h1>
            <img src={chartImg} />
            <div className="about-transaction">
                <h4>Your transactions (3)</h4>
                <p>Last <span>30 days</span></p>
            </div>
            {transactionsData.map(data => (
                <section className="price-history" key={data.id}>
                <h2>${data.amount}</h2>
                <p>{data.date}</p>
                </section>
            )) }
        </section>
    )
}
