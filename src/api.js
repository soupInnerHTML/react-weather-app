import Axios from "axios"
// import { parseToC } from "./utils"

const weatherData = Axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/weather",
})

weatherData.defaults.params = {
    "appid": "c207d3e9d7bff92feed6cc304b78424f",
    "lang": "ru",
};

export let getWeatherDataByCity = city => {
    return () => weatherData.get("?q=" + city).then(response => response.data)
}

export let getWeatherDataByCoords = coords => {
    return () => weatherData.get(`?lat=${coords.latitude}&lon=${coords.longitude}`).then(response => response.data)
}
