import React from 'react'
import Container from '../components/Container'
import RoundButton from '../components/RoundButton'
import InputWindow from '../components/InputWindow'
import SpinboxCard from '../components/SpinboxCard'

const App = () => {
  const [newCard, setNewCard] = React.useState([[1, 2, 3]])
  const [input, setInput] = React.useState([1, 2, 3])
  const addNewCard = () => {
    if (input && input.some((el) => el < '1' || el > '3')) {
      alert('please put number from 1 to 3')
    } else {
      setNewCard([...newCard, input])
    }
  }
  const newCardFunc = (userInput) => {
    if (!userInput) {
      setInput([1, 2, 3])
    } else {
      setInput(userInput.split(''))
    }
  }

  return (
    <div>
      <Container
        spinbox={newCard.map((el, idx) => (
          <SpinboxCard key={idx} order={el} />
        ))}
        addBtn={
          <>
            <InputWindow
              placeholder='rearrange spinbox ex) 213'
              size='small'
              onChangeFunction={newCardFunc}
            />
            <RoundButton
              clickFunction={addNewCard}
              buttonName='spinbox'
              emphasis='high'
            />
          </>
        }
      ></Container>
    </div>
  )
}
export default App
