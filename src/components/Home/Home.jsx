import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Section, SectionPrecepte, SectionText } from "../Section/Section";
import { Hero } from "../Hero/Hero";
import { PreceptesData, TitleSectionData } from "../../constants/constants";
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

            const waitingText = language === 'fr' ? 'Patiente, nous nous occupons de tout...' : 'Please wait, we are working on it...';
            return (
              <>
                <Section id="preceptes" title={TitleSectionData[language][0].title}>
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
                <Section id="ticketing" title={TitleSectionData[language][1].title} center>
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
                      {language === 'fr' ? "Billeterie" : "Ticketing"}
                    </button>
                  </div>
                </Section>
                <Section id="shuttles" title={TitleSectionData[language][2].title} center>
                  <SectionText text={waitingText} />
                </Section>
                <Section id="volunteer" title={TitleSectionData[language][3].title} center>
                  <div className="buttons-container benevoles">
                    <button
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("http://google.com", "_blank");
                      }}
                    >
                      {language === 'fr' ? "Bénévoles" : "Volunteers"}
                    </button>
                    <button
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("http://google.com", "_blank");
                      }}
                    >
                      {language === 'fr' ? "Managers de bénévoles" : "Volunteer's Manager"}
                    </button>
                  </div>
                </Section>

                <Section title={TitleSectionData[language][4].title} center>
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
                <Section id="faq" title={TitleSectionData[language][5].title} center>
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
