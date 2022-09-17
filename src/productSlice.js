import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// MAKE THE CHANGE TO THE BACKEND

export const fetchProducts = createAsyncThunk(
    'campsites/fetchProducts',
    async () => {
        const response = await fetch("http://localhost:3004/products");
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postProduct = createAsyncThunk(
    'campsites/createProduct',
    async (newProductData) => {
        const response = await fetch("http://localhost:3004/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProductData)
        })
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        errorMessage: null,
        loading: true
    },
    reducers: {
    },
    extraReducers: {
        // MAKE THE SAME CHANGE TO THE FRONTEND
        [fetchProducts.pending]: (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.productList = action.payload; // will be whatever is returned by the async thunk (the data)
            state.loading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false;
            state.errorMessage = action.error ? action.error.message : 'Fetch failed';
        },
        [postProduct.pending]: (state) => {
            state.loading = true;
        },
        [postProduct.fulfilled]: (state, action) => {
            state.productList.push(action.payload) // will be whatever is returned by the async thunk (the data)
            state.loading = false;
        },
        [postProduct.rejected]: (state, action) => {
            state.loading = false;
            state.errorMessage = action.error ? action.error.message : 'Create failed';
        },
    }
})

export const productReducer = productSlice.reducer;

// REFERENCE FOR MAKING AN ASYNC THUNK BY HAND
// export const fetchProducts = () => async (dispatch) => {
//     dispatch(fetchProductsPending()) // CREATE ASYNC THUNK DOES THIS FOR YOU

//     const response = await fetch("http://localhost:3004/products");
//     if(!response.ok) {

//         dispatch(fetchProductsRejected(response.statusCode)) // CREATE ASYNC THUNK DOES THIS FOR YOU

//         return;
//     }
//     const allTheProducts = await response.json();

//     dispatch(fetchProductsFulfilled(allTheProducts)) // CREATE ASYNC THUNK DOES THIS FOR YOU
// };