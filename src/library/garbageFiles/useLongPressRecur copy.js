import React, { useState, useRef, useCallback, useMemo } from 'react'

function useLongPressRecursive({
  onClick = () => {},
  onLongPress = () => {},
  ms = 1000,
} = {}) {
  const timerRef = useRef(false)
  const eventRef = useRef({})
  const test = () => {
    onLongPress((c) => c + 1)
  }

  const callback = useCallback(() => {
    test(eventRef.current)
    eventRef.current = {}
    timerRef.current = false
  }, [test])

  const start = useCallback(
    (ev) => {
      ev.persist()
      eventRef.current = ev
      timerRef.current = setTimeout(() => {
        callback()
        start(ev)
      }, ms)
    },
    [callback]
  )

  const stop = useCallback(
    (ev) => {
      ev.persist()
      eventRef.current = ev
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        onClick(eventRef.current)
        timerRef.current = false
        eventRef.current = {}
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
