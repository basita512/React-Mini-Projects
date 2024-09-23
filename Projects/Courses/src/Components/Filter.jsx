import React from 'react'
import '../App.css'

const Filter = (props) => {
  let filterData = props.filterData
  return (
    <div className='filter-bar'>
      {
        filterData.map( (data) => (
          <button key={data.id}  className={`filter-btn`}> 
            {data.title}
          </button>
        ))
      }
    </div>
  )
}

export default Filter
