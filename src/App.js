import React from 'react'
import Toolbar from './Toolbar'
import ToolbarButton from './ToolbarButton'

export default function App() {
  const name = "Natalie"
  const paragraph = <p>{ 2 + 2 }</p>
  const number = 1 + 3
  return (
    <div>
      <Toolbar/>
      { paragraph }
      <Option dish={{ title: "fdsfsd", price: 9 }}/>
      <ul>
        <li>{5 + 3}</li>
      </ul>
    </div>
  )
}

function Menu() {
  return (
    <Option 
      dish={{ 
        title: "Spaghetti", 
        price: 9 
      }}
    />
  )
}

const Option = (props) => {
  return (
    <div>
      ${ props.dish.price } 
      - { props.dish.title }
    </div>
  )
}

















// function isNotEmpty(paper) {
//   return paper !== '';
// }

// // Changed to an arrow function
// const isNotEmpty = (paper) => {
//   return paper !== '';
// }

// // Can get rid of parenthesis if we have exactly one parameter
// const isNotEmpty = paper => {
//   return paper !== '';
// }

// // Can get rid of the curly brackets if we have exactly one line inside them
// const isNotEmpty = paper => paper !== ''

// // Can get rid of the curly brackets if we have exactly one line inside them
// const isNotEmpty = p => p !== ''
