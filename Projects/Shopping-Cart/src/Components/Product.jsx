import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { add, remove } from '../redux/slices/CartSlice'

const Product = ({post}) => {
    const {cart = []} = useSelector((state) => state)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch( add(post))
        toast.success('Item added to cart')     
    }

    const removeFromCart = () => {
        dispatch( remove(post.id))
        toast.success('Item removed from cart') 
    }

    const isItemInCart = cart.some((p) => p.id === post.id);

    return (
        <div className="hover:scale-105 hover:delay-75 duration-300">
            <div className='flex flex-col w-[280px] h-[450px] items-center justify-between shadow-lg shadow-gray-700 hover:shadow-2xl p-6 rounded-xl'>
                <div className="title font-bold">
                    {post.title}
                </div>
                    
                <div className="des">
                    {post.description.split(" ").slice(0,10).join(" ") + "..."}
                </div>      

                <div className="image w-[200px] h-[200px]">
                    <img src={post.image} alt="Product Image" className='h-full w-full mt-5' />
                </div>

                <div className="add-to-cart flex mt-9 justify-between items-center w-full">
                    <p className='text-green-700 font-semibold'>${post.price}</p>
                    <div className="border-2 border-black rounded-full font-semibold py-1 px-4 hover:text-white hover:bg-black duration-300">
                        {
                            isItemInCart ? (
                                <button className=''
                                    onClick={removeFromCart}>
                                        REMOVE ITEM
                                </button>
                            ) : (
                                <button className=''
                                    onClick={addToCart}>
                                        ADD TO CART
                                </button>
                            )
                        }
                    </div>
                        
                </div>
            </div>
        </div>
        
    )
}

export default Product
