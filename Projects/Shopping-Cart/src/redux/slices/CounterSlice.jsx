import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0,
}

export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1
        },
        decreament : (state) => {
            state.value -= 1
        }
    }
})

//To fetch the implementation of this fuctions outside the slice we have to use actions
// this all implementation is stored inside the action creator
export const { increment, decreament } = CounterSlice.actions


export default CounterSlice.reducer
