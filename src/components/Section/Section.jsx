import "./section.scss";

const SectionTitle = (props) => {
  return <h2 className="section-title">{props.title}</h2>;
};

const Section = (props) => {
  return (
    <div className="section-container">
      <div className="section-text-container">
      <SectionTitle title={props.title} />
      {props.children}
      </div>
    </div>
  );
};

const SectionText = (props) => (
    <p className="section-text">{props.text}</p>
);

export { Section, SectionText };
