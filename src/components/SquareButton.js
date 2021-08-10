import React, { useCallback, useEffect } from 'react'

const SquareButton = ({ test, buttonFunction, buttonName, emphasis }) => {
  // console.log({ ...buttonFunction });
  const [isLongPress, setIsLongPress] = React.useState(false)
  const [time, setTime] = React.useState(1000)
  useEffect(() => {
    let timer
    if (isLongPress) {
      timer = setTimeout(test, time)
      time > 100 ? setTime(time - 70) : ''
    } else {
      clearTimeout(timer)
      setTime(1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [test, isLongPress])
  return (
    <div
      onClick={test}
      // {...buttonFunction}
      onMouseDown={() => setIsLongPress(true)}
      onMouseUp={() => setIsLongPress(false)}
      // onMouseUp={() => setIsLongPress(false)}
      className={`button-common square-button ${emphasis}`}
    >
      {buttonName}
    </div>
  )
}

export default SquareButton
