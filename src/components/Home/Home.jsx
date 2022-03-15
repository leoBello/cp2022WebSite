import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Section, SectionPrecepte, SectionText } from "../Section/Section";
import { Hero } from "../Hero/Hero";
import { PreceptesData, TitleSectionData } from "../../constants/constants";
import { Footer } from "../Footer/Footer";
import { LanguageContext } from "./LanguageContext";
import { Cloud } from "../Cloud/Cloud";
import { InView } from "react-intersection-observer";
import LaputaPng from "../../assets/laputa.png";
import Cloud2 from "../../assets/resized/cloud2.png";
import Cloud3 from "../../assets/resized/cloud3.png";
import Cloud5 from "../../assets/resized/cloud5.png";
import Moon from "../../assets/resized/moon.png";

import "./home.scss";

const mooveCloud = (cloud) => {
  // nouvelle position
  cloud.style.top = `${getRandomInt(100)}%`;
  cloud.style.left = `${getRandomInt(100)}%`;
  // nouvelle taille
  cloud.style.transform = `scale(${Math.random(1) + 0.5})`;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Home = () => {
  const [show, handleShow] = useState(false);
  const [inEventView, setInEventView] = React.useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("sroll", transitionNavBar);
    };
  }, []);

  // moove clouds
  useEffect(() => {
    const clouds = document.querySelectorAll(".cloud");
    clouds.forEach((cloud) => {
      mooveCloud(cloud);
    });
    let timer = window.setInterval(function () {
      clouds.forEach((cloud) => {
        mooveCloud(cloud);
      });
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="home">
      <Header showBackground={show} />
      <Hero
        title="Poésie Futur-Orient"
        text="Château Perché Festival 2022"
        showScrollDown={show}
      />
      <section className="infos-section">
        <LanguageContext.Consumer>
          {({ language }) => {
            const waitingText =
              language === "fr"
                ? "Patience chaton, ça arrive..."
                : "Please wait, we are working on it...";
            return (
              <>
                <Section
                  id="preceptes"
                  title={TitleSectionData[language][0].title}
                >
                  <div className="left">{/* <CastleSvg /> */}</div>
                  <Cloud className="right" />
                  <Cloud className="left" src={Cloud3} />
                  <Cloud className="left" />
                  <Cloud className="right" src={Cloud3} />
                  <Cloud className="right moon" src={Moon} />
                  <Cloud className="left" src={Cloud2} />
                  <Cloud className="right" src={Cloud5} />
                  <div className="preceptes-container">
                    {PreceptesData[language].map((precepte, index) => (
                      <SectionPrecepte
                        key={index}
                        title={precepte.precepte}
                        text={precepte.description}
                      />
                    ))}
                  </div>
                </Section>
                <Section
                  id="ticketing"
                  title={TitleSectionData[language][1].title}
                  center
                >
                  <Cloud className="left" src={Cloud5} />
                  <Cloud className="right" src={Cloud3} />
                  <div className="buttons-container billetterie">
                    <button
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          "https://lachasseaubilletduchateau.herokuapp.com/?fbclid=IwAR3jvZpZ8IVe8ewjOQuerM4OPAcDtfgRawX4fGM5qGEDvRbYam6gq4gcgw8",
                          "_blank"
                        );
                      }}
                    >
                      {language === "fr" ? "Billetterie" : "Ticketing"}
                    </button>
                  </div>
                </Section>
                <Section
                  id="shuttles"
                  title={TitleSectionData[language][2].title}
                  center
                >
                  <SectionText text={waitingText} />
                  <Cloud className="right" src={Cloud3} />
                  <Cloud className="left" />
                </Section>
                <Section
                  id="volunteer"
                  title={TitleSectionData[language][3].title}
                  center
                >
                  <Cloud className="left" src={LaputaPng} />
                  <Cloud className="left" />
                  <Cloud className="left" src={Cloud3} />
                  <Cloud className="right" src={Cloud2} />
                  <Cloud className="left" src={Cloud5} />
                  <div className="buttons-container many">
                    <button
                      className="button"
                      
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("https://form.typeform.com/to/Je3qICtC?typeform-source=l.facebook.com", "_blank");
                      }}
                    >
                      {language === "fr" ? "Bénévoles" : "Volunteers"}
                    </button>
                    <button
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("https://form.typeform.com/to/wGNVZHHI?typeform-source=l.facebook.com", "_blank");
                      }}
                    >
                      {language === "fr"
                        ? "Managers de bénévoles"
                        : "Volunteer's Manager"}
                    </button>
                  </div>
                </Section>
                <Section
                  title={TitleSectionData[language][4].title}
                  center
                  inView={inEventView}
                >
                  <InView onChange={setInEventView}>
                    <Cloud className="right" src={Cloud3} />
                    <Cloud className="left" src={Cloud5} />
                    <Cloud className="right" src={Cloud3} />
                    <Cloud className="left" />
                    <div className="event-container">
                      <button
                        className={`button2 ${inEventView ? "animate" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            "https://www.facebook.com/events/314086130597146",
                            "_blank"
                          );
                        }}
                      >
                        See facebook event
                      </button>
                    </div>
                  </InView>
                </Section>
                <Section
                  id="faq"
                  title={TitleSectionData[language][5].title}
                  center
                >
                  <Cloud className="left" src={Cloud5} />
                  <Cloud className="right" />
                  <SectionText text={waitingText} />
                </Section>
                <Footer />
              </>
            );
          }}
        </LanguageContext.Consumer>
      </section>
      {/* <CastleSvg /> */}
    </div>
  );
};

export { Home };
