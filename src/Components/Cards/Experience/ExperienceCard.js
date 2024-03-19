// ExperienceCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const ExperienceCard = ({ company, position, location , bullet_points,  duration , focus, technologies }) => {
  return (
    <Card className='experience-card'>
      <div>
      <h2>{ company } </h2>
      <h3> {position} </h3>
      <h4> {focus}</h4>
      <h4> {location} </h4>
            <ul>
              {bullet_points.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
              </ul>
      <h3>Technologies Used:</h3>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
      <h4> { duration } </h4>
    </div>

    </Card>
    
  );
};

export default ExperienceCard;
