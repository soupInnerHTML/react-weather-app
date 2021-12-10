import "../App.css";
import "materialize-css/dist/css/materialize.min.css"
import React, { useEffect } from "react"
import cs from "classnames"
import Location from "./Location";
import MainWeather from "./MainWeather";
import Settings from "./Settings";
import { observer } from "mobx-react-lite";
import WeatherModel from "../models/WeatherModel";
import Lottie from "lottie-react";
import Loader from "../assets/anims/Loader.json"
import LocationModel from "../models/LocationModel";
import { CSSTransition } from "react-transition-group";


const App = () => {
    useEffect(() => {
        LocationModel.getLocation()
    }, [])

    // return WeatherModel.state === "PENDING" ?
    //     (
    //         <Lottie animationData={ Loader } style={ { height: "100vh", } }/>
    //     ) : (
    //         <div className={ cs("App", WeatherModel.type) }>
    //             <Settings/>
    //             <Location/>
    //             <MainWeather/>
    //         </div>
    //     )

    return <React.Fragment>
        <CSSTransition in={ WeatherModel.state === "PENDING" } timeout={ 1000 } classNames="my-node">
            <Lottie animationData={ Loader } style={ { height: "100vh", } }/>
        </CSSTransition>

        <CSSTransition unmountOnExit in={ WeatherModel.state === "DONE" } timeout={ 1000 } classNames="my-node">
            <div className={ cs("App", WeatherModel.type) }>
                <Settings/>
                <Location/>
                <MainWeather/>
            </div>
        </CSSTransition>
    </React.Fragment>

}

export default observer(App);
