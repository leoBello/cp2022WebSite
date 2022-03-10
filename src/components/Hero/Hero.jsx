import "./hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className="hero-container">
        <h2 className="hero-title">{props.title}</h2>
        <div className="hero-text">
          <h3>{props.text}</h3>
        </div>
        <div className="hero-button-container">
          <a className="hero-button" href={props.buttonLink}>
            {props.buttonText}
          </a>
        </div>
      </div>
       
        <div className="scroll-down ">
        {!props.showScrollDown && <>
          <span className="chevron bottom chevron-1"></span>
          <span className="chevron bottom chevron-2"></span></>}
        </div>
    </>
  );
};

export { Hero };
