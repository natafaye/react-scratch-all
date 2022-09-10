import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './cartSlice';

export default function ProductList() {
    const productList = useSelector(state => state.products.productList)
    const dispatch = useDispatch();

    const handleAddToCart = (productName) => {
        const newCartItem = {
            productName: productName // super crappy but it works for now
        }
        
        dispatch( addToCart(newCartItem) )
    }

    return (
        <div>
            {productList.map(product => 
                <div>
                    {product.name} - ${product.price}
                    <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
                </div>
            )}
        </div>
    )
}
