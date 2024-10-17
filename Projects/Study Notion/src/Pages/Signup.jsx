import React from 'react'
import signupImg from '../Assets/signup.png'

const Signup = () => {
    return (
        <div>
            <Template
                title = "Join the millions learning to code with StudyNotion for free"
                desc1 = "Build skills for today, tomorrow and beyond"
                desc2 = "Education to future-proof your career"
                image = {signupImg}
                formType = "signup"
                setLogin = {setLogin}
            />
        </div>
    )
}

export default Signup
