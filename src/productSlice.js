import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// export const fetchProducts = () => async (dispatch) => {
//     dispatch(loadProductsLoading())
//     try {
//       const response = await fetch("http://localhost:3001/products")
//       // Only checks if we got a response from the backend and the backend says there was a problem
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       const data = await response.json() // unsmooshes the data
//       dispatch(loadProductsFulfilled(data))
//     } catch (error) {
//       // If we don't get a response from the backend
//       dispatch(loadProductsFailed(error.message))
//       return
//     }
// }

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    try {
      const response = await fetch("http://localhost:3001/products")
      // Only checks if we got a response from the backend and the backend says there was a problem
      if (!response.ok) {
        return Promise.reject(response.statusText)
      }
      const data = await response.json() // unsmooshes the data
      return data
    } catch (error) {
      // If we don't get a response from the backend
      return Promise.reject(error.message)
    }
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        errorMessage: null,
        loading: false
    },
    reducers: {
        loadProductsFulfilled: (state, action) => {
            state.productList = action.payload
            state.errorMessage = null
            state.loading = false
        },
        loadProductsFailed: (state, action) => {
            state.errorMessage = action.payload
            state.loading = false
        },
        loadProductsLoading: (state, action) => {
            state.loading = true
        },

        deleteProduct: (state, action) => {
            state.productList = state.productList.filter(product => product.id !== action.payload)
        },
        addProduct: (state, action) => {
            state.productList.push(action.payload)
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.productList = action.payload
            state.errorMessage = null
            state.loading = false
        },
        [fetchProducts.failed]: (state, action) => {
            state.errorMessage = action.payload
            state.loading = false
        },
        [fetchProducts.pending]: (state, action) => {
            state.loading = true
        },
    }
})

export const productReducer = productSlice.reducer
export const { deleteProduct, addProduct, loadProductsFulfilled, loadProductsFailed, loadProductsLoading } = productSlice.actions