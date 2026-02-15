import './Header.css'
import { TodosContext } from '../App'
import { useContext } from 'react'

function Header() {

    const [todosList] = useContext(TodosContext)

    return (
        <>
            <nav>
                <h1>Todo App</h1>
                <div className='left-side'>
                    <p>{`Total Todos: ${todosList.length}`} </p>
                    <button>Dark Mode</button>
                </div>
            </nav>
        </>
    )
}

export default Header