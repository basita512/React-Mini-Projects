import React from 'react'
import Card from './Card'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs"

const Testimonials = (props) => {
    let reviews = props.reviews

    return (
        <div className='bg-[#f7e77b] w-[85vw] md:w-[700px] flex flex-col justify-center items-center rounded-xl border-2 border-[#f7e77b] shadow-[#f7e77b] shadow-lg '>

            <Card SingleReview={reviews[0]}/> 

            <div className="buttons mb-6">
                <button className='p-3 text-3xl shadow-black hover:shadow-xl'>
                    <BsFillArrowLeftSquareFill/>
                </button>
                <button className='p-3 text-3xl shadow-black hover:shadow-lg'>
                    <BsFillArrowRightSquareFill/>
                </button>    
            </div>

            <div className="random-review py-4 px-10 mb-8 text-lg font-medium bg-[#A04747] text-white">
                <button>Suprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials
