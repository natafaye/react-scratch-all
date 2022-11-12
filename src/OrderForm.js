import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

/*** Normal React Form, Multiple Pieces of State ***/

// export default function OrderForm({ onSubmit }) {

//     // form data
//     const [mealValue, setMealValue] = useState("")
//     const [nameValue, setNameValue] = useState("")

//     // change event handlers
//     const onMealChange = (event) => setMealValue(event.target.value)
//     const onNameChange = (event) => setNameValue(event.target.value)

//     // submit event handler
//     const onSubmitClick = (event) => {
//         event.preventDefault() // prevents the submit button from refreshing the page
//         onSubmit({ meal: mealValue, name: nameValue })
//     }

//     return (
//         <form>
//             <div>
//                 <label>Meal:</label>
//                 <input type="text" value={mealValue} onChange={onMealChange}/>
//             </div>
//             <div>
//                 <label>Name on Order:</label>
//                 <input type="text" value={nameValue} onChange={onNameChange}/>
//             </div>
//             <button onClick={onSubmitClick}>Submit</button>
//         </form>
//     )
// }




/*** Normal React Form, One Piece of State ***/

// export default function OrderForm({ onSubmit }) {

//     const initialValues = { meal: "", name: "", topping: "" }

//     // form data
//     const [formData, setFormData] = useState(initialValues)

//     // change event handlers
//     // const onMealChange = (event) => setFormData({ ...formData, meal: event.target.value })
//     // const onNameChange = (event) => setFormData({ ...formData, name: event.target.value })
//     const onChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })

//     // submit event handler
//     const onSubmitClick = (event) => {
//         event.preventDefault() // prevents the submit button from refreshing the page
//         onSubmit({ meal: formData.meal, name: formData.name })
//     }

//     return (
//         <form>
//             <div>
//                 <label>Meal:</label>
//                 <input type="text" name="meal" value={formData.meal} onChange={onChange}/>
//             </div>
//             <div>
//                 <label>Name on Order:</label>
//                 <input type="text" name="order" value={formData.name} onChange={onChange}/>
//             </div>
//             <div>
//                 <label>Topping:</label>
//                 <input type="text" name="topping" value={formData.topping} onChange={onChange}/>
//             </div>
//             <button onClick={onSubmitClick}>Submit</button>
//         </form>
//     )
// }




/*** Formik Form ***/

export default function OrderForm({ onSubmit }) {
    // submit event handler
    const onSubmitClick = (values) => {
        onSubmit({ meal: values.meal, name: values.name })
    }

    return (
        <Formik onSubmit={onSubmitClick} initialValues={{ meal: "", name: "", topping: "" }}>
            <Form>
                <div>
                    <label>Meal:</label>
                    <Field type="text" name="meal"/>
                </div>
                <div>
                    <label>Name on Order:</label>
                    <Field type="text" name="name"/>
                </div>
                <div>
                    <label>Topping:</label>
                    <Field type="text" name="topping"/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
