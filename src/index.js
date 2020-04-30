import React from 'react'
import ReactDOM from 'react-dom'
import Laberinto from './laberinto.jsx'


const DOMReal = document.getElementById("laberinto")
const DOMVirtual = <Laberinto />


ReactDOM.render(
    DOMVirtual, DOMReal
)