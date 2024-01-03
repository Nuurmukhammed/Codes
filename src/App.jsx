import React from 'react'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App