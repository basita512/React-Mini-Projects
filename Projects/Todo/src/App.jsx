import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [taskList, setTaskList] = useState([])
  const [done, setDone] = useState("Mark as Done !")

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

  const handleDone = () => {
    if (done === "Mark as Done !") {
      setDone("Completed")
    }
    else {
      setDone("Mark as Done !")
    }
    
  }

  return (
    <>
      <div className="container">

        <h1 class="heading text-emerald-900">ToDo App</h1>

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

        <button onClick={handleSubmit}>Sumbit</button>

        <div className="ToDo-container">
          <h3>Tasks List</h3>
          <ul className="taskList">
            {taskList.map((event, index) => (
              <li key={index}>
                <strong>Task : </strong> {event.task} 
                <strong>Description : </strong> {event.description} 
                <button onClick={handleDone}>{done}</button>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </>
  )

}


export default App
