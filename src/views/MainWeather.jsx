import { useEffect, useMemo } from "react"
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
import cs from "classnames"
import ForecastModel from "../models/ForecastModel";
import ForecastCard from "./ForecastCard";

const MainWeather = () => {
    useEffect(() => {
        console.log(ForecastModel)
    })
    const { pressure, degrees, wind, humidity, visibility, type, } = WeatherModel

    const faThermometerIcon = useMemo(() => {
        if (pressure < 1005) {
            return faThermometerEmpty
        }
        if (pressure < 1010) {
            return faThermometerQuarter
        }
        if (pressure < 1020) {
            return faThermometerHalf
        }
        if (pressure > 1020) {
            return faThermometerFull
        }
    }, [pressure])

    return (
        <div className="temp center-align">
            <p className="temp__num">
                { degrees.real }°
            </p>

            <p className="temp__weather-type">{ type }</p>


            <div className="row">
                <div className={ cs("glassBlock", "glassBlock_" + type, "col s6 offset-s3" ) }>
                    <p className="">Feels like { degrees.feelsLike }°</p>

                    <div className="row">
                        <WeatherItem icon={ faThermometerIcon }>{ pressure } hPa</WeatherItem>
                        <WeatherItem icon={ faWind }>{ wind } km/h</WeatherItem>
                        <WeatherItem icon={ faTint }>{ humidity } %</WeatherItem>
                        <WeatherItem icon={ faEye }>{ visibility / 1000 } km</WeatherItem>
                    </div>

                    <div className="row test">
                        { ForecastModel.data.slice(0, 5).map(({ degrees, wind, timestamp, }) => (
                            <ForecastCard { ...{ degrees, wind, timestamp, } } key={ timestamp } />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(MainWeather)
