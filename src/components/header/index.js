import React, { Component } from "react";
import './styles.scss'

export default class Header extends Component { 
    render(){
        return (
            <header className="header-component">              
                <div className="content">
                    <span className="app-name">Meteo</span>
                    <div className="coordenations">(25, 48.6)</div>
                </div>                              
            </header>
          );
    }
}
