import React from "react";
import './styles.scss'

const Header = (props) => {
    return (
        <header className="header-component">              
            <div className="content">
                <span className="app-name">Meteo</span>
                <div className="coordenations">({props.lon}, {props.lat})</div>
            </div>                              
        </header>
    )
}

export default Header;