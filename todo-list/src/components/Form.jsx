import { useContext } from "react"
import './Form.css'
import { TodosContext } from "../contexts/TodosContext";

function Form() {
    const {mode ,formRef,oneTodo,handelSubmit,reset,handleChange} = useContext(TodosContext);

    return (
        <div className={mode}>
            <div className="main">
                <h3>Add a New Todo</h3>

                <form ref={formRef} action="" onChange={handleChange} >
                    <label htmlFor="title" id="title">Title</label>
                    <input className="context" defaultValue={oneTodo.title} type="text" name="title" id="title" placeholder="What do you need to do?" />

                    <label htmlFor="level" id="level" >Priority</label>
                    <select className="context" defaultValue={oneTodo.priority} id="level" name="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <button className="context" onClick={handelSubmit} type="submit">Save Todo</button>
                    <button className="context" onClick={reset}>clear</button>
                </form>
            </div>
        </div>
    )
}

export default Form