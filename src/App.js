import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ProductList from './ProductList'
import ProductPage from './ProductPage'
import { Route, Routes } from 'react-router'

// Doesn't need to be in state
const STATUS_OPTIONS = ["out", "low", "stocked", "fully-stocked"]

export default function App() {
    const [productList, setProductList] = useState([
        {
            id: 0,
            title: "Eggs",
            status: "low"
        },
        {
            id: 1,
            title: "Cheese",
            status: "fully-stocked"
        },
    ])

    const addProduct = () => {
        const newProduct = {
            id: 2,
            title: "Milk"
        }

        // BAD: Updating state directly
        //productList.push(newProduct)

        // GOOD: Work off copies
        // const copyOfProductList = productList.slice()
        // copyOfProductList.push(newProduct)
        // setProductList(copyOfProductList)

        // GREAT: Work off copies
        setProductList(productList.concat(newProduct))

        // GREAT: We'll learn this next week
        //setProductList([...productList, newProduct])
    }

    const deleteProduct = (idToDelete) => {
        setProductList(productList.filter(product => product.id !== idToDelete))
    }

    const setProductToFullyStocked = (idToUpdate) => {
        setProductList(productList.map(product =>
            (product.id === idToUpdate) ? // if it's the one we want to update
                { ...product, status: "fully-stocked" } : // a copy with the status updated
                product // the original product unchanged
        ))

    }

    return (
        <div>
            App
            <Sidebar backgroundColor="dark" links={["general", "something"]} />
            <Routes>
                <Route path="/" element={<ProductList productList={productList} addProduct={addProduct} deleteProduct={deleteProduct} setProductToFullyStocked={setProductToFullyStocked}/>} />
                <Route path="/products/:productId" element={<ProductPage productList={productList} />}/>
            </Routes>
            
        </div>
    )
}


// const products = [ { id: 0, title: "Hat"}, { id: 1, title: "Shoes"} ]

// products.filter(  product => product.title === "Hat" ).map(  product => product.title ).filter(productTitle => productTitle.length > 5 )

// const numbers = [0, 1, 2, 3, 4]
// const evenNumbers = numbers.filter( number => number % 2 === 0)


// function getFood() {
//     return ["spaghetti", "meatballs"]
// }

// // const myFood = getFood()
// // const boringPart = myFood[0]
// // const excitingPart = myFood[1]

// const [boringPart, excitingPart] = getFood()