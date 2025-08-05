import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Story from './Center/story.jsx'
import Profile from './Profile/profile.jsx'


const route = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/stories/:id/:len",
    element : <Story />
  },
  {
    path : "/profile",
    element : <Profile />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)

