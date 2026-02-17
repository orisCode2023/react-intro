import React from 'react'
import { useNavigate } from 'react-router'


function Nested() {
    const navigate = useNavigate()
    const [data, setData] = useState(null)

    async function handleClick() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
            
        } finally {
            navigate('/dashboard')
        }
    }
    return (
        <div>
            <h1>dude</h1>
            <button onClick={handleClick} >click</button>
        </div>

    )
}

export default Nested