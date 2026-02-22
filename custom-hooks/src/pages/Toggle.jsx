import { manageToggle } from "../hooks/toggle"

function Toggle() {
    const { value, toggle, setFalse, setTrue } = manageToggle();
    return (
        <>
        <h1>{value ? "true" : "false"}</h1>
            <button onClick={toggle}>toggle</button>
            <button onClick={setTrue}>setTrue</button>
            <button onClick={setFalse}>setFalse</button>
        </>
    )
}

export default Toggle