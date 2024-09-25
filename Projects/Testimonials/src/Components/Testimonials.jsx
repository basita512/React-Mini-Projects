import React from 'react'
import Card from './Card'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs"

const Testimonials = (props) => {
    let reviews = props.reviews

    return (
        <div>
            <Card SingleReview={reviews[0]}/> 

            <div className="buttons">
                <button>
                    <BsFillArrowLeftSquareFill/>
                </button>
                <button>
                    <BsFillArrowRightSquareFill/>
                </button>    
            </div>

            <div className="random-review">
                <button>Suprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials
