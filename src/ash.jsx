import React from 'react'
import PropTypes from 'prop-types'
import {B} from './configs.js'

const Ash = ({x, y}) => {
  const styleAsh = {
    width: `${B}px`,
    height: `${B}px`,
    background: 'red',
    borderRadius: '50px',
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  }
  return (
    <div style={styleAsh} />
  )
}

Ash.propTypes = {x: PropTypes.number.isRequired, y: PropTypes.number.isRequired}
export default Ash
