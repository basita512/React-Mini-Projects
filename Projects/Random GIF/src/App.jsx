import React from 'react'
import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

const App = () => {
    return (
        <div className='bg-gradient-to-b from-[#29a699f6] via-[#83d4aef6] to-[#bcffe0f6] w-full h-full flex flex-col items-center'>
            <h1 className='bg-white text-2xl font-semibold shadow-md shadow-[#18665ef6] text-black rounded-lg mt-6 w-10/12 mx-6 text-center py-2'>RANDOM GIFS</h1>
            <div className="w-full flex flex-col items-center">
                <Tag/>
                <Random/>
            </div>
            
        </div>
    )
}

export default App
