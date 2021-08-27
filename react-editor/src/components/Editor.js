import React, { useState } from 'react'
import { toMarkdown } from '../../../lib/parser'
import '../../../styles/style.css'

const Editor = () => {
  /** create buttons */
  const buttonList = ['heading', 'bold', 'italic', 'strike', 'hrline', 'quote']
  const toolbar = buttonList.map((el, idx) => (
    <button key={idx} className={`toolbar-icons ${el}-i`}></button>
  ))
  /** get input from textarea and parsing it to new tag form */
  let defaultContent =
    '# This is h1\n## This is h2\n### This is h3\n>This is Quote\nThis is plain text'
  const [inputValue, setInputValue] = useState(defaultContent)
  let markdownObject = toMarkdown(inputValue)
  let contents = markdownObject.map((el, idx) => (
    <div key={idx} className={el.tag}>
      {el.text}
    </div>
  ))

  const setTest = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="container">
      <nav className="toolbar-box">{toolbar}</nav>
      <textarea
        onChange={(e) => setInputValue(e.target.value)}
        className="get-input"
        defaultValue={defaultContent}
      ></textarea>
      <div onChange={(e) => setTest(e)} className="output">
        {contents}
      </div>
    </div>
  )
}
export default Editor
