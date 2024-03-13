// ExperienceCard.js
import React from 'react';

const ExperienceCard = ({ company, position, duration }) => {
  return (
    <div className="card experience-card">
      <h2>{company}</h2>
      <p>{position}</p>
      <p>{duration}</p>
    </div>
  );
};

export default ExperienceCard;
