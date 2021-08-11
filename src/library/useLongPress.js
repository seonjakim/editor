import { useState, useEffect } from 'react'

const useLongPress = (callback, ms) => {
  const [isLongPress, setIsLongPress] = useState(false)
  const [time, setTime] = useState(ms)
  /**
   * The reason of using useEffect
   * to properly clear setTimeout function everytime when it is created
   */
  useEffect(() => {
    let timer
    if (isLongPress) {
      timer = setTimeout(callback, time)
      time > 100 && setTime(time - 90)
    } else {
      clearTimeout(timer)
      setTime(ms)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [callback, isLongPress])

  const onPress = () => {
    setIsLongPress(true)
  }
  const offPress = () => {
    setIsLongPress(false)
  }

  return {
    onMouseDown: onPress,
    onMouseUp: offPress,
    onMouseLeave: offPress,
  }
}

export default useLongPress
