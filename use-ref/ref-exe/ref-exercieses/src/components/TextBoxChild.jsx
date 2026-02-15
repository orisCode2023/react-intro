import { useRef } from "react"


function TextBoxChild() {
    const childRef = useRef(null)

  return (
    <div >
    <input ref={childRef} type="text" placeholder="child ref"/>
    </div>
  )
}

export default TextBoxChild