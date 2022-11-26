import React, { useEffect, useState } from 'react'

export default function App() {
  // Make some state to hold our data
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchProducts = async () => { // this function takes a while because it waits for fetch to finish

    // const response = await productsService.get() // if it's in a separate file

    // when you start, set loading to true
    setLoading(true);

    const response = await fetch("http://localhost:3001/products")
    console.log("response:", response) // this line won't run until after the response comes back
    const data = await response.json(); // unsmooshifies the data
    console.log("data:", data)
    setProductList(data);

    // When you're finished, set loading to false
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts() // call the asynchronous function WITHOUT WAITING so we don't slow down React
  }, []) // empty dependency array = run ONCE (or twice in dev mode) after the component has first rendered

  const deleteProduct = async (idToDelete) => {
    // Make change on frontend
    // setProductList(productList.filter(product => product.id !== idToDelete)) // set product list to a new array with all but the product to delete

    // // Make change on backend
    // fetch("http://localhost:3001/products/" + idToDelete, { method: "DELETE" })

    // FULL EXAMPLE:
    
    // when you start, set loading to true
    setLoading(true);

    //If you want to be more careful:
    try {
      const response = await fetch("http://localhost:3001/products/" + idToDelete, { method: "DELETE" })
      if(!response.ok) {
        // If we DO get a response, but the response was bad
        setErrorMessage(response.statusText)
        setLoading(false);
        return;
      }
    } catch (error) {
      // If we DON'T get a response, meaning it errored out before we could get a response
      setErrorMessage(error.message)
      setLoading(false);
      return;
    }

    // Make change on frontend
    setProductList( productList.filter(product => product.id !== idToDelete ) ) // set product list to a new array with all but the product to delete
    setErrorMessage(null);

    
    // when you start, set loading to true
    setLoading(false);
  }

  const createProduct = async (newProductData) => {
    // when you start, set loading to true
    setLoading(true);

    // Make change on backend
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData)
    })
    const createdProduct = await response.json();


    // Make change on frontend
    // Make sure you give it the data from the backend, with the id on there
    setProductList([ ...productList, createdProduct ])

    // when you finish, set to false
    setLoading(false);
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
