import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [taskList, setTaskList] = useState([])

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload after submission

    if (task && description) {
      setTaskList([...taskList, {task, description}])
      setTask("")
      setDescription("") // Clearing the input field
    }
  }

  return (
    <>
      <div className="container">

        <input 
          type="text" 
          value={task} 
          onChange={handleTaskChange} 
          placeholder='Enter Task' />

        <input 
          type="text" 
          value={description} 
          onChange={handleDescriptionChange} 
          placeholder='Enter Description' />

      </div>
        
      <button onClick={handleSubmit}>Sumbit</button>

      <div className="ToDo-container">
        <h3>Tasks List</h3>


      </div>

    </>
  )

}


export default App
