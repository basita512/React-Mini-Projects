import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "./slices/CounterSlice";

//configureStore makes the centralized store where all functions are stored
export const sstore = configureStore({
    reducer : {
        counter : CounterSlice
    },
})