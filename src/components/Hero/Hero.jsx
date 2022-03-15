import "./hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className="hero-container">
        <div className="content">
          <h2 className="">
            {props.title.split("").map((letter, index) => {
              return (
                <span key={index} className="letter">
                  {letter}
                </span>
              );
            })}
          </h2>
          <h2 className="">
            {props.title.split("").map((letter, index) => {
              return (
                <span key={index} className="letter">
                  {letter}
                </span>
              );
            })}
          </h2>
        </div>
        <div className="hero-text">
          <h3>{props.text}</h3>
        </div>
        <div className="scroll-down-container">
          <div className="scroll-down"></div>
        </div>
      </div>
    </>
  );
};

export { Hero };
