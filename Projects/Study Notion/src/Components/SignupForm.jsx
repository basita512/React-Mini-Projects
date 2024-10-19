import React, { useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const SignupForm = (props) => {
    let showPassword = props.showPassword
    let setShowPassword = props.setShowPassword
    let setLogin = props.setLogin

    const [signUpData, setSignUpData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        createPS : "",
        confirmPS : ""
    })

    const handleSignUpData = () => {
        const {name, type, value} = event.target
        setSignUpData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    return (
        <form action="" className='text-white'>
            <div className="role rounded-full flex justify-evenly py-2 bg-lime-300 w-64">
                <button className='bg-gray-600 px-6 py-2 text-white rounded-full mx-2'>Student</button>
                <button className='bg-gray-600 px-6 py-2 text-white rounded-full mx-2'>Instructor</button>
            </div>


            {/* First-name and Last-name */}
            <div className="first-last-name flex">
                <label htmlFor="firstName">
                    <p>First Name <sup className='text-red-500'>*</sup></p>
                    <input 
                        type="text"
                        name='firstName'
                        value={signUpData.firstName}
                        placeholder='Enter first name'
                        required
                        onChange={handleSignUpData}
                        className='text-black' />
                </label>


                <label htmlFor="lastName">
                    <p>Last Name <sup className='text-red-500'>*</sup></p>
                    <input 
                        type="text"
                        name='lastName'
                        value={signUpData.lastName}
                        placeholder='Enter last name'
                        required
                        onChange={handleSignUpData}
                        className='text-black' />
                </label>
            </div>


            {/* Email */}
            <label htmlFor="email">
                <p>Email Address <sup className='text-red-500'>*</sup></p>
                <input 
                    type="email"
                    name='email'
                    value={signUpData.email}
                    placeholder='Enter email id'
                    required
                    onChange={handleSignUpData}
                    className='text-black' />
            </label>


            {/* Passwords */}
            <label htmlFor="createPS">
                <p>Create Password <sup className='text-red-500'>*</sup></p>
                <input 
                    type={showPassword ? ("text") : ("password")}
                    name='createPS'
                    value={signUpData.createPS}
                    required
                    onChange={handleSignUpData}
                    className='text-black' />

                <span onClick={() => setShowPassword((show) => !show)}>
                    {showPassword ? (<IoMdEye/>) : (<IoMdEyeOff/>) }
                </span>
            </label>

            <label htmlFor="">
                <p>Confirm Password <sup className='text-red-500'>*</sup> </p>
                <input 
                    type={showPassword ? ("text") : ("password")}
                    name='confirmPS'
                    value={signUpData.confirmPS}
                    required
                    onChange={handleSignUpData}
                    className='text-black' />

                <span onClick={() => setShowPassword((show) => !show)}>
                    {showPassword ? (<IoMdEye/>) : (<IoMdEyeOff/>) }
                </span>
            </label>


            <button>Create Account</button>
        </form>
    )
}

export default SignupForm
