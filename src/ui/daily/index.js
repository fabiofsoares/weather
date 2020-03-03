import React, { Component } from "react";
import './styles.scss'

export default class Daily extends Component { 
    render(){
        const date = new Date();
        const _arrayWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const _arrayMonth = [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre' ];
        const week = _arrayWeek[date.getDay()];
        const month = _arrayMonth[date.getMonth()];
        const courrentDay =  date.getDate();

        const after = date.getDay() !== 6 ? _arrayWeek[date.getDay() + 1] : _arrayWeek[0];
        const before = date.getDay() !== 0 ? _arrayWeek[date.getDay() - 1] : _arrayWeek[6];

        return (
            <div className="daily-forecast">
                <div className="content">
                    <div className="daily-before daily-container">
                        <img src="/img/icons/left-arrow.svg" alt="arow-left" />
                        <span>{`${before}`}</span>
                    </div>
                    <div className="daily-courrent">{`${week} ${courrentDay} ${month}`}</div>
                    <div className="daily-after daily-container">
                        <span>{`${after}`}</span>
                        <img src="/img/icons/right-arrow.svg" alt="arow-left" />
                    </div>
                </div>
            </div>
        );
    }
}