import { useEffect, useState } from "react"
import styles from "./App.module.css"
import otherStyles from "./OtherComponent.module.css"
import OtherComponent from "./OtherComponent"
import AnimatedBox from "./AnimatedBox"

export default function CrapPage() {
    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(false)

    // can't put slow stuff here
    useEffect(() => {
        document.title = "Counter: " + counter
    }, [counter]) // when should I do this again?

    console.log("in process of rendering")
    return (
        <div>
            <span className={styles.important}>App</span>
            {counter}
            {show ? "I'm showing!" : ""}
            <button className={otherStyles.important} onClick={() => setShow(!show)}>Toggle Show</button>
            <button onClick={() => setCounter(counter + 1)}>Add One</button>
            <OtherComponent />
            <AnimatedBox />
        </div>
    )
}

// Can with ternary operator
// {something === "hello" ? "it's hello" : "it's not hello"}
// const result = something === "hello" ? "it's hello" : "it's not hello"
// console.log(something === "hello" ? "it's hello" : "it's not hello")
// return something === "hello" ? "it's hello" : "it's not hello"

// No good
// const result = if (something === "hello") { "it's hello" }
// console.log(if (something === "hello") { "it's hello" })
// return if (something === "hello") { "it's hello" }