import React from "react";

function ProjectsComponent({ id, title, image, description, link, githubLink }) {
  return (
    <div>
      <div className="project-item" key={id}>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectsComponent;
