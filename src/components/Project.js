import { FaGithub, FaLink } from "react-icons/fa";

function Project(props) {
  return (
    <div className="project-card" key={props.data.title}>
      <h3>
        <a href={props.data.links[1]}>{props.data.title}</a>
      </h3>
      <p>{props.data.description}</p>
      <div className="technologies">{props.data.technologies}</div>
      <div className="links">
        <a href={props.data.links[0]}>
          <FaGithub />
        </a>
        <a href={props.data.links[1]}>
          <FaLink />
        </a>
      </div>
    </div>
  );
}
export default Project;
