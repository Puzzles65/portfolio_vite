import React from "react";
import styles from "../style";
import { github, internet, arrow } from "../assets";
// destructuring prop

function ProjectsContainer({
  id,
  title,
  image,
  description,
  link,
  githubLink,
}) {
  return (
    <section id="projects">
      <div
        className="flex justify-left md:flex-row flex-col sm:flex-row"
        key={id}
      >
        <img
          className={`w-[380px] max-w-full sm:h-[500px] max-h-full ${styles.paddingY}`}
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
            className="flex flex-row text-white w-[25px] h-[25px] my-5"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-w-full w-[25px]"
              src={internet}
              alt="internet"
            />
            <span className="mx-1">ViewProject</span>
            <img className="max-w-full w-[25px]"  src={arrow} alt="arrow" />
          </a>
          <a
            className="flex flex-row text-white w-[50px] h-[25px] my-5"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="max-w-full w-[25px]" src={github} alt="github" />
            <span className="mx-1">Github</span>
            <img className="max-w-full w-[25px]" src={arrow} alt="arrow" />

          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsContainer;
