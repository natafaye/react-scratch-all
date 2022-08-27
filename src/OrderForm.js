import React from 'react'

export default function OrderForm({ setOrder }) {

    const setOrderToTaco = () => {
        setOrder({
            main: "taco",
            drink: "sprite"
        })
    }

    const setOrderToBurrito = () => {
        setOrder({
            main: "burrito",
            drink: "sprite"
        })
    }

    return (
        <div>
            Change Your Order:
            <button onClick={setOrderToTaco}>Taco</button>
            <button onClick={setOrderToBurrito}>Burrito</button>
        </div>
    )
}
