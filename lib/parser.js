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
      return createHeading(el)
    case '>':
      return createQuote(el)
    default:
      return initialSpell(el)
  }
}

/** create new tag functions */
const createHeading = (spell) => {
  let size = 0
  let result = new TagProto()
  for (let i = 0; i < spell.length; i++) {
    if (spell[i] === '#') {
      while (spell[i] === '#') {
        size++
        i++
      }
      result.tag = 'hh' + size.toString()
      if (spell[i] !== ' ') return initialSpell(spell)
    }
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

const initialSpell = (spell) => {
  let result = new TagProto()
  result.text = spell
  return result
}
