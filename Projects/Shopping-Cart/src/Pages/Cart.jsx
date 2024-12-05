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
                    <div className="flex gap-16 max-w-6xl flex-wrap lg:flex-nowrap mx-auto">
                        <div className="cart lg:w-[70%]">
                            {
                                cart.map( (item, index) => (
                                    <CartItem key={item.id} item={item} itemIndex={index}  />
                                ))
                            }
                        </div>

                        <div className="cart-summary">
                            <div className="upper">
                                <p>YOUR CART</p>
                                <div className="">SUMMARY</div>
                                <div className="">Total Items <span>{cart.length}</span> </div>
                            </div>

                            <div className="checkout">
                                <div className="total">Total Amount: {totalAmount}</div>
                                <button>Checkout Now</button>
                            </div> 
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <div className="">Cart Empty</div>
                        <NavLink to='/'>
                            <button>
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
