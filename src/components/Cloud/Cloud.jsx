
import "./cloud.scss";
import CloudPng from "../../assets/cloud.png";

const Cloud = (props) => {
 
  return (
    <img
      className={`cloud ${props.className}`}
      src={props.src ? props.src : CloudPng}
      alt="cloud"
    ></img>
  );
};

export { Cloud };
