import { useContext, useRef, useState } from "react"
import { TodosContext } from '../contexts/TodosContext'


function Form() {
    const { todos, setTodos } = useContext(TodosContext);
    const [oneTodo, setOneTodo] = useState({
        title: "",
        priority: 'low'
    })

    const formRef = useRef(null)

    function handelSubmit(e) {
        e.preventDefault();
        addTodo();
        reset(e)

    }

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setOneTodo({ ...oneTodo, [name]: value });
    }

    function addTodo() {
        setTodos([...todos, oneTodo]);
    }

    function reset(e) {
        e.preventDefault();
        setOneTodo({ title: "", priority: "low" });
        console.log(formRef.current.children)
        Array.from(formRef.current.children).forEach(child => child.value = '')
    }

    return (
        <>
            <h3>Add a New Todo</h3>

            <form ref={formRef} action="" onChange={handleChange} >
                <label htmlFor="title" id="title">Title</label>
                <input defaultValue={oneTodo.title} type="text" name="title" id="title" placeholder="What do you need to do?" />

                <label htmlFor="level" id="level" >Priority</label>
                <select defaultValue={oneTodo.priority} id="level" name="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button onClick={handelSubmit} type="submit">Save Todo</button>
                <button onClick={reset}>clear</button>
            </form>
        </>
    )
}

export default Form