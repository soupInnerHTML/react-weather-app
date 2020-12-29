import React, { useEffect, useState } from "react"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment"

const Location = ({ location, tz, }) => {

    let getTime = () => {
        let offset = (moment.unix(tz).format("HH") - 5) + (moment.unix(tz).format("mm") / 60)
        return moment.utc(new Date()).utcOffset(offset).format("HH:mm:ss")
    }

    let [tick, setTick] = useState(0)

    useEffect(() => {
        setInterval(() => setTick(tick + 1), 1000)
    })

    return (
        <>
            <div className="location">
                <FontAwesomeIcon icon={ faLocationArrow } />
                <span className="location__region icon-indent">{ location }</span>
                <span className="time">
                    { getTime() }
                </span>
            </div>

        </>
    )
}

export default Location