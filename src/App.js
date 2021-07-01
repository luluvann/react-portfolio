import "./App.css";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer"
import ProjectsData from "./components/ProjectsData";
import ContactForm from "./components/ContactForm";

function App() {
  const projectsCard = ProjectsData.map((ProjectData) => (
    <Project data={ProjectData} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <section id="about">
        <h2>About Me</h2>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="projects-container">{projectsCard}</div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
