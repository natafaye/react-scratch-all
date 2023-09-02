import { useState } from "react"

export default function App() {
  const [productList, setProductList] = useState( [ 
    { id: 0, name: "Shoes", price: 12, liked: false },
    { id: 1, name: "Coat", price: 20, liked: false },
    { id: 2, name: "Hat", price: 5, liked: false }
  ])

  const handleDeleteProduct = async (idToDelete) => {
      setProductList(productList.filter(product => product.id !== idToDelete)) // also make change on frontend
  }

  const likeProduct = (productIdToLike) => {
    setProductList(productList.map(product => 
        (product.id === productIdToLike) ?
            { ...product, liked: !product.liked } :
            product
    ))
      
  }

  return (
    <div>
      <h3>Products</h3>
      { productList.length === 0 ? <p>No products</p> :
        productList.map(product => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button className="btn btn-danger ms-3" onClick={() => handleDeleteProduct(product.id)}>
            Delete
          </button>
          { product.liked ? "LIKED" : "NOT LIKED"}
          <button onClick={() => likeProduct(product.id)}>Like</button>
        </div>
      ))}
    </div>
  )
}