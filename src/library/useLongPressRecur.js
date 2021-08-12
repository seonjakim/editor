import { useRef, useCallback, useMemo } from 'react'

/**
 * without useEffect
 */
const useLongPressRecursive = (onLongPress = () => {}, ms = 1000) => {
  const timerRef = useRef(false)

  const callback = useCallback(() => {
    /** functional updates */
    onLongPress((prev) => prev + 1)
  }, [onLongPress])

  const onPress = useCallback(() => {
    timerRef.current = setTimeout(() => {
      callback()
      onPress()
    }, ms)
  }, [callback])

  const offPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = false
    }
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

export default useLongPressRecursive
