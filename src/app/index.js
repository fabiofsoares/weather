import React, { Component } from "react";
import './styles.scss'
import Main from '../components/main'
import Select from '../components/select'
/* import StaticWeather from './json/weather.json' */

export default class App extends Component {
    
    state = {
        error: null,
        isLoaded: false,
        city: 'Paris',
        items: []
    };  

    UNSAFE_componentWillMount() {
        this._fetchWeather(this.state.city)
    }

    async _fetchWeather(city){
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f&units=metric&appid=b6907d289e10d714a6e88b30761fae22&lang=fr`)
        .then(res => res.json())
        .then(res => this.setState({ items: res, city: city, isLoaded: true }))
        .catch(error => this.setState({ error, isLoaded: true }));
    }

    changeHandler(value){
        this._fetchWeather(value)        
    }

    render(){
        const { error, city, isLoaded, items } = this.state;

        return ( 
            <div className={`app-container`}>
                { !isLoaded && <div className="loader-content"><img src="/img/loading.gif" alt="loading" /></div> }
                { isLoaded && !error && 
                    <div className={`app-content ${city}`}>           
                        <Main data={ items } city={ city }/>                   
                        <Select value={ this.state.city } onChange={ this.changeHandler.bind(this) }/>
                    </div> 
                }
                { error && <div className="error-content"><span>Oups ! Error </span></div> }
            </div>
        );        
    }
}
