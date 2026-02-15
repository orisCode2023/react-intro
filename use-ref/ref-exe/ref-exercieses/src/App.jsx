import { useState } from 'react'
import './App.css'
import InputBtnState from './components/InputBtnState'
import InputBtnRef from './components/InputBtnRef'
import TextBoxChild from './components/TextBoxChild'

function App() {
  const [btnValue, setBtnValue] = useState(null)

  function show(){
    alert({btnValue})
  }

  return (
    <>
    <button onClick={show}>show value</button>
    <InputBtnState/>
    <InputBtnRef/>
    <TextBoxChild />
    </>
  )
}

export default App
