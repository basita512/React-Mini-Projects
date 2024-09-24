import React from 'react'
import '../App.css'
import { data } from 'browserslist'

const Filter = (props) => {
  let filterData = props.filterData
  let category = props.category
  let setCategory = props.setCategory

  const handleFilter = (title) => {
    setCategory(title)
  }

  return (
    <div className='filter-bar'>
      {
        filterData.map( (data) => (
          <button 
            key={data.id} 
            onClick={() => handleFilter(data.title)}
            className={`filter-btn my-2 mx-4 py-2 px-3 rounded-md font-medium text-white
            hover:bg-opacity-50 bg-black transition-all duration-300 
            ${category === data.title ? "bg-opacity-80 border-2 border-white" : "bg-opacity-50"}`}> 
              {data.title}
          </button>
        ))
      }
    </div>
  )
}

export default Filter
