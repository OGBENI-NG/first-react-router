import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()

    return (
        <div className="error-page">
            <h1>{error.message}</h1>
            <pre>{error.statusText} - {error.status}</pre>
        </div>
    )
}