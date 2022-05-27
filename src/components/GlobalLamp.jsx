import React, { useState } from 'react'
import LampGlobal from './LampGlobal'

const GlobalLamp = () => {

    const [isOnGlobal, setIsOnGlobal] = useState('On');

    const switchGlobal = () => {
        if(isOnGlobal === 'On'){
            setIsOnGlobal('Off')
        } else {
            setIsOnGlobal('On')
        }
    }

  return (
    <>
        <button onClick={switchGlobal} className='btn'>{isOnGlobal}</button>
        <div className='global-lamps'>
            <LampGlobal 
                isOn={isOnGlobal}
            />
            <LampGlobal 
                isOn={isOnGlobal}
            />
            <LampGlobal 
                isOn={isOnGlobal}
            />
            <LampGlobal 
                isOn={isOnGlobal}
            />
        </div>
    </>
  )
}

export default GlobalLamp