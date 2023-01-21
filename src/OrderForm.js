import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useState } from 'react'

// Formik
export default function OrderForm({ setOrder }) {

    const save = (formValues) => {
        const newOrder = {
            name: formValues.name,
            dish: formValues.dish
        }
        setOrder(newOrder)
    }

    const validate = (formValues) => {
        // return {
        //     dish: "That's no good"
        // }
        return { }
    }

    // Each input needs to have the value and the onChange set up
    return (
        <Formik initialValues={{ name: "", dish: "" }} onSubmit={save} validate={validate}>
            <Form>
                Name: <Field type="text" name="name" />
                <ErrorMessage name="name">
                    { (msg) => <p>{msg}</p> }
                </ErrorMessage>
                Dish: <Field type="text" name="dish" />
                <ErrorMessage name="dish">
                    { (msg) => <p className="alert alert-danger">{msg}</p> }
                </ErrorMessage>
                <button type="submit">Update Order!</button>
            </Form>
        </Formik>
    )
}


// Normal React Form with One Piece of State
// export default function OrderForm({ setOrder }) {
//     const initialValues = { name: "", dish: "" }

//     const save = (event) => {
//         event.preventDefault() // please don't refresh the page
//         const newOrder = {
//             name: formValues.name,
//             dish: formValues.dish
//         }
//         //console.log("New order:", newOrder)
//         setOrder(newOrder)
//     }




// IDENTICAL FOR ANY FORM

//     // State for tracking the in-progress form data
//     const [formValues, setFormValues] = useState(initialValues)

//     // Event handler functions that keep the piece of state and the inputs completely in sync
//     const handleChange = (event) => setFormValues({ ...formValues, [event.target.name]: event.target.value })




//     // Each input needs to have the value and the onChange set up
//     return (
//         <form>
//             Name: <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
//             Dish: <input type="text" name="dish" value={formValues.dish} onChange={handleChange}/>
//             <button onClick={save}>Update Order!</button>
//         </form>
//     )
// }


// Normal React Form with Multiple Pieces of State

// export default function OrderForm({ setOrder }) {
//     // State for tracking the in-progress form data
//     const [nameValue, setNameValue] = useState("")
//     const [dishValue, setDishValue] = useState("")

//     // Event handler functions that keep the piece of state and the inputs completely in sync
//     const handleNameChange = (event) => {
//         setNameValue(event.target.value)
//     }

//     const handleDishChange = (event) => {
//         setDishValue(event.target.value)
//     }

//     const save = (event) => {
//         event.preventDefault() // please don't refresh the page
//         const newOrder = {
//             name: nameValue,
//             dish: dishValue
//         }
//         //console.log("New order:", newOrder)
//         setOrder(newOrder)
//     }

//     // Each input needs to have the value and the onChange set up
//     return (
//         <form>
//             Name: <input type="text" value={nameValue} onChange={handleNameChange}/>
//             Dish: <input type="text" value={dishValue} onChange={handleDishChange}/>
//             <button onClick={save}>Update Order!</button>
//         </form>
//     )
// }
