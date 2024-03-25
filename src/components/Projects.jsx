import ProjectsContainer from "./ProjectsContainer";
import projectsItems from "./ProjectsItem";

const Projects = () => {
  return (
    <div className="project-list" id="projects">
      <h1 className="text-gradient text-center text-2xl font-bold mt-16 mb-8 z-10">
        PROJECTS
      </h1>

      {projectsItems.map((item) => (
        <ProjectsContainer
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          link={item.link}
          githubLink={item.githubLink}
          icons={item.icons}
        />
      ))}
    </div>
  );
};

export default Projects;
