import "./App.css";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css"
import React, { useEffect, useState } from "react"
import cs from "classnames"
import Location from "./components/Location";
import MainWeather from "./components/MainWeather";
import Settings from "./components/Settings";
// import { parseToC } from "./utils"
import { getWeatherDataByCity, getWeatherDataByCoords } from "./api"
// import { doAsync } from "./utils"


const App = () => {
    // const [temp, setTemp] = useState("")
    const [weatherType, setWeatherType] = useState("")
    const [weather, setWeather] = useState(0)
    const [visibility, setVisibility] = useState(0)
    const [wind, setWind] = useState(0)
    const [time, setTime] = useState(0)
    const [location, setLocation] = useState("Москва")
    const [coords, setCoords] = useState({})
    // const [errorState, setError] = useState(false)
    const units = "°"
    const weatherRender = data => {
        // setTemp(parseToC(data.main.temp))
        setWeatherType(data.weather[0].main)
        setWeather(data.main)
        setWind(data.wind)
        setVisibility(data.visibility)
        setTime(data.dt)
        console.log(data)
    }

    useEffect(() => {
        (async () => {
            try {
                navigator.geolocation.getCurrentPosition(position => setCoords(position.coords))

                if (coords.latitude && coords.longitude) {
                    let data = await getWeatherDataByCoords(coords)() 
                    setLocation(data.name)
                    weatherRender(data)
                }
                else {
                    let data = await getWeatherDataByCity(location)() 
                    weatherRender(data)
                }


            }
            catch (error) {
                M.toast({ html: error, classes: "red lighten-2", })
            }
        
        })()


    }, [coords.latitude, coords.longitude])
    
    let { pressure, temp, humidity, } = weather

    return (
        <div className={ cs("App", weatherType) }>
            <Settings></Settings>
            <Location { ...{ location, time, } }></Location>
            <MainWeather { ...{ temp, weatherType, units, pressure, wind, humidity, visibility, } }></MainWeather>
        </div>
    );
}

export default App;
