import React from 'react'
import {B} from './laberinto.jsx'

const Bush = ({x,y}) =>{

    const styleBush = {
        width: `${B}px`,
        height: `${B}px`,
        background: 'blue',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={styleBush}></div>
    )
}

export default Bush