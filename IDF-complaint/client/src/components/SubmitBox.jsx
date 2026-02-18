import { useState } from "react";

function SubmitBox(props) {

    const [password, setPassword] = useState('')
    function handelChange(e) {
        e.preventDefault();
        const passwordSubmit = e.target.value
        setPassword(passwordSubmit)
    }

    return (
        <div className="submit-box">
            <h2>{props.title}</h2>
            <form action="" onChange={handelChange}>
                <label htmlFor="">{props.description}</label>
                <input type="text" placeholder="" />
                <button onClick={props.onclick} className={props.color} type="submit">{props.context}</button>
            </form>
        </div>
    )
}

export default SubmitBox