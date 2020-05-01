import React from 'react'
import {B} from './laberinto.jsx'
import ParedHorizontal from './paredes.gif'

const ParedH = ({x,y}) =>{

    const stylePared = {
        width: `${B}px`,
        height: `${B}px`,
        background: 'brown',
        backgroundImage: `url(${ParedHorizontal})`,
        backgroundSize: 'cover',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={stylePared}></div>
    )
}

export default ParedH