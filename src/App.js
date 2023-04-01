import React, { useState } from 'react'
import OrderForm from './OrderForm'

export default function App() {
  //const [order, setOrder] = useState({ main: "none", side: "none"})
  const [orderList, setOrderList] = useState([])

  const addOrder = (newOrder) => {
    setOrderList([...orderList, newOrder])
    // also send to backend
  }

  return (
    <div>
      <h2>Restaurant</h2>
      <OrderForm onOrder={addOrder}/>
      <h2>Order</h2>
      { orderList.map(order => <div>Main: { order.main} Side: { order.side}</div>) }
    </div>
  )
}

