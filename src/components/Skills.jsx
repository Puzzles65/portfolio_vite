import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faPython, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="text-gradient text-2xl font-bold">SKILLS</h1>
      
      <FontAwesomeIcon className="text-white" icon={faJs} />
      <FontAwesomeIcon className="text-white" icon={faPython} />
      <FontAwesomeIcon className="text-white" icon={faHtml5} />
      <FontAwesomeIcon className="text-white" icon={faDatabase} />
    </section>
  );
};

export default Skills;
