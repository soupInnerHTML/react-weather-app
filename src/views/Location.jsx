import React, { useEffect, useState } from "react"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationModel from "../models/LocationModel";
import { observer } from "mobx-react-lite";
import dayjs from "dayjs";

let utc = require("dayjs/plugin/utc")
let timezone = require("dayjs/plugin/timezone")
let customParseFormat = require("dayjs/plugin/customParseFormat")

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

const Location = () => {

    let getTime = () => {
        return dayjs().format("HH:mm:ss")
        // let offset = (moment.unix(LocationModel.timezone).format("HH") - 5) + (moment.unix(LocationModel.timezone).format("mm") / 60)
        // return moment.utc(new Date()).utcOffset(offset).format("HH:mm:ss")
    }

    let [_, setTick] = useState(0)

    useEffect(() => {
        setInterval(() => setTick(prev => prev + 1), 1000)
    })

    return (
        <>
            <div className="location">
                <FontAwesomeIcon icon={ faLocationArrow } />
                <span className="location__region icon-indent">{ LocationModel.city }</span>
                <span className="time">
                    { getTime() }
                </span>
            </div>
        </>
    )
}

export default observer(Location)
