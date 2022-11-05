import React from 'react'

export default function OrderMenu({ setOrder }) {
    const setOrderToBurritos = () => {
        // BAD
        //order = "burritos"

        setOrder("burritos")
    }

    return (
        <div>
            <button onClick={setOrderToBurritos}>Set Order to Burritos</button>
        </div>
    )
}
