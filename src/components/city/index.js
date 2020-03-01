import React, { Component } from "react";
import './styles.scss'

export default class City extends Component { 
    render(){
        return (
            <div className="city-corrent">
                <div className="content">
                    <div className="city-name">Paris</div>
                    <div className="city-weather">7C</div>
                </div>
            </div>
          );
    }
}
