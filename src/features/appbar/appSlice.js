import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        theme: 'light'
    },
    reducers: {
        setDark: (state) => {
            state.theme = 'dark'
        },
        setLight: (state) => {
            state.theme = 'light'
        },
    }
})

export default appSlice.reducer
export const AppActions = appSlice.actions