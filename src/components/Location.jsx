import React from "react"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Location = ({ location, }) => {
    return (
        <div className="location">
            <FontAwesomeIcon icon={ faLocationArrow } />
            <span className="location__region icon-indent">{ typeof location === "string" && location }</span>
        </div>
    )
}

export default Location