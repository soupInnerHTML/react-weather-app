import { action, makeObservable, observable, override } from "mobx";
import M from "materialize-css";
import { AbstractApiModel } from "./AbstractApiModel";

export interface WeatherModelFields {
    timestamp: number;
    type: string;
    pressure: string;
    visibility: string;
    humidity: string;
    units: string;
    wind: string;
    degrees: {
        feelsLike: number;
        real: number;
    }
}

class WeatherModel extends AbstractApiModel implements WeatherModelFields {
    timestamp = 0
    @observable type = "-"
    @observable pressure = "-"
    @observable visibility = "-"
    @observable humidity = "-"
    @observable units = "°"
    @observable wind = "-"
    @observable degrees = {
        feelsLike: 0,
        real: 0,
    }

    baseURL = "https://api.openweathermap.org/data/2.5/weather"

    @override protected async _getDataByParams(params: object) {
        try {
            const data = await super._getDataByParams(params);
            const { main, } = data

            this.type = data.weather[0].main
            this.pressure = main.pressure
            this.humidity = main.humidity
            this.degrees = {
                real: Math.round(main.temp),
                feelsLike: Math.round(main.feels_like),
            }
            this.visibility = data.visibility
            this.wind = data.wind.speed

            this.state = this.State.DONE
            return data
        }
        catch (error) {
            M.toast({
                html: `<span>${error}</span><button class="btn-flat toast-action" style="color: #fff" onclick="M.Toast.dismissAll()">close</button>`,
                classes: "red lighten-1",
                displayLength: Number.MAX_VALUE,
            })
            this.state = this.State.ERROR
        }
    }

    constructor() {
        super()
        makeObservable(this)
    }
}

export default new WeatherModel()
