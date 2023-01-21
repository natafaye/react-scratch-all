import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function SpringDemo() {
    // Pieces of state to keep track of what the status of the animation is
    const [goToPink, setGoToPink] = useState(false)

    // Set up our animation data based on those pieces of state
    const animateToThis = useSpring({
        color: (goToPink) ? "pink" : "black",
        fontSize: (goToPink) ? "5rem" : "1rem"
    })

    
    // Change those pieces of state when it's time to change the animations

    // BADDDDDDD
    //setGoToPink(true)

    // OPTION 1: trigger animation when it first loads in
    useEffect(() => {
        setGoToPink(true)
    }, []) // run once (aka twice in dev mode)


    // OPTION 2: trigger animation on user event
    return (
        <>
            <button onClick={() => setGoToPink(!goToPink)}>Go To Pink</button>
            <animated.div style={animateToThis}>SpringDemo</animated.div>
        </>
    )
}
