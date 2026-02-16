import { useEffect, useState } from "react";

function Counter() {

    useEffect(() => {
        console.log(count)
    }, [])

    const [count, setCount] = useState(0)

    function add(){
        setCount(count + 1)
    }
    function reset(){
        setCount(0)
    }
    function sub(){
        setCount(count - 1)
    }

  return (
    <>
    <p>count {count}</p>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter