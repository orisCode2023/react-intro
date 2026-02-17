import './App.css'
import { Routes, Route } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Nested from './components/Nested'
// import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard'>
          <Route path='nested' element={<Nested />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
