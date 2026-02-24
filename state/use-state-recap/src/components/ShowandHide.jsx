import { useState } from "react"

function ShowandHide() {
    const [isViseble, setIsViseble] = useState(false)

    const changeStatus = () => setIsViseble((prev) => !isViseble)
  return (
    <div>
        <button onClick={changeStatus}>{isViseble ? 'Click' : 'Fuj off '}</button>
    </div>
  )
}

export default ShowandHide