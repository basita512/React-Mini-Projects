import { useEffect, useState } from 'react'
import { filterData, apiUrl } from "./data"
import { toast } from 'react-toastify'
import './App.css'
import NavBar from './Components/NavBar'
import Filter from './Components/Filter'


function App() {
  const[courses, setCourses] = useState()

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl)
        const output = await response.json()
        setCourses(output.data)
      } catch (error) {
        toast.error("Something is wrong")
      }
    }
    fetchData() 
  }, [])

  return (
    <>
      <NavBar />
      <Filter filterData={filterData} />
    </>
  )
}

export default App
