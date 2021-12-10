import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WeatherItem = ({ icon, pressure, children, }) => {
    return (
        <span className="icon-indent">
            <FontAwesomeIcon { ...{ icon, } }></FontAwesomeIcon>
            <span className="center-align icon-indent">{ children }</span>
        </span>
    )
}
