import { useEffect } from "react";
import { useState } from "react"

function Fetch() {
    const [data, setData] = useState("")

    useEffect(() => {
        console.log(data)
    },[data])


    async function fetchData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const load = await res.json();
            setData(load)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <button onClick={fetchData} >Fetch</button>
        </>
    )
}

export default Fetch