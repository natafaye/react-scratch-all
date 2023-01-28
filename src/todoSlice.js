import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: [ { text: "Laundry", completed: true }, { text: "Do Stuff", completed: false }, { text: "Find Stuff to Wear", completed: false }],
        showCompleted: false
    },
    reducers: {
        createTodo: (state, action) => { // the payload should have an object with all the new todo info
            // If you don't work off copies, just make the change directly
            state.todoList.push(action.payload)
        },
        deleteTodo: (state, action) => { // the payload should be the id of the todo to delete
            // If you work off copies, just return the changed copy
            return state.todoList.filter(todo => todo.id !== action.payload)
        }
    }
})

// todoSlice = {
//     reducer: (state, action) => {
//         switch(action.type) {
//           case 'CREATE_TODO':
//             return {
//               ...state
//               entities: [
//                 ...state.entities,
//                action.payload
//               ]
//             }
//             break;
//           case 'DELETE_TODO':
//             break;
//           default:
//             return state;
//         }
//       },
//     actions: {
//         createTodo: (newTodo) => {
//             return { 
//               type: 'CREATE_TODO', 
//               payload: newTodo
//             }
//           },
//           deleteTodo: (idToDelete) => {
//             return { 
//               type: 'DELETE_TODO', 
//               payload: idToDelete
//             }
//           }
//     }
// }

export const selectTodosToDisplay = state => (state.todos.showCompleted) ? state.todos.todoList : state.todos.todoList.filter(todo => !todo.completed)

// export const createSelectBySearchTermFunction = (searchTerm) => {
//     return state => state.todos.todoList.filter(todo => todo.text.includes(searchTerm))
// }

export const selectBySearchTerm = searchTerm => state => state.todos.todoList.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))

export const todoReducer = todoSlice.reducer

export const { createTodo, deleteTodo } = todoSlice.actions
// export const createTodo = todoSlice.actions.createTodo
// export const deleteTodo = todoSlice.actions.deleteTodo