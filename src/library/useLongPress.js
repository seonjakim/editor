import { useState, useEffect, useCallback } from 'react'

const useLongPress = (callback = () => {}, ms = 300) => {
  const [isLongPress, setIsLongPress] = useState({ press: false, time: ms })
  console.log(isLongPress.time)
  useEffect(() => {
    let timer
    if (isLongPress.press) {
      setIsLongPress({ time: isLongPress.time-- })
      console.log(isLongPress.time)
      timer = setTimeout(callback, 300)
    } else {
      clearTimeout(timer)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [callback, ms, isLongPress.press])

  const onPress = useCallback(() => {
    setIsLongPress({ press: true, time: ms })
  }, [])
  const offPress = useCallback(() => {
    setIsLongPress({ press: false, time: ms })
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
