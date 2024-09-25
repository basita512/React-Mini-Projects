import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";

const Card = (props) => {
    let SingleReview = props.SingleReview

    return (
        <div className='card'>
            
            <div className="image">
                <img className='w-[140px] h-[140px] rounded-full'
                    src={SingleReview.image} 
                    alt={SingleReview.name} />
            </div>

            <div className="title">
                <p>{SingleReview.name}</p>
                <p>{SingleReview.job}</p>
            </div>

            <div className="quote">
                <FaQuoteLeft/>
                <div className="description">{SingleReview.text}</div>
                <FaQuoteRight/>
            </div>

        </div>
    )
}

export default Card
