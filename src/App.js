import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import About from "./components/About";

function App() {
  const [sections] = useState([
    { title: "About Me", link: "about" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Contact", link: "contact" },
    { title: "Resume", link: "resume" },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

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
          default:
            return <About />;
        }
      })()}

      <Footer />
    </div>
  );
}

export default App;
