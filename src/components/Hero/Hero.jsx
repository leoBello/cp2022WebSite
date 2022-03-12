import "./hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className="hero-container">
        <div className="content">
        <h2 className="">{props.title.split('').map((letter, index) => {
          return <span key={index} className="letter">{letter}</span>
        })}</h2>
        <h2 className="">{props.title.split('').map((letter, index) => {
          return <span key={index} className="letter">{letter}</span>
        })}</h2>
        </div>
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
        {/* {!props.showScrollDown && <>
          <span className="chevron bottom chevron-1"></span>
          <span className="chevron bottom chevron-2"></span></>} */}
        </div>
    </>
  );
};

export { Hero };
