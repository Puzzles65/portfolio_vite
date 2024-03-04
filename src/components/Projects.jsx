import ProjectsContainer from "./ProjectsContainer";
import projectsItems from "./ProjectsItem";

const Projects = () => {
  return (
    <div className="project-list">
      {projectsItems.map((item) => (
        <ProjectsContainer
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          link={item.link}
          githubLink={item.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;
