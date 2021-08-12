import React, { useState, useRef, useCallback, useMemo } from 'react'

function useLongPressRecursive({
  onClick = () => {},
  onLongPress = () => {},
  ms = 1000,
} = {}) {
  const timerRef = useRef(false)
  let eventRef
  const test = () => {
    onLongPress((c) => c + 1)
  }

  const callback = useCallback(() => {
    test(eventRef)
    // eventRef = {};
    timerRef.current = false
  }, [test])

  const start = useCallback(
    (ev) => {
      // ev.persist();
      // eventRef = ev;
      timerRef.current = setTimeout(() => {
        callback()
        start(ev)
      }, ms)
    },
    [callback]
  )

  const stop = useCallback(
    (ev) => {
      // ev.persist();
      // eventRef = ev;
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        onClick(eventRef)
        timerRef.current = false
        // eventRef = {};
      }
    },
    [onClick]
  )

  return useMemo(
    () => ({
      onMouseDown: start,
      onMouseUp: stop,
      onMouseLeave: stop,
      onTouchStart: start,
      onTouchEnd: stop,
    }),
    [start, stop]
  )
}

export default useLongPressRecursive
