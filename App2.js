import React, { useState } from 'react'
import { readString } from '../../lib/parser'
import '../../styles/style.css'

const App = () => {
  const [textVal, setTextVal] = useState('')
  let el = readString(textVal)
  let contents =
    el !== undefined &&
    el.map((e, idx) => (
      <div key={idx} className={e.tag}>
        {e.text}
      </div>
    ))

  return (
    <div className='container'>
      <nav className='toolbar-box'></nav>
      <textarea
        onChange={(e) => setTextVal(e.target.value)}
        className='get-input'
      ></textarea>
      <div className='output'>{contents}</div>
    </div>
  )
}
export default App
