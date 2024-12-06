import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
    const {cart = []} = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect( () => {
        let cartSum = cart.reduce((acc, current) => acc + (current.price || 0), 0)
        setTotalAmount(cartSum)
    }, [cart])

    return (
        <div className=''>
            {
                cart.length > 0 ? (
                    <div className="flex gap-16 max-w-6xl flex-wrap lg:flex-nowrap mx-auto my-10">
                        <div className="cart lg:w-[60%]">
                            {
                                cart.map( (item, index) => (
                                    <CartItem key={item.id} item={item} itemIndex={index}  />
                                ))
                            }
                        </div>

                        <div className="cart-summary flex flex-col justify-between gap-8 lg:w-[35%]">
                            <div className="upper">
                                <p className='text-green-700 font-semibold'>YOUR CART</p>
                                <div className="text-4xl font-semibold text-green-700">SUMMARY</div>
                                <div className="font-semibold mt-1">
                                    Total Items: <span className='font-semibold'>{cart.length}</span> 
                                </div>
                            </div>

                            <div className="checkout">
                                <div className="total font-semibold">
                                    Total Amount: <span className='font-extrabold' >${totalAmount}</span>
                                </div>
                                <button className='text-white bg-green-700 font-semibold w-full py-2 mt-4 rounded-md hover:bg-green-800 duration-200 shadow-lg shadow-gray-400'>
                                    Checkout Now
                                </button>
                            </div> 
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col min-h-[90vh] justify-center items-center">
                        <div className="font-semibold">Your cart is empty!</div>
                        <NavLink to='/'>
                            <button className='px-6 py-2 mt-4 bg-green-700 rounded-md font-semibold hover:bg-green-800 duration-200 shadow-lg shadow-gray-400 text-white'>
                                SHOP NOW
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
