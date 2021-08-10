import React from 'react'
import InputWindow from './InputWindow'
import SquareButton from './SquareButton'

const ArrowIcon = ({ up }) => {
  return <div className={`arrow-i ${up}`}></div>
}
/**
 * each spinbox should work separately
 * so that this component contains its own functions
 */
const SpinboxCard = ({ order }) => {
  const [numberValue, setNumberValue] = React.useState(0)
  const increase = () => {
    setNumberValue(Number(numberValue) + 1)
  }
  const decrease = () => {
    setNumberValue(Number(numberValue) - 1)
  }

  const spinboxList = {
    1: (
      <InputWindow
        onChangeFunction={setNumberValue}
        number={numberValue}
        key='1'
      />
    ),
    2: (
      <SquareButton
        key='2'
        emphasis='high'
        onClickFunction={increase}
        buttonName={<ArrowIcon up='up' />}
      />
    ),
    3: (
      <SquareButton
        key='3'
        emphasis='high'
        onClickFunction={decrease}
        buttonName={<ArrowIcon />}
      />
    ),
  }
  const spinboxOrder = order.map((el) => spinboxList[el])

  return <div className='card-container'>{spinboxOrder}</div>
}

export default SpinboxCard
