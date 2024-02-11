import { Route, Routes } from "react-router-dom";
// import Navbar from "../basics/navbar/Navbar.jsx";
// import Footer from "../basics/footer/Footer.jsx";
import MovieSearch from "../movieSearch/MovieSearch.jsx";

function ComponentsRouter () {

    return (
        <Routes>
            {/*<Route path="/navbar" element={<Navbar/>}/>,*/}
            {/*<Route path="/footer" element={<Footer/>}/>);*/}
            <Route path="/search" element={<MovieSearch/>}/>);
        </Routes>
    )

}

export default ComponentsRouter;