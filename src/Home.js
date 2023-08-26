import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { selectNumProducts } from "./productSlice";

export default function Home() {
  const numberOfProducts = useSelector(selectNumProducts)
  return (
    <div> 
      <h3>Home ({numberOfProducts})</h3>
      <ProductList/>
    </div>
  )
}