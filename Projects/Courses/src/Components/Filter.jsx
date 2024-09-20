import React from 'react'
import '../App.css'

const Filter = ({filterData}) => {
  return (
    <div className='filter-bar'>
      {filterData.map((data) => {
        return (
          <>
            <button className='filter-btn'>
                {data.title}
            </button>
          </>
        )              
      }) }
    </div>
  )
}

export default Filter
