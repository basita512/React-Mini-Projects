import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#010131] text-white flex justify-around w-full h-1/2'>
            <NavLink to='/'>
                <img src="../../public/logo.png" className='h-[60px] w-[200px] m-4' alt="logo" />
            </NavLink>
            

            <div className="flex my-8 mx-10 gap-10 text-xl font-medium">
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>

                <NavLink to='/cart' >
                    <FaShoppingCart className='text-white mt-1'/>
                </NavLink>   
            </div>
       
        </div>
    )
}

export default Navbar
