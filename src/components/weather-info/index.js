import React, { Component } from "react";
import './styles.scss'

export default class WeatherInfo extends Component { 
    render(){
        return (
            <div className="weather-component">
                <div className="content">
                    <div className="weather-info">                        
                        <img src="/img/icons/pluie_fleche.svg" alt="" />
                        <span className="text">19Km/h</span>
                    </div>
                    <div className="component-title">Direction et vitesse du vent</div>
                </div>
            </div>
        );
    }
}
