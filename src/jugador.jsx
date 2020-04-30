import React from 'react'
import {B} from './laberinto.jsx'

const Jugador = ({x,y}) =>{

    const styleJugador = {
        width: `${B}px`,
        height: `${B}px`,
        backgroundImage: 'black',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={styleJugador}></div>
    )
}

export default Jugador