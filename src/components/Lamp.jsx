import React, { useState } from 'react'

const Lamp = () => {

    const [onOff, setIsActive] = useState('On');
    const active = () => {
        if(onOff === 'On'){
            setIsActive('Off');
        } else {
            setIsActive('On');
        }
    }
  return (
    <div className='card'>
        <div className={`lamp ${onOff}`}></div>
        <button  onClick={active}>{onOff}</button>
    </div> 
  )
}

export default Lamp