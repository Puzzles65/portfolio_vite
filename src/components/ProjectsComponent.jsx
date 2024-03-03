import React from 'react'
import projectsItems from './ProjectsItem'

function ProjectsComponent() {
    return (
        <div>
        {projectsItems.map(item => (
            <div className="project-item" key={item.title}>
                <img src={item.image} alt={item.title} />
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        ))}
    </div>
    )
}

export default ProjectsComponent
