import { createSlice } from "@reduxjs/toolkit";


const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        open: false
    },
    reducers: {
        show: (state) => {
            state.open = true
        },
        hide: (state) => {
            state.open = true
        }
    }
})

export default loaderSlice.reducer
export const loaderActions = loaderSlice.actions