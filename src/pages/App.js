import { number } from 'prop-types';
import React from 'react';
import Container from '../components/Container';
import RoundButton from '../components/RoundButton';
import SquareButton from '../components/SquareButton';
import useLongPress from '../library/useLongPress';

const NumberWindow = ({ newNumberFunction, number }) => {
  const [testtest, setTest] = React.useState(number);
  const updateNumber = (e) => {
    test = e.target.value;
    newNumberFunction(e.target.value);
  };
  // React.useEffect(() => {
  //   setTest(number);
  // }, [number]);
  // const [initialNumber, setInitialNumber] = React.useState(number)
  return (
    <div
      // contentEditable
      // key='hello'
      className="number-window"
      // onInput={(e) => newNumberFunction(e.target.innerText)}
    >
      {/* {number} */}
      <input
        value={number === testtest ? testtest : number}
        onChange={(e) => {
          setTest(e.target.value), newNumberFunction(e.target.value);
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
  );
};

const ArrowIcon = ({ up }) => {
  return <div className={`arrow-i ${up}`}></div>;
};

export const SpinboxCard = ({ order }) => {
  const [numberValue, setNumberValue] = React.useState(0);
  let test;
  const increase = () => {
    console.log(numberValue);
    if (test !== undefined) {
      setNumberValue(test + 1);
      // // console.log(test);
      // // setNumberValue(test);
      // if (test !== undefined) {
      //   setNumberValue(test + 1);
    } else {
      setNumberValue(numberValue + 1);
    }
  };
  const decrease = () => {
    // setNumberValue(test);
    setNumberValue(numberValue - 1);
    console.log(numberValue);
  };

  // const longpress = useLongPress(decrease, 1000)

  const newNumberValue = (newNumber) => {
    test = parseInt(newNumber);
  };
  const setNewNumberValue = () => {
    setNumberValue(test);
  };
  const spinboxList = {
    1: <NumberWindow newNumberFunction={newNumberValue} number={numberValue} key="1" />,
    2: <SquareButton buttonFunction={setNewNumberValue} key="2" emphasis="low" buttonName="입력" />,
    3: <SquareButton key="3" emphasis="high" test={increase} buttonName={<ArrowIcon up="up" />} />,
    4: (
      <SquareButton
        key="4"
        emphasis="high"
        test={decrease}
        // buttonFunction={longpress}
        buttonName={<ArrowIcon />}
      />
    ),
  };
  const spinboxOrder = order.map((el) => spinboxList[el]);

  return <div className="card-container">{spinboxOrder}</div>;
};

const App = () => {
  const [newCard, setNewCard] = React.useState([[1, 3, 4]]);
  const [input, setInput] = React.useState([1, 3, 4]);
  const addNewCard = () => {
    console.log(newCard);
    setNewCard([...newCard, input]);
  };
  const newCardFunc = (e) => {
    // console.log(input);
    if (!e.target.value) {
      setInput([1, 3, 4]);
    } else {
      setInput(e.target.value.split(','));
    }
  };
  return (
    <div>
      <Container
        spinbox={newCard.map((el, idx) => (
          <SpinboxCard key={idx} order={el} />
        ))}
        addBtn={
          <>
            <input onChange={newCardFunc} />
            <RoundButton clickFunction={addNewCard} buttonName="spinbox" />
          </>
        }
      ></Container>
    </div>
  );
};
export default App;
