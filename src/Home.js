import { useSelector } from "react-redux";
import ProductList from "./ProductList";

export default function Home() {
  const numberOfProducts = useSelector(state => state.products.productArray.length)
  return (
    <div> 
      <h3>Home ({numberOfProducts})</h3>
      <ProductList/>
    </div>
  )
}