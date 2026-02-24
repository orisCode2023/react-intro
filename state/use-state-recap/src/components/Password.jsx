import { useState } from 'react'

function Password() {
    const [password, setPassword] = useState('')
    const [color, setColor] = useState('')

    const validContext = (e) => {
        setPassword(e.target.value)

        if (password.length === 0) {
            setColor("")
        }
        else if (password.length < 4) {
            setColor("weak")
        }
        else if(password.length < 8){
            setColor("medium")
        }
        else {
            setColor('strong')
        }
    }
    return (
        <div>
            <label>Password</label>
            <input type="text" placeholder='Enter your password' onChange={validContext} />
            <p className={color}>{color}</p>
        </div>
    )
}

export default Password