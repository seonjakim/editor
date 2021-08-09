import React from 'react'

const SquareButton = ({ buttonFunction, buttonName, emphasis }) => {
  return (
    <div
      onClick={buttonFunction}
      className={`button-common square-button ${emphasis}`}
    >
      {buttonName}
    </div>
  )
}

export default SquareButton
