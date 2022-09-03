import React, { useState } from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'
import MenuItemPage from './MenuItemPage'
import OrderForm from './OrderForm'
import OrderView from './OrderView'


// not totally correct (not actual implementation)
// THIS WILL NOT WORK
// const useState = (initialValue) => {
//   let pieceOfState = initialValue;

//   const setterFunction = (newValue) => {
//     pieceOfState = newValue;
//   }

//   return [pieceOfState, setterFunction];
// }



export default function App() {
  const [orderState, setOrder] = useState({
    main: "burrito",
    drink: "sprite"
  })

  const onClearOrderClick = () => {
    // DO NOT DO THIS
    // order = {
    //   main: "I can do what I want",
    //   drink: ""
    // }

    // DO THIS INSTEAD
    setOrder({
      main: "none",
      drink: "none"
    })
  }

  return (
    <div>
      {/* { (weather === "hot") ? 5 : 7 } */}
      <button onClick={onClearOrderClick}>Clear Order</button>
      <h2>Welcome to our Restaurant!</h2>
      <NavLink to="/order-form">Order Form</NavLink><br/>
      <NavLink to="/">Order View</NavLink><br/>
      <NavLink to="/menu-item/3">Menu Item 3</NavLink>
      <Routes>
        <Route path="/" element={<OrderView orderProp={orderState} toGo={true} />} />
        <Route path="/order-form" element={<OrderForm setOrder={setOrder}/>} />
        <Route path="/menu-item/:itemId" element={<MenuItemPage/>}/>
      </Routes>
    </div>
  )
}



// Probably a bad idea
//const error = (weather === "") ? (weather === "NONE") ? "error" : "error" : "none"

// const weather = "hot"

// let something = 3;
// if(weather === "hot") {
//   something = 5;
// }
// else {
//   something = 7;
// }

// let something = (weather === "hot") ? 5 : 7

// console.log( (weather === "hot") ? 5 : 7 )

// return (weather === "hot") ? 5 : 7