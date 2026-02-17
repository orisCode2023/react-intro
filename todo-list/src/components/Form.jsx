import { TodosContext } from "../contexts/TodosContext";
import Card from "./Card";
import { useContext } from "react";
import "./Form.css";


function Form() {
  const { mode, formRef, handelSubmit, reset, handleChange } =
    useContext(TodosContext);

  return (
    <div className={mode}>
      <div className="main">
        <h3>Add a New Todo</h3>

        <form ref={formRef} action="" onChange={handleChange}>
          <label htmlFor="title" id="title">
            Title
          </label>
          <input
            className="context"
            type="text"
            name="title"
            id="title"
            placeholder="What do you need to do?"
          />

          <label htmlFor="level" id="level">
            Priority
          </label>
          <select
            className="context"
            id="level"
            name="priority"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button className="context" onClick={handelSubmit} type="submit">
            Save Todo
          </button>
          <button className="context" onClick={reset}>
            clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
