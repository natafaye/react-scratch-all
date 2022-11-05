import React from 'react'

export default function OrderView({ amount, order }) {
  return (
    <div>I ordered { amount } { order }</div>
  )
}

// props = {
//     order: "tacos",
//     amount: 5
//   }


// function getDinner() {
//     const dessert = "pie";
//     const side = "potatoes"
//     return [dessert, side]
// }

// const [goodPart, decentPart] = getDinner();