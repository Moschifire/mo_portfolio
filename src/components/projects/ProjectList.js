import React from 'react';
import "./ProjectList.css";

const ProjectList = ({
    project: {
        title,
        img,
        description,
        web,
        code
    }
}) => {
  return (
    <div className='project-wrap'>
        <h3>{title}</h3>
        <a href={web} target="_blank">
          <img src={img} alt="" className='project-image' />
        </a>
        <p className='project-desc'>{description}</p>
        <footer className='footer'>
            <button className='link'><a href={web} target="_blank">Web</a></button>
            <button className='link'><a href={code} target="_blank">Code</a></button>
        </footer>
    </div>
  )
}

export default ProjectList