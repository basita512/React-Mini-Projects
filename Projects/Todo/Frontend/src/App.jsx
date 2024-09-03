import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [taskList, setTaskList] = useState([])
  //const [done, setDone] = useState("Mark as Done !")
  const [showTodo, setShowTodo] = useState(false)

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }


  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload after submission

    if (task && description) {
      setTaskList([...taskList, { task, description, completed:false }])
      setTask("")
      setDescription("") // Clearing the input field
      setShowTodo(true) // todo container will appear
    }
  }

  const handleDone = (index_of_Todo) => {
    const updatedTaskList = taskList.map((task_items, pointer) => {
        if (pointer === index_of_Todo) {
          return { ...task_items, completed: !task_items.completed } // completed was false, it will become true and vice versa
        }
        else {
          return task_items
        }  
    }) 
    setTaskList(updatedTaskList)
  }

  return (
    <>
      <div className="container flex flex-col justify-center items-center m-6 sm:m-8 md:m-10 lg:m-12">

        <h1 class="heading text-emerald-200 text-shadow-xl font-bold
                   sm:text-4xl md:text-5xl lg:text-6xl 
                   sm:m-4 md:m-6 lg:m-8 
                   sm:p-4 md:p-6 lg:p-8">
          ToDo App
        </h1>

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


        {showTodo && (
          <div className="ToDo-container">
          <h3 className='text-xl text-center font-bold text-emerald-900 pb-4'>Tasks List</h3>
            
            <ul>         
              {taskList.map((event, index_of_Todo) => (
                <li key={index_of_Todo} className='task-list'>
                  <p>Task : {event.task}</p>
                  <p>Description : {event.description}</p>
  
                  <button 
                    className='button px-4 py-2 mt-2 mb-4 bg-emerald-900 text-emerald-200' 
                    onClick={() => handleDone(index_of_Todo)}> 
                      {event.completed ? "Completed !" : "Mark as Done"} 
                  </button>
                </li>
              ))}
            </ul>
          </div>  
        )}
        
      </div>
    </>
  )
}

export default App
