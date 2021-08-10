import React from 'react'

const InputWindow = ({ onChangeFunction, number }) => {
  return (
    <div className='number-window'>
      <input
        value={number}
        onChange={(e) => onChangeFunction(e.target.value)}
        className='input-window'
      />
    </div>
  )
}

export default InputWindow
