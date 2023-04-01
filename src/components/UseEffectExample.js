import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
  
    useEffect(() => {
      console.log("count changed!")
    }, [count]) // run every time count changes
  
    useEffect(() => {
      console.log("first render!")
    }, []) // run first time loads in
  
    useEffect(() => {
      console.log("rendered!")
    }) // run every time the component renders
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>
          Set Count
        </button>
        <button onClick={() => setShow(!show)}>
          Set Show
        </button>
      </>
    )
  }