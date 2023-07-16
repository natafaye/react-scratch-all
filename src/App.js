import { Route, Routes } from "react-router"
import CrapPage from "./CrapPage"
import AddForm from "./AddForm"
import { useState } from "react"

let nextId = 2 // little hacky way to get unique ids

export default function App() {
  const [catList, setCatList] = useState([ { id: 0, name: "Floofy", favoriteFood: "pizza"}])

  const addCat = (newCatData) => {
    const newCat = { ...newCatData, id: nextId++ } // little hacky way to get unique ids
    setCatList(catList.concat(newCat))
  }

  return (
    <div>
      { catList.map(cat => <div key={cat.id}>{ cat.name }  { cat.favoriteFood}</div> )}
      <Routes>
        <Route path="/crap" element={<CrapPage/>}/>
        <Route path="/" element={<AddForm addCat={addCat}/>}/>
      </Routes>
    </div>
  )
}

