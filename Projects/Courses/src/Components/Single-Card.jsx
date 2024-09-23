import React from 'react'
import { FcLike } from "react-icons/fc";

const SingleCard = (props) => {
  let course = props.course

  return (
    <div className='card w-[300px] rounded-md bg-black text-white overflow-hidden m-4 bg-opacity-85'>

      <div className="image relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="like absolute grid place-items-center rounded-full bg-white w-12 h-12 right-2 bottom-4">
          <button><FcLike font-size="1.75rem"/></button>   
        </div>
      </div>
        
      <div className="paragraph p-4">
        <p className='text-2xl font-bold'>{course.title}</p>
        <p className='pt-3'>{course.description}</p>
      </div>

    </div>
  )
}

export default SingleCard
