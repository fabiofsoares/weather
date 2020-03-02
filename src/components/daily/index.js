import React, { Component } from "react";
import './styles.scss'

export default class Daily extends Component { 
    render(){
        return (
            <div className="daily-forecast">
                <div className="content">
                    <div className="daily-before">Samedi</div>
                    <div className="daily-courrent">Dimanche 1 mars</div>
                    <div className="daily-after">Lundi</div>
                </div>
            </div>
        );
    }
}