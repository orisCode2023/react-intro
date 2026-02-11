import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const countUnderZero = "red"
  const countGreatZero = "green"
  let styleCounter = "counter "
  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }
  function reset(){
    setCount(0)
  }
   if (count<0) {
    styleCounter += countUnderZero
  } else if (count > 0){
    styleCounter += countGreatZero
  }

  return (
    <>
    <div>
      <p className={styleCounter}>{count}</p>
    </div>
      <Button className={"increment"} onClick={increment}>Increment</Button>
      <Button className={"decrement"}  onClick={decrement}>Decrement</Button>
      <Button className={"reset"}  onClick={reset}>Reset</Button>
    </>
  )
}

export default App
