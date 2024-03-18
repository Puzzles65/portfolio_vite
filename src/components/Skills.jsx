import React from "react";
import {
  FaPython,
  IoLogoJavascript,
  FaHtml5,
  DiPostgresql,
  IoLogoCss3,
  SiExpress,
  SiMongodb,
  IoLogoSass,
  DiDjango,
  SiJira,
  SiMongoose,
  FaBootstrap,
  FaChrome,
  DiVisualstudio,
  SiPostman,
  FaGithub,
  SiTailwindcss,
} from "./SkillsIcons";

const SkillItem = ({ Icon, text }) => (
  <div className="flex flex-row items-center">
    <Icon className="mr-2 mt-2 mb-2 text-5xl" />
    <p className="text-xl">{text}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col">
      <h1 className="text-gradient text-2xl font-bold">SKILLS</h1>

      <div className="sm:flex flex-row justify-evenly">
        <div className="text-white text-5xl">
          <h2 className="text-2xl text-gradient">Programming Languages &</h2>
          <h2 className="text-2xl text-gradient text-center">Databases</h2>
          <SkillItem Icon={FaPython} text="Python" />
          <SkillItem Icon={IoLogoJavascript} text="JavaScript" />
          <SkillItem Icon={FaHtml5} text="HTML5" />
          <SkillItem Icon={DiPostgresql} text="PostgreSQL" />
          <SkillItem Icon={IoLogoCss3} text="CSS3" />
          <SkillItem Icon={SiMongodb} text="MongoDB" />
          <SkillItem Icon={IoLogoSass} text="Sass" />
        </div>
        <div className="text-white text-5xl">
          <h2 className="text-2xl text-gradient text-center">Frameworks</h2>
          <SkillItem Icon={DiDjango} text="Django" />
          <SkillItem Icon={SiExpress} text="Express.js" />
          <SkillItem Icon={SiMongoose} text="Mongoose" />
          <SkillItem Icon={FaBootstrap} text="Bootstrap" />
        </div>
        <div className="text-white text-5xl">
          <h2 className="text-2xl text-gradient text-center">Tools</h2>
          <SkillItem Icon={FaChrome} text="Chrome Dev Tools" />
          <SkillItem Icon={DiVisualstudio} text="Visual Studio Code" />
          <SkillItem Icon={SiJira} text="Jira" />
          <SkillItem Icon={SiPostman} text="Postman" />
          <SkillItem Icon={FaGithub} text="GitHub" />
          <SkillItem Icon={SiTailwindcss} text="Tailwind CSS" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
