import { Link, useParams } from "react-router-dom"
import TodoCard from "./TodoCard"

export default function PriorityPage({ todos, deleteTodo, updateTodoPriority }) {

    const { priority, mode } = useParams()

    const todosWithPriority = todos.filter(todo => todo.priority === parseInt(priority))

    return (
        <div className={(mode === "dark") ? "bg-dark text-white" : ""}>
            <p>
                <Link to={"/todos/priority/1/" + mode}>Priority 1</Link><br />
                <Link to={"/todos/priority/2/" + mode}>Priority 2</Link><br />
                <Link to={"/todos/priority/3/" + mode}>Priority 3</Link><br />
            </p>
            {todosWithPriority.map(todo => <TodoCard key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodoPriority={updateTodoPriority} />)}
        </div>
    )
}