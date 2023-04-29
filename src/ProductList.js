import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ productList, addProduct, deleteProduct, setProductToFullyStocked }) {
  return (
    <div>
        <button className="btn btn-success my-3" onClick={addProduct}>Add Product</button>
        {productList.map(product => (
            <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} setProductToFullyStocked={setProductToFullyStocked}/>
        ))}
    </div>
  )
}
