import { useState } from 'react'
import './App.css'
import Testimonials from './Components/Testimonials'
import reviews from './data'

function App() {

  return (
    <>
      <div className="app flex flex-col justify-center items-center w-[100vw] min-h-[100vh] bg-[#343131] py-12">
        <div className="testimonial text-center ">
          <h1 className='text-[#EEDF7A] text-4xl font-bold'>Our Testimonials</h1>
          <div className="line bg-[#575353] rounded-lg h-[4px] w-1/3 mt-1 mb-6 mx-auto"></div>
          <Testimonials reviews={reviews} />
        </div>       
      </div> 
    </>
  )
}

export default App
