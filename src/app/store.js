import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "../features/loader/loaderSlice";
import appSlice from "../features/appbar/appSlice";

export const store = configureStore({
    reducer:{
        loader: loaderSlice,
        app: appSlice
    }
})