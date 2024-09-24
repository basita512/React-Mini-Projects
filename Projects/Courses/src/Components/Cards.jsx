import React, { useState } from 'react'
import SingleCard from './Single-Card'

const Cards = (props) => {
  let courses = props.courses
  const [likedCourses, setLikedCourses] = useState([])

  // putting all courses names in single array (not key only the values of object)
  let allCourses = []
  const getCourses = () => {
    Object.values(courses).forEach( (courseCategory) => {
      courseCategory.forEach( (singleCourse) => {
        allCourses.push(singleCourse)
      })
    })
    return allCourses
  }


  return (
    <div className='flex flex-wrap justify-center'>
      { getCourses().map( (course) => (
        <SingleCard 
          key={course.id} 
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses} />
      ))}
    </div>
  )
}

export default Cards
