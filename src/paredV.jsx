import React from 'react'
import {B} from './laberinto.jsx'
import ParedVertical from './paredes.gif'

const ParedV = ({x,y}) =>{

    const stylePared = {
        width: `${B}px`,
        height: `${B}px`,
        background: 'brown',
        backgroundImage: `url(${ParedVertical})`,
        backgroundSize: 'cover',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={stylePared}></div>
    )
}

export default ParedV