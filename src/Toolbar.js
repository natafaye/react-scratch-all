import React from 'react'
import styles from "./Toolbar.module.css"
import { useSpring, animated, config } from '@react-spring/web'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Toolbar() {
    const [hovered, setHovered] = useState(false)
    const [afterLoadedIn, setAfterLoadedIn] = useState(false)

    const animatedButtonStyle = useSpring({
        width: hovered ? "150px" : "100px",
        config: config.wobbly
    })

    const animatedToolbarStyle = useSpring({
        backgroundColor: afterLoadedIn ? "black" : "white",
        config: config.slow
    })

    useEffect(() => {
        setAfterLoadedIn(true)
    }, [])

    return (
        <animated.div className="text-white p-4" style={animatedToolbarStyle}>
            <animated.button onMouseEnter={() => setHovered(true)} onMouseOut={() => setHovered(false)} style={animatedButtonStyle}>My Button</animated.button>
        </animated.div>
    )
}
