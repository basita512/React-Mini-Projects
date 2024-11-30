import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increment } from '../redux/slices/CounterSlice'

const Counter = () => {
    // To access variables from the slices we use "useSelector()" hook
    const count = useSelector((state) => state.counter.value)
    // counter => name of the slice 
    // value => name of the state you want to access from that slice 

    //To access functions from the slice we use the "useDispatch()" hook
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>
                +
            </button>

            <div className="">{count}</div>

            <button onClick={() => dispatch(decreament())}>
                -
            </button>
        </div>
  )
}

export default Counter
