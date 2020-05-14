import React, { Component } from 'react'

import WeatherCard from '../../components/WeatherCard/WeatherCard'

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: true,
        };
    }

    componentDidMount() {
        const url = 'https://cors-anywhere.herokuapp.com/' + 'https://www.metaweather.com/api/location/924938/'

        fetch(url, {
            headers: {}
        })
            .then(res => res.json())
            .then(data => {
                const items = data.consolidated_weather.map(w => ({
                    minTemp: w.min_temp,
                    maxTemp: w.max_temp,
                    humidity: w.humidity,
                    visibility: w.visibility,
                    pressure: w.air_pressure,
                    date: new Date(w.applicable_date),
                }))

                this.setState({
                    items,
                    loading: false,
                })
            })
    }

    render() {
        const { loading, items } = this.state

        return (
            <div className='container'>
                {loading ?
                    (<div>Loading...</div>)
                    :
                    items.map(w => (
                        <WeatherCard
                            key={w.id}
                            minTemp={w.minTemp}
                            maxTemp={w.maxTemp}
                            humidity={w.humidity}
                            visibility={w.visibility}
                            pressure={w.pressure}
                            date={w.date}
                        />
                    ))
                }

            </div>
        )
    }
}

export default Dashboard