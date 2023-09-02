import { useEffect } from "react"
import { useState } from "react"

export default function App() {
  const [productList, setProductList] = useState( [] )
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      // PENDING
      setLoading(true)

      try {
        // ACTUAL ASYNCHRONOUS STUFF
        const response = await fetch("http://localhost:3004/products")
        if (!response.ok) {
          throw new Error(response.statusText) // this will just make it jump down to the catch spot
        }
        const data = await response.json() // unsmooshify = parse (format) (read)

        // FULFILLED
        setLoading(false)
        setProductList(data) // save the data from the backend into state (short term memory)
        setErrorMessage(null)
      } catch (error) {
        // REJECTED
        setLoading(false)
        setErrorMessage(error.message)
      } 
    }
    fetchProducts() // call the asynchronous function and DON'T WAIT
  }, []) // run after the first render and then never again (but it will run twice in development mode)

  const handleDeleteProduct = async (idToDelete) => {
    // PENDING
    setDeleting(true)

    try {
      // ACTUAL ASYNCHRONOUS STUFF
      const response = await fetch("http://localhost:3004/products/" + idToDelete, {
        method: "DELETE"
      })
      if (!response.ok) {
        throw new Error(response.statusText) // this will just make it jump down to the catch spot
      }

      // FULFILLED
      setDeleting(false)
      setProductList(productList.filter(product => product.id !== idToDelete)) // also make change on frontend
      setErrorMessage(null)
    } catch (error) {
      // REJECTED
      setDeleting(false)
      setErrorMessage(error.message)
    }
  }

  if(loading) {
    return <p>LOADING...</p>
  }

  return (
    <div>
      <h3>Products</h3>
      { errorMessage && <p className="text-danger">{errorMessage}</p> }
      { productList.length === 0 ? <p>No products</p> :
        productList.map(product => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button className="btn btn-danger ms-3" disabled={deleting} onClick={() => handleDeleteProduct(product.id)}>
            {(deleting) ? "Deleting..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  )
}