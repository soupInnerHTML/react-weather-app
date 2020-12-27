import React from "react"

const MainWeather = ({ temp, weatherType, units, }) => {
    return (
        <div className="temp center-align">
            <p className="temp__num">
                { temp }
                <span className="temp__emu">{ units }</span>
            </p>
            <p className="temp__weather-type">{ weatherType }</p>
        </div>
    )
}

export default MainWeather