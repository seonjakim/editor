import React, { useState } from 'react'
import { readString } from '../../lib/parser'
import '../../styles/style.css'

const App = () => {
  const [textVal, setTextVal] = useState('')
  let el = readString(textVal)
  return (
    <div className='container'>
      <nav className='font-box'></nav>
      <textarea
        onChange={(e) => setTextVal(e.target.value)}
        className='get-input'
      ></textarea>
      <div className='output'>
        {el !== undefined &&
          el.map((e, idx) => (
            <div key={idx} className={`${e.tag}`}>
              {e.text}
            </div>
          ))}
      </div>
    </div>
  )
}
export default App
