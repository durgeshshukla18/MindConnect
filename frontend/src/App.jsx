import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ChatSection from './components/ChatSection/ChatSection'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>Mind Connect App</h1> */}
     <Navbar />
     <Sidebar />
     <ChatSection />
    </>
  )
}

export default App
