import { useNavigate } from "react-router"
import SubmitBox from "../components/SubmitBox"
import Navbar from "../components/Navbar";

function AdminLoginPage() {
     
    const navigation = useNavigate();

    function moveToAllComplaints(){
        navigation('/admin/complaints')
    };

    return (
        <>
            <Navbar title={"Admin Login Page"} />
            <SubmitBox 
            onclick={moveToAllComplaints}
             color="blue"
              title={"Commanders Only"}
               description={"Password: "}
                context={"Connect"} />
        </>
    )
};

export default AdminLoginPage;