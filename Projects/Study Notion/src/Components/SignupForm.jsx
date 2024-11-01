import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
    let setLogin = props.setLogin
    let navigate = useNavigate()

    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student")
    const [signUpData, setSignUpData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        createPS : "",
        confirmPS : ""
    })

    const handleSignUpData = (event) => {
        const {name, value} = event.target
        setSignUpData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (signUpData.createPS != signUpData.confirmPS) {
            toast.error("Passwords do not match")
            return
        } 
        setLogin(true)
        toast.success("Account created succesfully")
        const accountData = {
            ...signUpData
        }

        console.log("Account details are: ", accountData)
        navigate('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit} className='text-white mt-10'>
            <div className="role rounded-full flex justify-evenly py-2 bg-[#505b6649] w-64 mb-4 gap-x-1">
                <button 
                    onClick={() => {setAccountType("student")}}
                    className= {`${accountType === "student" ? "bg-yellow-400 text-black" : "text-gray-400 bg-transparent"} rounded-full  px-6 py-2 transition-all duration-300 ease-in-out`}>
                        Student
                </button>
                <button 
                    onClick={() => {setAccountType("instructor")}}
                    className={`${accountType === "instructor" ? "bg-yellow-400 text-black" : "text-gray-400 bg-transparent"} rounded-full  px-6 py-2 transition-all duration-300 ease-in-out`}>
                        Instructor
                </button>
            </div>


            {/* First-name and Last-name */}
                <label htmlFor="firstName">
                    <p>First Name <sup className='text-red-500'>*</sup></p>
                    <input 
                        type="text"
                        name='firstName'
                        value={signUpData.firstName}
                        placeholder='Enter first name'
                        required
                        onChange={handleSignUpData}
                        className=' mr-4' />
                </label>


                <label htmlFor="lastName">
                    <p className=''>Last Name <sup className='text-red-500'>*</sup></p>
                    <input 
                        type="text"
                        name='lastName'
                        value={signUpData.lastName}
                        placeholder='Enter last name'
                        required
                        onChange={handleSignUpData}
                         />
                </label>


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
                     />
            </label>


            {/* Passwords */}
            <label htmlFor="createPS" className='relative'>
                <p>Create Password <sup className='text-red-500'>*</sup></p>
                <input 
                    type={showCreatePassword ? "text" : "password"}
                    name='createPS'
                    value={signUpData.createPS}
                    required
                    onChange={handleSignUpData}
                     />

                <span className='absolute right-3 -bottom-0.5'
                    onClick={() => setShowCreatePassword((show) => !show)}>
                    {showCreatePassword ? (<IoMdEye fontSize={24}/>) : (<IoMdEyeOff fontSize={24}Off/>) }
                </span> 
            </label>

            <label htmlFor="confirmPS" className='relative'>
                <p>Confirm Password <sup className='text-red-500'>*</sup> </p>
                <input 
                    type={showConfirmPassword ? ("text") : ("password")}
                    name='confirmPS'
                    value={signUpData.confirmPS}
                    required
                    onChange={handleSignUpData}
                    
                     />

                <span className='absolute right-3 -bottom-0.5'
                     onClick={() => setShowConfirmPassword((show) => !show)}>
                        {showConfirmPassword ? (<IoMdEye fontSize={24}/>) : (<IoMdEyeOff fontSize={24}/>) }
                </span>
            </label>

            <br />
            <button className='my-4 py-2 bg-yellow-400 text-black font-medium w-full text-center rounded-md max-w-[450px]'>
                Create Account
            </button>
        </form>
    )
}

export default SignupForm
