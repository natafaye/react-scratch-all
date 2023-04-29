import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, deleteProduct, setProductToFullyStocked }) {
    return (
        <div className="p-3 border bg-light m-3">
            {product.title} - {product.status}
            <div>
                <Link to={"/products/" + product.id}>Details</Link>
            </div>
            <button className="btn btn-primary" onClick={() => setProductToFullyStocked(product.id)}>Set to Fully Stocked</button>
            <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
    )
}
