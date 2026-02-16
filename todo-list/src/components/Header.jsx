import './Header.css'
import { TodosContext } from '../contexts/TodosContext'
import { useContext } from 'react'

function Header() {

    const { todos } = useContext(TodosContext)

    return (
        <>
            <nav>
                <h1>Todo App</h1>
                <div className='left-side'>
                    <p>{`Total Todos: ${todos.length}`} </p>
                    <button>Dark Mode</button>
                </div>
            </nav>
        </>
    )
}

export default Header