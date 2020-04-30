import React, { useEffect } from 'react'
import Pared from './pared.jsx'
import Bush from './bush.jsx'
import Algo from './algo.jsx'
import Jugador from './jugador.jsx'

const WIDTH = 20
const HEIGHT = 20
const B = 10

const Laberinto = () => {
    const [laberinto,setLaberinto]=React.useState([])
    useEffect(() => {
        fetch(`http://quetzaluno.space:3001/?w=${WIDTH}&h=${HEIGHT}&type=json`).then(
            (response) => {
                return response.json()
            }
        ).then(
            (response) => {
                setLaberinto(response)
            }
        )
        
    },[])

    const style={
        width: `${((WIDTH+1)+(WIDTH*2))*B}px`,
        height: `${((HEIGHT+1)+(HEIGHT))*B}px`,
        background: 'pink',
        display: 'grid',
        gridTemplate: `repeat(${(WIDTH+1)+(WIDTH*2)},${B}px)/repeat(${(HEIGHT+1)+(HEIGHT)},${B}px)`
    } 

    return (
    <div style={style}>
        {laberinto.map((row,rowIndex)=>{
            return row.map((column,columnIndex)=>{
                if(column === '|') {
                    return <Pared key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else if (column === '+') {
                    return <Bush key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else if (column === '-') {
                    return <Algo key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else if (column === 'p') {
                    return <Jugador key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else {
                    return null
                }
                
                
            })
            })}
         </div>
    )
}

export default Laberinto
export {B}