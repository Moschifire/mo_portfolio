import React from 'react';
import ProjectList from './ProjectList';
import "./Projects.css";

const Projects = ({projects}) => {
  return (
    <div className='project-container' id='projects'>
      <h1>Browse through some of my projects</h1>
      <div className='projects-wrap'>
          {projects.map((project) => (
              <ProjectList project={project} key={project.id} />
          ))}
      </div>
    </div>
  )
}

export default Projects