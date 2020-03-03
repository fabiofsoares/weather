import React, { Component } from 'react'
import './styles.scss'

const options = [
  { value: 'Paris', label: 'Paris' },
  { value: 'Londres', label: 'Londres' },
  { value: 'Bangkok', label: 'Bangkok' }
]

export default class SelectCity extends Component {
    state = {
        open: false
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }
    
    render(){
        return (
            <div className="select-container">
                <select className={this.state.open ? 'open' : 'close'} value={this.props.value}
                    onChange={this.handleChange.bind(this)}>
                    { options.map((item, i) =>  <option key={i} value={item.value}>{item.label}</option> ) }                    
                </select>
            </div>
        )
    }
   
}
