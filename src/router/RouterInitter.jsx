import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsRouter from "./ComponentsRouter.jsx";
import UserRouter from "./UserRouter.jsx";

// import Navbar from "../basics/navbar/Navbar.jsx";

function RouterInitter () {
	return (<BrowserRouter>
		  <Routes>
			  <Route path="/dev/*" element={<ComponentsRouter/>}/>
			  <Route path="/user/*" element={<UserRouter/>}/>
		  </Routes>
	  </BrowserRouter>);
}

export default RouterInitter;