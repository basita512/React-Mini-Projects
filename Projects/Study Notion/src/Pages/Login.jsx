import React from 'react'
import Template from '../Components/Template.jsx'

const Login = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setLogin = props.setLogin

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
