import React from 'react'
const Frame = ({ children }) => {
  return (
    <div className='web-frame'>
      <div className='frame-inner-container'>
        <h1>Editor-react</h1>
        {children}
        <h2>Markdown</h2>
        <h4>- Heading</h4>
        <h4>- Quote</h4>
      </div>
    </div>
  )
}
export default Frame
