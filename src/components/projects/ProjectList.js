import React from 'react';
import "./ProjectList.css";

const ProjectList = ({
    project: {
        title,
        description,
        url
    }
}) => {
  return (
    <div className='project-wrap'>
        <h3>{title}</h3>
        <p className='project-desc'>{description}</p>
        <footer>
            <button className='link'><a href={url} target="_blank">Check it out</a></button>
        </footer>
    </div>
  )
}

export default ProjectList