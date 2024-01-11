import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieSearch from "./movieSearch/MovieSearch.jsx";

function App () {
	return (
      <BrowserRouter>
		  <Routes>
			  <Route path="/search" element={<MovieSearch/>}>
				  {/*<Route index element={<Home />} />*/}
				  {/*<Route path="blogs" element={<Blogs />} />*/}
				  {/*<Route path="contact" element={<Contact />} />*/}
				  {/*<Route path="*" element={<NoPage />} />*/}
			  </Route>
		  </Routes>
	  </BrowserRouter>
    );
}

export default App;
