import React, { Component } from "react";
import './styles.scss'
import Main from '../components/main'
import Select from '../components/select'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            city: 'Paris',
            items: []
        };
    }   

    componentWillMount() {
        this._fetchWeather(this.state.city)
    }

    async _fetchWeather(city){
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f&units=metric&appid=b6907d289e10d714a6e88b30761fae22&lang=fr`)
        .then(res => res.json())
        .then(res => this.setState({ items: res, city: city, isLoaded: true }))
        .catch(error => this.setState({ error, isLoaded: false }));
    }
    changeHandler(value){
        this._fetchWeather(value)
    }
    render(){
        const { error, city, isLoaded, items } = this.state;

        return ( 
            <div className="app-container">           
                { isLoaded && <Main data={ items } city={ city }/> }                    
                <Select value={ this.state.city } onChange={ this.changeHandler.bind(this) }/>
            </div>
        );        
    }
}
