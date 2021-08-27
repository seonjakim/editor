import { toMarkdown } from '../../lib/parser'

const App = {
  render: async () => `
    <div class='container'>
      <nav class='toolbar-box'></nav>
      <textarea class='get-input'></textarea>
      <div class='output'></div>
    </div>
  `,
  after_render: async () => {
    const textareaValue = document.querySelector('.get-input')
    const markdownOutput = document.querySelector('.output')

    textareaValue.addEventListener('keyup', (e) => {
      /** map for editor inner html */
      let markdowned = toMarkdown(e.target.value)
        .map((e, idx) => `<div key='${idx}' class='${e.tag}'>${e.text}</div>`)
        .join('')
      /** present the editor items */
      markdownOutput.innerHTML = markdowned
    })
  },
}
export default App
