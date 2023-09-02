import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk action creator by hand
// export const fetchProducts = () => async (dispatch) => {
//     // PENDING
//     dispatch(fetchProductsPending())

//     try {
//         // ACTUAL ASYNCHRONOUS STUFF
//         const response = await fetch("http://localhost:3004/products")
//         if (!response.ok) {
//         throw new Error(response.statusText) // this will just make it jump down to the catch spot
//         }
//         const data = await response.json() // unsmooshify = parse (format) (read)

//         // FULFILLED
//         dispatch(fetchProductsFulfilled(data))
//     } catch (error) {
//         // REJECTED
//         dispatch(fetchProductsRejected(error.message))
//     } 
// }


export const fetchProducts = createAsyncThunk("fetch-products", async () => {
    // ACTUAL ASYNCHRONOUS STUFF
    const response = await fetch("http://localhost:3004/products")
    if (!response.ok) {
        return Promise.rejected(response.statusText) 
    }
    const data = await response.json() // unsmooshify = parse (format) (read)
    return data // payload for the fulfilled mini reducer
})

export const deleteProduct = createAsyncThunk("delete-product", async (idToDelete) => {
    // ACTUAL ASYNCHRONOUS STUFF
    const response = await fetch("http://localhost:3004/products/" + idToDelete, {
    method: "DELETE"
    })
    if (!response.ok) {
        return Promise.rejected(response.statusText) 
    }
    return idToDelete // payload for the fulfilled mini reducer
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        loading: false,
        errorMessage: null,
        deleting: false
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.productList = action.payload // save the data from the backend into state (short term memory)
            state.errorMessage = null
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false
            state.errorMessage = action.error ? action.error.message : "Something went wrong"
        },
        [deleteProduct.pending]: (state, action) => {
            state.deleting = true
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.deleting = false
            // Redux toolkit can NOT work off of copies - set state directly
            // const indexToDelete = state.productList.findIndex(product => product.id === action.payload)
            // state.productList.splice(indexToDelete, 1)

            state.productList = state.productList.filter(product => product.id !== action.payload) // also make change on frontend
            // make the same change on the frontend
            state.errorMessage = null
        },
        [deleteProduct.rejected]: (state, action) => {
            state.deleting = false
            state.errorMessage = action.error ? action.error.message : "Something went wrong"
        },
    }
})

export const productReducer = productSlice.reducer
export const { fetchProductsPending, fetchProductsRejected, fetchProductsFulfilled } = productSlice.actions