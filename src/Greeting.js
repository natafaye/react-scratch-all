import React from 'react'

export default function Greeting(props) {
    return (
        <p className="alert alert-danger">Hello {props.nameToGreet}!
            {/* <Card></Card> */}
            <div className="card"></div>
        </p>
    )
}

// props = {
//     nameToGreet: "Natalie",
//     color: "green"
// }

// REACTSTRAP CARD COMPONENT (basically)
// function Card() {
//     return <div className="card"></div>
// }