import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
  const [sections] = useState([
    { title: "About Me" },
    { title: "Portfolio" },
    { title: "Contact" },
    { title: "Resume" },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0].title);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
      </header>

      {(function () {
        switch (currentSection) {
          case "About Me":
            return <About />;
          case "Contact":
            return <ContactForm />;
          case "Portfolio":
            return <Portfolio />;
          case "Resume":
            return <Resume />;
          default:
            return <About />;
        }
      })()}

      <Footer />
    </div>
  );
}

export default App;
