import { useState } from 'react'
import './App.css'
import Operator from './components/Operator'
import Counter from './components/Counter'
import Fetch from './components/Fetch'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Operator/>
      <Counter/>
      <Fetch/>
    </>
  )
}

export default App
