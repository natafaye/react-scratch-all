import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, markProductAsSold, selectAllProducts } from "./productSlice"
import { Link } from "react-router-dom"

export default function ProductList() {
    const products = useSelector(selectAllProducts)
    const dispatch = useDispatch()

    const handleMarkSold = (idOfProductToMark) => {
        dispatch(markProductAsSold(idOfProductToMark))
    }

    return (
        <div>
            { products.map(product => (
                <div key={product.id} className={"border p-3 bg-light " + (product.sold ? "text-secondary" : "")}>
                    {product.name} - ${product.price}
                    { product.sold && <p className="display-6 text-danger">SOLD</p> }
                    { !product.sold && <button className="btn btn-danger ms-3" onClick={() => handleMarkSold(product.id)}>Mark as Sold</button> }
                    <button className="btn btn-warning" onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                    <Link to={`products/${product.id}`}>Details</Link>
                </div>
            ))}
        </div>
    )
}