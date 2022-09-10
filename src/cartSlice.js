import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        shoppingCart: [
            {
                productName: "watch"
            }
        ]
    },
    reducers: {
        addToCart: (state, action) => {
            state.shoppingCart.push(action.payload)
        }
    }
})

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;