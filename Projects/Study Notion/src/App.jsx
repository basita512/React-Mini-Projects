import { useState } from 'react'
import './App.css'

function App() {

    return (
        <div className="w-full h-full bg-gradient-to-r from-black via-blue-950 to-black">
            <div className="container">
                <div className='flex justify-between items-center w-full'>
                    <div className="title">
                        <p className='m-4 text-white'>StudyNotion</p>
                    </div>

                    <div className="menu-bar flex ">
                        <p className="menu-items">Home</p>
                        <p className="menu-items">About</p>
                        <p className="menu-items">Contact</p>
                    </div>

                    <div className="loginBar flex ">
                        <p className="login">Log in</p>
                        <p className="login">Sign up</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default App
