import { useContext, useRef } from "react"
import { TodosContext } from "../App"


function Form() {
    const [_, setTodos] = useContext(TodosContext);
    const clearRef = useRef(null)

    function addTodo(todo) {
        // todos.push(todo)
        setTodos(prev => [...prev, todo])
    }

    function reset() {
        clearRef.current.value = ""
    }

    return (
        <>
            <h3>Add a New Todo</h3>

            <form action="">
                <label htmlFor="title" id="title">Title</label>
                <input ref={clearRef} type="text" id="title" placeholder="What do you need to do?" />

                <label htmlFor="level" id="level" >Priority</label>
                <select id="level">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button onClick={() => addTodo(clearRef.current.value)}>Save Todo</button>
                <button onClick={reset}>clear</button>
            </form>
        </>
    )
}

export default Form