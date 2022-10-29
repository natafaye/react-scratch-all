import React from 'react'
import Greeting from './Greeting'

export default function App() {
  const names = ["Abigail", "Derek", "Simone"]

  // const arrayOfParagraphs = names.map(name => <p>Hello { name }!</p>)

  //const arrayOfParagraphs = names.map(name => <Greeting nameToGreet={name}/>)

  // arrayOfParagraphs = [
  //   <p>Hello Abigail!</p>,
  //   <p>Hello Derek!</p>
  // ]

  return (
    <div>
      <h1 className="text-danger">App</h1>
      <p className="green-text m-4">I'm the best.</p>

      { names.map(name => <Greeting nameToGreet={name} key={name}/>) }

      {/* <Greeting nameToGreet="Doug" color="green"/> */}
      {/* <Greeting nameToGreet={ names[0] }/>
      <Greeting nameToGreet={ names[1] }/>
      <Greeting nameToGreet={ names[2] }/> */}
    </div>
  )
}

// props = {
//   nameToGreet: "Natalie",
//   color: "green"
// }































// function isNotEmpty(paper) {
//   return paper !== '';
// }

// const isNotEmpty = (paper) => {
//   return paper !== '';
// }

// const isNotEmpty = (paper) => paper !== '';

// const isNotEmpty = paper => paper !== '';

// const isNotEmpty = p => p !== '';
