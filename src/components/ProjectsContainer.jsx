import React from "react";
import styles from "../style";

// destructuring prop

function ProjectsContainer({
  id,
  title,
  image,
  description,
  link,
  githubLink,
  icons
}) {
  return (
    <section id="projects">
      
      <div
        className="flex justify-left md:flex-row flex-col sm:flex-row"
        key={id}
      >
        <img
          className={`w-[380px] max-w-full ${styles.paddingY}`}
          src={image}
          alt={title}
        />
        <div
          className={`flex flex-col ${styles.paddingY} ${styles.paddingX} pl-0 sm:pl-5`}
        >
          <h1 className="text-white font-poppins font-semibold text-[32px]">
            {title}
          </h1>
          <p className="text-gradient font-poppins font-semibold pb-5">
            {description}
          </p>
          <a
            className="text-white font-poppins font-semibold"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          <a
            className="text-white font-poppins font-semibold"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsContainer;
