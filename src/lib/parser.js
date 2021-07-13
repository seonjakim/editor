function tagPrototype() {
  this.tag = '';
  this.text = '';
}

const checkNextLine = (string) => {
  if (string.indexOf('\n') !== -1) {
    return string.split('\n');
  } else {
    return [string];
  }
}
export const readString = (string) => {
  let objectKey = [];
  // if (objectKey.length) objectKey = [];
  if (string.length) {
    string = checkNextLine(string);
    string.forEach((el, idx) => {
      let spell = el.split('');
      objectKey.push(checkFormat(spell));

      // let count = 0;
      // let res = new tagPrototype();
      // for (let i = 0; i < spell.length; i++) {
      //   if (spell[0] === '#') {
      //     while (spell[i] === '#') {
      //       count++;
      //       i++;
      //     }
      //     res.tag = 'hh' + count.toString();
      //   }
      //   if (spell[i] !== undefined) res.text += spell[i];
      // }
      // objectKey.push(res);
    });
    return objectKey;
  }

}

const createHeaderTag = (spell) => {
  let size = 0;
  let result = new tagPrototype();
  for (let i = 0; i < spell.length; i++) {
    while (spell[i] === '#') {
      size++;
      i++;
    }
    result.tag = 'hh' + size.toString();
    if (spell[i] !== undefined) result.text += spell[i];
  }
  return result;
}
function returnEl(el) {
  let result = new tagPrototype();
  for (let i = 0; i < el.length; i++) {
    result.text += el[i];
  }
  return result;
}

function checkFormat(el) {
  switch (el[0]) {
    case '#':
      return createHeaderTag(el);
    // case '`':
    //   createCodeSpace(el);
    //   break;
    // case '>':
    //   createQuote(el);
    //   break;
    default:
      return returnEl(el);
  }
}
