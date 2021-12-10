import { makeAutoObservable } from "mobx";
import WeatherModel from "./WeatherModel";

class LocationModel {
    timezone
    city = "Perm"

    getLocation() {
        navigator
            .geolocation
            .getCurrentPosition(
                position => {
                    WeatherModel.getWeatherDataByCoords(position.coords)
                },
                () => {
                    WeatherModel.getWeatherDataByCity(this.city)
                },
                {
                    enableHighAccuracy: true,
                }
            )
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new LocationModel()
