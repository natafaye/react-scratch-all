import React from 'react'

export default function SearchBar(props) {
  return (
    <input type="text" placeholder={props.inputText}/>
  )
}

// props = { inputText: "Search... }

// Reactstrap
// function Card() {
//   return (
//     <div className="card">

//     </div>
//   )
// }









const tasks = [
  {
    id: 0,
    text: "something"
  },
  {
    id: 0,
    text: "thing 2"
  }
]

[
  <div>something</div>,
  <div>thing 2</div>
]

const pretendmap = (callbackBob) => {
  const mappedArray = []
  for(const task of tasks) {
    const newItem = callbackBob(task)
    mappedArray.push(newItem)
  }
  return mappedArray
}


function TaskList () {
  return (
    <div>
      {tasks.map(banana => <TaskCard task={banana}/>)}
    </div>
  )
}

function bob(taskParameter) {
  // const alwaysTheSame = {
  //   id: 0,
  //   text: "Always this text"
  // }
  return <TaskCard taskProp={taskParameter}/>
}

// props = {
//   task: {
//     id: 0,
//     text: "thing 2"
//   },
// }


function TaskCard(props) {
  return (
    <div>{props.task.text}</div>
  )
}