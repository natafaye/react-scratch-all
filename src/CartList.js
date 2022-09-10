import React from 'react'
import { useSelector } from 'react-redux'

export default function CartList() {
    const cart = useSelector(state => state.cart.shoppingCart)

    return (
        <ul>
            { cart.map(item => <li>{ item.productName }</li>) }
        </ul>
    )
}
