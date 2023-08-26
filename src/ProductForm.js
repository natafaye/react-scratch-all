import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice"
import { useNavigate } from "react-router";

export default function ProductForm() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (values) => {
        const newProductData = {
            ...values,
            sold: false
        }
        dispatch(addProduct(newProductData))
        navigate("/")
    }

    return (
        <div>
            <h3>New Product</h3>
            <Formik initialValues={{ name: "", price: 10 }} onSubmit={handleSubmit}>
                <Form>
                    <label className="form-label">Name</label>
                    <Field name="name" className="form-control" />
                    <label className="form-label">Price</label>
                    <Field type="number" name="price" className="form-control" />
                    <button className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}