import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import toast from 'react-hot-toast';

const LoginForm = ({ setLogin }) => {
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleForm = (event) => {
        const {name, value} = event.target
        setLoginData((prevsData) => ({
            ...prevsData,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLogin(true)
        toast.success("Logged in")

        const loginAccData = {
            ...loginData
        }
        console.log("Sign in account details are: ", loginAccData)
        navigate("/dashboard")
    }

    return (
        <form onSubmit={handleSubmit} className='text-white mt-6'>

            <label htmlFor="email">
                <p>Email Address <sup className='text-red-500'>*</sup></p>
                <input 
                    type="email"
                    name='email'
                    required
                    value={loginData.email}
                    onChange={handleForm}
                    placeholder='Enter email'
                    />
            </label>
            
            <label htmlFor="password" className='relative'>
                <p>Password <sup className='text-red-500'>*</sup></p>
                <input 
                    type={showPassword ? "text" : "password"}
                    name='password'
                    value={loginData.password}
                    onChange={handleForm}
                    placeholder='Enter password' />

                <span 
                    onClick={() => setShowPassword((show) => !show)}
                    className='absolute right-3 top-[86px]'>
                    {showPassword ? (<IoMdEye fontSize={24}/>) : (<IoMdEyeOff fontSize={24}/>)}
                </span>

                <Link to='/'>
                    <p>Forget Password</p>
                </Link>
            </label>
            
            {/* made onSubmit handle to clicking sign in button */}
            <button className='my-4 py-2 bg-yellow-400 text-black font-medium w-full text-center rounded-md max-w-[450px]'>
                Sign in
            </button>
        </form>
    )
}

export default LoginForm
