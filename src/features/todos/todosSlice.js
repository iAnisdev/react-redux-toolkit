import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, { payload }) => {
            state.list.push(payload)
        },
        removeTodo: (state, { payload }) => {
            state.list = state.list.filter((todo) => todo.id !== payload)
        }
    }
})

export default todosSlice.reducer
export const TodoActions = todosSlice.actions