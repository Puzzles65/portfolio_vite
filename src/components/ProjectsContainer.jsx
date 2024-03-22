import styles from "../style";
import { arrow } from "../assets";
import { FaGithub, MdOutlineWeb } from "./SkillsIcons";
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
    <section >
      <div
        className="flex justify-left md:flex-row flex-col sm:flex-row sm:ml-16 sm:mr-16"
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
            className={`flex flex-row py-4 px-6 text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} z-10 mb-2`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineWeb className="text-2xl" />
            <span className="mx-1 font-poppins font-medium text-[18px]">
              View Project
            </span>
            <img className="max-w-full w-[25px]" src={arrow} alt="arrow" />
          </a>
          <a
            className={`flex flex-row py-4 px-6 text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
            <span className="mx-1 font-poppins font-medium text-[18px]">
              Github
            </span>
            <img className="max-w-full w-[25px]" src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsContainer;
