import React from "react";
import styles from "../style";

// destructuring prop

function ProjectsContainer({ id, title, image, description, link, githubLink }) {
  return (
    <section
      id="projects"
      className={`flex justify-left md:flex-col flex-row sm:flex-row ${styles.paddingY}`}
    >
        <h1 className="text-white font-poppins font-semibold text-[32px]">{title}</h1>
      <div className="flex flex-row" key={id}>
        <img className="w-[380px] max-w-full" src={image} alt={title} />
        <p className="text-gradient font-poppins font-semibold">{description}</p>
        <a className="text-white font-poppins font-semibold" href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <a className="text-white font-poppins font-semibold" href={githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </section>
  );
}

export default ProjectsContainer;
