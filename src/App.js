import React , { useState }from "react";

import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/HomePage";
import  Sidebar  from "./Components/Sidebar"


function App() {
    return (
        <div>    
        <Sidebar />
        <Home/>
        </div>
        
        
    );
}
 
export default App;