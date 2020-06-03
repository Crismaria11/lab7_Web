import React from 'react'
import PropTypes from 'prop-types'
import BushImage from './bushes.gif'
import {B} from './configs.js'


const Bush1 = ({x, y}) => {
  const styleBush = {
    width: `${B}px`,
    height: `${B}px`,
    backgroundImage: `url(${BushImage})`,
    backgroundSize: '100% 100%',
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  }
  return (
    <div style={styleBush} />
  )
}
Bush1.propTypes = {x: PropTypes.number.isRequired, y: PropTypes.number.isRequired}
export default Bush1
