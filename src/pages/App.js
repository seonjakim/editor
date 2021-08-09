import React from 'react'
import Container from '../components/Container'
import RoundButton from '../components/RoundButton'
import SquareButton from '../components/SquareButton'

const App = () => {
  return (
    <div>
      <Container addBtn={<SquareButton />}></Container>
    </div>
  )
}
export default App
