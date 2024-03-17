// ProjectsList.js
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ projectsData }) => {
  return (
    <div className="">
      {projectsData.map(project => (
        <ProjectCard
          title={project.title}
          date={project.date}
          topic={project.topic}
          status={project.status}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
