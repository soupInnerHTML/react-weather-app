import { action, makeObservable, observable, override } from "mobx";
import { AbstractApiModel } from "./AbstractApiModel";

export interface ForecastModelItem {
    timestamp: number;
    type: string;
    wind: number;
    degrees: {
        day: number;
        night: number;
    }
}

class ForecastModel extends AbstractApiModel {
    @observable data: ForecastModelItem[] = []

    params = {
        exclude: "minutely,hourly,current",
    }

    baseURL = "https://api.openweathermap.org/data/2.5/onecall"

    @override protected async _getDataByParams(params: object) {
        const data = await super._getDataByParams(params);
        this.data = data.daily.map((forecast: any) => ({
            timestamp: forecast.dt,
            type: forecast.weather[0].main,
            wind: forecast.wind_speed,
            degrees: {
                day: Math.round(forecast.temp.day),
                night: Math.round(forecast.feels_like.day),
            },
        }))
    }
    constructor() {
        super()
        makeObservable(this)
    }
}

export default new ForecastModel()
