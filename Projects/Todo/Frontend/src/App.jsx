import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [taskList, setTaskList] = useState([])
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
      // Preparing data to send
      const data = {
        Title : task,
        Description : description
      }

        // Sending data to backend using fetch
        fetch('http://localhost:3000/todo', {
          method : 'POST',
          headers : { 'Content-Type' : 'application/json' }, //setting content type to json  
          body : JSON.stringify(data) // converting Data object into JSON string
        })
        .then(response => response.json()) //parse the response as json
        .then(data => {
          console.log('Success: ', data)
        })

        // Updating UI after succesful POST req
        setTaskList([{ Title: task, Description: description, Completed: false }, ...taskList])
        setTask("")
        setDescription("") // Clearing the input field
        setShowTodo(true) // todo container will appear
        
      .catch((error) => {
        console.error('Error: ', error)
      })
    }
    else {
      alert("Task or Description missing")
    }
  }


// Fetching data from the backend when the component loads
useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/show') //get req backend call
      const data = await response.json() //converting response into JSON
      setTaskList(data.result) // updating the state of tasklist with the data from backend
      setShowTodo(true) // show task list if there are tasks
    }
    catch (error) {
      console.error('Error fetching tasks: ', error)
    }
  }
  
  fetchTasks() // Calling the function when function mounts
}, []) // Empty dependency array ensures this runs only once, when the component mounts


  const handleDone = (index_of_Todo) => {
    const taskToMarkDone = taskList[index_of_Todo]

    // Send PUT request to the backend to upate task status
    fetch('http://localhost:3000/completed', {
      method : 'PUT',
      headers : { 'Content-Type': 'application/json' },
      body : JSON.stringify({ id: taskToMarkDone._id, Completed: !taskToMarkDone.Completed })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success', data)

      //Update the UI after marking task as completed in the backend
      const updatedTaskList = taskList.map((task_items, pointer) => {
        if (pointer === index_of_Todo) {
          return { ...task_items, Completed: !task_items.Completed } // completed was false, it will become true and vice versa
        }
        else {
          return task_items
        }  
      }) 
      setTaskList(updatedTaskList)
    })
    .catch(error => {
      console.error('Error', error)
    })   
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
            Submit
        </button>


        {showTodo && (
          <div className="ToDo-container">
          <h3 className='text-xl text-center font-bold text-emerald-900 pb-4'>Tasks List</h3>
            
            <ul>         
              {taskList.map((event, index_of_Todo) => (
                <li key={index_of_Todo} className='task-list'>
                  <p>Task : {event.Title}</p>
                  <p>Description : {event.Description}</p>
  
                  <button 
                    className='button px-4 py-2 mt-2 mb-4 bg-emerald-900 text-emerald-200' 
                    onClick={() => handleDone(index_of_Todo)}> 
                      {event.Completed ? "Completed !" : "Mark as Done"} 
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
