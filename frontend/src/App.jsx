import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ChatSection from './components/ChatSection/ChatSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>Mind Connect App</h1> */}
     <Navbar />
     <ChatSection />
    </>
  )
}

export default App
