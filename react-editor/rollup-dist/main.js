(function (l, r) {
  if (!l || l.getElementById('livereloadscript')) return
  r = l.createElement('script')
  r.async = 1
  r.src =
    '//' +
    (self.location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1'
  r.id = 'livereloadscript'
  l.getElementsByTagName('head')[0].appendChild(r)
})(self.document)
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  )
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator']

  if (_i == null) return
  var _arr = []
  var _n = true
  var _d = false

  var _s, _e

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value)

      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']()
    } finally {
      if (_d) throw _e
    }
  }

  return _arr
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

  return arr2
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}

var toMarkdown = function toMarkdown(input) {
  var markdownObject = []

  if (input.length) {
    input = checkNextLine(input)
    input.forEach(function (el) {
      var seperatedInput = el.split('')
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

var checkNextLine = function checkNextLine(input) {
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

var createHeading = function createHeading(input) {
  var size = 0
  var result = new TagProto()

  for (var i = 0; i < input.length; i++) {
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

var createQuote = function createQuote(input) {
  var result = new TagProto()
  result.tag = 'quotes'

  for (var i = 1; i < input.length; i++) {
    result.text += input[i]
  }

  return result
}

var initialInput = function initialInput(input) {
  var result = new TagProto()
  result.text = input
  return result
}

var Editor = function Editor() {
  /** create buttons */
  var buttonList = ['heading', 'bold', 'italic', 'strike', 'hrline', 'quote']
  var toolbar = buttonList.map(function (el, idx) {
    return /*#__PURE__*/ window.React.createElement('button', {
      key: idx,
      className: 'toolbar-icons '.concat(el, '-i'),
    })
  })
  /** get input from textarea and parsing it to new tag form */

  var defaultContent =
    '# This is h1\n## This is h2\n### This is h3\n>This is Quote\nThis is plain text'

  var _useState = window.React.useState(defaultContent),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1]

  var markdownObject = toMarkdown(inputValue)
  var contents = markdownObject.map(function (el, idx) {
    return /*#__PURE__*/ window.React.createElement(
      'div',
      {
        key: idx,
        className: el.tag,
      },
      el.text
    )
  })
  return /*#__PURE__*/ window.React.createElement(
    'div',
    {
      className: 'container',
    },
    /*#__PURE__*/ window.React.createElement(
      'nav',
      {
        className: 'toolbar-box',
      },
      toolbar
    ),
    /*#__PURE__*/ window.React.createElement('textarea', {
      onChange: function onChange(e) {
        return setInputValue(e.target.value)
      },
      className: 'get-input',
      defaultValue: defaultContent,
    }),
    /*#__PURE__*/ window.React.createElement(
      'div',
      {
        className: 'output',
      },
      contents
    )
  )
}

var Frame = function Frame(_ref) {
  var children = _ref.children
  return /*#__PURE__*/ window.React.createElement(
    'div',
    {
      className: 'web-frame',
    },
    /*#__PURE__*/ window.React.createElement(
      'div',
      {
        className: 'frame-inner-container',
      },
      /*#__PURE__*/ window.React.createElement('h1', null, 'Editor-react'),
      children,
      /*#__PURE__*/ window.React.createElement('h2', null, 'Markdown'),
      /*#__PURE__*/ window.React.createElement('h4', null, '- Heading'),
      /*#__PURE__*/ window.React.createElement('h4', null, '- Quote')
    )
  )
}

var App = function App() {
  return /*#__PURE__*/ window.React.createElement(
    Frame,
    null,
    /*#__PURE__*/ window.React.createElement(Editor, null)
  )
}

window.ReactDOM.render(
  /*#__PURE__*/ window.React.createElement(App, null),
  document.querySelector('#app')
)
