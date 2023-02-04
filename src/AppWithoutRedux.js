import React, { useEffect, useState } from 'react'

// Another way to handle promises
// fetch("http://localhost:3001/products")
// .then(response => response.json())
// .then(data => console.log(data))

// axios library is another way to make requests

// useEffect(() => {
//   const refreshProducts = async () => {
//     const data = await getAllProducts()
//     setProductList(data)
//   }
//   refreshProducts()
// })



export default function App() {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const refreshProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3001/products")
      // Only checks if we got a response from the backend and the backend says there was a problem
      if (!response.ok) {
        setErrorMessage(response.statusText)
        setLoading(false)
        return
      }
      const data = await response.json() // unsmooshes the data
      setProductList(data)
      setErrorMessage(null)
      setLoading(false)
    } catch (error) {
      // If we don't get a response from the backend
      setErrorMessage(error.message)
      setLoading(false)
      return
    }
  }

  useEffect(() => {
    refreshProducts()
  }, [])

  const handleDelete = (idToDelete) => {
    setLoading(true)
    // Updating on the front end
    setProductList(productList.filter(product => product.id !== idToDelete))

    // Also update the backend
    fetch("http://localhost:3001/products/" + idToDelete, { method: "DELETE" })
    setLoading(false)
  }

  const handleCreate = async (newProductData) => {
    setLoading(true)
    // Also update on the backend FIRST
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData)
    })
    if (!response.ok) {
      setErrorMessage(response.statusText)
      setLoading(false)
      return
    }
    const newProductWithId = await response.json()

    // Updating on the front end WITH THE ID FROM THE BACKEND
    setProductList([...productList, newProductWithId])
    setErrorMessage(null)
    setLoading(false)
  }

  return (
    <div>
      <button className="btn btn-success m-3" onClick={() => handleCreate({ name: "Cheese", price: 2000 })} disabled={loading}>Add Product</button>
      {loading && <p className="text-muted">Loading...</p>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <ul className="list-group">
        {productList.map(product => (
          <li key={product.id} className="list-group-item">
            <button className="btn btn-danger me-2" onClick={() => handleDelete(product.id)} disabled={loading}>Delete</button>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
