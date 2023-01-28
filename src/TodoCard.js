import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from './todoSlice'

// You don't have to write this
// const deleteTodo = (payload) => ({
//     type: "DELETE_TODO",
//     payload: payload
// })

export default function TodoCard({ todo }) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        //const action = deleteTodo(todo.id)

       // dispatch(action) // send it to redux


       dispatch(deleteTodo(todo.id)) // payload passed into action creator that returns an action that is passed to the dispatch function which gives it to redux
    }

    return (
        <div>
            { todo.text }
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


const name = "Natalie"
const object = {
    name,
    name: name
}