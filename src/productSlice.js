import { createSlice } from "@reduxjs/toolkit";
import { TEST_PRODUCTS } from "./TEST_DATA";

let nextId = 5

const productSlice = createSlice({
    name: "products",
    initialState: {
        productArray: TEST_PRODUCTS // some test data to start, just for fun
    },
    // mini reducers
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
                id: nextId++ // just a little hack to get ids when you don't have a backend
            }
            // changing state directly, but it will make it work off copies in the background
            state.productArray.push(newProduct) // I am assuming that action.payload is the new product object
        },
        markProductAsSold: (state, action) => { // state = [ {}, {}, {}] action = { type: "makr-afdsfdsfds", payload: 1 }
            // changing state directly, but it will make it work off copies in the background
            const product = state.productArray.find(product => product.id === action.payload ) // I am assuming action.payload is the id of the product to mark
            product.sold = true
        },
        deleteProduct: (state, action) => {
            // working off copies, and returning the updated copy
            return {
                ...state,
                productArray: state.productArray.filter(product => product.id !== action.payload ) // cool trick to make a copy of an array with one item deleted
            }
        }
    }
})

export const productReducer = productSlice.reducer // NO S HERE
// action creators that happen to be named the same as the mini reducers
export const { addProduct, markProductAsSold, deleteProduct } = productSlice.actions // YES S HERE


export const selectNumProducts = state => state.products.productArray.length

export const selectAllProducts = state => state.products.productArray

export const selectProductById = (productId) => (state) => state.products.productArray.find(p => p.id === productId)