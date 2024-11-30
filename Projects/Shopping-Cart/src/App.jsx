import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {

    return (
        <div className="">
            <div className="">
                <Navbar />
            </div>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default App
