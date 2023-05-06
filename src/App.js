import React, { useEffect } from 'react'
import Toolbar from './Toolbar'
import OrderForm from './OrderForm'
import OrderHistory from './OrderHistory'
import { useState } from 'react'

let nextId = 5

export default function App() {
  const [orderList, setOrderList] = useState( [  { id: 0, name: "Natalie", entree: "burritos" } ] )

  const addOrder = (newOrderData) => {
    const newOrder = { id: nextId++, ...newOrderData }
    setOrderList([...orderList, newOrder])
  }

  return (
    <div>
      <Toolbar/>
      <OrderForm onSubmit={addOrder}/>
      <OrderHistory orders={orderList}/>
    </div>
  )
}


// React does this in the background
// props = {
//   onSubmit: (newOrderData) => {
//     const newOrder = { id: nextId++, ...newOrderData }
//     setOrderList([...orderList, newOrder])
//   }
// }
// OrderForm(props)




// useEffect(() => {
//   console.log("loaded in for the first time")
// }, []) // happen once

// useEffect(() => {
//   console.log("loaded in for the first time")
// }) // every time this renders (rare)

// useEffect(() => {
//   console.log("loaded in for the first time")
// }, [1 + 1]) // every time math has fundamentally changed
