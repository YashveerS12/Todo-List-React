import { useState } from 'react'
import './App.css'
import TodoList from './Todo'
import Navbar from './Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <TodoList/>
    </div>
  )
}

export default App
