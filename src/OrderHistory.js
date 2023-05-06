import React from 'react'

export default function OrderHistory({ orders }) {
  return (
    <div>
      <h1>Order History</h1>
      { orders.map(order => <div key={order.id}>{order.name} - {order.entree}</div>)}
    </div>
  )
}
