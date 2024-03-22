import { FaGithub, FaLinkedin, MdOutlineMailOutline } from "./SkillsIcons";
import ContactLinks from "./ContactLinks";


function Sidebar() {
  return (
    <aside className="fixed top-1/2 right-0 z-15 mr-2">
      <nav>
        <ul className="flex flex-col items-end">
          <li className="mb-2">
            <a
              href={ContactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white sm:text-5xl"
            >
              <FaGithub />
            </a>
          </li>
          <li className="mb-2">
            <a
              href={ContactLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white sm:text-5xl"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href={ContactLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white sm:text-5xl"
            >
              <MdOutlineMailOutline />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
