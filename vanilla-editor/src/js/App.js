import { readString } from '../../../lib/parser'

const App = {
  render: async () => `
    <div class='container'>
      <nav class='toolbar-box'></nav>
      <textarea class='get-input'></textarea>
      <div class='output'></div>
    </div>
  `,
  after_render: async () => {
    const textVal = document.querySelector('.get-input')
    const editorOutput = document.querySelector('.output')

    textVal.addEventListener('keyup', (e) => {
      /** map for editor inner html */
      let el = readString(e.target.value)
        .map((e, idx) => `<div key='${idx}' class='${e.tag}'>${e.text}</div>`)
        .join('')
      /** present the editor items */
      editorOutput.innerHTML = el
    })
  },
}
export default App
