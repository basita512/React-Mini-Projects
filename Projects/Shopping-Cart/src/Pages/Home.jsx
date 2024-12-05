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
                        <div className="grid xs:grid-cols-1 sm:ml-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-5 my-8 min-h-[80vh] mx-auto">
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
