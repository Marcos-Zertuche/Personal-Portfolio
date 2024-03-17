// ExperiencesList.js
import React from 'react';
import ExperienceCard from './ExperienceCard';

const ExperiencesList = ({ experiencesData }) => {
  return (
    <div className="experiences-list">
      <h2>Experiences</h2>
      {experiencesData.map(experience => (
        <ExperienceCard
          key={experience.id}
          company={experience.company}
          position={experience.position}
          duration={experience.duration}
        />
      ))}
    </div>
  );
};

export default ExperiencesList;
