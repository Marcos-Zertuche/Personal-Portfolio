import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import '../CardStyles.css'

const ProjectCard = ({ title, date, topic, status, description, technologies , link }) => {
  return (
    <div>
      <Card className="project-card">
        <div class="card" >
          <div class="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-info"> Date: {date}</p>
            <p className="card-info"> Topic: {topic}</p>
            <p className="card-info"> Status: {status}</p>
            <p className="card-info"> Description: {description}</p>
            <div className="technologies">
              <h3>Technologies Used:</h3>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          </div>
      </Card>

    </div>
 


    // </div>
  );
};

export default ProjectCard;

