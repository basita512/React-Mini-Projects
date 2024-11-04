import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Tag = () => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)
    const [tag, setTag] = useState('')
    const [heading, setHeading] = useState('A RANDOM GIF')

    const handleGenerateGIF = () => {
        setHeading(`A RANDOM ${tag.toUpperCase()} GIF`)
        fetchData()
    }

    const handleChange = (event) => {
        setTag(event.target.value)
    }

    const fetchData = async () => {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

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
        <div className='bg-[#fff0e6] border-2 border-[#ffcc99]  w-1/2 h-[625px] mt-10 flex flex-col items-center rounded-lg shadow-md shadow-[#3e745bf6]'>
            <h1 className='m-4 font-semibold text-2xl text-teal-800'>{heading}</h1>

            <div className="gif w-[450px] h-[325px] flex justify-center items-center mt-8 ">
                {loading ? <Spinner/> : <img src={gif} alt="gif"  className='mx-auto object-cover w-[450px] h-[325px]'/>}
            </div>

            <input 
                className='outline-none focus:border-2 focus:border-[#ffb399] shadow-[#f3d2bc] w-9/12 bg-white text-black text-center py-2 mt-8 rounded-lg shadow-md'
                type="text"
                value={tag}
                onChange={handleChange} />

            <button className='w-9/12 bg-[#ff7f50] hover:bg-[#af4f26]  text-white py-2 my-8 rounded-lg font-semibold text-xl'
                onClick={handleGenerateGIF}>
                Generate
            </button>          
        </div>
    )
}

export default Tag
