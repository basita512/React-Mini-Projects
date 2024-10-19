import React from 'react'
import Template from '../Components/Template.jsx'
import loginImg from '../Assets/login.png'

const Login = ({setLogin}) => {
    console.log("Inside login template")
    console.log("Login image:", loginImg);

    return (
        <div>
            <Template
                title = "Welcome Back"
                desc1 = "Build skills for today, tomorrow and beyond"
                desc2 = "Education to future-proof your career"
                image = {loginImg}
                formType = "login"
                setLogin = {setLogin}
            />
        </div>   
    )
}

export default Login
