import { useState } from "react";
import MessageCard from "./MessageCard";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./TodoPage";

// LIKES PIECE OF STATE = 2

export default function App() {
  const [likes, setLikes] = useState(0) // either gets the initial value or the previous value

  const [todos, setTodos] = useState([{ id: 0, text: "Laundry", priority: 3 }]) // test data

  const deleteTodo = (idToDelete) => {
    // Good
    // const copyOfTodos = todos.slice()
    // const indexToDelete = todos.findIndex(todo => todo.id === idToDelete)
    // copyOfTodos.splice(indexToDelete, 1)
    // setTodos(copyOfTodos)

    // Fantastic
    setTodos(todos.filter(todo => todo.id !== idToDelete))
  }

  const updateTodoPriority = (idToUpdate, newPriority) => {
    // Good
    // const copyOfTodoList = todos.slice()
    // const indexToUpdate = todos.findIndex(todo => todo.id === idToUpdate)
    // const copyOfTodo = { ...todos[indexToUpdate] } // trust this makes a copy
    // copyOfTodo.priority = newPriority
    // copyOfTodoList[indexToUpdate] = copyOfTodo
    // setTodos(copyOfTodoList)

    // Fantastic
    setTodos(todos.map(todo =>
      (todo.id === idToUpdate) ?
        { ...todo, priority: newPriority } :
        todo
    ))

  }

  const addTodo = () => {
    const newTodo = { id: 1, text: "Taxes", priority: 1 }

    // BLASPHEMY
    //todos.push(newTodo)

    // Work off copies

    // Good
    // const copyOfTodos = todos.slice()
    // copyOfTodos.push(newTodo)
    // setTodos(copyOfTodos)

    // Fantastic
    setTodos(todos.concat(newTodo))
  }

  const doSomething = (name) => {
    console.log(name + " did it")
  }

  const likeIt = () => {
    // BLASPHEMY
    // No updating state directly
    // likes++

    // MUST GO THROUGH SETTING FUNCTION
    setLikes(likes + 1)
  }

  return (
    <div>
      <Link to="/todos">Todos</Link><br/>
      <Link to="/todos/add">Add</Link><br/>
      <Link to="/likestuff">Like Stuff</Link><br/>

      <Routes>
        <Route path="/todos" element={<TodoList todos={todos} updateTodoPriority={updateTodoPriority} deleteTodo={deleteTodo} />} />
        <Route path="/todos/add" element={<AddTodoForm addTodo={addTodo} />} />
        <Route path="/todos/:todoId" element={<TodoPage todos={todos} />}/>

        {/* Not the most common, but you can */}
        <Route path="/likestuff" element={
          <>
            <p>{likes} Likes</p>
            <button onClick={likeIt}>Like</button>
            <MessageCard number={getNumber()} color="red" />
            <button onClick={() => doSomething("Natalie")}>click Me</button>
          </>
        }/>
      </Routes>
    </div>
  )
}

const getNumber = () => {
  return 3
}


// REACT DOES THIS
// props = {
//   number: 3,
//   color: "red"
//   message: { text: "hello", author: "Natalie" }
// }
// MessageCard(props)






// function getFood() {
//   return [ "meat", "cookies" ]
// }

// const [ dinner, dessert ] = getFood()