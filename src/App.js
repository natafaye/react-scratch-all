import React, { useState } from 'react'
import OrderForm from './OrderForm'
import { Route, Routes } from 'react-router-dom'

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

      <Header/>
      <Routes>
        <Route path="/" element={<Feed postList={postList}/>}/>
        <Route path="/post/:postId" element={<PostDetailPage postList={postList} commentList={commentList}/>} />
      </Routes>
    </div>
  )
}

