import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

const fetchAllProducts = async () => {
  const response = await fetch("http://localhost:3001/products")
  const data = await response.json()
  return data;
}

function App() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    const refreshProducts = async () => {
      const freshProducts = await fetchAllProducts();
      setProductList(freshProducts);
    }
    refreshProducts();
  }, [])

  const deleteProduct = (idToDelete) => {
    // delete the product from the backend
    fetch("http://localhost:3001/products/" + idToDelete, { method: "DELETE" })
    // update the data on the frontend to match
    setProductList(productList.filter(p => p.id !== idToDelete))
  }

  const createProduct = async (newProductData) => {
    // create the product on the backend
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData)
    })
    const dataFromServer = await response.json();

    // update the data on the frontend to match
    setProductList([...productList, dataFromServer])
}

return (
  <div className="App">
    <button className="btn btn-primary" onClick={() => createProduct({ name: "Steel", price: 50 })}>Create Steel</button>
    <div>
      {productList.map(product =>
        <div key={product.id}>{product.name}<button onClick={() => deleteProduct(product.id)}>Delete</button></div>
      )}
    </div>
  </div>
);
}

export default App;
