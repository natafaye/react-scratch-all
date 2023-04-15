import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
    const [productList, setProductList] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)

            let data;
            let errorMessage = null
            try {
                const response = await fetch("http://localhost:3004/products")

                if (!response.ok) {
                    errorMessage = "Error: " + response.statusText
                }

                data = await response.json()
            } catch (error) {
                errorMessage = "Error: " + error.message
            }

            if(!errorMessage) {
                setProductList(data)
                setErrorMessage(null)
                setLoading(false)
            } else {
                setErrorMessage(errorMessage)
                setLoading(false)
            }
            
        }
        getProducts()
    }, [])

    const deleteProduct = async (idToDelete) => {
        // PENDING
        setLoading(true)

        // THUNK
        let errorMessage = null
        try {
            const response = await fetch("http://localhost:3004/products/" + idToDelete, {
                method: "DELETE"
            })

            if (!response.ok) {
                errorMessage = "Error: " + response.statusText
            }
        } catch (error) {
            errorMessage = "Error: " + error.message
        }

        if(!errorMessage) {
            // FULFILLED
            setProductList(productList.filter(product => product.id !== idToDelete))
            setErrorMessage(null)
            setLoading(false)
        } else {
            // REJECTED
            setErrorMessage(errorMessage)
            setLoading(false)
        }
    }

    const addProduct = (newProduct) => {
        // Make the change on the backend
        fetch("http://localhost:3004/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        })


        // Make the change on the frontend
        setProductList(productList.concat(newProduct))


        if(!errorMessage) {
            // Make the change on the frontend
            setProductList(productList.concat(newProduct))
            setErrorMessage(null)
            setLoading(false)

            // redirect to a submitted page
            // set a piece of state that says that it was all good
            // set a successful piece of state to true
        } else {
            setErrorMessage(errorMessage)
            setLoading(false)
        }

    }

    return (
        <div className="m-5">
            { errorMessage ? <p className="text-danger">{errorMessage}</p> : null }
            { loading ? <p className="text-muted">Loading...</p> : null }
            <ul className="list-group">
                {productList.map(product => (
                    <li className="list-group-item" key={product.id}>
                        {product.name}
                        <button className="btn btn-danger" disabled={loading} onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
