import { useEffect } from "react";
import { useState } from "react";

// const doSomethingSlowly = async () => {
//     const response = await fetch("http://localhost:3004/products")
//     const data = await response.json()
//     return data
// }

export default function App() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const refreshProducts = async () => {
            setLoading(true)
            const response = await fetch("http://localhost:3004/products")
            const freshProducts = await response.json()
            setLoading(false)
            setProductList(freshProducts)
        }
        refreshProducts()
    }, []) // empty array = no reason to ever do this again

    const deleteProduct = async (idToDelete) => {
        try {
            // PENDING
            setLoading(true)

            // ASYNC THUNK
            const response = await fetch("http://localhost:3004/products/" + idToDelete, { method: "DELETE" })

            if (!response.ok) {
                // REJECTED
                setError("Error: " + response.statusText)
                setLoading(false)
                return
            }

            // FULFILLED
            setLoading(false)
            setProductList(productList.filter(product => product.id !== idToDelete))
            setError(null)

        } catch (error) {
            // REJECTED
            setLoading(false)
            setError("Error: " + error.message)
        }
    }

    return (
        <div>
            {error ? <p className="text-danger">{error}</p> : null}
            {loading ? <p>Loading...</p> : null}
            <ul>
                {productList.map(product =>
                    <li key={product.id}>
                        {product.name}
                        <button disabled={loading} onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
