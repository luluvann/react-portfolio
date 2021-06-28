import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <section id="about">
        <h2>About</h2>
      </section>
      <section id="portfolio">
        <h2>Portfolio</h2>
      </section>
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default App;
