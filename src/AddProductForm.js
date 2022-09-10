import React from 'react'
import { Formik, Form, Field } from 'formik'
import { addProduct } from './productSlice'
import { useDispatch } from 'react-redux'

export default function AddProductForm() {
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        const newProduct = {
            name: values.name,
            price: values.price
        }

        // const actionObject = addProduct(newProduct) // give it the payload that we decided the reducer needs
        // dispatch(actionObject)

        // another way to write it
        dispatch(addProduct(newProduct))
    }

    return (
        <Formik initialValues={{ name: "", price: 0 }} onSubmit={handleSubmit}>
            <Form>
                <Field name="name" />
                <Field name="price" type="number" />
                <button>Create Product</button>
            </Form>
        </Formik>
    )
}
