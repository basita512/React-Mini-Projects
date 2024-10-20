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
        <form onSubmit={handleSubmit} className='text-white'>

            <label htmlFor="email">
                <p>Email Address <sup className='text-red-500'>*</sup></p>
                <input 
                    type="email"
                    name='email'
                    required
                    value={loginData.email}
                    onChange={handleForm}
                    placeholder='Enter email'
                    className='text-black'
                    />
            </label>
            
            <label htmlFor="password">
                <p>Password <sup className='text-red-500'>*</sup></p>
                <input 
                    type={showPassword ? "text" : "password"}
                    name='password'
                    value={loginData.password}
                    onChange={handleForm}
                    placeholder='Enter password'
                    className='text-black' />

                {/* <span onClick={() => setShowPassword((show) => !show)}>
                    {showPassword ? (<IoMdEye/>) : (<IoMdEyeOff/>)}
                </span> */}

                <Link to='/'>
                    <p>Forget Password</p>
                </Link>
            </label>
            
            {/* made onSubmit handle to clicking sign in button */}
            <button>Sign in</button>
        </form>
    )
}

export default LoginForm
