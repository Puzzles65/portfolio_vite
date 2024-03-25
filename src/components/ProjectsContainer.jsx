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
  icons,
}) {
  return (
    <section>
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
          <p className="text-gradient font-poppins font-semibold pb-5 sm:w-[460px]">
            {description}
          </p>
          <div className={`flex flex-row text-white text-5xl sm:mr-4`}>
          {icons.map((Icon, index) => (
            <Icon key={index} className="sm:mb-2 mr-2" />
          ))}
        </div>
        </div>
      </div>
      <div className="flex flex-row sm:ml-16">
        <a
          className={`flex flex-row py-4 px-6 justify-center bg-blue-gradient rounded-[10px] outline-none ${styles} z-10 mr-4 w-[420px] border border-transparent hover:border-black`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineWeb className="text-2xl" />
          <span className="mx-1 hidden sm:block font-poppins font-medium text-[18px]">
            View Project
          </span>
          <img className="max-w-full w-[25px]" src={arrow} alt="arrow" />
        </a>
        <a
          className={`flex flex-row justify-center py-4 px-6 bg-blue-gradient rounded-[10px] outline-none ${styles} w-[420px] border border-transparent hover:border-black`}
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
          <span className="mx-1 hidden sm:block font-poppins font-medium text-[18px]">
            Github
          </span>
          <img className="max-w-full w-[25px]" src={arrow} alt="arrow" />
          
        </a>
      </div>
    </section>
  );
}

export default ProjectsContainer;
