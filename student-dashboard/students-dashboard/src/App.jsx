import { useState } from 'react'
import Header from './components/Header'
import DataCard from './components/Data-Card'
import StateCard from './components/State-Card'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     {/* <DataCard/>
     <StateCard/>
     <Footer/> */}
    </>
  )
}

export default App
