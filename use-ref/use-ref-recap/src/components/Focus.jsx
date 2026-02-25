import { useRef } from "react"

function Focus() {
    const focusRef = useRef(null)
    const counterRef = useRef(0)
    const changeStyle = () => { 
        counterRef.current += 1
        console.log(counterRef.current)
        {focusRef.current.style.borderColor = 'red'}
    }
  return (
    <div>
        <input ref={focusRef}/>
        <button onClick={changeStyle} >click me</button>

    </div>
  )
}

export default Focus