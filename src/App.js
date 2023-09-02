import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, fetchProducts } from "./productSlice"

export default function App() {
  const productList = useSelector(state => state.products.productList)
  const loading = useSelector(state => state.products.loading)
  const errorMessage = useSelector(state => state.products.errorMessage)
  const deleting = useSelector(state => state.products.deleting)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, []) // run after the first render and then never again (but it will run twice in development mode)

  const handleDeleteProduct = async (idToDelete) => {
    dispatch(deleteProduct(idToDelete))
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