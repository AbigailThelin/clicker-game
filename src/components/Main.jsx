import React, { Component } from 'react'

import Clicker from './Clicker'
import LevelUp from './LevelUp'

import '../App.css'

class Main extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className='main'>
                <Clicker/>
                <LevelUp/>
            </div>
        )
    }
}

export default Main;