/* eslint-disable camelcase */
import React from "react"
import { parseToC, pressureGradation } from "../utils"
import { faThermometerEmpty, faThermometerQuarter,  faThermometerFull, faThermometerHalf, faWind, faTint, faEye } from "@fortawesome/free-solid-svg-icons";
import { WeatherItem } from "./WeatherItem";

const MainWeather = ({ temp, weatherType, units, pressure, wind, humidity, visibility, feels_like, }) => {
    let pressureGradations = {
        "low": faThermometerEmpty,
        "pre-normal": faThermometerQuarter,
        "normal": faThermometerHalf,
        "high": faThermometerFull,
    }

    let __ = _ => _ || "-" 
    return (
        <div className="temp center-align">
            <p className="temp__num">
                { __(parseToC(temp)) }
            </p>

            <p className="temp__weather-type">{ __(weatherType) }</p>

            
            <p className="">Feels like { __(parseToC(feels_like)) }</p>

            <div className="row">
                <div className="glassBlock col s6 offset-s3">
                    <WeatherItem icon={ pressureGradations[pressureGradation(pressure)] }>{ __(pressure) } hPa</WeatherItem>
                    <WeatherItem icon={ faWind }>{ __(wind.speed) } km/h</WeatherItem>
                    <WeatherItem icon={ faTint }>{ __(humidity) } %</WeatherItem>
                    <WeatherItem icon={ faEye }>{ __(visibility / 1000) } km</WeatherItem>
                </div>
            </div>
        </div>
    )
}

export default MainWeather