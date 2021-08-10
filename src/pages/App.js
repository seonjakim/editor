import React from 'react'
import Container from '../components/Container'
import RoundButton from '../components/RoundButton'
import SquareButton from '../components/SquareButton'
import InputWindow from '../components/InputWindow'
import useLongPress from '../library/useLongPress'
import SpinboxCard from '../components/SpinboxCard'

const App = () => {
  const [newCard, setNewCard] = React.useState([[1, 2, 3]])
  const [input, setInput] = React.useState([1, 2, 3])
  const addNewCard = () => {
    console.log(newCard)
    setNewCard([...newCard, input])
  }
  const newCardFunc = (e) => {
    // console.log(e.target.value.split(',').find((el) => el < '1' || el > '3'));
    // if (e.target.value && e.target.value.split(',').find((el) => el < '1' || el > '3') !== undefined) {
    //   alert('please select number from 1 to 3');
    // }
    if (!e.target.value) {
      setInput([1, 2, 3])
    } else {
      setInput(e.target.value.split(''))
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
            <input onChange={newCardFunc} />
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
