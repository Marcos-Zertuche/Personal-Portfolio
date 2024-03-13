// ProjectCard.js
import React from 'react';

class ProjectCard  {
  render() {
    const { title, description, technologies } = this.props;
    return (
      <div className="card project-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
