import "../App.css";
import "materialize-css/dist/css/materialize.min.css"
import cs from "classnames"
import Location from "./Location";
import MainWeather from "./MainWeather";
import Settings from "./Settings";
import { observer } from "mobx-react-lite";
import WeatherModel from "../models/WeatherModel";
import Lottie from "lottie-react";
import Loader from "../assets/anims/loader.json"
import Error from "../assets/anims/error.json"
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react"


const App = () => {
    const config = {
        unmountOnExit: true,
        timeout: 1000,
        classNames: "my-node",
    }

    return <Fragment>
        <CSSTransition in={ WeatherModel.isPending } { ...config }>
            <Lottie animationData={ Loader } style={ { height: "100vh", } }/>
        </CSSTransition>

        <CSSTransition in={ WeatherModel.isError } { ...config }>
            <Lottie animationData={ Error } style={ { height: "100vh", } }/>
        </CSSTransition>

        <CSSTransition in={ WeatherModel.isDone } { ...config }>
            <div className={ cs("App", WeatherModel.type) }>
                <Settings/>
                <Location/>
                <MainWeather/>
            </div>
        </CSSTransition>
    </Fragment>

}

export default observer(App);
