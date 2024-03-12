import React from "react";
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/HomePage";
import Mlprojects from "./Pages/ml-projects/ml-projects";
import JsonSearch from "./Pages/JsonSearch";



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/ML-Projects" element={<Mlprojects />} />
                <Route path="/JSON-Search-Engine" element={<JsonSearch />} />
                
            </Routes>
        </Router>
    );
}
 
export default App;