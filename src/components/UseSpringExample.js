import React, { useEffect, useState } from 'react'
import { useSpring, animated } from "@react-spring/web"

export default function UseSpringExample() {
    const [isAfter, setIsAfter] = useState(false)
  
    const style = useSpring({ height: isAfter ? "500px" : "0px" })
  
    useEffect(() => setIsAfter(true), []) // run once after first render
  
    return (
      <>
        <animated.div className="bg-success" style={style}>App</animated.div>
        {/* <button onClick={() => setIsAfter(true)}>Animate!</button> */}
      </>
    )
  }