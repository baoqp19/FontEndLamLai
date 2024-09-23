import { useState } from 'react'
import './styles/app.module.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Helllo</h1>
  )
}

export default App
