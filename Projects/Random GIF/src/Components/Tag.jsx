import React from 'react'
import { useState } from 'react'
import Spinner from './Spinner'
import useGIF from '../Hooks/useGIF'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Tag = () => {
    const [tag, setTag] = useState('')
    const {gif, loading, heading, handleGenerateGIF} = useGIF(tag)

    return (
        <div className='bg-[rgba(255,255,255,0.38)] w-1/2 h-[625px] mt-10 flex flex-col items-center rounded-lg shadow-md shadow-[#3e745bf6]'>
            <h1 className='m-4 font-semibold text-3xl text-teal-800'>{heading}</h1>

            <div className="gif w-[450px] h-[325px] flex justify-center items-center mt-8 ">
                {loading ? <Spinner/> : <img src={gif} alt="gif"  className='mx-auto object-cover w-[450px] h-[325px]'/>}
            </div>

            <input 
                className='outline-none focus:border-2 focus:border-[#ffb399] shadow-[#f3d2bc] w-9/12 bg-white text-black text-center py-2 mt-8 rounded-lg shadow-md'
                type="text"
                value={tag}
                onChange={(event) => setTag(event.target.value)} />

            <button className='w-9/12 bg-[#ff7f50] hover:bg-[#af4f26]  text-white py-2 my-8 rounded-lg font-semibold text-xl'
                onClick={handleGenerateGIF}>
                Generate
            </button>          
        </div>
    )
}

export default Tag
