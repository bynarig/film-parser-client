import { Route, Routes } from "react-router-dom";
import Navbar from "../basics/navbar/Navbar.jsx";
import Footer from "../basics/footer/Footer.jsx";

function ComponentsRouter () {

    return (
        <Routes>
            <Route path="/navbar" element={<Navbar/>}/>,
            <Route path="/footer" element={<Footer/>}/>);
        </Routes>
    )

}

export default ComponentsRouter;