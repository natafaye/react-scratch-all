import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useState } from 'react'

export default function OrderForm({ onSubmit }) {

    const handleSubmit = (values) => {
        const newOrder = {
            name: values.name,
            entree: values.entree
        }
        onSubmit(newOrder)
    }

    return (
        <Formik onSubmit={handleSubmit} initialValues={{
            name: "Natalie",
            entree: "tacos"
        }}>
            <Form>
                <label>Name</label>
                <Field type="text" name="name"/>
                <label>Entree</label>
                <Field as="select" name="entree">
                    <option value="tacos">Tacos</option>
                    <option value="burritos">Burritos</option>
                    <option value="fajitas">Fajitas</option>
                </Field>
                <button>Submit Order</button>
            </Form>
        </Formik>
    )
}


// FORM WITH ONE PIECE OF STATE

// export default function OrderForm({ onSubmit }) {
//     const [formValues, setFormValues] = useState({
//         name: "Natalie",
//         entree: "tacos"
//     })

//     const handleChange = (event) => setFormValues({ ...formValues, [ event.target.name ]: event.target.value })

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const newOrder = {
//             name: formValues.name,
//             entree: formValues.entree
//         }
//         onSubmit(newOrder)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input type="text" value={formValues.name} name="name" onChange={handleChange} />
//             <label>Entree</label>
//             <select value={formValues.entree} name="entree" onChange={handleChange}>
//                 <option value="tacos">Tacos</option>
//                 <option value="burritos">Burritos</option>
//                 <option value="fajitas">Fajitas</option>
//             </select>
//             <button>Submit Order</button>
//         </form>
//     )
// }

// FORM WITH MULTIPLE PIECES OF STATE

// export default function OrderForm({ onSubmit }) {
//     const [nameValue, setNameValue] = useState("Natalie")
//     const [entreeValue, setEntreeValue] = useState("tacos")

//     const handleNameChange = (event) => setNameValue(event.target.value) // event = object with info, event.target = the input, event.target.value = the value in the input
//     const handleEntreeChange = (event) => setEntreeValue(event.target.value)

//     const handleSubmit = (event) => {
//         event.preventDefault() // please don't refresh the page gosh dang it
//         const newOrder = {
//             name: nameValue,
//             entree: entreeValue
//         }
//         onSubmit(newOrder)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input type="text" value={nameValue} onChange={handleNameChange} />
//             <label>Entree</label>
//             <select value={entreeValue} onChange={handleEntreeChange}>
//                 <option value="tacos">Tacos</option>
//                 <option value="burritos">Burritos</option>
//                 <option value="fajitas">Fajitas</option>
//             </select>
//             <button>Submit Order</button>
//         </form>
//     )
// }
