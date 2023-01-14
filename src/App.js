import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import MenuItemPage from './MenuItemPage'
import OrderMenu from './OrderMenu'
import OrderView from './OrderView'


// export const useAlert = (message) => {
//     alert(message);
//     return "I did it"
// }

// NOT REAL, PRETEND
// const useState = (initialValue) => {
//     let state = initialValue;
//     const setState = (newValue) => {
//         state = newValue
//     }
//     return [state, setState]
// }

export default function App() {
    // const [order, setOrder] = useState("none")
    // const [toGo, setToGo] = useState(false)

    const [orderInfo, setOrderInfo] = useState( { order: "non", toGo: false } )

    return (
        <div>
            <h2>My app!</h2>
            <ul>
                <li><Link to="/view">View My Order</Link></li>
                <li><Link to="/menu">Change My Order</Link></li>
            </ul>
            <Routes>
                <Route path="/view" element={<OrderView orderInfo={orderInfo} />}/>
                <Route path="/menu" element={<OrderMenu setOrderInfo={setOrderInfo} orderInfo={orderInfo}/>} />
                <Route path="/menu/:menuItem" element={<MenuItemPage/>} />
                {/* <Route path="/menu/burritos" element={<MenuItemPage menuItem="burritos"/>} />
                <Route path="/menu/tacos" element={<MenuItemPage menuItem="tacos"/>} /> */}
            </Routes>
        </div>
    )
}










































// function cookFoodInOven({ name }, settings, color) {
//     return "Cooked " + color + " " + name + " cooked at " + settings.temperature
// }

// // function cookFoodInOven({ name }, { temperature, broil }, color) {
// //     return "Cooked " + color + " " + name + " cooked at " + temperature
// // }


// const rice = { name: "Rice", type: "Basmati" }
// cookFoodInOven(rice, { temperature: 300, broil: false }, "red")


// //const food = rice;
// const { name, type } = rice;


// function getDinner() {
//     return ["spaghetti", "broccoli"]
// }

// const foodArray = getDinner();
// const goodBit = foodArray[0]
// const grossBit = foodArray[1]

// const [goodBit, grossBit] = getDinner()
