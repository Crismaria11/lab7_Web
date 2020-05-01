import React from 'react'
import {B} from './laberinto.jsx'
import BushImage from './bush.gif'

const Bush = ({x,y}) =>{

    const styleBush = {
        width: `${B}px`,
        height: `${B}px`,
        //background: 'green',
        backgroundImage: `url(${BushImage})`,
        backgroundSize: 'cover',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={styleBush}></div>
    )
}

export default Bush