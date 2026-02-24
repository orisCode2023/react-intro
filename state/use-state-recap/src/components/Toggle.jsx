import { useState } from "react"

function Toggle() {
    const [mode, setMode] = useState(false)

    const changeMode = () => setMode(!mode)

    return (
        <button className={mode ? 'Light' : 'Dark'} onClick={changeMode} >{mode ? 'Light' : 'Dark'} Mode</button>
    )
}

export default Toggle