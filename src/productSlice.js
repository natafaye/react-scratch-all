import { createSlice } from "@reduxjs/toolkit";
import { TEST_PRODUCTS } from './TEST_DATA'

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: TEST_PRODUCTS
    },
    reducers: {
        addProduct: (state, action) => {
            state.productList.push(action.payload) // we decided that the payload would have the new product
        }
    }
})

// productSlice = {
//     reducer: big old reducer function,
//     actions: {
//         addProduct: action creator function
//     }
// }

// exporting action creators (will be used by components)
export const { addProduct } = productSlice.actions;

// exporting the reducer (needs to be hooked into the store)
export default productSlice.reducer;