// import Box from "../components/Box"
import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"
import SubmitBox from "../components/SubmitBox"
import Box from "../components/Box"
import { useState } from "react"

function HomePage() {
  

  const navigate = useNavigate()

  function moveToComplaint() {
    navigate('/complaint')
  }
  function moveToSubmit() {
    navigate('/admin/login')
  }
    


  return (
    <>
    <Navbar title={"Home Page"}/>
    <Box onclick={moveToComplaint} color="green" title={"Anonymos Box"} description={"Send complaint in anonymos and safe way"} context={"Send Complaint"}/>
    <SubmitBox onclick={moveToSubmit} color="blue" title={"Commanders" } description={"Password: "} context={"Admin Entered"}/>
    </>
  )
}

export default HomePage