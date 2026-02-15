import { useState, createContext } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import './App.css'

export const TodosContext = createContext()

function App() {
  const todos = useState([])

  return (
    <>
      <TodosContext.Provider value={todos}>
        <Header />
        <Form />
      </TodosContext.Provider>
    </>
  )
}

export default App
