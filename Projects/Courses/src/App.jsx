import { useEffect, useState } from 'react'
import { filterData, apiUrl } from "./data"
import { toast } from 'react-toastify'
import './App.css'
import NavBar from './Components/NavBar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'


function App() {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  useEffect( () => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(apiUrl)
        const output = await response.json()
        setCourses(output.data) // Hera "data" is the main KEY in urlApi where all the courses are present
      } catch (error) {
        toast.error("Something is wrong")
      }
      setLoading(false)
    }
    fetchData() 
  }, [])

  return (
    <>
    <div className="min-h-screen flex flex-col bg-slate-800">

      <div className="nav">
        <NavBar />
      </div>

      <div className="filter">
        <Filter filterData={filterData}
                category={category}
                setCategory={setCategory} />
      </div>

      <div className="cards w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {/* if we dont add the loader logic code wont run, code fatt jaega */}
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
      
    </>
  )
}

export default App
