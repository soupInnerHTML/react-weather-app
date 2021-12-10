/* eslint-disable camelcase */
import React from "react"
import { parseToC, pressureGradation } from "../utils"
import {
    faEye,
    faThermometerEmpty,
    faThermometerFull,
    faThermometerHalf,
    faThermometerQuarter,
    faTint,
    faWind
} from "@fortawesome/free-solid-svg-icons";
import { WeatherItem } from "./WeatherItem";
import { observer } from "mobx-react-lite";
import WeatherModel from "../models/WeatherModel";

const MainWeather = () => {
    let pressureGradations = {
        "low": faThermometerEmpty,
        "pre-normal": faThermometerQuarter,
        "normal": faThermometerHalf,
        "high": faThermometerFull,
    }

    return (
        <div className="temp center-align">
            <p className="temp__num">
                { parseToC(WeatherModel.degrees.real) }
            </p>

            <p className="temp__weather-type">{ WeatherModel.type }</p>


            <div className="row">
                <div className={ "glassBlock col s6 offset-s3" }>
                    <p className="">Feels like { parseToC(WeatherModel.degrees.feelsLike) }</p>

                    <div className="row">
                        <WeatherItem icon={ pressureGradations[pressureGradation(WeatherModel.pressure)] }>{ WeatherModel.pressure } hPa</WeatherItem>
                        <WeatherItem icon={ faWind }>{ WeatherModel.wind } km/h</WeatherItem>
                        <WeatherItem icon={ faTint }>{ WeatherModel.humidity } %</WeatherItem>
                        <WeatherItem icon={ faEye }>{ WeatherModel.visibility / 1000 } km</WeatherItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(MainWeather)
