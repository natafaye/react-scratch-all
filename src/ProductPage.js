import { Link, useParams, useNavigate } from 'react-router-dom'

export default function ProductPage() {
  const { name } = useParams()

  const navigate = useNavigate()

  const handleBuy = () => {
    alert("Too bad, you can't! Go home instead")
    navigate("/")
  }

  return (
    <>
      <h1>Product Name: { name }</h1>
      <button onClick={handleBuy}>Buy</button>
      <Link to="/shop">Back to Shop</Link>
    </>
  )
}

