import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "../features/loader/loaderSlice";
import appSlice from "../features/appbar/appSlice";
import formDialogSlice from "../features/formDialog/formDialogSlice";
import todosSlice from "../features/todos/todosSlice";

export const store = configureStore({
    reducer: {
        loader: loaderSlice,
        app: appSlice,
        formDialog: formDialogSlice,
        todos: todosSlice
    }
})