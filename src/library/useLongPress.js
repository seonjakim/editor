import { useState, useEffect, useCallback } from 'react'

const useLongPress = (callback = () => {}) => {
  const [isLongPress, setIsLongPress] = useState(false)
  const [time, setTime] = useState(1000)
  useEffect(() => {
    let timer
    if (isLongPress) {
      console.log(time)
      timer = setTimeout(callback, time)
      time > 100 ? setTime(time - 1) : ''
    } else {
      clearTimeout(timer)
      setTime(1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [callback, isLongPress])

  const onPress = useCallback(() => {
    setIsLongPress(true)
  }, [])
  const offPress = useCallback(() => {
    setIsLongPress(false)
  }, [])

  return {
    onMouseDown: onPress,
    onMouseUp: offPress,
    onMouseLeave: offPress,
    onTouchStart: onPress,
    onTouchEnd: offPress,
  }
}

export default useLongPress
