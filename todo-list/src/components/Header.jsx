import { TodosContext } from '../contexts/TodosContext'
import './Header.css'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router'


function Header() {
    const { todos, mode, bgMode, postsMode, posts } = useContext(TodosContext)

    const context = posts === 'Posts' ? 'Todos' : 'Posts'

    return (
        <nav>
            <h1>Todo App</h1>
            <div className='left-side'>
                <p>{`Total Todos: ${todos.length}`} </p>
                <NavLink onClick={postsMode} to={`/${posts}`}>{context}</NavLink>
                <button className={mode} onClick={bgMode} >{mode === 'Dark' ? 'Light': 'Dark'} Mode</button>
            </div>
        </nav>
    )
}

export default Header