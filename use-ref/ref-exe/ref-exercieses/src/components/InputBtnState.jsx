import { useState } from "react"

function InputBtnState() {
  const [value, setValue] = useState("boy")
  
  function resetBox(){
    setValue("")
  }

  return (
    <div>
        <input type="text" value={value}/>
        <button onClick={resetBox}>click to state</button>
    </div>
  )
}

export default InputBtnState