function Navigation(props) {
  const { sections = [], setCurrentSection, currentSection } = props;

  const sectionsLis = sections.map((section) => (
    <li key={section.title}>
      <button
        className={currentSection == section.title && "highlight"}
        onClick={() => {
          console.log(section.title);
          setCurrentSection(section.title);
        }}
      >
        {section.title}
      </button>
    </li>
  ));

  return (
    <nav>
      <ul>{sectionsLis}</ul>
    </nav>
  );
}

export default Navigation;
