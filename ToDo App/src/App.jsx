import { useState } from 'react'
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

        <h1 class="heading">ToDo App</h1>

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
          <ul>
            {taskList.map((event, index) => (
              <li key={index}>
                <strong>Task : </strong> {event.task} <br />
                <strong>Description : </strong> {event.description}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </>
  )

}


export default App
