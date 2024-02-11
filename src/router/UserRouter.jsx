import { Route, Routes } from "react-router-dom";
import Registration from "../pages/user/register/Registration.jsx";

function UserRouter () {

    return (
        <Routes>
            <Route path="/register" element={<Registration/>}/>,
        </Routes>
    )

}

export default UserRouter;