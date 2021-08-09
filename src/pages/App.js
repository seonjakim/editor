import { number } from 'prop-types'
import React from 'react'
import Container from '../components/Container'
import RoundButton from '../components/RoundButton'
import SquareButton from '../components/SquareButton'

const NumberWindow = ({ newNumberFunction, number }) => {
  const [testtest, setTest] = React.useState(number)
  const updateNumber = (e) => {
    test = e.target.value
    newNumberFunction(e.target.value)
  }
  React.useEffect(() => {
    setTest(number)
  }, [number])
  // const [initialNumber, setInitialNumber] = React.useState(number)
  return (
    <div
      // contentEditable
      // key='hello'
      className='number-window'
      // onInput={(e) => newNumberFunction(e.target.innerText)}
    >
      {/* {number} */}
      <input
        value={testtest}
        onChange={(e) => {
          setTest(e.target.value), newNumberFunction(e.target.value)
        }}
        style={{
          textAlign: 'center',
          width: '100%',
          height: '100%',
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: 'inherit',
        }}
      />
    </div>
  )
}

const ArrowIcon = ({ up }) => {
  return <div className={`arrow-i ${up}`}></div>
}

const SpinboxCard = ({ order }) => {
  const [numberValue, setNumberValue] = React.useState(0)
  let test
  const increase = () => {
    console.log(numberValue)
    if (test !== undefined) {
      setNumberValue(test + 1)
      // // console.log(test);
      // // setNumberValue(test);
      // if (test !== undefined) {
      //   setNumberValue(test + 1);
    } else {
      setNumberValue(numberValue + 1)
    }
  }
  const decrease = () => {
    // setNumberValue(test);
    setNumberValue(numberValue - 1)
    test = numberValue
  }
  const newNumberValue = (newNumber) => {
    test = parseInt(newNumber)
  }
  const setNewNumberValue = () => {
    setNumberValue(test)
  }
  const spinboxList = {
    1: (
      <NumberWindow
        newNumberFunction={newNumberValue}
        number={numberValue}
        key='1'
      />
    ),
    2: (
      <SquareButton
        buttonFunction={setNewNumberValue}
        key='2'
        emphasis='low'
        buttonName='입력'
      />
    ),
    3: (
      <SquareButton
        key='3'
        emphasis='high'
        buttonFunction={increase}
        buttonName={<ArrowIcon up='up' />}
      />
    ),
    4: (
      <SquareButton
        key='4'
        emphasis='high'
        buttonFunction={decrease}
        buttonName={<ArrowIcon />}
      />
    ),
  }
  const spinboxOrder = order.map((el) => spinboxList[el])

  return <div className='card-container'>{spinboxOrder}</div>
}

const App = () => {
  let order = [1, 2, 3, 4]
  return (
    <div>
      <Container
        spinbox={<SpinboxCard order={order} />}
        addBtn={<SquareButton />}
      ></Container>
    </div>
  )
}
export default App
