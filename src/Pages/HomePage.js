import React from "react";
import ProjectsList from "../Components/Cards/ProjectList";
import { projectsData } from "../Information/HomePageInfo"


const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <h2> About -> Intro Summary, Skills/languages, Statement of interest for roles</h2>
            <h2> Experience -> Cards with resume things (no link)</h2>
            <div>
            <h2> Projects </h2>
            <ProjectsList projectsData={projectsData}/>
            </div>
            <h2> Education info</h2>
            <h2> Contact Info</h2>
            <h2> Add login to make updates with FORM for data for projects</h2>

        </div>
    );
};
 
export default Home;