import React, { useEffect } from 'react'

export default function OrderView({ orderProp, toGo }) {

    let toGoMessage = "yes"
    if (!toGo) {
        toGoMessage = "no"
    }

    useEffect(() => {
        console.log("rendered first time")
    }, [])

    return (
        <div>
            Main: {orderProp.main} {orderProp.drink}
        </div>
    )
}


// WAITER = RENDERING