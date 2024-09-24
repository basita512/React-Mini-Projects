import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const SingleCard = (props) => {
  let course = props.course
  let likedCourses = props.likedCourses
  let setLikedCourses = props.setLikedCourses

  const handleLike = () => {

      if(likedCourses.includes(course.id)) {
        // pehle se like hua pada hai
        setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)))
        toast.warning("Like removed")
      }
      else {
        // pehle se like nhii kiya
        // insert karna hai yeh course liked courses me
        if (likedCourses.length === 0) {
          setLikedCourses([course.id])
        }
        else {
          // non-empty thi pehle se 
          setLikedCourses((prev) => [...prev, course.id])
        }
        toast.success("Liked Successfully !")
      }
  }

  return (
    <div className='card w-[300px] rounded-md bg-black text-white overflow-hidden m-4 bg-opacity-85'>

      <div className="image relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="like absolute grid place-items-center rounded-full bg-slate-700 w-12 h-12 right-2 bottom-[-20px]">
          <button onClick={handleLike}>           
            {
              likedCourses.includes(course.id) ? 
              (<FcLike font-size="1.75rem"/>) 
              : (<FcLikePlaceholder font-size="1.75rem"/>)
            }
          </button>   
        </div>
      </div>
        
      <div className="paragraph p-4">
        <p className='text-2xl font-bold'>{course.title}</p>
        <p className='pt-3'>
          {
            course.description.length > 100 ? 
            (course.description.substr(0,100)) + "..." 
            : (course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default SingleCard
