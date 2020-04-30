import React from 'react'
import {B} from './laberinto.jsx'

const Algo = ({x,y}) =>{

    const styleAlgo = {
        width: `${B}px`,
        height: `${B}px`,
        background: 'green',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={styleAlgo}></div>
    )
}

export default Algo