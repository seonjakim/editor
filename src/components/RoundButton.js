import React from 'react'

const RoundButton = ({ buttonName, clickFunction, emphasis }) => {
  return (
    <div
      onClick={clickFunction}
      className={`button-common round-button ${emphasis}`}
    >
      {buttonName}
    </div>
  )
}

export default RoundButton
