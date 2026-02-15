import './Form.css'
import { useState } from 'react'

function Form() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
 
    function handleChange(e) {
        const { value, name } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }
    
    function handleSumbit(e){
        e.preventDefault()
        console.log(form)
    }

    return (
        <form className='form' onSubmit={handleSumbit}>
            <label id='name'>Name: </label>
            <input type="text" id="name" name="name" placeholder='Enter your name' onChange={handleChange} />

            <label id='email'>Email: </label>
            <input type="email" name="email" id="email" placeholder='Enter your email' onChange={handleChange} />

            <label id='password'>Password:</label>
            <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} />

            <button className='submit' type="submit">Submit</button>
        </form>
    )
}

export default Form