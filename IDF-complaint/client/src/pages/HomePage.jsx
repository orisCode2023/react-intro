// import Box from "../components/Box"
import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"
// import SubmitBox from "../components/SubmitBox"
// import Box from "../components/Box"
import { useState } from "react"

function HomePage() {
  const [getPassword, setGetPassword] = useState('')

  function handelChange(e) {
    e.preventDefault();
    setGetPassword(e.target.value)
  }


  const navigate = useNavigate()

  function moveToSendComplaint() {
    navigate('/complaint')
  }

  async function fetchData(token) {
    const res = await fetch('http://localhost:3001/getComplaints', {
      method: 'get',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }


  async function moveToLogin() {
    const res = await fetch('http://localhost:3001/password', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: getPassword })
    })
    const data = await res.json()
    if (data.token) {
      localStorage.setItem('token', data.token)
      await fetchData(data.token)
      navigate('/admin/complaints')
    }
  }



  return (
    <>
      <Navbar title={"Home Page"} />
      <div className="complaint-box-anonymuos">
        <h2>Anonymos Box</h2>
        <p>Send complaint in anonymos and safe way</p>
        <button onClick={moveToSendComplaint}>Send Complaint</button>
      </div>
      <div className="admin-password">
        <h2>Commanders Only</h2>
        <label htmlFor="">Password: </label>
        <input type="text" onChange={handelChange} />
        <button onClick={moveToLogin}>Commander Entrence</button>
      </div>



      {/* <Box onclick={moveToComplaint} color="green" title={"Anonymos Box"} description={"Send complaint in anonymos and safe way"} context={"Send Complaint"}/>
    <SubmitBox func={setPass} onclick={moveToSubmit} color="blue" title={"Commanders" } description={"Password: "} context={"Admin Entered"}/> */}
    </>
  )
}

export default HomePage