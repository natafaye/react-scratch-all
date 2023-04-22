import React from 'react'
import Toolbar from './Toolbar'

export default function App() {
  const paragraph = <p>The sum is: { 3 + 5 }</p>

  return (
    <div>
      <Toolbar/>
      { paragraph }
      App that's cool
    </div>
  )
}






// function isNotEmpty (paper) {
//   return paper !== '';
// }

// const isNotEmpty = (paper) => {
//   return paper !== '';
// }

// // If there is exactly one parameter, we can remove the parenthesis
// const isNotEmpty = paper => {
//   return paper !== '';
// }

// // If there is exactly one line in the function, we can remove the curly brackets (and the return)
// const isNotEmpty = paper => paper !== '';

// // The parameter can have any name
// const isNotEmpty = p => p !== '';

// // The function itself can have no name
// p => p !== ''