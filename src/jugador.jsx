import React from 'react'
import PropTypes from 'prop-types'
import {B} from './configs.js'
import PikaRight from './pika_right.png'
import PikaLeft from './pika_left.png'
import PikaUp from './pika_up.png'
import PikaDown from './pika_down.png'


const Jugador = ({x, y, direccion = 'down'}) => {
  let imagen
  switch (direccion) {
    case 'up':
      imagen = PikaUp
      break
    case 'right':
      imagen = PikaRight
      break
    case 'left':
      imagen = PikaLeft
      break
    default:
      imagen = PikaDown
      break
  }
  const styleJugador = {
    width: `${B}px`,
    height: `${B}px`,
    backgroundImage: `url(${imagen})`,
    backgroundSize: 'cover',
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  }

  return (
    <div style={styleJugador} />
  )
}
Jugador.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direccion: PropTypes.string.isRequired
}
export default Jugador
