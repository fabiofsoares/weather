import React from "react";
import './styles.scss'

const City = (props) => {
    return (
        <div className="city-corrent">
            <div className="content">
                <div className="city-name">{props.name}</div>
                <div className="city-weather">{props.weather}°C</div>
            </div>
        </div>
    )
}

export default City;