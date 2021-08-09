import React from 'react'

const RoundButton = ({ buttonName, clickFunction }) => {
  return (
    <div onClick={clickFunction} className='button-common round-button'>
      {buttonName}
    </div>
  )
}

export default RoundButton
