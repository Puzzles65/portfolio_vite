import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faPython, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { DiPostgresql } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaChrome } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiJira } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";






const Skills = () => {
  return (
    <section id="skills">
      <div className="text-white">
      <h1 className="text-gradient text-2xl font-bold">SKILLS</h1>
      <h2>Programming Languages and Databases</h2>
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faPython} />
      <FontAwesomeIcon icon={faHtml5} />
     <DiPostgresql />
      <IoLogoCss3 />
      <SiMongodb />
      <IoLogoSass />
      </div>
      <div className="text-white">
      <h2>Frameworks</h2>
      <DiDjango />
      <SiExpress />
      <SiMongoose />
      <FaBootstrap />
       </div>
       <div className="text-white">
       <h2>Tools</h2>
       <FaChrome />
       <DiVisualstudio />
       <SiJira />
       <SiPostman />
       <FaGithub />
       <SiTailwindcss />

       </div>

    </section>
  );
};

export default Skills;
