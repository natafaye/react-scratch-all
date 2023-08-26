import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectProductById } from "./productSlice"

export default function ProductDetailsPage() {
    let { productId } = useParams()
    // URL params are always strings, and we need a number
    productId = parseInt(productId)

    const product = useSelector(selectProductById(productId))

    return (
        <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
    )
}