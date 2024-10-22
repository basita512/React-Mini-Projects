import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";
import frmaeImg from '../Assets/frame.png'

const Template = ({title, desc1, desc2, image, formType, setLogin}) => {
    console.log("FormType is", {formType})

    return (
        <div className='flex justify-center items-center w-9/12 mx-auto mt-20'>
            
            <div className="form text-gray-300 w-11/12 ml-10">

                <h1 className='text-3xl font-bold max-w-[500px]'>
                    {title}
                </h1>
                <p className='mt-4 flex flex-col'>
                    <span className='text-lg leading-6'>
                        {desc1}
                    </span>
                    <span className='text-sm text-yellow-400 italic'>
                        {desc2}
                    </span>
                </p>

                {formType === "signup" ? (<SignupForm setLogin={setLogin}/>) : (<LoginForm setLogin={setLogin} />)}
                
                <div className="or flex text-[#505b666b] gap-2 max-w-[450px]">
                    <div className="h-[2px] mx-auto w-1/2 bg-[#505b6649] mt-3"></div>
                    <p className='font-semibold'>OR</p>
                    <div className="h-[2px] mx-auto w-1/2 bg-[#505b6649] mt-3"></div>
                </div>

                <button className='flex relative mt-4 mb-10 border-2 border-[#505b6649] py-2 font-medium w-full justify-center rounded-md gap-2 max-w-[450px]'>
                    Sign in with Google  <div className="google pt-1"><FcGoogle /></div> 
                </button>
            </div>


            <div className="display relative w-11/12 max-w-[450px] md:ml-8 sm:ml-8">
                <img src={frmaeImg} alt="bg-frame" width={558} height={504} loading='lazy'
                    className='' />
                <img src={image} alt="display-image" width={558} height={504} loading='lazy'
                    className='absolute -top-3 right-3' />
            </div>


        </div>
    )
}

export default Template
