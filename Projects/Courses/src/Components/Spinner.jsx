import React from 'react'
import '../App.css'

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center space-y-2">
        <div className='spinner'></div>
        <p className='text-blue-950 text-lg font-semibold'>Loading...</p>
    </div>
    
  )
}

export default Spinner
