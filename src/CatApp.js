import { useState } from 'react';

// 1) put an array of objects in state
// 2) map those objects to some JSX

function CatApp() {
  // Step 1
  const [catList, setCatList] = useState([
    {
      id: 0,
      name: "Floofy",
      breed: "Cheshire",
      starred: false
    },
    {
      id: 1,
      name: "Chuckles",
      breed: "Something",
      starred: true
    }
  ])

  const deleteCat = (id) => {
    setCatList(catList.filter(cat => cat.id !== id))
  }

  const toggleStarCat = (id) => {
    setCatList(catList.map(cat => 
      (cat.id === id) ?
        { ...cat, starred: !cat.starred } :
        cat
    ))
    
  }

  return (
    <div>
      {catList.map(cat => (
        <div key={cat.id}>
          {cat.name}
          <p>{ cat.starred && "You're a star!" }</p>
          <button onClick={() => deleteCat(cat.id)}>Delete</button>
          <button onClick={() => toggleStarCat(cat.id)}>Star</button>
        </div>
      ))}
    </div>
  );
}

export default CatApp;