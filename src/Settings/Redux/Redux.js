import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./Root";

export const store = configureStore({
    reducer: RootReducer
})