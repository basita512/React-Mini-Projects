import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";

const Card = (props) => {
    let SingleReview = props.SingleReview

    return (
        <div className='card relative felx flex-col'>
            
            <div className="image absolute top-[-5rem] left-[-5rem] z-[10] m-4">
                <img className='w-[140px] h-[140px] rounded-full z-25'
                    src={SingleReview.image} 
                    alt={SingleReview.name} />
                <div className="w-[140px] h-[140px] bg-[#575353] rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="title pt-12 text-2xl">
                <p className='font-bold text-[#262424]'>{SingleReview.name}</p>               
            </div>

            <div className="job">
                <p className='text-[#262424] '>{SingleReview.job}</p>
            </div>

            <div className="quote relative p-8 max-w-md mx-auto">
                <FaQuoteLeft className='quotes absolute top-4 left-0 text-4xl'/>
                <div className="description m-4">{SingleReview.text}</div>
                <FaQuoteRight className='quotes absolute bottom-4 right-0 text-4xl'/>    
            </div>

            
        </div>
    )
}

export default Card
