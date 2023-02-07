/* // // thepa technical react tutorial - 21

const youtuber = 'Jhankar Mahbub'

const favProgram = 'React JS'

function myName() {
  let name = 'Asraf'
  return (name);
};

const myNames = () => {
  let name = 'Jehad'
  return (name)
}


export default youtuber

export { favProgram, myName, myNames } */



// // // thepa technical react tutorial - 22

import React from 'react'
import add from "./Calculator";
import { sub, mult, div } from './Calculator'

const App = () => {
  return (
    <>
      <ul>
        <li>The sum of two number: {add(40, 4)}</li>
        <li>The sum of two number: {sub(40, 4)}</li>
        <li>The sum of two number: {mult(40, 4)}</li>
        <li>The sum of two number: {div(40, 21)}</li>
      </ul>
    </>
  )
}

export default App
