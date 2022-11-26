import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postProduct, deleteProduct, fetchProducts } from './productSlice'

export default function App() {
  // Get the data from redux
  const productList = useSelector(state => state.products.productList)
  const loading = useSelector(state => state.products.loading)
  const errorMessage = useSelector(state => state.products.errorMessage)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const deleteProduct = async (idToDelete) => {
    dispatch(deleteProduct(idToDelete))
  }

  const createProduct = async (newProductData) => {
    dispatch(postProduct(newProductData))
  }

  return (
    <div className="m-5">
      <h2>App</h2>
      <button className="btn btn-primary mb-4" disabled={loading} onClick={() => createProduct( { name: "Cake", price: 20 } )}>
        { loading ? "Submitting..." : "Create Cake Product" }
      </button>
      { (loading) ? <p>Loading...</p> : null }
      { (errorMessage) ? <p className="alert alert-danger">{ errorMessage }</p> : null }
      <ul className="list-group">
        {productList.map(product => (
          <li className="list-group-item" key={product.id}>
            <button className="btn btn-danger me-2" disabled={loading} onClick={() => deleteProduct(product.id)}>Delete</button>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
