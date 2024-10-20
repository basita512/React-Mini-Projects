import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";
import frmaeImg from '../Assets/frame.png'

const Template = ({title, desc1, desc2, image, formType, setLogin}) => {
    console.log("FormType is", {formType})

    return (
        <div>
            
            <div className="form text-white">
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formType === "signup" ? (<SignupForm setLogin={setLogin}/>) : (<LoginForm setLogin={setLogin} />)}
                
                <div className="or">
                    <div className=""></div>
                    <p>OR</p>
                    <div className=""></div>
                </div>

                <button> <FcGoogle /> Sign in with Google</button>
            </div>

            <div className="display">
                <img src={frmaeImg} alt="bg-frame" width={558} height={504} loading='lazy' />
                <img src={image} alt="display-image" width={558} height={504} loading='lazy' />
            </div>


        </div>
    )
}

export default Template
