import "./App.css";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css"
import React, { useEffect, useState } from "react"
import cs from "classnames"
import Location from "./components/Location";
import MainWeather from "./components/MainWeather";
import { parseToC } from "./utils"
import { getWeatherDataByCity, getWeatherDataByCoords } from "./api"
// import { doAsync } from "./utils"


const App = () => {
    const [temp, setTemp] = useState("")
    const [weatherType, setWeatherType] = useState("")
    const [location, setLocation] = useState("London")
    const units = "°"

    useEffect(() => {
        (async () => {
            try {
                let data = typeof location === "string" ? 
                    await getWeatherDataByCity(location)() : 
                    await getWeatherDataByCoords(location)()

                console.log(data)

                setTemp(parseToC(data.main.temp))
                setWeatherType(data.weather[0].main)

                navigator.geolocation.getCurrentPosition(position => setLocation(position.coords))
            }
            catch (e) {
                M.toast({ html: e, classes: "red lighten-2", })
            }
        })()


    }, [location.latitude])

    return (
        <div className={ cs("App", weatherType) }>
            <Location { ...{ location, } }></Location>
            <MainWeather { ...{ temp, weatherType, units, } }></MainWeather>
        </div>
    );
}

export default App;
