import { useSpring, animated, config } from "@react-spring/web"
import { useEffect, useState } from "react"

export default function AnimatedBox() {
    // Pieces of state to keep track of which animation state we want to be in
    const [toggle, setToggle] = useState(false)

    // Make the animated style based on that piece of state
    const animatedStyles = useSpring({
        backgroundColor: toggle ? "darkgreen" : "green",
        height: toggle ? 100 : 500,
        // config the animation however you want, based on physics, or use prebuilt
        config: {
            mass: 1,
            friction: 2
        }
    })

    // OPTION 1: Trigger based on component loading in for the first time
    useEffect(() => {
        setToggle(true)
    }, []) // run once when component first loads in and never again

    // Hook it to an animated element

    // OPTION 2: Trigger change in animation state based on user event
    return (
        <>
            <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>Click Me</button>
            <animated.div style={animatedStyles} className="text-white p-4 m-4">AnimatedBox</animated.div>
        </>
    )
}