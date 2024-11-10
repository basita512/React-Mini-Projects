import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGIF from '../Hooks/useGIF'

// Place the env file next to vite.config.js, dont put env file inside folders
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Random = () => {
    const {gif, loading, heading, handleGenerateGIF} = useGIF()

    return (
        <div className='bg-[rgba(255,255,255,0.38)]  w-1/2 h-[550px] mt-10 mb-20 flex flex-col items-center rounded-lg shadow-md shadow-[#3e745bf6]'>
            <h1 className='m-4 font-semibold text-3xl text-teal-800'>{heading}</h1>

            <div className="gif w-[450px] h-[325px] flex justify-center items-center mt-8">
                {loading ? <Spinner/> : <img src={gif} alt="gif"  className='mx-auto object-cover w-[450px] h-[325px]'/>}
            </div>

            <button className='w-9/12 bg-[#ff7f50] hover:bg-[#af4f26] text-white py-2 my-8 rounded-lg font-semibold text-xl'
                onClick={handleGenerateGIF}>
                Generate
            </button>          
        </div>
    )
}

export default Random
