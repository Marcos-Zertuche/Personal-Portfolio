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
          location={experience.location}
          bullet_points={experience.bullet_points}
          duration={experience.duration}
          focus={experience.focus}
          technologies={experience.technologies}
        />
      ))}
    </div>
  );
};

export default ExperiencesList;
