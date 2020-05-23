import React from 'react'
import PropTypes from 'prop-types'
import ParedVertical from './paredes.gif'
import {B} from './configs.js'

const ParedV = ({x, y}) => {
  const stylePared = {
    width: `${B}px`,
    height: `${B}px`,
    background: 'brown',
    backgroundImage: `url(${ParedVertical})`,
    backgroundSize: 'cover',
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  }
  return (
    <div style={stylePared} />
  )
}

ParedV.propTypes = {x: PropTypes.number.isRequired, y: PropTypes.number.isRequired}
export default ParedV
