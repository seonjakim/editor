import React from 'react'

const Container = ({ spinbox, addBtn }) => {
  return (
    <div className='container-background'>
      <div className='spinbox-container'>
        <div className='spinbox-window'>{spinbox}</div>
        <div className='add-spinbox-area'>{addBtn}</div>
      </div>
    </div>
  )
}

export default Container
