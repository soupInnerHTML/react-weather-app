import React from "react"
import { parseToC, pressureGradation } from "../utils"
import { faThermometerEmpty, faThermometerQuarter,  faThermometerFull, faThermometerHalf, faWind, faTint, faEye } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WeatherItem } from "./WeatherItem";

const MainWeather = ({ temp, weatherType, units, pressure, wind, humidity, visibility, }) => {
    let pressureGradations = {
        "low": faThermometerEmpty,
        "pre-normal": faThermometerQuarter,
        "normal": faThermometerHalf,
        "high": faThermometerFull,
    }
    return (
        <div className="temp center-align">
            <p className="temp__num">
                { parseToC(temp) }
                <span className="temp__emu">{ units }</span>
            </p>

            <p className="temp__weather-type">{ weatherType }</p>

            <div className="row">
                <div className="glassBlock col s6 offset-s3">
                    <WeatherItem icon={ pressureGradations[pressureGradation(pressure)] }>{ pressure || "-" } hPa</WeatherItem>
                    <WeatherItem icon={ faWind }>{ wind.speed || "-" } km/h</WeatherItem>
                    <WeatherItem icon={ faTint }>{ humidity || "-" } %</WeatherItem>
                    <WeatherItem icon={ faEye }>{ visibility / 1000 || "-" } km</WeatherItem>
                    { /* <FontAwesomeIcon icon={ pressureGradations[pressureGradation(pressure)] }></FontAwesomeIcon>
                    <span className="center-align icon-indent">{ pressure } hPa</span> */ }
                </div>
            </div>
        </div>
    )
}

export default MainWeather