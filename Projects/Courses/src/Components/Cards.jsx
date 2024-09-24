import React, { useState } from 'react'
import SingleCard from './Single-Card'

const Cards = (props) => {
  let courses = props.courses
  let category = props.category
  const [likedCourses, setLikedCourses] = useState([])

  // putting all courses names in single array (not key only the values of object)
  let allCourses = []
  const getCourses = () => {

    if (category === "All") {
      Object.values(courses).forEach( (courseCategory) => {
        courseCategory.forEach( (singleCourse) => {
          allCourses.push(singleCourse)
        }) 
      })
      return allCourses

    } else {
      // selected category ka array deisplay karenge
      return courses[category]
    }
    
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
