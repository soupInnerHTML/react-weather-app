import { makeAutoObservable } from "mobx";
import Axios from "axios";
import LocationModel from "./LocationModel";
import M from "materialize-css";

const apiInstance = Axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/weather",
    params: {
        appid: "c207d3e9d7bff92feed6cc304b78424f",
        lang: "en",
    },
})

class WeatherModel {
    type = "-"
    pressure = "-"
    visibility = "-"
    humidity = "-"
    units = "°"
    wind = "-"
    degrees = {
        feelsLike: "-",
        real: "-",
    }

    state = "PENDING"

    async getWeatherDataByQuery(query) {
        try {
            this.state = "PENDING"
            const { data, } = await apiInstance.get(query);
            const { main, } = data
            console.log(data)

            this.type = data.weather[0].main
            this.pressure = main.pressure
            this.humidity = main.humidity
            this.degrees = {
                real: main.temp,
                feelsLike: main.feels_like,
            }
            this.visibility = data.visibility
            this.wind = data.wind.speed

            LocationModel.timezone = data.timezone
            LocationModel.city = data.name

            this.state = "DONE"
        }
        catch (error) {
            M.toast({ html: error, classes: "red lighten-2", })
            this.state = "ERROR"
        }
    }

    getWeatherDataByCity = async (city) => {
        this.getWeatherDataByQuery("?q=" + city)
    }
    getWeatherDataByCoords = async (coords) => {
        this.getWeatherDataByQuery(`?lat=${coords.latitude}&lon=${coords.longitude}`)
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new WeatherModel()
