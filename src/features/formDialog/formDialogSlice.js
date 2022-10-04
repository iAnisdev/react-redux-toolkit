import { createSlice } from "@reduxjs/toolkit";

const formDialogSlice = createSlice({
    name: 'formDialog',
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleDialog: (state, {payload}) => {
            if (payload) {
                state.isOpen =  payload
            } else {
                state.isOpen = !state.isOpen
            }
        }
    }
})

export default formDialogSlice.reducer
export const FormActions = formDialogSlice.actions