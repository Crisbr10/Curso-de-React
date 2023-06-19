import React from 'react'

export default function Ejemplo4(props) {
  return (
    <div>
       <h3>Este es nombre: {props.name}</h3>
       {props.children}
    </div>
  )
}
