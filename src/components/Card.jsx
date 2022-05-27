import React, { } from 'react'

const Card = ({name, isActive, changeStateUser}) => {

  return (
    <article className='card'>
        <h1>{name}</h1>
        <p>Estado: <b>{isActive}</b></p>
        <button onClick={changeStateUser}>Desahabilitar</button>
    </article>
  )
}

export default Card