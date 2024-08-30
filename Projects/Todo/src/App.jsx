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
      <div className="container flex flex-col justify-center items-center m-20">

        <h1 class="heading text-emerald-200 text-shadow-xl text-4xl font-bold m-8 p-4">ToDo App</h1>

        <input
          className='task-input' 
          type="text" 
          value={task} 
          onChange={handleTaskChange} 
          placeholder='Enter Task' />

        <input
          className='task-input' 
          type="text" 
          value={description} 
          onChange={handleDescriptionChange} 
          placeholder='Enter Description' />

        <button 
          className='task-input button  text-emerald-900' 
          onClick={handleSubmit}>
            Sumbit
        </button>


        <div className="ToDo-container">

        <h3 className='text-xl text-center font-bold text-emerald-900 pb-4'>Tasks List</h3>
          
          <ul>         
            {taskList.map((event, index) => (
              <li key={index} className='task-list'>
                <p>Task : {event.task}</p>
                <p>Description : {event.description}</p>

                <button 
                  className='button px-4 py-2 mt-2 mb-4 bg-emerald-900 text-emerald-200' 
                  onClick={handleDone}> 
                    {done} 
                  </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </>
  )

}


export default App
