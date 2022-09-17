import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from './ProductsService'

export default function App() {
  const [productList, setProductList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const refreshProducts = async () => {
      //const allProducts = await fetchAllProducts();
      setLoading(true);
      const response = await fetch("http://localhost:3004/products");
      const data = await response.json();
      setProductList(data);
      setLoading(false);
    }
    refreshProducts(); // kick off the function and don't wait
  }, []) // empty dependency array = only run after first render (but it will run twice because of strict mode)

  const deleteProduct = async (idToDelete) => {
    // Make the change on the frontend
    setProductList(productList.filter(product => product.id !== idToDelete))

    setLoading(true);

    // Also make the change on the backend
    try {
      const response = await fetch("http://localhost:3004/products/" + idToDelete, { method: "DELETE" })
      if (!response.ok) {
        setErrorMessage(response.statusText);
      }
    }
    catch (error) {
      setErrorMessage(error.errorMessage);
    }
    
    setLoading(false);
  }

  const createSteel = async () => {
    const newProductData = {
      name: "Steel",
      price: 50
    }

    setLoading(true);

    // Make the same change on the backend
    const response = await fetch("http://localhost:3004/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData)
    }
    )
    const newProduct = await response.json();

    setLoading(false);

    // Make the change on the frontend
    setProductList([...productList, newProduct])
  }

  return (
    <div className="m-4">
      <button className="btn btn-primary" onClick={createSteel} disabled={loading}>Create Steel</button>
      { (errorMessage) ? <div className="alert alert-danger">errorMessage</div> : null }
      { (loading) ? <p>Loading...</p> : null }
      <ul className="list-group mt-3">
        {productList.map(product => (
          <li className="list-group-item" key={product.id}>
            <button className="btn btn-danger me-2" onClick={() => deleteProduct(product.id)} disabled={loading}>Delete</button>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
