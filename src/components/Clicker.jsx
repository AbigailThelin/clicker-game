import React, { Component } from 'react'
import Games from './Games';
import '../styles/trumpClicker.css';

class TrumpClicker extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="trumpClicker">
                TrumpClicker

                <Games />
            </div>
        )
    }
}

export default TrumpClicker;