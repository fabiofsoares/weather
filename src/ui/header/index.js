import React from "react";
import './styles.scss'

const Header = (props) => {    
    return (
        <header className="header-component">              
            <div className="content">
                <h1 className="app-name">Meteo</h1>
                <div className="coordenations">({props.lon}, {props.lat})</div>
            </div>                              
        </header>
    )
}

export default Header;