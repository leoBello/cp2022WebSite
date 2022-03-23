import "./section.scss";

const SectionTitle = (props) => {
  return <h2 className={`section-title ${props.center ? 'section-title-center' : ''}`}>{props.title}</h2>;
};



const Section = (props) => {
  return (
    <section className="section-container" id={props.id}>
      <div className="section-left">

      </div>
      <div className="section-text-container">
      <SectionTitle title={props.title} center={props.center}/>
      {props.children}
      </div>
      <div className="section-right">
      </div>
    </section>
  );
};

const SectionText = (props) => (
    <p className="section-text" {...props}>{props.text}</p>
);

const SectionPrecepte = (props) => {
  return (
    <div className="precepte-container">
      <div className="precepte-title">
        <h3>{props.title}</h3>
      </div>
      <div className="precepte-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const  SectionCostume = (props) => {
  return (
    <div className="costume-container">
      <h3 className="costume-day">{props.day}</h3>
      <p className="costume-title">{props.title}</p>
    </div>
  );
};


export { Section, SectionText, SectionPrecepte, SectionCostume };
