import { Field, Form, Formik } from "formik"
import { useState } from "react"

export default function CatForm({ addCat }) {

    const handleSubmit = (values, extraStuff) => { // formik passes in the form values into the first parameter of the submit handler
        const newCatData = {
            name: values.name,
            breed: values.breed
        }

        addCat(newCatData)

        // Resets the form
        extraStuff.resetForm()
    }


    return (
        <Formik 
            initialValues={{
                name: "",
                breed: "Siamese",
                whatever: false
            }} 
            onSubmit={handleSubmit}
        >
            <Form>
                <h3>Make a Cat</h3>
                <label>Name</label>
                <Field type="text" name="name"/>
                <label>Type</label>
                <Field as="select" name="breed">
                    <option>Shorthair</option>
                    <option>Siamese</option>
                </Field>
                <Field type="checkbox" name="whatever"/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        
    )
}

// One piece of state
// export default function CatForm({ addCat }) {
//     const initialValues = {
//         name: "",
//         breed: "Siamese"
//     }

//     // State of my in-progress data in the form
//     const [values, setValues] = useState(initialValues)
//     const handleChange = (event) => setValues({ ...values, [event.target.name]: event.target.value })

//     const handleSubmit = (event) => {
//         event.preventDefault() // prevent the default behavior of refreshing the page when we click a submit button

//         const newCatData = {
//             name: values.name,
//             breed: values.breed
//         }

//         addCat(newCatData)

//         // Resets the form
//         setValues({
//             name: "",
//             breed: "Siamese"
//         })
//     }


//     return (
//         <form>
//             <h3>Make a Cat</h3>
//             <label>Name</label>
//             <input type="text" value={values.name} name="name" onChange={handleChange}/>
//             <label>Type</label>
//             <select value={values.breed} name="breed" onChange={handleChange}>
//                 <option>Shorthair</option>
//                 <option>Siamese</option>
//             </select>
//             <button type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//     )
// }

// Multiples pieces of state
// export default function CatForm({ addCat }) {
//     // State of my in-progress data in the form
//     const [nameValue, setNameValue] = useState("")
//     const [breedValue, setBreedValue] = useState("Siamese")

//     const handleSubmit = (event) => {
//         event.preventDefault() // prevent the default behavior of refreshing the page when we click a submit button

//         const newCatData = {
//             name: nameValue,
//             breed: breedValue
//         }

//         addCat(newCatData)

//         // Reset the form
//         setNameValue("")
//         setBreedValue("Siamese")
//     }

//     return (
//         <form>
//             <h3>Make a Cat</h3>
//             <label>Name</label>
//             <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
//             <label>Type</label>
//             <select value={breedValue} onChange={(event) => setBreedValue(event.target.value)}>
//                 <option>Shorthair</option>
//                 <option>Siamese</option>
//             </select>
//             <button type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//     )
// }