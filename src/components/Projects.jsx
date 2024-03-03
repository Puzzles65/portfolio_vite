import ProjectsComponent from "./ProjectsComponent";
import styles from "../style";
import projectsItems from "./ProjectsItem";

const Projects = () => {
  return (
    <section
      id="home"
      className={`flex justify-left md:flex-row flex-col sm:flex-row ${styles.paddingY}`}
    >
      <div className="project-list">
        {projectsItems.map((item) => (
          <ProjectsComponent
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            link={item.link}
            githubLink={item.githubLink}
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;
