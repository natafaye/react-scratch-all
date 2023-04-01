import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import ShopPage from './ShopPage'

export default function App() {
    let [productList, setProductList] = useState([]) // userName = "Zander", setUserName = function

    const handleClick = () => {
        // productList.push("Chair") // DON'T DO THIS

        // const copyOfProductList = productList.slice()
        // copyOfProductList.push("Chair")
        // setProductList(copyOfProductList)

        setProductList(productList.concat("Chair"))
    }

    const products = ["Hat", "Shoe", "Pants"]

    return (
        <div className="app">
            <h1>{productList.join(", ")}</h1>
            <button onClick={handleClick}>Click me to change the name</button>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:name" element={<ProductPage />} />
            </Routes>
            <Button text="Submit" size={3} />
        </div>
    )
}

function Button({ size, text }) {
    return (
        <button className={"b-" + size}>{text}</button>
    )
}


// const getFood = () => {
//     return ["burrito", "cookie"]
// }



// const [meal, dessert] = getFood()

// value = false

// function useState(initialValue) { // initialValue = false
//     let value = initialValue // or previous value
//     const setValue = (newValue) => { value = newValue }
//     return [false, (newValue) => { value = newValue }]
// }

// const valueAndSetter = [false, (newValue) => { value = newValue }]
// const show = false
// const setShow = (newValue) => { value = newValue }

// const onClick = () => {
//     setShow(true)
// }

// return (
//     <div>{ show }</div>
// )

