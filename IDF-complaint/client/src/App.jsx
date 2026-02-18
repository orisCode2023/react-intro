import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage' 
import {Route, Routes} from 'react-router'
import ComplaintForm from './components/ComplaintForm'
import AdminLoginPage from './pages/AdminLoginPage'
import ComplaintTable from './components/ComplaintTable'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/complaint' element={<ComplaintForm/>}/>
      <Route path='/admin'>
        <Route path='complaints' element={<ComplaintTable />} />
        <Route path='login' element={<AdminLoginPage />} />

      </Route>
      
      
    </Routes>
    </>
  )
}

export default App
