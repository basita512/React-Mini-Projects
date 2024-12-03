import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import Product from '../Components/Product'


const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])

    
    useEffect( () => {
        const fetchPostData = async() => {
            setLoading(true)
            try {
                const response = await fetch(API_URL)
                const data = await response.json()
                //console.log(data)
                setPost(data)

            } catch (error) {
                console.log('API cannot fetch data: ', error)  
                setPost([])
            }
            setLoading(false)
        }
        fetchPostData()
    }, [])
    

    return (
        <div>
            {
                loading ? (<Spinner/>) : (
                    post.length > 0 ? (
                        <div className="grid grid-cols-4 my-8 mx-16">
                            {
                                post.map( (item) => (<Product key={item.id} post={item}/>))
                            } 
                        </div>
                    ) : (
                        <div className="">
                            <p>No data found</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Home
