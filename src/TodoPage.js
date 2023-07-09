import { useParams } from "react-router-dom"

export default function TodoPage({ todos }) {

    const { todoId } = useParams()

    const todo = todos.find(todo => todo.id === parseInt(todoId))

    return (
        <div>{ todo.text } - { todo.priority }</div>
    )
}