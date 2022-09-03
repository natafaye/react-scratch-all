import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

// FORMIK

export default function OrderForm({ setOrder }) {
    const handleSubmit = (values) => {
        setOrder({
            main: values.main,
            drink: values.drink
        })
    }

    return (
        <Formik
            initialValues={{
                main: "",
                drink: ""
            }}
            onSubmit={handleSubmit}
        >
            <Form>
                Change Your Order:
                <div>
                    <label htmlFor="main-input">Main:</label>
                    <Field id="main-input" name="main"/>
                </div>
                <div>
                    <label htmlFor="drink-input">Drink:</label>
                    <Field id="drink-input" name="drink"/>
                </div>
                <button className='btn btn-success'>Submit Order</button>
            </Form>
        </Formik>
    )
}





// ONE PIECE OF STATE

// export default function OrderForm({ setOrder }) {
//     const [formValues, setFormValues] = useState({
//         main: "",
//         drink: ""
//     })

//     const handleChange = (event) => setFormValues({ ...formValues, [event.target.name]: event.target.value })

//     const handleSubmit = (event) => {
//         event.preventDefault()

//         setOrder({
//             main: formValues.main,
//             drink: formValues.drink
//         })
//     }

//     return (
//         <form>
//             Change Your Order:
//             <div>
//                 <label htmlFor="main-input">Main:</label>
//                 <input type="text" id="main-input" name="main" value={formValues.main} onChange={handleChange}/>
//             </div>
//             <div>
//                 <label htmlFor="drink-input">Drink:</label>
//                 <input type="text" id="drink-input" name="drink" value={formValues.drink} onChange={handleChange}/>
//             </div>
//             <button className='btn btn-success' onClick={handleSubmit}>Submit Order</button>
//         </form>
//     )
// }




// MULTIPLE PIECES OF STATE

// export default function OrderForm({ setOrder }) {
//     const [mainValue, setMainValue] = useState("");
//     const [drinkValue, setDrinkValue] = useState("");

//     const handleMainChange = (event) => setMainValue(event.target.value)
//     const handleDrinkChange = (event) => setDrinkValue(event.target.value)

//     const handleSubmit = (event) => {
//         event.preventDefault()

//         setOrder({
//             main: mainValue,
//             drink: drinkValue
//         })
//     }

//     return (
//         <form>
//             Change Your Order:
//             <div>
//                 <label htmlFor="main-input">Main:</label>
//                 <input type="text" id="main-input" value={mainValue} onChange={handleMainChange}/>
//             </div>
//             <div>
//                 <label htmlFor="drink-input">Drink:</label>
//                 <input type="text" id="drink-input" value={drinkValue} onChange={handleDrinkChange}/>
//             </div>
//             <button className='btn btn-success' onClick={handleSubmit}>Submit Order</button>
//         </form>
//     )
// }
