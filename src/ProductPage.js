import React from 'react'
import { useParams } from 'react-router'

export default function ProductPage({ productList }) {
    
    let { productId } = useParams()
    productId = parseInt(productId)

    const product = productList.find(product => product.id === productId)

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.status}</p>
        </div>
    )
}
