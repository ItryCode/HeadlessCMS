import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { projects, loading } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">{loading && <h2>Loading..</h2>}</section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          return (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={project.img} alt={project.title} className="img" />
              <h5>{project.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
