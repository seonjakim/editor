import React from 'react'

const SquareButton = ({ buttonFunction, buttonName }) => {
  return (
    <div onClick={buttonFunction} className='button-common square-button'>
      {buttonName}
    </div>
  )
}

export default SquareButton
