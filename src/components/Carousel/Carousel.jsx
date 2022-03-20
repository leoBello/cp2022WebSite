import React, { useState } from "react";

import "./carousel.scss";

const Carousel = () => {
  const pictures = [
    "https://i.postimg.cc/cHGRbCN2/2019-07-25-Chateau-Perche-Romain-Guede-1077.jpg",
    "https://i.postimg.cc/0QGYRvkQ/2019-07-25-Chateau-Perche-Romain-Guede-1115.jpg",
    "https://i.postimg.cc/d0yR6dgG/2019-07-25-Chateau-Perche-Romain-Guede-1621.jpg",
    "https://i.postimg.cc/yxVF7GxT/2019-07-25-Chateau-Perche-Romain-Guede-1708.jpg",
    "https://i.postimg.cc/Y236dtDD/2019-07-25-Chateau-Perche-Romain-Guede-1816.jpg",
    "https://i.postimg.cc/SN1WpDhW/2019-07-25-Chateau-Perche-Romain-Guede-1820.jpg",
    "https://i.postimg.cc/GpGYGRsQ/240830178-4520464554671312-324830611727815471-n.jpg",
    "https://i.postimg.cc/sXzWJLYR/bout-du-canal.jpg",
    "https://i.postimg.cc/TwcDNc05/chappelle-mystique.jpg",
    "https://i.postimg.cc/59nzwnjZ/Chateau-perche-festival-Z-Photo-Romain-Guede-0264.jpg",
    "https://i.postimg.cc/HsN7Nnwz/Chateau-perche-festival-Z-Photo-Romain-Guede-0884.jpg",
    "https://i.postimg.cc/2ycBr8Pz/Chateau-perche-festival-Z-Photo-Romain-Guede-0920.jpg",
    "https://i.postimg.cc/Pqsvt7F8/Chateau-perche-festival-Z-Photo-Romain-Guede-0954.jpg",
    "https://i.postimg.cc/Njrrvtbc/Chateau-perche-festival-Z-Photo-Romain-Guede-0983.jpg",
    "https://i.postimg.cc/s2YQ1JtH/Chateau-perche-festival-Z-Photo-Romain-Guede-1146.jpg",
    "https://i.postimg.cc/k47VSbCJ/Chateau-perche-festival-Z-Photo-Romain-Guede-1270.jpg",
    "https://i.postimg.cc/SsVnfxQW/Chateau-perche-festival-Z-Photo-Romain-Guede-1301.jpg",
    "https://i.postimg.cc/cCHr9G6P/Chateau-perche-festival-Z-Photo-Romain-Guede-1326.jpg",
    "https://i.postimg.cc/bYCGGrBP/Chateau-perche-festival-Z-Photo-Romain-Guede-1532.jpg",
    "https://i.postimg.cc/QCyVvYTC/CP1.jpg",
    "https://i.postimg.cc/sgS10cDf/CP3.jpg",
    "https://i.postimg.cc/02hbf3vH/CP4.jpg",
    "https://i.postimg.cc/1zrXy3qL/Pic2.png",
    "https://i.postimg.cc/Jn7n0C3t/Pic3.png",
    "https://i.postimg.cc/T3hJyB97/DSC9130-HDR-Modifier-2.jpg",
    "https://i.postimg.cc/CxZbMkh9/DSC9317.jpg",
    "https://i.postimg.cc/dVzrh3D3/DSC9329.jpg",
    "https://i.postimg.cc/wMTsCs4f/DSC9549.jpg",
    "https://i.postimg.cc/15XqMwq4/DSC9583-Panorama-Modifier.jpg",
  ];
  const [currentPicture, setCurrentPicture] = useState(0);

  const handleClick = (e) => {
    if (e.target.className === "carousel-button-left") {
      if (currentPicture < 1) {
        setCurrentPicture(pictures.length - 1);
      } else {
        setCurrentPicture(currentPicture - 1);
      }
    } else if (e.target.className === "carousel-button-right") {
      if (currentPicture >= pictures.length - 1) {
        setCurrentPicture(0);
      } else {
        setCurrentPicture(currentPicture + 1);
      }
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <button
          className="carousel-button carousel-left"
          onClick={() =>
            handleClick({ target: { className: "carousel-button-left" } })
          }
        >
          <span className="chevron chevron-left"></span>
        </button>

        <div className="image-container">
          <img src={pictures[currentPicture]} alt="Château Perché Festival" />
        </div>
        <button
          className="carousel-button carousel-right"
          onClick={() =>
            handleClick({ target: { className: "carousel-button-right" } })
          }
        >
          <span className="chevron chevron-right"></span>
        </button>
      </div>
    </div>
  );
};

export { Carousel };
