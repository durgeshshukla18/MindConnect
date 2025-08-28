import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Mind Connect App</h1>
     <Navbar />
    </>
  )
}

export default App
