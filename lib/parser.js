export const readString = (string) => {
  let objectKey = []
  if (string.length) {
    string = checkNextLine(string)
    string.forEach((el, idx) => {
      let spell = el.split('')
      objectKey.push(checkFormat(spell))
    })
    return objectKey
  }
}

/** define prototype */
function TagProto() {
  this.tag = ''
  this.text = ''
}

/** split posting with '\n' and return Arrays */
const checkNextLine = (string) => {
  if (string.indexOf('\n') !== -1) {
    return string.split('\n')
  } else {
    return [string]
  }
}

function checkFormat(el) {
  switch (el[0]) {
    case '#':
      return createHeader(el)
    case '>':
      return createQuote(el)
    default:
      return returnEl(el)
  }
}

/** create new tag functions */
const createHeader = (spell) => {
  let size = 0
  let result = new TagProto()
  for (let i = 0; i < spell.length; i++) {
    while (spell[i] === '#') {
      size++
      i++
    }
    result.tag = 'hh' + size.toString()
    if (spell[i] !== undefined) result.text += spell[i]
  }
  return result
}

const createQuote = (spell) => {
  let result = new TagProto()
  result.tag = 'quotes'
  for (let i = 1; i < spell.length; i++) {
    result.text += spell[i]
  }
  return result
}

const returnEl = (el) => {
  let result = new TagProto()
  for (let i = 0; i < el.length; i++) {
    result.text += el[i]
  }
  return result
}
