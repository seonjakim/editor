import React, { useState } from 'react'
import InputWindow from '../../components/InputWindow'
import SquareButton from '../../components/SquareButton'
import useLongPress from '../../library/useLongPress'
import useLongPressCompare from '../../library/useLongPressNoUseEffect'

/**
 * each spinbox should work separately
 * so that this component contains its own functions
 */
const SpinboxCard = ({ order }) => {
  const [numberValue, setNumberValue] = useState(0)
  /** for onClick event */
  const increase = () => {
    setNumberValue(Number(numberValue) + 1)
  }
  const decrease = () => {
    setNumberValue(Number(numberValue) - 1)
  }

  /** for LongPress event */
  const onLongPressIncrease = () => {
    setNumberValue((prev) => Number(prev) + 1)
  }
  const onLongPressDecrease = () => {
    setNumberValue((prev) => Number(prev) - 1)
  }

  const longPressIncrease = useLongPress(onLongPressIncrease, 1000)
  const longPressDecrease = useLongPress(onLongPressDecrease, 1000)

  // leave this for the test purpose
  const longPressIncreaseCompare = useLongPressCompare(
    onLongPressIncrease,
    1000
  )
  const longPressDecreaseCompare = useLongPressCompare(
    onLongPressDecrease,
    1000
  )

  const spinboxList = {
    1: <InputWindow key='1' number={numberValue} onChange={setNumberValue} />,
    2: (
      <SquareButton
        key='2'
        emphasis='high'
        onClick={increase}
        useLongPress={longPressIncrease}
        buttonName={<ArrowIcon up='up' />}
      />
    ),
    3: (
      <SquareButton
        key='3'
        emphasis='high'
        onClick={decrease}
        useLongPress={longPressDecrease}
        buttonName={<ArrowIcon />}
      />
    ),
  }
  const spinboxOrder = order.map((el) => spinboxList[el])

  return <div className='card-container'>{spinboxOrder}</div>
}

// the arrow icon in the square button
const ArrowIcon = ({ up }) => {
  return <div className={`arrow-i ${up}`}></div>
}

export default SpinboxCard
