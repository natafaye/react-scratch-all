import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderMenu({ setOrderInfo, orderInfo }) {

    const setOrderToBurritos = () => {
        //orderInfo.order = "burritos" // BAD - NEVER UPDATE STATE DIRECTLY
        // setOrder("burritos")

        setOrderInfo({ order: "burritos", toGo: orderInfo.toGo })
    }

    const setOrderToTacos = () => {
        // setOrder("tacos")
        setOrderInfo({ order: "tacos", toGo: orderInfo.toGo })
    }

    const toggleToGo = () => {
        // setToGo(!toGo)
        setOrderInfo({ toGo: !orderInfo.toGo, order: orderInfo.order })
    }

    return (
        <>
            <p>Pick your order</p>
            <button onClick={toggleToGo}>Toggle ToGo</button>
            <button onClick={setOrderToBurritos}>Burritos</button>
            <Link to="burritos">More Info On Burritos</Link>
            <button onClick={setOrderToTacos}>Tacos</button>
            <Link to="tacos">More Info On Tacos</Link>
        </>
    )
}
