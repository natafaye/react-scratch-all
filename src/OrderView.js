import React from 'react'

export default function OrderView({ orderProp, toGo }) {

    let toGoMessage = "yes"
    if (!toGo) {
        toGoMessage = "no"
    }

    return (
        <div>
            Main: {orderProp.main} {orderProp.drink}
            <p>is to go? {toGoMessage}</p>
        </div>
    )
}

// const { order, toGo } = {
//     order: {
//         main: "burrito",
//         drink: "sprite"
//     },
//     toGo: true
// }
