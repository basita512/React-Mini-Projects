import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(

  //To link the Redux code with React we need to wrap the React code(App) inside the Provider tag
  //By this all the components under the APP will be able to acess the REdux functionalities
  <BrowserRouter>
    <Provider store={store} >
      <App/>
      <Toaster/>
    </Provider>
  </BrowserRouter>
  
)
