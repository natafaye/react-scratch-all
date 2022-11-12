import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import weather from "./features/weather/weather.module.css"
import OrderForm from './OrderForm';

export default function App() {

  // let message = ""
  // if(raining) {
  //   message = "Bring umbrella"
  // }
  // else {
  //   message = "Don't"
  // }

  // const [dirtyDishes, setDirtyDishes] = useState(null);
  // const [raining, setRaining] = useState(false)

  // useEffect(() => {
  //   washDishes()
  // }, [dirtyDishes])

  // useEffect(() => {
  //   console.log("How many times will I run?")
  // }, [])

  const [order, setOrder] = useState({ meal: "none", name: "none"})

  return (
    <div> {/* className={ raining ? weather.dark : "light" } */}
      <h3>Order:</h3>
      { order.meal } for { order.name }
      {/* <h3 style={{ color: raining ? "white" : "black" }}>Plan for Day</h3>
      { raining ? "Bring umbrella" : "Don't" }
      <button className="btn btn-primary" onClick={() => setDirtyDishes(5)}>Update dirty dishes to 5</button>
      <button onClick={() => setDirtyDishes(0)}>Update dirty dishes to 0</button>
      <button onClick={() => setRaining(true)}>Set raining to true</button>
      <button onClick={() => setRaining(false)}>Set raining to false</button> */}
      <h3>Order Form</h3>
      <OrderForm onSubmit={setOrder}/>
    </div>
  )
}
