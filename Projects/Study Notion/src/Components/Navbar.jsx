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
    <div className='flex justify-evenly mt-3 flex-wrap '> 
        <Link to='/'>
            <img className='py-2' src={Logo} alt="logo" width={160} height={32} loading='lazy' />
        </Link>

        <nav className=''>
            <ul className='text-white flex gap-8'>
                <li className='py-2'> <Link to='/'  >Home </Link> </li>
                <li className='py-2'> <Link to='/'  >About </Link> </li>
                <li className='py-2'> <Link to='/'  >Contact</Link> </li>
            </ul>
        </nav>

        <div className="buttons text-white flex gap-4">
            { !isLoggedIn &&
                <Link to='/login' >
                    <button type='button' className='nav-btns'>
                        Login
                    </button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to='/signup' >
                    <button type='button' className='nav-btns' >
                        Signup
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to='/' >
                    <button onClick={handleSignIn} className='nav-btns'>
                        Log Out
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to='/dashboard' >
                    <button onClick={handleSignIn} className='nav-btns'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
