import { span } from 'prelude-ls';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { cart } = useSelector((state) => state)

    return (
        <div className='bg-[#010131] text-white flex justify-around w-full h-1/2'>
            <NavLink to='/'>
                <img src="../../public/logo.png" className='h-[60px] w-[200px] m-4' alt="logo" />
            </NavLink>
            

            <div className="flex my-8 mx-10 gap-10 text-xl font-medium hover:text-green-600">
                <NavLink to='/'>
                    <p >Home</p>
                </NavLink>

                <NavLink to='/cart' >
                    <div className="relative">
                        <FaShoppingCart className='text-white mt-1 hover:text-green-600'/>
                        {
                            cart.length > 0 && 
                            <span className='absolute hover:bg-white hover:text-green-600 bg-green-600 text-white text-xs px-1 rounded-full -right-2 -top-2 animate-bounce'>
                                {cart.length}
                            </span>
                        }
                    </div>
                    
                </NavLink>   
            </div>
       
        </div>
    )
}

export default Navbar
