import { useState } from "react";
import CatForm from "./CatForm";

let nextId = 1 // little hack for making ids on the frontend

export default function App() {
  const [catList, setCatList] = useState( [
    { id: 0, name: "Floofy", breed: "Ginger" }
  ] )

  const addCat = (newCatData) => {
    const newCat = { 
      ...newCatData, // make a copy of newCatData
      id: nextId++ // with an id property on it set to one more than the last id (little hack)
    }
    setCatList(catList.concat(newCat))
  }

  return (
    <div className="container">
      { catList.map(cat => (
        <div key={cat.id}>
            <h4>{cat.name}</h4>
            <p>{cat.breed}</p>
            <p>Whatever: {cat.whatever ? "yes" : "no"}</p>
        </div>
      ))}
      <CatForm addCat={addCat}/>
    </div>
  )
}