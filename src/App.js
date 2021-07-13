import React, {useState} from 'react'
import {readString} from './lib/parser'
import Link from './Link';
import './styles/style.css';

const App = () => {
  const [textVal, setTextVal] = useState('');
  let el = readString(textVal);
	// const el = [
	// 	{
	// 		tag : 'Link',
	// 		attributes:{
	// 			name: 'check my Github',
	// 			link: 'https://github.com/seonjakim'
	// 		},
	// 		value: 'Ok'
	// 	}
  // ]
  console.log(el)
  return (
	<div className='container'>
    <nav className='font-box'></nav>
    <textarea onChange={(e)=> setTextVal(e.target.value)} className='get-input'></textarea>
    <div className='output'>{
      el !== undefined && el.map((e, idx) => 
        <div key={idx}>
          <div className={`${e.tag}`}>{e.text}</div>
        </div>
      )
    }</div>
	</div>)
}
export default App