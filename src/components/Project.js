function Project(props) {
  return (
    <div className="project-card" key={props.data.title}>
      <h3>
        <a href={props.data.links[1]}>{props.data.title}</a>
      </h3>
    </div>
  );
}
export default Project;
