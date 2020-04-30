import React from 'react'
import {B} from './laberinto.jsx'

const Pared = ({x,y}) =>{

    const stylePared = {
        width: `${B}px`,
        height: `${B}px`,
        background: 'red',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={stylePared}></div>
    )
}

export default Pared