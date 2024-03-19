import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './CardStyles.css'

function Intro() {
    return (
      <div className="intro">
        <p>
        I am a highly motivated Computer Science and Data Science student at Southern Methodist University (SMU), specializing in AI 
        and Machine Learning, set to graduate in May 2025. With recognition as a member of SMU's Hyer Society and a SMU Distinguised 
        Scholar, I bring a strong academic foundation. As a BEL Intern at Bain & Company, I applied Data Science modeling for market 
        analysis, presenting impactful findings to the case team and influencing presentations for a global retailer's CEO.
  
        My technical proficiency spans C++, Java, Python, and various web development tools, showcased in Machine Learning and 
        Software Engineering projects. As a Teaching Assistant and contributor to engineering projects, I've honed my collaborative 
        and analytical skills. Actively seeking roles in technology, I bring a passion for AI/ML, a robust skill set, and a 
        commitment to excellence.
        </p>
      </div>
    );
  }

function roleInterest() {
    return(
    <div className="roleInterest">
        <p>
            Having experience in Data Analytics, Machine Learning, and Software Development, I believe I can be a contributor in any 
            technology-driven environment. I am most interested in Machine Learning and Data Analytics roles, where I can leverage my
            technical and interpersonal skills to use data to create meaningful insights and presenting this analysis to key stakeholders.
        </p>
    </div>
    )
  }
//programminglanguages,ml_libraries,swe_libraries,dataviz_libraries
const AboutMeCard = ({ information }) => {
  return (
    <div>
      <Card className="about-card"> 
        <h2>About Me:</h2>
        <Intro/>
        <roleInterest/>
        <div>
      <h2>Programming Languages:</h2>
      <ul>
        {information[0].programminglanguages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <h2>Machine Learning Libraries:</h2>
      <ul>
        {information[0].ml_libraries.map((library, index) => (
          <li key={index}>{library}</li>
        ))}
      </ul>
      <h2>Software Engineering Libraries:</h2>
      <ul>
        {information[0].swe_libraries.map((library, index) => (
          <li key={index}>{library}</li>
        ))}
      </ul>
      <h2>Data Visualization Libraries:</h2>
      <ul>
        {information[0].dataviz_libraries.map((library, index) => (
          <li key={index}>{library}</li>
        ))}
      </ul>
    </div>
      </Card>
    </div>
  );
        
};

export default AboutMeCard;

