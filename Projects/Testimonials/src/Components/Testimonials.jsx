import React, { useState } from 'react'
import Card from './Card'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs"
import index from 'regexp.prototype.flags'

const Testimonials = (props) => {
    let reviews = props.reviews
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleLeft = () => {
        ((currentIndex - 1) < (0)) ? setCurrentIndex(reviews.length - 1) : setCurrentIndex(currentIndex - 1)
    }

    const handleRight = () => {
        ((currentIndex + 1) > (reviews.length - 1)) ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }

    const handleSuprise = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length)
        setCurrentIndex(randomIndex)
    }

    return (
        <div className='bg-[#f7e77b] w-[85vw] md:w-[700px] flex flex-col justify-center items-center rounded-2xl  shadow-[#201c1c] shadow-xl '>

            <Card SingleReview={reviews[currentIndex]}/> 

            <div className="buttons mb-6">
                <button onClick={handleLeft}
                    className='text-4xl mr-4 hover:transition-all hover:opacity-90'>
                    <BsFillArrowLeftSquareFill/>
                </button>
                <button onClick={handleRight}
                    className='text-4xl hover:transition-all hover:opacity-90'>
                    <BsFillArrowRightSquareFill/>
                </button>    
            </div>

            <div onClick={handleSuprise}
                 className="random-review py-4 px-10 mb-8 text-lg font-medium bg-[#A04747] text-white hover:bg-[#743333] transition-all duration-200">
                <button>Suprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials
