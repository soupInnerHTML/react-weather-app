import { action, computed, makeObservable, observable } from "mobx";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

enum State {
    PENDING, DONE, ERROR, NONE
}

export abstract class AbstractApiModel {
    abstract baseURL: string;

    State = State;
    @observable state = State.PENDING;

    @computed get isPending() {
        return this.state === State.PENDING
    }
    @computed get isDone() {
        return this.state === State.DONE
    }
    @computed get isError() {
        return this.state === State.ERROR
    }

    @action protected async _getDataByParams(params: object) {
        this.state = this.State.PENDING
        const { data, } = await this._apiAdapter.get(params);
        return data
    }

    @action getDataByCoords(coords: GeolocationCoordinates) {
        return this._getDataByParams({
            lat: coords.latitude,
            lon: coords.longitude,
        })
    }
    @action getDataByCity(city: string) {
        return this._getDataByParams({ q: city, })
    }

    params = {};

    protected get _apiInstance() {
        return Axios.create({
            baseURL: this.baseURL,
            params: {
                ...this.params,
                appid: "c207d3e9d7bff92feed6cc304b78424f",
                lang: "en",
                units: "metric",
            },
        })
    }

    protected get _apiAdapter() {
        const self = this
        return {
            get(params: AxiosRequestConfig):  Promise<AxiosResponse<any>> {
                return self._apiInstance.get("", { params, })
            },
        }
    }

    protected constructor() {
        makeObservable(this)
    }
}


