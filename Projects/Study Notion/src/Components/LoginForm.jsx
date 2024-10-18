import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { even } from 'prelude-ls';
import toast from 'react-hot-toast';

const LoginForm = ({setLogin}) => {
    const [formData, setFromData] = useState({
        email : "",
        password : ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleForm = () => {
        // const {name, type, value} = event.target
        setFromData((prevsData) => ({
            ...prevsData,
            [event.target.name] : event.target.value
            // return {
            //     ...prevsData,
            //     [name] : value,
            // }
        
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLogin(true)
        toast.success("Logged in")
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
                    value={formData.email}
                    onChange={handleForm}
                    placeholder='Enter email'
                    />
            </label>
            
            <label htmlFor="password">
                <p>Password <sup className='text-red-500'>*</sup></p>
                <input 
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    required
                    value={formData.password}
                    onChange={handleForm}
                    placeholder='Enter password' />

                <span onClick={() => setShowPassword((show) => !show)}>
                    {showPassword ? (<IoMdEye/>) : (<IoMdEyeOff/>)}
                </span>

                <Link to='/'>
                    <p>Forget Password</p>
                </Link>
            </label>
            
            <button>Sign in</button>
        </form>
    )
}

export default LoginForm
