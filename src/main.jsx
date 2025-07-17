import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Story from './Center/story.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/stories/:id",
    element : <Story />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

