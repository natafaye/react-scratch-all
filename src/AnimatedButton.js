import { useEffect, useState } from "react"
import { useSpring, animated, config } from '@react-spring/web'

export default function AnimatedButton() {
    // A piece of state to track the "state" of the styling
    const [toggle, setToggle] = useState(false)

    // we make the inline styling (but springified) based on the piece of state
    const style = useSpring({
        backgroundColor: (toggle) ? "lightblue" : "darkgreen",
        color: "white",
        height: (toggle) ? "70px" : "40px",
        border: "0",
        config: config.wobbly
    })

    // You can trigger the animation by the component being loaded in for the first time
    useEffect(() => {
        setToggle(true)
    }, [])

    // We give the inline styling (springified) to an animated version of the HTML it will animate between changes
    // You can trigger the animation from an event handler
    // onClick={() => setHasClicked(!toggle)}
    return (
        <animated.button style={style} >Click Me</animated.button>
    )
}