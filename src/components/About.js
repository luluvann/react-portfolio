import PlaceholderImage from "../utils/Profile_avatar_placeholder_large.png";

function About() {
  return (
    <section>
      <h2>About</h2>
      <div className="about-div">
        <img className="avatar" src={PlaceholderImage}></img>
        <p>
          Full Stack Developer skilled MongoDB, Express.js, React.js, Node.js
        </p>
      </div>
    </section>
  );
}

export default About;
