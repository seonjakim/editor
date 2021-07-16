export const toMarkdown = (input) => {
  let markdownObject = []
  if (input.length) {
    input = checkNextLine(input)
    input.forEach((el) => {
      let seperatedInput = el.split('')
      markdownObject.push(checkFormat(seperatedInput))
    })
    return markdownObject
  }
}

/** define prototype */
function TagProto() {
  this.tag = ''
  this.text = ''
}

/** split posting with '\n' and return Arrays */
const checkNextLine = (input) => {
  if (input.indexOf('\n') !== -1) {
    return input.split('\n')
  } else {
    return [input]
  }
}

function checkFormat(el) {
  switch (el[0]) {
    case '#':
      return createHeading(el)
    case '>':
      return createQuote(el)
    default:
      return initialInput(el)
  }
}

/** create new tag functions */
const createHeading = (input) => {
  let size = 0
  let result = new TagProto()
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '#') {
      while (input[i] === '#') {
        size++
        i++
      }
      result.tag = 'hh' + size.toString()
      if (input[i] !== ' ') return initialInput(input)
    }
    if (input[i] !== undefined) result.text += input[i]
  }
  return result
}

const createQuote = (input) => {
  let result = new TagProto()
  result.tag = 'quotes'
  for (let i = 1; i < input.length; i++) {
    result.text += input[i]
  }
  return result
}

const initialInput = (input) => {
  let result = new TagProto()
  result.text = input
  return result
}
