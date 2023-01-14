import React from 'react'

export default function OrderView({ orderInfo }) {
    let toGoMessage = ""
    if(orderInfo.toGo) {
        toGoMessage = " to-go"
    }

    // if(order === "burritos") {
    //     alert("You ordered burritos")
    // }

    return (
        <div>You ordered {orderInfo.order} {toGoMessage}</div>
    )
}
