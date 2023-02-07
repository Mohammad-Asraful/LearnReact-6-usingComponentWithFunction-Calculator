/* // // thepa technical react tutorial - 21

import React from "react";
import ReactDOM from "react-dom";
import youtuber, { favProgram, myName, myNames } from './App'
// import { favProgram } from "./App";

ReactDOM.render(
  <>
    <ol>
      <li>Asraf</li>
      <li>{youtuber}</li>
      <li>{favProgram}</li>
      <li>{myName()}</li>
      <li>{myNames()}</li>
    </ol>
  </>, document.getElementById('root')
) */


// // // thepa technical react tutorial - 22
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
  <>
    <App />
  </>, document.getElementById('root')

)