import { useState } from "react"


function ComplaintForm() {
    const [complaint, setcomplaint] = useState(second)
    return (
        <>
            <div>
                <form>
                    <select name="" id="" >
                        <option value="Food">Food</option>
                        <option value="Equitment">Equitment</option>
                        <option value="Orders">Orders</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="">Complaint Context</label>
                    <input placeholder="Write Your Complaint Here..." />
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default ComplaintForm