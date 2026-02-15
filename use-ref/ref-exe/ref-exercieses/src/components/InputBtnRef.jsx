import { useRef } from "react"


function InputBtnRef() {
    const boxRef = useRef(null)

    function reset(){
        console.log(boxRef.current.value)
        boxRef.current.value = ""
    }
  return (
    <div >
        <input ref={boxRef} type="text" />
        <button onClick={reset}>click to ref</button>
    </div>
  )
}

export default InputBtnRef