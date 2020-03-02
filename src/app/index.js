import React, { Component } from "react";
import './styles.scss'
import Header from '../components/header/'
import City from '../components/city/'
import Daily from '../components/daily'
import WeatherInfo from '../components/weather-info'
let data = {
    coord:{lon:-0.13,lat:51.51}
}

export default class App extends Component { 
    render(){
        return (
            <div className="app-container" >
               <Header lon={ data.coord.lon } lat={data.coord.lat}/>
               <City name={'Paris'} weather={7}/>
               
               {/* Todo */}
               <Daily />

               <main className="container-more">
                    <WeatherInfo type={'wind_speed'} value={4.1}/>
                    <WeatherInfo type={'pressure'} value={4.1}/>
                    <WeatherInfo type={'humidity'} value={4.1}/>
                    <WeatherInfo type={'rain'} value={4.1}/>
               </main>

               <div className="select-container">
                    <select className="close">
                        <option value="0" className="selected">Paris</option>
                        <option value="1">Londres</option>
                        <option value="2">Bangkok</option>                    
                    </select>
               </div>
            </div>
          );
    }
}
