import { useEffect, useState } from 'react'
import { filterData, apiUrl } from "./data"
import './App.css'
import NavBar from './Components/NavBar'
import Filter from './Components/Filter'


function App() {
 

  return (
    <>
      <NavBar />
      <Filter filterData={filterData} />
    </>
  )
}

export default App
