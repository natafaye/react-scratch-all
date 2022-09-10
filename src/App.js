import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddProductForm from './AddProductForm';
import './App.css';
import CartList from './CartList';
import ProductList from './ProductList';

function App() {
  const numItemsInCart = useSelector(state => state.cart.shoppingCart.length) // state.cart is undefined

  // For reference
  // const entireState = useSelector(state => state)
  // console.log(entireState);

  return (
    <div>
      How many items in cart: { numItemsInCart }
      <AddProductForm/>
      <ProductList/>
      <CartList/>
    </div>
  );
}

export default App;
