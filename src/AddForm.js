import { Field, Form, Formik } from "formik"

// Formik Form
// a lot of forms in the same project
export default function AddForm({ addCat }) {
    const handleSubmit = (values, { resetForm }) => { // take a values parameter which is the values piece of state from formik
        const newCatData = values
        addCat(newCatData)
        resetForm()
    }

    return (
        <Formik initialValues={{ name: "Pick a name", favoriteFood: "pizza" }} onSubmit={handleSubmit}>
            <Form>
                <label>Cat Name</label>
                <Field type="text" name="name"/>
                <label>Cat Favorite Food</label>
                <Field as="select" name="favoriteFood">
                    <option value="pizza">Pizza</option>
                    <option value="icecream">Ice Cream</option>
                </Field>
                <button className="btn btn-primary">Add</button>
            </Form>
        </Formik>
    )
}

// Form with one piece of state
// One (two) bigger forms
// export default function AddForm({ addCat }) {
//     const [values, setValues] = useState({ name: "Pick a name", favoriteFood: "pizza" })

//     const handleChange = (event) => setValues({ ...values, [event.target.name]: event.target.value })

//     const handleSubmit = (event) => {
//         event.preventDefault() // please don't refresh the page

//         const newCatData = values
//         addCat(newCatData)
//         // resets the form
//         setValues({ name: "Pick a name", favoriteFood: "pizza" })
//     }

//     return (
//         <form>
//             <label>Cat Name</label>
//             <input type="text" value={values.name} name="name" onChange={handleChange} />
//             <label>Cat Favorite Food</label>
//             <select value={values.favoriteFood} name="favoriteFood" onChange={handleChange}>
//                 <option value="pizza">Pizza</option>
//                 <option value="icecream">Ice Cream</option>
//             </select>
//             <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
//         </form>
//     )
// }


// Form with multiple pieces of state
// One small form

// export default function AddForm({ addCat }) {
//     const [nameValue, setNameValue] = useState("Pick a name")
//     const [foodValue, setFoodValue] = useState("pizza")

//     const handleSubmit = (event) => {
//         event.preventDefault() // please don't refresh the page

//         const newCatData = {
//             name: nameValue,
//             favoriteFood: foodValue
//         }
//         addCat(newCatData)

//         setNameValue("Pick a name")
//         setFoodValue("pizza")
//     }

//     return (
//         <form>
//             <label>Cat Name</label>
//             <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
//             <label>Cat Favorite Food</label>
//             <select value={foodValue} onChange={(event) => setFoodValue(event.target.value)}>
//                 <option value="pizza">Pizza</option>
//                 <option value="icecream">Ice Cream</option>
//             </select>
//             <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
//         </form>
//     )
// }