import React from 'react'
import RouteConfig from './routes/RouteConfig'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter(RouteConfig)
  return (
    <RouterProvider router = {router} />
  )
}

export default App