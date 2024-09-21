import React from 'react'

const SingleCard = ({course}) => {
  return (
    <div className='card'>

      <div className="display">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="like">
          <button>
            
          </button>
        </div>
      </div>

      <div className="description">

      </div>
    </div>
  )
}

export default SingleCard
