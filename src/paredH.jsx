import React from 'react'
import PropTypes from 'prop-types'
import ParedHorizontal from './paredes.gif'
import {B} from './configs.js'

const ParedH = ({x, y}) => {
  const stylePared = {
    width: `${B}px`,
    height: `${B}px`,
    background: 'brown',
    backgroundImage: `url(${ParedHorizontal})`,
    backgroundSize: 'cover',
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  }
  return (
    <div style={stylePared} />
  )
}

ParedH.propTypes = {x: PropTypes.number.isRequired, y: PropTypes.number.isRequired}
export default ParedH
