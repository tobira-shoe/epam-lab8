import React from 'react'
import dateFormat from 'dateformat'

const WeatherCard = (props) => {
    const {
        minTemp,
        maxTemp,
        humidity,
        visibility,
        pressure,
        date
    } = props

    const when = dateFormat(date, 'dddd, dS mmmm')

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{when}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Max: {maxTemp.toFixed(1)}</li>
                    <li className="list-group-item">Min: {minTemp.toFixed(1)}</li>
                    <li className="list-group-item">Humidity: {humidity.toFixed(1)}%</li>
                    <li className="list-group-item">Visibility: {visibility.toFixed(2)} milies</li>
                    <li className="list-group-item">Pressure: {pressure.toFixed(0)}mb</li>
                </ul>
            </div>
        </div>
    )
}

export default WeatherCard