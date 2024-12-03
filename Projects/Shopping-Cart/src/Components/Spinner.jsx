import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="spinner mb-2"></div>
            <p className='text-green-950 font-medium mt-2'>
                Loading...
            </p>
            
        </div>
    )
}

export default Spinner
