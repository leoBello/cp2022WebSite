import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Section, SectionPrecepte, SectionText } from "../Section/Section";
import { Hero } from "../Hero/Hero";
import { PreceptesData } from "../../constants/constants";
import { Footer } from "../Footer/Footer";
import { LanguageContext } from "./LanguageContext";
import "./home.scss";

const Home = () => {
  const [show, handleShow] = useState(false);

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

  return (
    <div className="home">
      <Header showBackground={show} />
      <Hero
        title="Poésie Futur-Orient"
        text="Château Perché 2022"
        showScrollDown={show}
      />
      <section className="infos-section">
        <LanguageContext.Consumer>
          {({ language }) => {
            return (
              <>
                <Section id="preceptes" title="Nos préceptes">
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
                <Section id="ticketing" title="Billetterie" center>
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
                      Billetterie
                    </button>
                  </div>
                </Section>
                <Section id="shuttles" title="Infos Navettes" center>
                  <SectionText text="Patiente, nous nous occupons de tout..." />
                </Section>
                <Section id="volunteer" title="Formulaire de Bénévolat" center>
                  <div className="buttons-container benevoles">
                    <button
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("http://google.com", "_blank");
                      }}
                    >
                      Bénévoles
                    </button>
                    <button
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("http://google.com", "_blank");
                      }}
                    >
                      Managers de bénévoles
                    </button>
                  </div>
                </Section>

                <Section title="Event" center>
                  <div className="buttons-container billetterie">
                    <button
                      className="button2"
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
                </Section>
                <Section id="faq" title="FAQ" center>
                  <SectionText text="Patiente, nous nous occupons de tout..." />
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
