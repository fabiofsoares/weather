import React, { Component } from 'react'
import './styles.scss'

const options = [
  { value: 'Paris', label: 'Paris' },
  { value: 'Londres', label: 'Londres' },
  { value: 'Bangkok', label: 'Bangkok' }
]

export default class SelectCity extends Component {
    
    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    render(){
        return (
            <div className="select-container">
                <select className="close" onChange={this.handleChange.bind(this)} value={this.props.value} >
                    { options.map((item, i) =>  <option key={i} value={item.value} className="selected">{item.label}</option> ) }                    
                </select>
            </div>
        )
    }
   
}
