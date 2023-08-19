import { useEffect, useState } from "react"
import Toolbar from "./Toolbar"
import styles from "./App.module.css"
import AnimatedButton from "./AnimatedButton"

export default function Crap() {
    const [isRainy, setIsRainy] = useState(true)
    const [counter, setCounter] = useState(0)
    const [alreadyLiked, setAlreadyLiked] = useState(false)
  
    // let message = ""
    // if(isRainy) {
    //   message = "rainy"
    // }
    // else {
    //   message = "sunny"
    // }
  
  
    useEffect(() => {
      console.log("first render")
    }, []) // run the first time and never again
  
    const handleCounterClick = () => {
      if(alreadyLiked) {
        alert("You already did this")
        return // emergency exit, don't let them increase the counter
      }
      setCounter(counter + 1)
      setAlreadyLiked(true)
    }
  
    return (
      <div className="container">
        <Toolbar/>
        <p className={styles.special}> { isRainy ? "rainy" : "sunny" }</p>
        <p>{ counter }</p>
        <button className="btn btn-primary" onClick={() => setIsRainy(!isRainy)}>Toggle Rainy</button>
        <button className="btn btn-primary" onClick={handleCounterClick}>Counter + 1</button>
        <AnimatedButton/>
      </div>
    )
}