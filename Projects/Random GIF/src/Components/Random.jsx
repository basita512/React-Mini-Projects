import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
    const [gif, setGif] = useState()

    const handleGenerateGIF = () => {

    }

    useEffect( () => {
        const fetchData = async () => {
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
            const output = await axios.get(url)
            console.log(output)
        }

        fetchData()
    }, [])

    return (
        <div className='bg-[#ffffff68]  w-1/2 h-[500px] mt-10 flex flex-col items-center rounded-lg shadow-md shadow-[#5dad88f6]'>
            <h1 className='m-4 font-semibold text-2xl text-teal-800'>A RANDOM GIF</h1>

            <div className="gif">
                <img src={gif} alt="gif" width={450}/>
            </div>

            <button className='w-9/12 bg-gradient-to-b from-teal-800 to-teal-600 text-white py-2 my-8 rounded-lg font-semibold text-xl'
                onClick={handleGenerateGIF}>
                Generate
            </button>
        </div>
    )
}

export default Random
