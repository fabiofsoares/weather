import React from "react";
import './styles.scss'

const City = (props) => {
    return (
        <div className="city-corrent">
            <div className="content">
                <h2 className="city-name">{props.name}</h2>
                <h3 className="city-weather">{props.weather}°C</h3>
            </div>
        </div>
    )
}

export default City;