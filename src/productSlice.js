import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postProduct = createAsyncThunk(
    'createTodo',
    async (newProductData, { dispatch }) => {
        const response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProductData)
        })

        if (!response.ok) {
            return Promise.reject(response.stateText)
        }

        const createdProduct = await response.json();

        //return createdProduct
        // OR DISPATCH YOURSELF:
        dispatch(postProductSuccess(createdProduct))
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        loading: false,
        errorMessage: null
    },
    reducers: {
        // postProductStart: (state, action) => {
        //     // when you start, set to true
        //     state.loading = true;
        // },
        // postProductError: (state, action) => {
        //     state.loading = false;
        //     state.errorMessage = action.payload
        // },
        postProductSuccess: (state, action) => {
            // Make change on frontend
            // Make sure you give it the data from the backend, with the id on there
            state.productList = [...state.productList, action.payload]

            state.errorMessage = null;

            // when you finish, set to false
            state.loading = false;
        },
    },
    extraReducers: {
        [postProduct.pending]: (state, action) => {
            // when you start, set to true
            state.loading = true;
        },
        [postProduct.rejected]: (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload
        },
        // [postProduct.fulfilled]: (state, action) => {
        //     // Make change on frontend
        //     // Make sure you give it the data from the backend, with the id on there
        //     state.productList = [...state.productList, action.payload]

        //     state.errorMessage = null;

        //     // when you finish, set to false
        //     state.loading = false;
        // },
    }
})

export const { postProductStart, postProductError, postProductSuccess } = productSlice.actions;
export const productReducer = productSlice.reducer



// SAME AS ABOVE
// export const postProduct = (newProductData) => async (dispatch) => {
//     dispatch(postProductStart())

//     // Make change on backend
//     const response = await fetch("http://localhost:3001/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newProductData)
//     })

//     if (!response.ok) {
//         dispatch(postProductError(response.statusText))
//         return;
//     }

//     const createdProduct = await response.json();


//     dispatch(postProductSuccess(createdProduct))
// }

export const deleteProduct = (idToDelete) => async (dispatch, getState) => {
    // TODO
}

export const fetchProducts = () => async (dispatch, getState) => {
    // TODO
}