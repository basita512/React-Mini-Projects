import React from 'react'
import '../App.css'
import Logo from '../Assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setLogin = props.setLogin
    const navigate = useNavigate()

    const handleSignIn = () => {
        setLogin(false)
        toast.success("Logged Out")
    }

  return (
    <div className='flex justify-evenly p-4'>
        <Link to='/'>
            <img src={Logo} alt="logo" width={160} height={32} loading='lazy' />
        </Link>

        <nav className=''>
            <ul className='text-white flex gap-4'>
                <li> <Link to='/' >Home </Link> </li>
                <li> <Link to='/' >About </Link> </li>
                <li> <Link to='/' >Contact</Link> </li>
            </ul>
        </nav>

        <div className="buttons text-white flex gap-4">
            { !isLoggedIn &&
                <Link to='/login' >
                    <button type='button'>
                        Login
                    </button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to='/signup' >
                    <button type='button' >
                        Signup
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to='/' >
                    <button onClick={handleSignIn}>
                        Log Out
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to='/dashboard' >
                    <button onClick={handleSignIn}>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
