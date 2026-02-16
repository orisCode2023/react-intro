import { createContext, useRef, useState } from "react"
import { utilsForm } from "../utils/utilsForm"

export const TodosContext = createContext()

function TodosProvider({ children }) {
    const dataUtilsForm = utilsForm()
    const [mode, setMode] = useState('Dark')

    function bgMode() {
        if (mode === 'Dark') {
            setMode('Light')
        } else {
            setMode('Dark')
        }
    }

    const value = {
        bgMode,
        mode, ...dataUtilsForm
    }

    return <TodosContext.Provider value={value}>
        {children}
    </TodosContext.Provider>
}

export default TodosProvider;