import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, fetchProducts } from './productSlice'

export default function App() {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.products.productList)

  const refreshProducts = async () => {
    dispatch(fetchProducts())
  }

  useEffect(() => {
    refreshProducts()
  }, [])

  const handleDelete = (idToDelete) => {
    // Dispatch the thunk (need to update to thunk)
    dispatch(deleteProduct(idToDelete))

    // TODO: Move into Redux Async Thunk
    fetch("http://localhost:3001/products/" + idToDelete, { method: "DELETE" })
  }

  const handleCreate = async (newProductData) => {
    // TODO: Move into Redux Async Thunk
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData)
    })
    const newProductWithId = await response.json()
    
    // Dispatch the thunk (need to update to thunk)
    dispatch(addProduct(newProductWithId))
  }

  return (
    <div>
      <button className="btn btn-success m-3" onClick={() => handleCreate({ name: "Cheese", price: 2000})}>Add Product</button>
      <ul className="list-group">
        {productList.map(product => (
          <li key={product.id} className="list-group-item">
            <button className="btn btn-danger me-2" onClick={() => handleDelete(product.id)}>Delete</button>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
