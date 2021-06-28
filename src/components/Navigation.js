function Navigation() {
  const sectionsTitles = [
    { title: "About Me", link: "about" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Contact", link: "contact" },
    { title: "Resume", link: "resume" },
  ];

  const titleElement = sectionsTitles.map((title) => (
    <li>
      <a href={`#${title.link}`}>{title.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{titleElement}</ul>
    </nav>
  );
}

export default Navigation;
