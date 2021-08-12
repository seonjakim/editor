import { useState, useEffect, useMemo } from 'react'

/**
 * with useEffect
 */
const useLongPress = (callback, ms) => {
  const [isLongPress, setIsLongPress] = useState(false)
  const [time, setTime] = useState(ms)

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

  return useMemo(
    () => ({
      onMouseDown: onPress,
      onMouseUp: offPress,
      onMouseLeave: offPress,
      onTouchStart: onPress,
      onTouchEnd: offPress,
    }),
    [onPress, offPress]
  )
}

export default useLongPress
