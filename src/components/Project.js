function Project(props) {
  return (
    <div class="project-card" key={props.title}>
      <h3>
        <a href={props.data.links[1]}>{props.data.title}</a>
      </h3>
    </div>
  );
}

export default Project;
