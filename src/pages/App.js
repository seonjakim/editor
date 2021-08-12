import React from 'react'
import Container from '../components/Container'
import RoundButton from '../components/RoundButton'
import InputWindow from '../components/InputWindow'
import SpinboxCard from './midAbstraction/SpinboxCard'

const App = () => {
  const [newSpinbox, setNewSpinbox] = React.useState([[1, 2, 3]])
  const [input, setInput] = React.useState([1, 2, 3])

  // check the order of spinbox and make new spinbox
  const checkInputAddSpinbox = () => {
    if (input && input.some((el) => el < '1' || el > '3')) {
      alert('please put number from 1 to 3')
    } else {
      setNewSpinbox([...newSpinbox, input])
    }
  }
  // when there is no input, set initial value as [1, 2, 3]
  const getUserInput = (userInput) => {
    if (!userInput) {
      setInput([1, 2, 3])
    } else {
      setInput(userInput.split(''))
    }
  }

  const addSpinboxButton = (
    <>
      <div>Add</div>
      <div>Spinbox</div>
    </>
  )

  return (
    <div>
      <Container
        spinbox={newSpinbox.map((el, idx) => (
          <SpinboxCard key={idx} order={el} />
        ))}
        addBtn={
          <>
            <InputWindow
              placeholder='rearrange spinbox ex) 213'
              size='small'
              onChangeFunction={getUserInput}
            />
            <RoundButton
              onClick={checkInputAddSpinbox}
              buttonName={addSpinboxButton}
              emphasis='low'
            />
          </>
        }
      ></Container>
    </div>
  )
}
export default App
