import { useInput } from "../hooks/useInput";

function Input() {
    const {value, reset, onChange} = useInput();
    return (
        <>
            <label htmlFor="">input box: </label>
            <input type="text" onChange={onChange} value={value}/>
            <button onClick={reset}>reset input</button>
        </>
    )
}

export default Input;