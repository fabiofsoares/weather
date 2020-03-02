import React, { Component } from "react";
import './styles.scss'
import Header from '../components/header/'
import City from '../components/city/'
import Daily from '../components/daily'
import WeatherInfo from '../components/weather-info'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            items: []
        };
    }
    
    componentWillMount() {
        this._fetchWeather('Paris')
    }
    _fetchWeather(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f&units=metric&appid=b6907d289e10d714a6e88b30761fae22&lang=fr`).then(response => response.json())
        .then(data => this.setState({ items: data, isLoaded: true }))
        .catch(error => this.setState({ error, isLoaded: false }));
    } 
    render(){
        const { error, isLoaded, items } = this.state;        
        return (
            
            <div className="app-container" >
              { isLoaded && <Header data={items.coord.lon} lon={ items.coord.lat } lat={ 4.2 }/> }
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
