import React from 'react'

const InputWindow = ({ placeholder, onChangeFunction, number, size }) => {
  return (
    <div className={`number-window ${size}`}>
      <input
        value={number}
        placeholder={placeholder}
        onChange={(e) => onChangeFunction(e.target.value)}
        className={`input-window`}
      />
    </div>
  )
}

export default InputWindow
