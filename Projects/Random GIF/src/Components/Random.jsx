import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

// Place the env file next to vite.config.js, dont put env file inside folders
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Random = () => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)

    const handleGenerateGIF = () => {
        fetchData()
    }

    const fetchData = async () => {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

        try {
            const {data} = await axios.get(url) //taking first data by destructuring
            const imageSource = data.data.images.downsized_medium.url
            console.log(imageSource)
            setGif(imageSource)

        } catch (error) {
            console.error("Error fetching GIF:", error)
        }
        setLoading(false)
    }

    useEffect( () => {
        //fetchData()
    }, [])

    return (
        <div className='bg-[#ffffff68]  w-1/2 h-[500px] mt-10 flex flex-col items-center rounded-lg shadow-md shadow-[#5dad88f6]'>
            <h1 className='m-4 font-semibold text-2xl text-teal-800'>A RANDOM GIF</h1>

            <div className="gif w-[450px] h-[325px] flex justify-center items-center ">
                {loading ? <Spinner/> : <img src={gif} alt="gif"  className='mx-auto object-cover w-[450px] h-[325px]'/>}
            </div>

            <button className='w-9/12 bg-gradient-to-b from-teal-800 to-teal-600 text-white py-2 my-8 rounded-lg font-semibold text-xl'
                onClick={handleGenerateGIF}>
                Generate
            </button>
        </div>
    )
}

export default Random
