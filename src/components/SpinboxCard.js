import React, { useCallback } from 'react'
import InputWindow from './InputWindow'
import SquareButton from './SquareButton'
import useLongPress from '../library/useLongPress'

const ArrowIcon = ({ up }) => {
  return <div className={`arrow-i ${up}`}></div>
}
/**
 * each spinbox should work separately
 * so that this component contains its own functions
 */
const SpinboxCard = ({ order }) => {
  const [numberValue, setNumberValue] = React.useState(0)
  const increase = useCallback(() => {
    setNumberValue(Number(numberValue) + 1)
  }, [numberValue])
  const decrease = useCallback(() => {
    setNumberValue(Number(numberValue) - 1)
  }, [numberValue])

  const longPressIncrease = useLongPress(increase, 1000)
  const longPressDecrease = useLongPress(decrease, 1000)

  const spinboxList = {
    1: (
      <InputWindow
        key='1'
        number={numberValue}
        onChangeFunction={setNumberValue}
      />
    ),
    2: (
      <SquareButton
        key='2'
        emphasis='high'
        onClickFunction={increase}
        useLongPress={longPressIncrease}
        buttonName={<ArrowIcon up='up' />}
      />
    ),
    3: (
      <SquareButton
        key='3'
        emphasis='high'
        onClickFunction={decrease}
        useLongPress={longPressDecrease}
        buttonName={<ArrowIcon />}
      />
    ),
  }
  const spinboxOrder = order.map((el) => spinboxList[el])

  return <div className='card-container'>{spinboxOrder}</div>
}

export default SpinboxCard
