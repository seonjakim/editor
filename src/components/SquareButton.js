import React from 'react'

const SquareButton = ({
  useLongPress,
  onClickFunction,
  buttonName,
  emphasis,
}) => {
  return (
    <div
      {...useLongPress}
      onClick={onClickFunction}
      className={`button-common square-button ${emphasis}`}
    >
      {buttonName}
    </div>
  )
}

export default SquareButton
