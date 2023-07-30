import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// An action creator that creates a THUNK action | thunk = action that's actually a function
// export const fetchProducts = () => async (dispatch) => {
//     // Update the backend data

//     dispatch(fetchProductsPending())
//     try {
//       const response = await fetch("http://localhost:3004/products")
//       if (!response.ok) {
//         dispatch(fetchProductsRejected(response.statusText))
//         return
//       }
//       const data = await response.json()
//       dispatch(fetchProductsFulfilled(data))
//     } catch (error) {
//       dispatch(fetchProductsRejected(error.message))
//     }
// }

export const fetchProducts = createAsyncThunk("fetch-products", async (payload, { dispatch }) => {
    const response = await fetch("http://localhost:3004/products")
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    const data = await response.json()
    // ANOTHER OPTION: dispatch yourself
    //dispatch(loadProduct(data))
    // NORMAL OPTION: return the result that you want in the fulfilled payload
    return data // data will get put in a promise, then when it's fulfilled, this data will end up in the payload of the fulfilled action
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        loading: false,
        errorMessage: null
    },
    reducers: {
        // Update the front end data
        // fetchProductsPending: (state, action) => {
        //     state.loading = true
        // },
        // fetchProductsFulfilled: (state, action) => {
        //     state.loading = false
        //     state.errorMessage = null
        //     state.productList = action.payload
        // },
        // fetchProductsRejected: (state, action) => {
        //     state.errorMessage = action.payload
        //     state.loading = false
        // }
        // ANOTHER OPTION:
        // loadProducts: (state, action) => {
        //     state.loading = false
        //     state.errorMessage = null
        //     state.productList = action.payload
        // }
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.errorMessage = null
            state.productList = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.errorMessage = action.payload
            state.loading = false
        }
    }
})

export const productReducer = productSlice.reducer
export const { fetchProductsFulfilled, fetchProductsPending, fetchProductsRejected } = productSlice.actions