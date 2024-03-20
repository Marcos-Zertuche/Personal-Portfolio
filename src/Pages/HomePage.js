import React from "react";
import { projectsData , experienceData , aboutMeData} from "../Information/HomePageInfo"
import AboutMeCard from "../Components/Cards/AboutMeCard"
import ExperiencesList from "../Components/Cards/Experience/ExperienceList";
import ProjectsList from "../Components/Cards/Project/ProjectList";
import "./HomePage.css"
import EducationCard from "../Components/Cards/EducationCard";



const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <div>
            <section id="about">
            <AboutMeCard information={aboutMeData}/>
            </section>
            <section id="experiences">
            <ExperiencesList experiencesData={experienceData}/>
            </section>
            <section id="projects">
            <ProjectsList projectsData={projectsData}/>
            </section>
            <section id="education">
            <EducationCard/>
            </section>
            </div>

            <h2> Education info</h2>
            <h2> Contact Info</h2>
            <h2> Add login to make updates with FORM for data for projects</h2>

        </div>
    );
};
 
export default Home;