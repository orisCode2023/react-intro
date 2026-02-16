import Form from './components/Form'
import Header from './components/Header'
import './App.css'
import TodosProvider from './contexts/TodosContext'


function App() {
  return (

    <TodosProvider>

        <Header />
        <Form />
     
    </TodosProvider>

  )
}

export default App
