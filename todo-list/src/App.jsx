import Form from './components/Form'
import Header from './components/Header'
import TodosProvider from './contexts/TodosContext'
import TodoList from './components/TodoList'
import { Routes, Route } from 'react-router'
import './App.css'


function App() {
  return (

    <TodosProvider>
      <Header />
      <Routes>
      <Route index element={<Form />} />
      <Route index element={<TodoList />} />
      </Routes>
    </TodosProvider>

  )
}

export default App
