import React from "react";
import './styles.scss'

const desc = [
    {
        mesure: 'km/h',
        label: 'Direction et vitesse du vent',
        icon: 'pluie_fleche.svg'
    },
    {
        mesure: 'hPa',
        label: 'Pression',
        icon: 'pluie_fleche.svg'
    },
    {
        mesure: 'mm',
        label: 'Humidite',
        icon: 'pluie_fleche.svg'
    },
    {
        mesure: '%',
        label: 'Risque de précipitation',
        icon: 'pluie_fleche.svg'
    }
]

const WeatherInfo = (props) => {    
    let i;
    switch(props.type){
        case 'wind_speed':
            i = 0;
            break;
        case 'pressure':
            i = 1;
            break;
        case 'humidity':
            i = 2;
            break;
        case 'rain':
            i = 3;
            break;  
    }

    return(
        <div className="weather-component">
            <div className="content">
                <div className="weather-info">                        
                    <img className="icon" src={`/img/icons/${desc[i].icon}`} alt="icon weather" />
                    <span className="text">{props.value} {desc[i].mesure}</span>
                </div>
                <div className="component-title">{desc[i].label}</div>
            </div>
        </div>
    )
}

export default WeatherInfo;