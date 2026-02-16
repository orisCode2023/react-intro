import { useEffect } from "react";

async function fetchData(){
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")  
      const data = await res.json();
      setData(data)
    } catch (error) {
        console.log(error)
    }
}


useEffect(() => {
    fetchData();  
}, [])