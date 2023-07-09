import { Link } from "react-router-dom";

export default function TodoCard({ todo, deleteTodo, updateTodoPriority }) {
    return (
        <li>
            {todo.text} - {todo.priority}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => updateTodoPriority(todo.id, 1)}>1</button>
            <button onClick={() => updateTodoPriority(todo.id, 2)}>2</button>
            <button onClick={() => updateTodoPriority(todo.id, 3)}>3</button>
            <Link to={`/todos/${todo.id}`}>Details</Link>
        </li>
    )
}