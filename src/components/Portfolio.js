import ProjectsData from "./ProjectsData";
import Project from "./Project";

function Portfolio() {
  const projectsCard = ProjectsData.map((ProjectData) => (
    <Project data={ProjectData} />
  ));
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">{projectsCard}</div>
    </section>
  );
}

export default Portfolio;
