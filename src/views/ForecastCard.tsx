import { FC, useMemo } from "react";
import dayjs from "dayjs";
import { ForecastModelItem } from "../models/ForecastModel";

const ForecastCard: FC<ForecastModelItem> = ({ wind, degrees, timestamp, }) => {
    const date = useMemo(() => {
        return dayjs.unix(timestamp).format("D MMM")
    }, [timestamp])
    return (
        <div className="forecast-card col s3">
            <p>{ date }</p>
            <p>{ degrees.day }° / { degrees.night }°</p>
            <i className="material-icons blue-text">cloud</i>
            <p>{ wind } km/h</p>
        </div>
    );
};

export default ForecastCard;
