import { makeAutoObservable } from "mobx";
import WeatherModel from "./WeatherModel";
import ForecastModel from "./ForecastModel";
import M from "materialize-css";

class LocationModel {
    timezone
    city = "Perm"

    getLocation() {
        navigator
            .geolocation
            .getCurrentPosition(
                async position => {
                    ForecastModel.getDataByCoords(position.coords)
                    const data = await WeatherModel.getDataByCoords(position.coords)
                    this.city = data?.name
                    this.timezone = data?.timezone
                },
                () => {
                    [WeatherModel, ForecastModel].forEach(m => m.getDataByCity(this.city))
                    M.toast({
                        html: "<span>Geolocation has been turned off</span><button class=\"btn-flat toast-action\" style=\"color: #fff\" onclick=\"M.Toast.dismissAll()\">close</button>",
                        classes: "orange lighten-1",
                        displayLength: Number.MAX_VALUE,
                    })
                },
                {
                    enableHighAccuracy: true,
                }
            )
    }

    constructor() {
        makeAutoObservable(this)
        this.getLocation()
    }
}

export default new LocationModel()
