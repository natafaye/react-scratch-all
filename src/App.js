import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router'
import ProductForm from './ProductForm'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="container mt-3">
      <Link to="/" className="me-3">Home</Link>
      <Link to="/products/new">Add Product</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/new" element={<ProductForm/>}/>
      </Routes>
    </div>
  )
}


// const state = {
//   categories: {
//     categoriesArray: [
//       {
//         text: 'Eat food',
//         completed: true
//       }, 
//       {
//         text: 'Exercise',
//         completed: false
//       }
//     ],
//   },
//   promotions: {
//     promotionsArray: [
//         'important',
//         'personal'
//     ]
//   }
// }

// // Redux Toolkit writes this for us
// function addTodo(payload) {
//   return {
//     type: 'ADD_TODO',
//     payload: payload
//   }
// }


// // We write this
// dispatch(
//   addTodo(
//     {
//       text: 'Laundry',
//       completed: false
//     }
//   )
// )

