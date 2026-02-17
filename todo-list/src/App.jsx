import Form from './components/Form'
import Header from './components/Header'
import TodosProvider from './contexts/TodosContext'
import './App.css'


function App() {
  return (

    <TodosProvider>
        <Header />
        <Form />
     
    </TodosProvider>

  )
}

export default App
