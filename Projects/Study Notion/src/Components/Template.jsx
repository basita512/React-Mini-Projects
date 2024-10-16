import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

const Template = (title, des1, des2, image, formType, setLogin) => {
    return (
        <div>
            
            <div className="form">
                <h1>{title}</h1>
                <p>
                    <span>{des1}</span>
                    <span>{des2}</span>
                </p>

                {formType === "signup" ? (<SignupForm/>) : (<LoginForm/>)}
                
                <div className="or">
                    <div className=""></div>
                    <p>OR</p>
                    <div className=""></div>
                </div>

                <button> <FcGoogle /> Sign in with Google</button>
            </div>

            <div className="display">
                <img src="../Assets/frame.png" alt="bg-frame" width={558} height={504} loading='lazy' />
                <img src={image} alt="display-image" width={558} height={504} loading='lazy' />
            </div>


        </div>
    )
}

export default Template
