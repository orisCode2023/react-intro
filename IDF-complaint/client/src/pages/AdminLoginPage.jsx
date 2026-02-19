// import { useNavigate } from "react-router"
// // import SubmitBox from "../components/SubmitBox"
// import Navbar from "../components/Navbar";
// import { useState } from "react";

function AdminLoginPage() {

//     const navigation = useNavigate();
//     const [getToken, setGetToken] = useState(null)

//     function handelChange(e) {
//         e.preventDefault();
//         setGetToken(e.target.value)
//     }


//     async function moveToAllComplaints() {
//         const res = await fetch('http://localhost:3001/getComplaints')
//         navigation('/admin/complaints')
//     };

    return (
        <>
            <Navbar title={"Admin Login Page"} />
            <div className="admin-password">
                <h2>Commanders Entrence</h2>
                <label htmlFor="">Password: </label>
                <input type="text" onChange={handelChange} />
                <button onClick={moveToAllComplaints}>Connect</button>
            </div>
        </>
    )
};

export default AdminLoginPage;