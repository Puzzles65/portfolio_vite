import { FaGithub, FaLinkedin } from "./SkillsIcons";
import ContactLinks from "./ContactLinks";


function Sidebar() {
  return (
    <aside className="sticky top-20 right-0 z-15">
      <nav className="">
        <ul className="flex flex-col items-end">
          <li className="mb-2">
            <a
              href={ContactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href={ContactLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
