import { useState } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGIF = (tag) => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)
    const [heading, setHeading] = useState('A RANDOM GIF')
    
    const fetchData = async () => {
        setLoading(true)
        
        try {
            const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url) //taking first data by destructuring
            const imageSource = data.data.images.downsized_medium.url
            console.log(imageSource)
            setGif(imageSource)

        } catch (error) {
            console.error("Error fetching GIF:", error)
        }
        setLoading(false)
    }

    const handleGenerateGIF = () => {
        if (typeof tag === 'string' && tag) {
            setHeading(`A RANDOM ${tag.toUpperCase()} GIF`);
        }
        fetchData(tag)
    }

    return {gif, loading, heading, handleGenerateGIF}
}

export default useGIF
