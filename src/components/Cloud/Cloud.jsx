import React, { useEffect } from "react";

import "./cloud.scss";
import CloudPng from "../../assets/cloud.png";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Cloud = ({className}) => {


  const mooveCloud = (cloud, top, left) => {
    // nouvelle position
    cloud.style.top = `${top}%`;
    cloud.style.left = `${left}%`;
    // nouvelle taille
    cloud.style.transform = `scale(${Math.random(1)+0.5})`;

  };
  
  useEffect(() => {
    const clouds = document.querySelectorAll(".cloud");
    let timer = setInterval(function () {
      clouds.forEach((cloud, index) => {
        mooveCloud(cloud, getRandomInt(100), getRandomInt(100));
      });
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <img className={`cloud ${className}`} src={CloudPng} alt="cloud"></img>;
};

export { Cloud };
