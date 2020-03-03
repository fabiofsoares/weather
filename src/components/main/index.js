import React, { Component } from "react";
import './styles.scss'
import Header from '../../ui/header'
import City from '../../ui/city'
import Daily from '../../ui/daily'
import WeatherInfo from '../../ui/weather-info'

export default class Main extends Component {   
    render(){
        const item =  this.props.data;         
        return (            
            <div className="main-container" >
                <Header lon={ item.coord.lon } lat={ item.coord.lat }/> 
                <City name={ this.props.city } weather={ parseInt(item.main.temp) }/>
                <Daily />
                <div className="container-more">
                    <WeatherInfo type={'wind_speed'} value={ item.wind.speed }/>
                    <WeatherInfo type={'pressure'} value={ item.main.pressure }/>
                    <WeatherInfo type={'humidity'} value={ item.main.humidity }/>
                    <WeatherInfo type={'rain'} value={ item.rain ? item.rain : 0 }/>
                </div>                
            </div>
        );
    }
}
