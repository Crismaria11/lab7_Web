/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, {useEffect} from 'react'
import ParedV from './paredV.jsx'
import ParedH from './paredH.jsx'
import Bush from './bush.jsx'
import Jugador from './jugador.jsx'
import Ash from './ash.jsx'
import Fondo from './fondoNuevo.png'
import WinPikachu from './winPikachu.gif'
import {B} from './configs.js'


const Laberinto = () => {
  const [laberinto, setLaberinto] = React.useState([])
  const [playerPosX, setPlayerPosX] = React.useState(1)
  const [playerPosY, setPlayerPosY] = React.useState(1)
  const [level, setLevel] = React.useState('facil')
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [direccion, setDireccion] = React.useState('down')
  const [win, setWin] = React.useState(false)
  useEffect(() => {
    let width
    let height
    switch (level) {
      default:
        width = 6
        height = 6
        break
      case 'intermedio':
        width = 8
        height = 8
        break
      case 'dificil':
        width = 10
        height = 10
        break
    }
    setWidth(width)
    setHeight(height)
    fetch(`http://quetzaluno.space:3001/?w=${width}&h=${height}&type=json`).then(
      (response) => {
        return response.json()
      }
    ).then(
      (response) => {
        setLaberinto(response)
      }
    )
  }, [level])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      if (laberinto[playerPosY][playerPosX + 1] === ' ' || laberinto[playerPosY][playerPosX + 1] === 'p' || laberinto[playerPosY][playerPosX + 1] === 'g') {
        if (laberinto[playerPosY][playerPosX + 1] === 'g') {
          setPlayerPosX(playerPosX + 1)
          setTimeout(() => setWin(true), 50)
        }
        setPlayerPosX(playerPosX + 1)
        setDireccion('right')
      }
    }
    else if (e.key === 'ArrowLeft') {
      if (laberinto[playerPosY][playerPosX - 1] === ' ' || laberinto[playerPosY][playerPosX - 1] === 'p' || laberinto[playerPosY][playerPosX - 1] === 'g') {
        setPlayerPosX(playerPosX - 1)
        setDireccion('left')
      }
    }
    else if (e.key === 'ArrowUp') {
      if (laberinto[playerPosY - 1][playerPosX] === ' ' || laberinto[playerPosY - 1][playerPosX] === 'p' || laberinto[playerPosY - 1][playerPosX] === 'g') {
        setPlayerPosY(playerPosY - 1)
        setDireccion('up')
      }
    }
    else if (e.key === 'ArrowDown') {
      if (laberinto[playerPosY + 1][playerPosX] === ' ' || laberinto[playerPosY + 1][playerPosX] === 'p' || laberinto[playerPosY + 1][playerPosX] === 'g') {
        if (laberinto[playerPosY + 1][playerPosX] === 'g') {
          setPlayerPosY(playerPosY + 1)
          setTimeout(() => setWin(true), 1000)
        }
        setPlayerPosY(playerPosY + 1)
        setDireccion('down')
      }
    }
  }

  const background = {
    backgroundImage: `url(${Fondo})`,
    backgroundSize: 'cover',
    height: '100%'
  }
  const style = {
    marginTop: '100px',
    margin: '0 auto',
    width: `${((width + 1) + (width * 2)) * B}px`,
    height: `${((height + 1) + (height)) * B}px`,
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplate: `repeat(${(width + 1) + (width * 2)},${B}px)/repeat(${(height + 1) + (height)},${B}px)`
  }
  const selectStyle = {
    margin: '25px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '75px'
  }
  const backgroundStyle = {
    width: '930px',
    margin: '0 auto',
    height: '630px'
  }
  const h1Style = {
    margin: '0',
    textAlign: 'center',
    fontFamily: 'Comic Sans Ms',
    fontSize: '60px'
  }
  const h1WinStyle = {
    margin: '0',
    textAlign: 'center',
    fontFamily: 'Comic Sans Ms',
    fontSize: '150px'
  }
  const h3Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Comic Sans Ms',
    fontSize: '40px'
  }
  const h5Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Comic Sans Ms',
    fontSize: '20px',
    flexFlow: 'end'
  }
  const winStyle = {
    width: '100wh',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${WinPikachu})`,
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  }
  if (win) {
    return (
      <div style={winStyle}>
        <h3 style={h3Style}>Excelente trabajo Maestro Pokemon!</h3>
        <h1 style={h1WinStyle}>Ganaste!</h1>
        <h5 style={h5Style}>(Refresca la pagina para jugar de nuevo)</h5>
      </div>
    )
  }
  return (
    <div style={background}>
      <h1 style={h1Style}>Laberinto Pokemon</h1>
      <h3 style={h3Style}>Nivel de dificultad</h3>
      <select style={selectStyle} value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="facil">Facil</option>
        <option value="intermedio">Intermedio</option>
        <option value="dificil">Dificil</option>
      </select>
      <div style={backgroundStyle}>
        <div style={style} onKeyDown={handleKeyDown} tabIndex="0" role="button">
          <Jugador x={playerPosX} y={playerPosY} direccion={direccion} />
          {
          laberinto.map((row, rowIndex) => {
            return row.map((column, columnIndex) => {
              if (column === '|') {
                return <ParedV key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex} />
              }
              else if (column === '-') {
                return <ParedH key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex} />
              }
              else if (column === '+') {
                return <Bush key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex} />
              }
              else if (column === 'g') {
                return <Ash key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex} />
              }
              return null
            })
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Laberinto
