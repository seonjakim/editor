import React, { useState } from 'react'
import { readString } from '../../../lib/parser'
import '../../../styles/style.css'

const Editor = () => {
  /** create buttons */
  const buttonList = ['heading', 'bold', 'italic', 'strike', 'hrline', 'quote']
  const toolbar = buttonList.map((el, idx) => (
    <button key={idx} className={`toolbar-icons ${el}-i`}></button>
  ))
  /** get input from textarea and parsing it to new tag form */
  let defaultContent = '# This is h1\n## This is h2\n### This is h3\n>This is Quote\nThis is plain text'
  const [textVal, setTextVal] = useState(defaultContent)
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
      <nav className='toolbar-box'>{toolbar}</nav>
      <textarea
        onChange={(e) => setTextVal(e.target.value)}
        className='get-input'
        defaultValue={defaultContent}
      ></textarea>
      <div className='output'>{contents}</div>
    </div>
  )
}
export default Editor
