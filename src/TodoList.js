
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, deleteTodo, updateTodoPriority }) {

    return (
        <>
            <p>
                <Link to="/todos/priority/1/dark">Priority 1</Link><br />
                <Link to="/todos/priority/2/light">Priority 2</Link><br />
                <Link to="/todos/priority/3/light">Priority 3</Link><br />
            </p>
            <ul>
                {todos.map(todo => (
                    <TodoCard key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodoPriority={updateTodoPriority} />
                ))}
            </ul>
        </>
    )
}