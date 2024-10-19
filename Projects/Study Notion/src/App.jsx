import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Login from './Components/LoginForm.jsx'
import Signup from './Components/SignupForm.jsx'
import LoginForm from './Components/LoginForm.jsx'
import SignupForm from './Components/SignupForm.jsx'
import Template from './Components/Template.jsx'

function App() {
    const [isLoggedIn, setLogin] = useState(false)

    return (
        <div className="app bg-gradient-to-b from-black to-[#270117] w-screen min-h-screen"> 
        
            <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
            <Template/>
            {/* <LoginForm/> */}
            {/* <SignupForm/> */}
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/dashboard' element={<Dashboard/>} ></Route>
                <Route path='/login' element={<Login setLogin={setLogin} />} ></Route>
                <Route path='/signup' element={<Signup setLogin={setLogin} />} ></Route>
            </Routes>
            
        </div> 
    )
}

export default App
