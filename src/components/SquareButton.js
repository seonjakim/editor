import React, { useEffect } from 'react'

const SquareButton = ({
  useLongPress,
  onClickFunction,
  buttonName,
  emphasis,
}) => {
  const [isLongPress, setIsLongPress] = React.useState(false)
  const [time, setTime] = React.useState(1000)
  useEffect(() => {
    let timer
    if (isLongPress) {
      timer = setTimeout(onClickFunction, time)
      time > 100 ? setTime(time - 90) : ''
    } else {
      clearTimeout(timer)
      setTime(1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [onClickFunction, isLongPress])
  return (
    <div
      onClick={onClickFunction}
      onTouchStart={() => setIsLongPress(true)}
      onMouseDown={() => setIsLongPress(true)}
      onMouseUp={() => setIsLongPress(false)}
      onMouseLeave={() => setIsLongPress(false)}
      onTouchEnd={() => setIsLongPress(false)}
      className={`button-common square-button ${emphasis}`}
    >
      {buttonName}
    </div>
  )
}

export default SquareButton
