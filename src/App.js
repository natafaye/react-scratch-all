import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productSlice"

export default function App() {
  const productList = useSelector(state => state.products.productList)
  const loading = useSelector(state => state.products.loading)
  const errorMessage = useSelector(state => state.products.errorMessage)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]) // run once when page first loads in (or twice in development mode)

  const onDeleteClick = async (id) => {
    // setLoading(true)
    // // update the data on the backend
    // try {
    //   const response = await fetch("http://localhost:3004/products/" + id, {
    //     method: "DELETE"
    //   })
    //   if(!response.ok) {
    //     setLoading(false)
    //     setErrorMessage(response.statusText)
    //     return
    //   }
    //   setErrorMessage(null)
    //   setLoading(false)
    //   // update the data on the frontend
    //   setProductList(productList.filter(product => product.id !== id))
    // }
    // catch (error) {
    //   setLoading(false)
    //   setErrorMessage(error.message)
    // }
  }

  return (
    <div>
      {loading && <p className="text-body-secondary">Loading...</p>}
      {errorMessage ? <p className="alert alert-danger">{errorMessage}</p> : null}
      <ul className="list-group">
        {productList.map(product => (
          <li className="list-group-item" key={product.id}>
            {product.name}
            <button className="btn btn-danger" disabled={loading} onClick={() => onDeleteClick(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}