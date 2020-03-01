import React, { Component } from "react";
import './styles.scss'
import Header from '../components/header/'
import City from '../components/city/'
import Daily from '../components/daily'
import WeatherInfo from '../components/weather-info'


export default class App extends Component { 
    render(){
        return (
            <div className="app-container" >
               <Header />
               <City />
               <Daily />
               <main className="container-more">
                    <WeatherInfo />
                    <WeatherInfo />
                    <WeatherInfo />
                    <WeatherInfo />
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
