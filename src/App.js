import { useState } from "react";
import ToolbarButton from "./ToolbarButton";
import OrderMenu from "./OrderMenu";

export default function App() {
  const [order, setOrder] = useState("none")

  const updateOrder = (newOrder) => {
    setOrder(newOrder) // tell React to set the order piece of state to "burritos" and then rerender the App component
  }

  return (
    <div>
      <ToolbarButton color="primary" text="Click Me"/>
      Order: { order}
      <OrderMenu updateOrder={updateOrder}/>
    </div>
  )
}



// function getFood() {
//   return ["spaghetti", "cookies"]
// }

// const [meal, dessert] = getFood()