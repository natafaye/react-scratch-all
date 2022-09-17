import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postProduct, fetchProducts } from './productSlice';

export default function App() {
  const productList = useSelector(state => state.products.productList);
  const errorMessage = useSelector(state => state.products.errorMessage);
  const loading = useSelector(state => state.products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []) // empty dependency array = only run after first render (but it will run twice because of strict mode)

  return (
    <div className="m-4">
      <button className="btn btn-primary" onClick={() => dispatch(postProduct({ name: "Steel", price: 50 }))} disabled={loading}>Create Steel</button>
      { (errorMessage) ? <div className="alert alert-danger">errorMessage</div> : null }
      { (loading) ? <p>Loading...</p> : null }
      <ul className="list-group mt-3">
        {productList.map(product => (
          <li className="list-group-item" key={product.id}>
            {/* <button className="btn btn-danger me-2" onClick={() => deleteProduct(product.id)} disabled={loading}>Delete</button> */}
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
