import React, { useEffect, useState } from 'react'
import OrderForm from './OrderForm'

export default function App() {
  const [order, setOrder] = useState({ name: "No one", dish: "None" })
  
  return (
    <div>
      <OrderForm setOrder={setOrder}/>
      <p>{ order.name } ordered { order.dish }</p>
    </div>
  )
}