import { Field, Form, Formik } from 'formik'
import React from 'react'

// FORMIK

export default function OrderForm({ onOrder }) {
    const handleSubmit = (formValues) => {
        onOrder(formValues)
    }

    return (
        <Formik initialValues={{ main: "", side: "fries" }} onSubmit={handleSubmit}>
            <Form>
                <label>Main</label>
                <Field type="text" name="main" />
                <label>Side</label>
                <Field as="select" name="side">
                    <option value="potatoes">Mashed Potatoes</option>
                    <option value="fries">Fries</option>
                </Field>
                <button>Submit</button>
            </Form>
        </Formik>
    )
}


// ONE PIECE OF STATE

// export default function OrderForm({ onOrder }) {
//     const [formValues, setFormValues] = useState({ main: "", side: "fries"})

//     const handleChange = (event) => setFormValues({ ...formValues, [event.target.name]: event.target.value })

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         onOrder(formValues)
//     }

//     return (
//         <form>
//             <label>Main</label>
//             <input type="text" name="main" value={formValues.main} onChange={handleChange} />
//             <label>Side</label>
//             <select name="side" value={formValues.side} onChange={handleChange}>
//                 <option value="potatoes">Mashed Potatoes</option>
//                 <option value="fries">Fries</option>
//             </select>
//             <button onClick={handleSubmit}>Submit</button>
//         </form>
//     )
// }



// MULTIPLE PIECES OF STATE

// export default function OrderForm({ onOrder }) {
//     const [mainValue, setMainValue] = useState("")
//     const [sideValue, setSideValue] = useState("fries")

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         onOrder({ main: mainValue, side: sideValue })
//     }

//     return (
//         <form>
//             <label>Main</label>
//             <input type="text" value={mainValue} onChange={(event) => setMainValue(event.target.value)} />
//             <label>Side</label>
//             <select value={sideValue} onChange={(event) => setSideValue(event.target.value)}>
//                 <option value="potatoes">Mashed Potatoes</option>
//                 <option value="fries">Fries</option>
//             </select>
//             <button onClick={handleSubmit}>Submit</button>
//         </form>
//     )
// }
