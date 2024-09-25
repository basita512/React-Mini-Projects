import { useState } from 'react'
import './App.css'
import Testimonials from './Components/Testimonials'
import reviews from './data'

function App() {

  return (
    <>
      <div className="app  py-12 flex flex-col justify-center items-center w-[100vw] h-[100vw] bg-[#D8A25E]">
        <div className="testimonial text-center ">
          <h1 className='text-[#343131] text-3xl font-bold'>Our Testimonials</h1>
          <div className="line"></div>
          <Testimonials reviews={reviews} />
        </div>       
      </div> 
    </>
  )
}

export default App
