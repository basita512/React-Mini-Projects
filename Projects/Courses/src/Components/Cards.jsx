import React from 'react'

const Cards = ({courses}) => {

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
    <div>
      { getCourses().map( (course) => {
        <SingleCard course={course} />
      })}
    </div>
  )
}

export default Cards
