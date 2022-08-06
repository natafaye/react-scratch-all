import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        postArray: []
    },
    reducers: {
        addPost: (state, action) => {
            state.postArray.push(action.payload)
        }
    }
})

export const { addPost } = postSlice.actions;

export default postSlice.reducer;