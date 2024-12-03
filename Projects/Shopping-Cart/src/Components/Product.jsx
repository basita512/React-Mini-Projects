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
        dispatch( remove(post))
        toast.success('Item removed from cart')
    }

    return (
        <div className="hover:scale-105 hover:delay-75 duration-300">
            <div className='flex flex-col w-[280px] h-[450px] items-center shadow-lg shadow-black p-6'>
                <div className="title font-bold">
                    {post.title}
                </div>
                    
                <div className="des">
                    {post.description}
                </div>      

                <div className="image w-[200px]">
                    <img src={post.image} alt="Product Image" />
                </div>

                <div className="price-addToCart flex flex-row mt-6">
                    <p>{post.price}</p>
                    <div className="">
                        {
                            cart.some((p) => p.id == post.id) ? (
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
