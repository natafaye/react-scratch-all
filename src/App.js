import Sidebar from "./Sidebar"
import Toolbar from "./Toolbar"


export default function App() {

  const paragraph = <p>{1 + 2}</p>

  return (
    <div>
      <Toolbar dark={true}/>
      <Sidebar/>
      <h3>Hello There { 3 + 5 }</h3>
      { paragraph }
    </div>
  )
}
