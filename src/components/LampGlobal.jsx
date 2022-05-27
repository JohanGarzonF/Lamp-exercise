import React from 'react'

const LampGlobal = ({isOn, switchGlobal}) => {
  return (
    <div className='card'>
        <div className={`lamp ${isOn}`}></div>
    </div>
  )
}

export default LampGlobal