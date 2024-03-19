import React from "react";
import ProjectsList from "../Components/Cards/Project/ProjectList";
import { projectsData , experienceData , aboutMeData} from "../Information/HomePageInfo"
import ExperiencesList from "../Components/Cards/Experience/ExperienceList";


const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <h2> About -> Intro Summary, Skills/languages, Statement of interest for roles</h2>
            
            <div>
            <ExperiencesList experiencesData={experienceData}/>
            <ProjectsList projectsData={projectsData}/>
            </div>

            <h2> Education info</h2>
            <h2> Contact Info</h2>
            <h2> Add login to make updates with FORM for data for projects</h2>

        </div>
    );
};
 
export default Home;