import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'
import { selectBySearchTerm, selectTodosToDisplay } from './todoSlice'



export default function TodoList() {
    const [searchTerm, setSearchTerm] = useState("")

    // const todos = useSelector(function(state) {
    //     //console.log(state) // can be helpful to look at the whole state
    //     return state.todos.todoList
    // })

    // const todos = useSelector(state => {
    //     console.log(state)
    //     return state.todos.todoList
    // })

    // takes in the state and spits out either all the todos if showCompleted is true or just the uncompleted todos if showCompleted is false
    //const todosToDisplay = useSelector(state => (state.todos.showCompleted) ? state.todos.todoList : state.todos.todoList.filter(todo => !todo.completed))

    const todosToDisplay = useSelector(selectTodosToDisplay)

    const searchResults = useSelector(selectBySearchTerm(searchTerm))

  return (
    <div>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        { searchResults.map(todo => <TodoCard todo={todo}/> )}
    </div>
  )
}
