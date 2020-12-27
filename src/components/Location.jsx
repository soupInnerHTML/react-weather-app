import React from "react"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment"

const Location = ({ location, time, }) => {
    return (
        <>
            <div className="location">
                <FontAwesomeIcon icon={ faLocationArrow } />
                <span className="location__region icon-indent">{ location }</span>
                <span className="time">
                    { /* { moment.unix(time).format("DD.MM.YYYY HH:MM") }  */ }
                    { /* <Moment tz="10800" unix>{ time }</Moment> */ }
                    { time }
                </span>
            </div>

        </>
    )
}

export default Location