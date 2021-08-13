import { useState, useEffect, useMemo } from 'react'

/**
 * with useEffect
 */
const useLongPress = (onLongPress = () => {}, ms = 1000) => {
  const [isLongPress, setIsLongPress] = useState(false)
  let timer
  let delay = ms

  const doInterval = () => {
    timer = setTimeout(() => {
      onLongPress(), doInterval()
    }, delay)
    /** shorten the delay time */
    delay > 100 ? (delay -= 90) : ''
  }

  useEffect(() => {
    if (isLongPress) {
      doInterval()
    } else {
      clearTimeout(timer)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isLongPress])

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
